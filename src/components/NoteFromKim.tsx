export default function NoteFromKim() {
  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#F8F5F0',
        padding: '80px 24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '700px',
          position: 'relative',
          backgroundColor: '#FFFFFF',
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 39px,
            #E8E3DA 39px,
            #E8E3DA 40px
          )`,
          backgroundSize: '100% 40px',
          padding: '48px 48px 48px 64px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          borderLeft: '4px solid #DC2626',
        }}
      >
        {/* Pin */}
        <div
          style={{
            position: 'absolute',
            top: '-12px',
            left: '50%',
            transform: 'translateX(-50%) rotate(-45deg)',
            width: '20px',
            height: '24px',
            backgroundColor: '#DC2626',
            borderRadius: '50% 50% 50% 0',
            zIndex: 10,
          }}
        />

        {/* Greeting */}
        <p
          style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: '20px',
            color: '#2C2C2C',
            margin: '0 0 16px 0',
          }}
        >
          Hey there --
        </p>

        {/* Body text */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            color: '#2C2C2C',
            lineHeight: 1.8,
            margin: '0 0 24px 0',
          }}
        >
          If you're reading this, you're probably thinking about buying or selling a home. Maybe
          you're nervous. Maybe you've had a bad experience with an agent before. I get it.
          Here's what I want you to know: I'm not going to pressure you, I'm not going to
          disappear after closing, and I'm definitely not going to show up in a blazer pretending
          I don't know what a septic system is. Let's just talk. No pitch, no pressure.
        </p>

        {/* Signature */}
        <p
          style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: '32px',
            color: '#2F5233',
            margin: 0,
            fontWeight: 600,
          }}
        >
          — Kim
        </p>
      </div>
    </section>
  );
}
