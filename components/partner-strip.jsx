// Authorized Partner of CardConnect / CCS Card Service
// Recreates the namecard wordmark in HTML for crisp rendering at any size.
// Drop into any footer with: <PartnerStrip /> or <PartnerStrip dark />.

function CardConnectMark({ scale = 1 }) {
  // Wordmark: "card" + "connect" (dark navy) + "ccs" (red)
  // Real CardConnect mark uses a stylized "o" with a card-swipe accent.
  // We render it as a clean wordmark — readable, never blurry, never dated.
  const navy = '#1F2A44';
  const navy2 = '#2C3654';
  const red = '#E0451F';
  const fz = 22 * scale;
  const fzCcs = 19 * scale;
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 6 * scale,
      fontFamily: '"Helvetica Neue", "Inter", system-ui, -apple-system, Arial, sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      lineHeight: 1,
      whiteSpace: 'nowrap',
    }}>
      <span style={{ fontSize: fz, color: navy, letterSpacing: '-0.035em' }}>
        <span>card</span><span style={{ color: navy2 }}>connect</span>
      </span>
      <span style={{ fontSize: fzCcs, color: red, letterSpacing: '-0.02em', fontWeight: 800 }}>ccs</span>
    </span>
  );
}

function PartnerStrip({ dark = false, align = 'left', scale = 1, compact = false }) {
  const labelColor = dark ? 'rgba(255,255,255,0.7)' : '#6B6B6B';
  const lineColor = dark ? 'rgba(255,255,255,0.5)' : '#7A7A7A';
  const linkColor = dark ? 'rgba(255,255,255,0.85)' : '#3A3A3A';
  const justify = align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start';
  const textAlign = align === 'center' ? 'center' : align === 'right' ? 'right' : 'left';

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: justify === 'center' ? 'center' : justify === 'flex-end' ? 'flex-end' : 'flex-start',
      gap: compact ? 6 : 8,
      textAlign,
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10 * scale,
        flexWrap: 'wrap',
        justifyContent: justify,
      }}>
        <span style={{
          fontSize: 11 * scale,
          fontWeight: 600,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: labelColor,
        }}>Authorized Partner of</span>
        {dark ? (
          <span style={{
            background: '#fff',
            padding: `${6 * scale}px ${10 * scale}px`,
            borderRadius: 6,
            display: 'inline-flex',
            alignItems: 'center',
          }}>
            <CardConnectMark scale={scale} />
          </span>
        ) : (
          <CardConnectMark scale={scale} />
        )}
      </div>
      <div style={{
        fontSize: 12 * scale,
        color: lineColor,
        letterSpacing: '0.005em',
      }}>
        HQ: <span style={{ color: linkColor, fontWeight: 600 }}>(877) 682-1117</span>
        <span style={{ margin: '0 8px', opacity: 0.5 }}>|</span>
        <a href="https://ccscardservice.com" target="_blank" rel="noopener noreferrer"
          style={{ color: linkColor, textDecoration: 'none', fontWeight: 600 }}>
          ccscardservice.com
        </a>
      </div>
    </div>
  );
}

Object.assign(window, { PartnerStrip, CardConnectMark });
