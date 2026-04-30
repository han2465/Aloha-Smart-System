// Table Order — page components (simplified, focused on cost savings + speed + recession-friendly)

function TOLogoA({ size = 28 }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'baseline',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1,
      fontSize: size, color: TO_C.ink,
    }}>
      A
      <span style={{
        display: 'inline-block', width: '0.18em', height: '0.18em',
        borderRadius: '50%', background: TO_C.crimson,
        marginLeft: '0.06em', transform: 'translateY(-0.06em)',
      }} />
    </span>
  );
}

function ZorderLogo({ height = 28 }) {
  return (
    <img src="../assets/table-order/zorder-logo.png" alt="Zorder"
      style={{ height, width: 'auto', display: 'block' }} />
  );
}

// ────────────────────────────────────────────────────────────────────
function TONav() {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(false);
  const links = [
    ['../index.html#products', 'Products'],
    ['#references', 'Live'],
    ['#how', 'How it works'],
    ['../index.html#processing', 'Processing'],
    ['../about.html', 'About'],
    ['../find-your-fit.html', 'Find your fit'],
  ];
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(245,239,230,0.94)', backdropFilter: 'saturate(140%) blur(12px)',
      borderBottom: `1px solid ${TO_C.ink10}`,
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto',
        padding: isMobile ? '12px 18px' : '14px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="../index.html" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <TOLogoA size={isMobile ? 24 : 28} />
          <div style={{ fontWeight: 700, fontSize: isMobile ? 14 : 16, letterSpacing: '-0.01em', color: TO_C.ink }}>
            Aloha Smart System
          </div>
        </a>
        {!isMobile && (
          <div style={{ display: 'flex', gap: 28, alignItems: 'center', fontSize: 14 }}>
            {links.map(([href, label]) => (
              <a key={href} href={href} style={{ color: TO_C.ink70, whiteSpace: 'nowrap' }}>{label}</a>
            ))}
            <a href="#contact" style={{
              background: TO_C.crimson, color: 'white', padding: '9px 18px',
              borderRadius: 999, fontWeight: 600, whiteSpace: 'nowrap',
            }}>Book a demo</a>
          </div>
        )}
        {isMobile && (
          <button onClick={() => setOpen(!open)} style={{
            background: 'transparent', border: 'none', padding: 8,
            display: 'flex', flexDirection: 'column', gap: 4, cursor: 'pointer',
          }}>
            <span style={{ width: 22, height: 2, background: TO_C.ink, transition: 'transform 0.2s', transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
            <span style={{ width: 22, height: 2, background: TO_C.ink, opacity: open ? 0 : 1 }} />
            <span style={{ width: 22, height: 2, background: TO_C.ink, transition: 'transform 0.2s', transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
          </button>
        )}
      </div>
      {isMobile && open && (
        <div style={{
          background: TO_C.bg, borderTop: `1px solid ${TO_C.ink10}`,
          padding: '14px 18px 22px', display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} style={{
              color: TO_C.ink, padding: '12px 8px', fontSize: 16, fontWeight: 500,
              borderBottom: `1px solid ${TO_C.ink10}`,
            }}>{label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} style={{
            background: TO_C.crimson, color: 'white', padding: '14px 18px',
            borderRadius: 999, fontWeight: 600, marginTop: 14, textAlign: 'center',
          }}>Book a demo</a>
        </div>
      )}
    </nav>
  );
}

// ────────────────────────────────────────────────────────────────────
function TOHero() {
  const isMobile = useIsMobile();
  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '40px 20px 36px' : '80px 32px 56px' }}>
      <a href="../index.html#products" style={{
        fontSize: 13, color: TO_C.crimson, fontWeight: 600,
      }}>← All products</a>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px',
        background: TO_C.crimsonMist, border: `1px solid ${TO_C.crimson}40`, borderRadius: 999,
        fontSize: isMobile ? 11 : 12, fontWeight: 700, color: TO_C.crimsonDeep, letterSpacing: '0.08em',
        textTransform: 'uppercase', marginTop: 16, marginLeft: isMobile ? 0 : 14 }}>
        <span style={{ width: 6, height: 6, borderRadius: 999, background: TO_C.crimson }}></span>
        Table Order · Part of Aloha Smart System
      </div>
      <h1 style={{ fontSize: isMobile ? 'clamp(36px, 9vw, 48px)' : 'clamp(52px, 8vw, 112px)', lineHeight: isMobile ? 1.02 : 0.94,
        letterSpacing: '-0.04em', fontWeight: 700, margin: isMobile ? '18px 0 18px' : '24px 0 24px',
        color: TO_C.ink, maxWidth: 1180 }}>
        Cut server hours.<br/>
        <span style={{ color: TO_C.crimson }}>Speed up orders.</span>
      </h1>
      <p style={{ fontSize: isMobile ? 16 : 'clamp(19px, 1.6vw, 24px)', lineHeight: 1.5,
        color: TO_C.ink70, maxWidth: 760, margin: isMobile ? '0 0 24px' : '0 0 28px' }}>
        Tablet ordering for any restaurant where servers take orders.
        Guests order from the table, kitchen sees it instantly, your existing POS logs the sale.
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 12 : 18, marginBottom: isMobile ? 28 : 40,
        padding: isMobile ? '12px 16px' : '14px 22px', background: TO_C.surface,
        border: `1px solid ${TO_C.ink10}`, borderRadius: 12,
        width: 'fit-content', maxWidth: '100%', flexWrap: 'wrap' }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: TO_C.ink50,
          letterSpacing: '0.1em', textTransform: 'uppercase' }}>Powered by</div>
        <ZorderLogo height={isMobile ? 22 : 26} />
        {!isMobile && <div style={{ width: 1, height: 22, background: TO_C.ink15 }}></div>}
        <div style={{ fontSize: 11, fontWeight: 700, color: TO_C.ink50,
          letterSpacing: '0.1em', textTransform: 'uppercase' }}>Plugs into</div>
        <div style={{ display: 'flex', gap: 12, fontSize: 13, fontWeight: 700, color: TO_C.ink70 }}>
          <span>Toast</span><span style={{ color: TO_C.ink30 }}>·</span>
          <span>Clover</span><span style={{ color: TO_C.ink30 }}>·</span>
          <span>Verona</span>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <a href="#references" style={{ background: TO_C.ink, color: 'white',
          padding: isMobile ? '14px 22px' : '16px 28px', borderRadius: 999, fontWeight: 600, fontSize: isMobile ? 14 : 15 }}>
          See it live →
        </a>
        <a href="#contact" style={{ background: 'transparent', color: TO_C.ink,
          border: `1.5px solid ${TO_C.ink30}`, padding: isMobile ? '12.5px 20px' : '14.5px 26px', borderRadius: 999,
          fontWeight: 600, fontSize: isMobile ? 14 : 15 }}>
          Get in touch
        </a>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────
// Three big numbers — the whole pitch
function TOPitch() {
  const isMobile = useIsMobile();
  const nums = [
    {
      stat: '−1', unit: 'server',
      label: 'Labor',
      body: 'One tablet per table covers 2–3× the section. In Hawaii, that\'s $20+/hr per shift saved.',
    },
    {
      stat: '<10s', unit: '',
      label: 'Speed',
      body: 'Order tap → kitchen ticket. No waiting for a server to come over and no order mix-ups.',
    },
    {
      stat: '$0', unit: 'upfront',
      label: 'Recession-friendly',
      body: 'Keep your POS. Add tablets. Pay monthly. No big capital outlay during a tight year.',
    },
  ];
  return (
    <section style={{ background: TO_C.ink, color: 'white', padding: isMobile ? '56px 20px' : '88px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <h2 style={{ fontSize: isMobile ? 'clamp(26px, 7.5vw, 34px)' : 'clamp(32px, 4vw, 48px)', lineHeight: 1.1,
          letterSpacing: '-0.025em', fontWeight: 700, margin: isMobile ? '0 0 32px' : '0 0 56px',
          maxWidth: 820, color: 'white' }}>
          The pitch is simple.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? 28 : 32 }}>
          {nums.map(n => (
            <div key={n.label}>
              <div style={{ fontSize: 11, fontWeight: 700, color: TO_C.crimsonMist,
                letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: isMobile ? 12 : 18 }}>
                {n.label}
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: isMobile ? 12 : 18 }}>
                <div style={{ fontSize: isMobile ? 'clamp(48px, 14vw, 64px)' : 'clamp(56px, 6vw, 88px)', fontWeight: 900,
                  letterSpacing: '-0.04em', color: TO_C.crimson, lineHeight: 1 }}>
                  {n.stat}
                </div>
                {n.unit && (
                  <div style={{ fontSize: isMobile ? 16 : 18, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>
                    {n.unit}
                  </div>
                )}
              </div>
              <p style={{ fontSize: isMobile ? 15 : 16, lineHeight: 1.55, color: 'rgba(255,255,255,0.78)',
                margin: 0, maxWidth: 360 }}>
                {n.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────
function TOReferences() {
  const isMobile = useIsMobile();
  return (
    <section id="references" style={{
      background: TO_C.bgAlt, backgroundImage: TO_PLUMERIA_BG,
      backgroundSize: '120px 120px', padding: isMobile ? '56px 20px' : '88px 32px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: TO_C.crimson, marginBottom: 16 }}>
          Live in Hawaii
        </div>
        <h2 style={{ fontSize: isMobile ? 'clamp(28px, 8vw, 38px)' : 'clamp(36px, 4.5vw, 56px)', lineHeight: 1.05,
          letterSpacing: '-0.025em', fontWeight: 700, margin: isMobile ? '0 0 28px' : '0 0 48px', color: TO_C.ink }}>
          Running right now.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? 14 : 20 }}>
          {TO_REFERENCES.map(r => (
            <div key={r.id} style={{
              background: TO_C.surface, borderRadius: 18,
              border: `1px solid ${TO_C.ink10}`,
              borderTop: `3px solid ${r.color}`,
              overflow: 'hidden', display: 'flex', flexDirection: 'column',
            }}>
              {r.photo ? (
                <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
                  <img src={r.photo} alt={r.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                  <div style={{ position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent 50%)' }} />
                  <div style={{ position: 'absolute', bottom: 14, right: 14,
                    background: r.color, color: 'white',
                    padding: '5px 12px', borderRadius: 999,
                    fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}>{r.mode}</div>
                </div>
              ) : r.isLantern ? (
                <div style={{ height: 220,
                  background: `linear-gradient(135deg, ${TO_C.ink} 0%, #2A2A35 100%)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative' }}>
                  <div style={{ textAlign: 'center', padding: 24 }}>
                    <div style={{ fontSize: 36, marginBottom: 8, color: 'rgba(255,255,255,0.85)',
                      fontFamily: '"Instrument Serif", Georgia, serif' }}>ちょうちん</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)',
                      fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                      Yakitori · Sake · Small plates
                    </div>
                  </div>
                  <div style={{ position: 'absolute', bottom: 14, right: 14,
                    background: TO_C.crimson, color: 'white',
                    padding: '5px 12px', borderRadius: 999,
                    fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}>{r.mode}</div>
                </div>
              ) : (
                <div style={{ height: 220, background: r.logoBg || TO_C.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative', padding: 24 }}>
                  {r.logo && <img src={r.logo} alt={r.name}
                    style={{ maxWidth: '85%', maxHeight: 110, objectFit: 'contain', display: 'block' }} />}
                  <div style={{ position: 'absolute', bottom: 14, right: 14,
                    background: r.color, color: 'white',
                    padding: '5px 12px', borderRadius: 999,
                    fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}>{r.mode}</div>
                </div>
              )}
              <div style={{ padding: 24, flex: 1 }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: TO_C.ink,
                  letterSpacing: '-0.015em', marginBottom: 4 }}>{r.name}</div>
                <div style={{ fontSize: 12, color: TO_C.ink50, marginBottom: 14,
                  fontWeight: 600, letterSpacing: '0.04em' }}>
                  {r.subtitle}
                </div>
                <p style={{ fontSize: 14, color: TO_C.ink70, lineHeight: 1.55, margin: 0 }}>
                  {r.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────
function TOWhereItFits() {
  const isMobile = useIsMobile();
  const fits = [
    { tag: 'Korean BBQ', body: 'AYCE rounds, butcher cuts, sides.' },
    { tag: 'Izakaya', body: 'Small plates, sake refills, multiple rounds.' },
    { tag: 'Yakitori Bar', body: 'Skewer-paced ordering all night.' },
    { tag: 'Full-service', body: 'Banchan, soup, BBQ, soju — endless calls.' },
  ];
  return (
    <section style={{ background: TO_C.bg, padding: isMobile ? '48px 20px' : '80px 32px',
      borderTop: `1px solid ${TO_C.ink08}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: isMobile ? 12 : 48, alignItems: 'baseline',
          flexWrap: 'wrap', marginBottom: isMobile ? 24 : 36 }}>
          <h2 style={{ fontSize: isMobile ? 'clamp(24px, 7vw, 32px)' : 'clamp(28px, 3vw, 40px)', lineHeight: 1.1,
            letterSpacing: '-0.025em', fontWeight: 700, margin: 0, color: TO_C.ink }}>
            Where it fits.
          </h2>
          <p style={{ fontSize: isMobile ? 14 : 16, color: TO_C.ink70, margin: 0, maxWidth: 540, lineHeight: 1.55 }}>
            Anywhere guests reorder multiple times in a sitting.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? 10 : 12 }}>
          {fits.map(f => (
            <div key={f.tag} style={{ background: TO_C.surface,
              border: `1px solid ${TO_C.ink10}`, borderTop: `3px solid ${TO_C.crimson}`,
              borderRadius: 12, padding: isMobile ? 18 : 22 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: TO_C.ink,
                marginBottom: 8 }}>{f.tag}</div>
              <p style={{ fontSize: 13, color: TO_C.ink70, lineHeight: 1.5, margin: 0 }}>
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────
function TOHowItWorks() {
  const isMobile = useIsMobile();
  const steps = [
    { n: '1', label: 'Guest taps the tablet', body: 'Menu in their language, photos, prices. They order at their pace, no waiting for a server.' },
    { n: '2', label: 'Kitchen sees it instantly', body: 'Order routes to the right printer (kitchen, bar, server station) in under 10 seconds.' },
    { n: '3', label: 'POS logs the sale', body: 'Toast, Clover, or Verona records the transaction. Reports, taxes, tips — your normal close.' },
  ];
  return (
    <section id="how" style={{ background: TO_C.surface, padding: isMobile ? '56px 20px' : '88px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: TO_C.ink50, marginBottom: 16 }}>
          How it works
        </div>
        <h2 style={{ fontSize: isMobile ? 'clamp(26px, 7.5vw, 34px)' : 'clamp(32px, 4vw, 48px)', lineHeight: 1.05,
          letterSpacing: '-0.025em', fontWeight: 700, margin: isMobile ? '0 0 28px' : '0 0 48px', color: TO_C.ink, maxWidth: 820 }}>
          Three steps. No order errors.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? 12 : 24 }}>
          {steps.map(s => (
            <div key={s.n} style={{ background: TO_C.bg, borderRadius: 14, padding: isMobile ? 22 : 28,
              border: `1px solid ${TO_C.ink10}` }}>
              <div style={{
                width: 36, height: 36, borderRadius: 999,
                background: TO_C.crimson, color: 'white',
                display: 'grid', placeItems: 'center',
                fontSize: 15, fontWeight: 800, marginBottom: 14,
              }}>{s.n}</div>
              <div style={{ fontSize: isMobile ? 17 : 18, fontWeight: 700, color: TO_C.ink,
                letterSpacing: '-0.015em', marginBottom: 10 }}>{s.label}</div>
              <p style={{ fontSize: isMobile ? 13 : 14, color: TO_C.ink70, lineHeight: 1.55, margin: 0 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>

        {/* AYCE callout — compressed */}
        <div style={{ marginTop: isMobile ? 28 : 40, padding: isMobile ? '20px 22px' : '28px 32px', background: TO_C.crimsonMist,
          border: `1px solid ${TO_C.crimson}33`, borderRadius: 14,
          display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'auto 1fr auto', gap: isMobile ? 14 : 24, alignItems: 'center' }}>
          <div style={{ background: TO_C.crimson, color: 'white',
            padding: '6px 14px', borderRadius: 999, fontSize: 11,
            fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            justifySelf: isMobile ? 'start' : 'auto' }}>
            AYCE
          </div>
          <div style={{ fontSize: isMobile ? 14 : 15, color: TO_C.ink, lineHeight: 1.5 }}>
            <strong>All-You-Can-Eat runs itself.</strong> Dinner timer on-screen, round tracking, throttling — Sura Hawaii uses it nightly.
          </div>
          <a href="#contact" style={{ fontSize: 13, color: TO_C.crimsonDeep, fontWeight: 700,
            whiteSpace: 'nowrap' }}>See AYCE demo →</a>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────
function TOPosPartners() {
  const isMobile = useIsMobile();
  const partners = [
    { name: 'Toast', body: 'Cloud-based POS for restaurants. Online ordering and team management.' },
    { name: 'Clover', body: 'All-in-one POS with payments, inventory, and customer tools.' },
    { name: 'Verona', body: 'Restaurant POS with real-time reports and multi-channel orders.' },
  ];
  return (
    <section style={{ background: TO_C.bgAlt, padding: isMobile ? '48px 20px' : '80px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: isMobile ? 12 : 48, alignItems: 'baseline', flexWrap: 'wrap',
          marginBottom: isMobile ? 24 : 36 }}>
          <h2 style={{ fontSize: isMobile ? 'clamp(24px, 7vw, 32px)' : 'clamp(28px, 3vw, 40px)', lineHeight: 1.1,
            letterSpacing: '-0.025em', fontWeight: 700, margin: 0, color: TO_C.ink }}>
            Keep your POS.
          </h2>
          <p style={{ fontSize: isMobile ? 14 : 16, color: TO_C.ink70, margin: 0, maxWidth: 560, lineHeight: 1.55 }}>
            Zorder plugs into all three major restaurant POS platforms used in Hawaii.
            Every tablet order lands directly in your existing system — no double entry.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 0,
          background: TO_C.surface, borderRadius: 14, overflow: 'hidden',
          border: `1px solid ${TO_C.ink10}` }}>
          {partners.map((p, i) => (
            <div key={p.name} style={{
              padding: isMobile ? '22px 22px' : '28px 28px',
              borderRight: !isMobile && i < partners.length - 1 ? `1px solid ${TO_C.ink10}` : 'none',
              borderBottom: isMobile && i < partners.length - 1 ? `1px solid ${TO_C.ink10}` : 'none',
            }}>
              <div style={{ fontSize: 26, fontWeight: 800, color: TO_C.ink,
                letterSpacing: '-0.025em', marginBottom: 12,
                fontFamily: p.name === 'Verona' ? '"Instrument Serif", Georgia, serif' : '"Inter Tight", system-ui, sans-serif',
                fontStyle: p.name === 'Verona' ? 'italic' : 'normal' }}>
                {p.name === 'Toast' && <span style={{ color: '#FF4F02' }}>{p.name.toLowerCase()}</span>}
                {p.name === 'Clover' && (
                  <img
                    src="../assets/logos/clover-logo.png"
                    alt="Clover"
                    style={{ height: 44, display: 'block', objectFit: 'contain', objectPosition: 'left' }}
                  />
                )}
                {p.name === 'Verona' && p.name}
              </div>
              <p style={{ fontSize: 13, color: TO_C.ink70, lineHeight: 1.55, margin: 0 }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────
function TOContactCTA() {
  const isMobile = useIsMobile();
  return (
    <section id="contact" style={{
      background: `linear-gradient(135deg, ${TO_C.crimson}, ${TO_C.crimsonDeep})`,
      color: 'white', padding: isMobile ? '72px 20px' : '112px 32px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto',
        display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? 32 : 64, alignItems: 'start' }}>
        <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>
            Bring your floor plan
          </div>
          <h2 style={{ fontSize: isMobile ? 'clamp(32px, 9vw, 44px)' : 'clamp(36px, 4.5vw, 60px)', lineHeight: 1.0,
            letterSpacing: '-0.03em', fontWeight: 700, margin: '0 0 18px' }}>
            See it at Sura Hawaii.<br/>Then build yours.
          </h2>
          <p style={{ fontSize: isMobile ? 15 : 17, lineHeight: 1.55, color: 'rgba(255,255,255,0.85)',
            maxWidth: 520, margin: isMobile ? '0 auto 24px' : '0 0 24px' }}>
            Bring your floor plan and menu. We&rsquo;ll show you the live system at Sura
            and come back with a real quote.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
            <div>📧 <a href="mailto:info@alohasmartsystem.com" style={{ color: 'white', borderBottom: '1px solid rgba(255,255,255,0.4)' }}>info@alohasmartsystem.com</a></div>
            <div>📞 <a href="tel:+18086503331" style={{ color: 'white', borderBottom: '1px solid rgba(255,255,255,0.4)' }}>(808) 650-3331</a></div>
          </div>
        </div>
        <AlohaContactForm
          accentColor={TO_C.crimsonDeep}
          productName="Table Order"
          isMobile={isMobile}
        />
      </div>
    </section>
  );
}

function TOFooter() {
  const isMobile = useIsMobile();
  return (
    <footer style={{ background: TO_C.bg, padding: isMobile ? '32px 20px' : '40px 32px',
      borderTop: `1px solid ${TO_C.ink08}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, alignItems: 'flex-start',
        fontSize: isMobile ? 12 : 13, color: TO_C.ink70 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <TOLogoA size={18} />
          <span>© {new Date().getFullYear()} Musubi Media LLC · Honolulu, HI</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'flex-start' : 'flex-end', gap: 4, fontSize: isMobile ? 11 : 12, color: TO_C.ink50 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, flexWrap: 'wrap' }}>
            <span>Authorized partner of</span>
            <CardConnectMark scale={0.55} />
            <span>· Toast · Clover · Zorder · Verona</span>
          </div>
          <div>CCS HQ: (877) 682-1117 · ccscardservice.com</div>
        </div>
      </div>
    </footer>
  );
}

function TableOrderPage() {
  return (
    <div style={{ background: TO_C.bg, color: TO_C.ink, fontFamily: '"Inter Tight", system-ui, sans-serif' }}>
      <TONav />
      <TOHero />
      <TOPitch />
      <TOReferences />
      <TOWhereItFits />
      <TOHowItWorks />
      <TOPosPartners />
      <TOContactCTA />
      <TOFooter />
    </div>
  );
}

window.TableOrderPage = TableOrderPage;
