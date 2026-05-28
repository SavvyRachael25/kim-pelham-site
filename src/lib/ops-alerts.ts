/**
 * lib/ops-alerts.ts
 *
 * Sends operational alert SMS to the team via the GHL Conversations API.
 * Default recipients: Kim (425-250-9422). Add Rachael (or anyone else) by
 * setting RACHAEL_ALERT_PHONE / RACHAEL_ALERT_CONTACT_ID in env. Pattern:
 *
 *   KIM_ALERT_CONTACT_ID    (preferred — points at an existing GHL contact)
 *   KIM_ALERT_PHONE         (fallback — auto-upserts a contact with this phone)
 *   RACHAEL_ALERT_CONTACT_ID (preferred)
 *   RACHAEL_ALERT_PHONE      (fallback)
 *
 * Each recipient is upserted as its own GHL contact (tagged
 * internal-ops-alerts + do-not-market) so the message routes to the right
 * phone. Errors are swallowed — alerting must never block the main flow.
 */

const GHL_API_BASE = 'https://services.leadconnectorhq.com';
const GHL_API_VERSION = '2021-07-28';

type Recipient = {
  envContactId?: string;
  envPhone?: string;
  firstName: string;
  lastName: string;
};

function recipientsFromEnv(): Recipient[] {
  return [
    {
      envContactId: process.env.KIM_ALERT_CONTACT_ID?.trim(),
      envPhone: process.env.KIM_ALERT_PHONE?.trim() ?? '+14252509422',
      firstName: 'Kim',
      lastName: 'Pelham (Alerts)',
    },
    {
      envContactId: process.env.RACHAEL_ALERT_CONTACT_ID?.trim(),
      envPhone: process.env.RACHAEL_ALERT_PHONE?.trim(),
      firstName: 'Rachael',
      lastName: 'Barclay (Alerts)',
    },
  ].filter((r) => r.envContactId || r.envPhone) as Recipient[];
}

async function upsertAlertContact(opts: {
  apiToken: string;
  locationId: string;
  recipient: Recipient;
}): Promise<string | undefined> {
  const { apiToken, locationId, recipient } = opts;
  if (recipient.envContactId) return recipient.envContactId;
  if (!recipient.envPhone) return undefined;

  try {
    const r = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
        Version: GHL_API_VERSION,
      },
      body: JSON.stringify({
        firstName: recipient.firstName,
        lastName: recipient.lastName,
        phone: recipient.envPhone,
        locationId,
        source: 'internal-ops-alerts',
        tags: ['internal-ops-alerts', 'do-not-market'],
      }),
    });
    if (!r.ok) {
      console.error(
        `[ops-alerts] upsert ${recipient.firstName} ${r.status}`,
        (await r.text().catch(() => '')).slice(0, 200)
      );
      return undefined;
    }
    const data = (await r.json().catch(() => ({}))) as { contact?: { id?: string } };
    return data.contact?.id;
  } catch (err) {
    console.error(
      `[ops-alerts] upsert ${recipient.firstName} threw:`,
      (err as Error).message
    );
    return undefined;
  }
}

export async function sendOpsAlert(opts: {
  apiToken: string;
  locationId: string;
  summary: string;
}): Promise<void> {
  const { apiToken, locationId, summary } = opts;
  const recipients = recipientsFromEnv();

  await Promise.all(
    recipients.map(async (r) => {
      const contactId = await upsertAlertContact({ apiToken, locationId, recipient: r });
      if (!contactId) return;
      try {
        const res = await fetch(`${GHL_API_BASE}/conversations/messages`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${apiToken}`,
            'Content-Type': 'application/json',
            Version: GHL_API_VERSION,
          },
          body: JSON.stringify({ type: 'SMS', contactId, message: summary }),
        });
        if (!res.ok) {
          console.error(
            `[ops-alerts] SMS to ${r.firstName} ${res.status}`,
            (await res.text().catch(() => '')).slice(0, 200)
          );
        }
      } catch (err) {
        console.error(
          `[ops-alerts] SMS to ${r.firstName} threw:`,
          (err as Error).message
        );
      }
    })
  );
}
