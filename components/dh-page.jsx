// Delivery Hub page

function DHLogoA({ size = 28 }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'baseline',
      fontWeight: 800, fontSize: size, letterSpacing: '-0.04em', color: DH_C.ink }}>
      A<span style={{ width: size * 0.18, height: size * 0.18, borderRadius: 999,
        background: DH_C.agg, marginLeft: 2, alignSelf: 'flex-end', marginBottom: size * 0.08 }}></span>
    </span>
  );
}

function DHNav() {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(false);
  const links = [
    ['../index.html#products', 'Products'],
    ['../index.html#processing', 'Processing'],
    ['../about.html', 'About'],
    ['../find-your-fit.html', 'Find your fit'],
  ];
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(245,239,230,0.94)', backdropFilter: 'saturate(140%) blur(12px)',
      borderBottom: `1px solid ${DH_C.ink10}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto',
        padding: isMobile ? '12px 18px' : '14px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="../index.html" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <DHLogoA size={isMobile ? 24 : 28} />
          <div style={{ fontWeight: 700, fontSize: isMobile ? 14 : 16, color: DH_C.ink }}>Aloha Smart System</div>
        </a>
        {!isMobile && (
          <div style={{ display: 'flex', gap: 28, alignItems: 'center', fontSize: 14 }}>
            {links.map(([h, l]) => (
              <a key={h} href={h} style={{ color: DH_C.ink70 }}>{l}</a>
            ))}
            <a href="#contact" style={{ background: DH_C.hula, color: 'white', padding: '9px 18px',
              borderRadius: 999, fontWeight: 700, whiteSpace: 'nowrap' }}>Get a quote</a>
          </div>
        )}
        {isMobile && (
          <button onClick={() => setOpen(!open)} style={{
            background: 'transparent', border: 'none', padding: 8,
            display: 'flex', flexDirection: 'column', gap: 4, cursor: 'pointer' }}>
            <span style={{ width: 22, height: 2, background: DH_C.ink, transition: 'transform 0.2s', transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
            <span style={{ width: 22, height: 2, background: DH_C.ink, opacity: open ? 0 : 1 }} />
            <span style={{ width: 22, height: 2, background: DH_C.ink, transition: 'transform 0.2s', transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
          </button>
        )}
      </div>
      {isMobile && open && (
        <div style={{ background: DH_C.bg, borderTop: `1px solid ${DH_C.ink10}`,
          padding: '14px 18px 22px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {links.map(([h, l]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} style={{
              color: DH_C.ink, padding: '12px 8px', fontSize: 16, fontWeight: 500,
              borderBottom: `1px solid ${DH_C.ink10}` }}>{l}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} style={{
            background: DH_C.hula, color: 'white', padding: '14px 18px',
            borderRadius: 999, fontWeight: 700, marginTop: 14, textAlign: 'center' }}>Get a quote</a>
        </div>
      )}
    </nav>
  );
}

function DHHero() {
  const isMobile = useIsMobile();
  return (
    <section style={{ maxWidth: 1320, margin: '0 auto', padding: isMobile ? '36px 20px 32px' : '64px 32px 48px' }}>
      <a href="../index.html#products" style={{
        fontSize: 13, color: DH_C.aggDeep, fontWeight: 700, whiteSpace: 'nowrap' }}>← All products</a>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1fr) minmax(0, 1.05fr)',
        gap: isMobile ? 32 : 56, alignItems: 'center', marginTop: 18 }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 14px', background: DH_C.ink, color: 'white',
            borderRadius: 999, fontSize: isMobile ? 10 : 11, fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: DH_C.hula }}></span>
            Delivery Hub &middot; part of Aloha Smart System
          </div>
          <h1 style={{ fontSize: isMobile ? 'clamp(34px, 9vw, 44px)' : 'clamp(44px, 6vw, 84px)', lineHeight: isMobile ? 1.02 : 0.96,
            letterSpacing: '-0.035em', fontWeight: 700, margin: isMobile ? '16px 0 14px' : '20px 0 18px', color: DH_C.ink }}>
            Every delivery app.<br/>
            One <span style={{ color: DH_C.hulaDeep }}>Clover printer.</span>
          </h1>
          <p style={{ fontSize: isMobile ? 15 : 'clamp(17px, 1.4vw, 21px)', lineHeight: 1.5,
            color: DH_C.ink70, maxWidth: 580, margin: '0 0 20px' }}>
            Send us your food photos — we set up Uber Eats, DoorDash, GrubHub and our
            own <strong style={{ color: DH_C.ink }}>Hula Delivery</strong> for you. Orders
            print straight to your Clover. No tablet stack. No menu errors. No 30% markup.
          </p>
          <p style={{ fontSize: isMobile ? 13 : 14, color: DH_C.ink50, maxWidth: 560, margin: isMobile ? '0 0 20px' : '0 0 32px' }}>
            You don't need to know how any of this works. That's our job.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href="#tracks" style={{ background: DH_C.hula, color: 'white', padding: isMobile ? '14px 22px' : '16px 28px',
              borderRadius: 999, fontWeight: 700, fontSize: isMobile ? 14 : 15 }}>See both tracks →</a>
            <a href="#contact" style={{ background: 'transparent', color: DH_C.ink,
              border: `1.5px solid ${DH_C.ink30}`, padding: isMobile ? '12.5px 20px' : '14.5px 26px',
              borderRadius: 999, fontWeight: 600, fontSize: isMobile ? 14 : 15 }}>Talk to us</a>
          </div>
        </div>

        {/* Hero visual: stack of platforms → one Clover printer */}
        <div style={{ position: 'relative', minHeight: isMobile ? 'auto' : 420 }}>
          <div style={{ background: 'white', borderRadius: 18,
            boxShadow: '0 16px 48px rgba(14,26,36,0.14)', padding: isMobile ? 22 : 28,
            border: `1px solid ${DH_C.ink10}` }}>
            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.16em',
              textTransform: 'uppercase', color: DH_C.ink50, marginBottom: 16 }}>
              Incoming orders
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22 }}>
              {DH_PLATFORMS.map(p => (
                <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: 14,
                  padding: '14px 18px', background: '#FAF7F1', borderRadius: 12,
                  border: `1px solid ${DH_C.ink10}` }}>
                  <span style={{ width: 10, height: 10, borderRadius: 999, background: p.color, flexShrink: 0 }}></span>
                  <span style={{ fontSize: 15, fontWeight: 700, color: DH_C.ink, flex: 1 }}>{p.name}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: DH_C.aggDeep,
                    letterSpacing: '0.1em', textTransform: 'uppercase' }}>Live</span>
                </div>
              ))}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14,
                padding: '14px 18px', background: DH_C.hulaSoft, borderRadius: 12,
                border: `1.5px solid ${DH_C.hula}` }}>
                <span style={{ width: 10, height: 10, borderRadius: 999, background: DH_C.hula, flexShrink: 0 }}></span>
                <span style={{ fontSize: 15, fontWeight: 800, color: DH_C.ink, flex: 1 }}>Hula Delivery</span>
                <span style={{ fontSize: 11, fontWeight: 800, color: DH_C.hulaDeep,
                  letterSpacing: '0.1em', textTransform: 'uppercase' }}>Local</span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
              <div style={{ fontSize: 28, color: DH_C.ink30, fontWeight: 300 }}>↓</div>
            </div>
            <div style={{ background: DH_C.ink, color: 'white', borderRadius: 12,
              padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: DH_C.agg,
                display: 'grid', placeItems: 'center', fontSize: 18, fontWeight: 800 }}>C</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>Clover Printer</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}>
                  Auto-accept · Auto-print · Auto-sync
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DHSetup() {
  const isMobile = useIsMobile();
  return (
    <section style={{ background: DH_C.bgDark, color: 'white', padding: isMobile ? '56px 20px' : '96px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: DH_C.gold, marginBottom: 14 }}>
          What you do · What we do
        </div>
        <h2 style={{ fontSize: isMobile ? 'clamp(28px, 8vw, 36px)' : 'clamp(36px, 4.5vw, 60px)', lineHeight: 1.05,
          letterSpacing: '-0.025em', fontWeight: 700, margin: '0 0 18px', maxWidth: 900 }}>
          Send us photos. <span style={{ color: 'rgba(255,255,255,0.55)' }}>We do the rest.</span>
        </h2>
        <p style={{ fontSize: isMobile ? 14 : 17, color: 'rgba(255,255,255,0.65)', maxWidth: 720,
          margin: isMobile ? '0 0 32px' : '0 0 56px', lineHeight: 1.55 }}>
          Most restaurant owners we work with have never opened a DoorDash dashboard
          and don't want to. Good. They shouldn't have to.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>
          {DH_SETUP_STEPS.map((s, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: '26px 24px' }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.14em',
                color: DH_C.gold, marginBottom: 14 }}>{s.n}</div>
              <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.01em',
                marginBottom: 10, lineHeight: 1.25 }}>{s.k}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DHPriceProblem() {
  const isMobile = useIsMobile();
  const p = DH_PRICE_COMPARE;
  return (
    <section style={{ padding: isMobile ? '56px 20px' : '96px 32px', background: DH_C.bg }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: DH_C.hulaDeep, marginBottom: 14 }}>
          The 30% problem
        </div>
        <h2 style={{ fontSize: isMobile ? 'clamp(26px, 7.5vw, 34px)' : 'clamp(34px, 4.5vw, 58px)', lineHeight: 1.05,
          letterSpacing: '-0.025em', fontWeight: 700, margin: '0 0 16px',
          color: DH_C.ink, maxWidth: 900 }}>
          Why your bibimbap costs <span style={{ color: DH_C.hulaDeep }}>$22</span> on Uber Eats.
        </h2>
        <p style={{ fontSize: isMobile ? 14 : 17, color: DH_C.ink70, maxWidth: 720,
          margin: isMobile ? '0 0 32px' : '0 0 56px', lineHeight: 1.6 }}>
          Third-party platforms take 15–30% commission per order. To keep your margin,
          you raise the menu price 30%. The local guest pays for it. Tourists don't notice.
          Your regulars do — and they stop ordering.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(0, 1fr))',
          gap: isMobile ? 12 : 18 }}>
          {/* Pickup */}
          <div style={{ background: DH_C.surface, borderRadius: 14, padding: '28px 26px',
            border: `1px solid ${DH_C.ink10}` }}>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: DH_C.ink50, marginBottom: 12 }}>
              Pickup at the store
            </div>
            <div style={{ fontSize: 13, color: DH_C.ink70, marginBottom: 6 }}>{p.item}</div>
            <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: '-0.03em',
              color: DH_C.ink, lineHeight: 1 }}>${p.pickup.toFixed(2)}</div>
            <div style={{ fontSize: 13, color: DH_C.ink50, marginTop: 18, lineHeight: 1.55 }}>
              The price you make money on. Your real menu.
            </div>
          </div>

          {/* Aggregator markup */}
          <div style={{ background: DH_C.surface, borderRadius: 14, padding: '28px 26px',
            border: `1px solid ${DH_C.ink10}`, position: 'relative' }}>
            <div style={{ position: 'absolute', top: -10, right: 16,
              background: '#FF3008', color: 'white', padding: '4px 12px',
              borderRadius: 999, fontSize: 10, fontWeight: 800,
              letterSpacing: '0.12em', textTransform: 'uppercase' }}>+30%</div>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: DH_C.ink50, marginBottom: 12 }}>
              On Uber Eats / DoorDash
            </div>
            <div style={{ fontSize: 13, color: DH_C.ink70, marginBottom: 6 }}>{p.item}</div>
            <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: '-0.03em',
              color: '#B83A24', lineHeight: 1 }}>${p.aggregatorMarkup.toFixed(2)}</div>
            <div style={{ fontSize: 13, color: DH_C.ink50, marginTop: 18, lineHeight: 1.55 }}>
              Inflated to cover the platform's 15–30% cut. Plus their fees on top.
            </div>
          </div>

          {/* Hula */}
          <div style={{ background: DH_C.hulaSoft, borderRadius: 14, padding: '28px 26px',
            border: `2px solid ${DH_C.hula}`, position: 'relative' }}>
            <div style={{ position: 'absolute', top: -10, right: 16,
              background: DH_C.hula, color: 'white', padding: '4px 12px',
              borderRadius: 999, fontSize: 10, fontWeight: 800,
              letterSpacing: '0.12em', textTransform: 'uppercase' }}>Local-first</div>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: DH_C.hulaDeep, marginBottom: 12 }}>
              On huladelivery.com
            </div>
            <div style={{ fontSize: 13, color: DH_C.ink70, marginBottom: 6 }}>{p.item}</div>
            <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: '-0.03em',
              color: DH_C.ink, lineHeight: 1 }}>
              ${p.hulaPrice.toFixed(2)}
              <span style={{ fontSize: 18, fontWeight: 600, color: DH_C.hulaDeep,
                marginLeft: 8, letterSpacing: '-0.01em' }}>+ ${p.hulaDeliveryFee.toFixed(2)} delivery</span>
            </div>
            <div style={{ fontSize: 13, color: DH_C.ink70, marginTop: 18, lineHeight: 1.55 }}>
              Same as your in-store price. Customer just pays the driver.
              <strong style={{ color: DH_C.hulaDeep }}> You keep your full margin.</strong>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 32, padding: '24px 28px', background: DH_C.ink, color: 'white',
          borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 24, flexWrap: 'wrap' }}>
          <div style={{ fontSize: 16, lineHeight: 1.55, maxWidth: 760 }}>
            <strong style={{ color: DH_C.gold }}>The math:</strong> A regular ordering 2× a week
            saves $10–15/week ordering through Hula Delivery instead of Uber Eats.
            That's how locals stick. That's how your repeat business compounds.
          </div>
        </div>
      </div>
    </section>
  );
}

function DHTracks() {
  const isMobile = useIsMobile();
  return (
    <section id="tracks" style={{ padding: isMobile ? '56px 20px' : '96px 32px', background: DH_C.bgAlt }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: DH_C.aggDeep, marginBottom: 14 }}>
          Two tracks
        </div>
        <h2 style={{ fontSize: isMobile ? 'clamp(28px, 8vw, 36px)' : 'clamp(36px, 4.5vw, 60px)', lineHeight: 1.05,
          letterSpacing: '-0.025em', fontWeight: 700, margin: '0 0 16px', color: DH_C.ink, maxWidth: 900 }}>
          Get discovered. <span style={{ color: DH_C.ink50 }}>Keep your locals.</span>
        </h2>
        <p style={{ fontSize: isMobile ? 14 : 17, color: DH_C.ink70, maxWidth: 720,
          margin: isMobile ? '0 0 32px' : '0 0 56px', lineHeight: 1.55 }}>
          Run them both — most owners do. Tourists find you on Uber Eats. Locals come back on Hula Delivery.
          Every order prints to the same Clover.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(420px, 1fr))', gap: isMobile ? 14 : 24 }}>
          {/* Aggregator track */}
          <div style={{ background: DH_C.surface, borderRadius: 16, overflow: 'hidden',
            border: `1px solid ${DH_C.ink10}`, borderTop: `4px solid ${DH_C.agg}` }}>
            <div style={{ padding: '32px 32px 0' }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: DH_C.agg, marginBottom: 10 }}>3rd-party track</div>
              <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em',
                color: DH_C.ink, marginBottom: 12 }}>Aggregator Hub</div>
              <div style={{ fontSize: 15, color: DH_C.ink70, lineHeight: 1.6, marginBottom: 22 }}>
                Uber Eats, DoorDash, GrubHub — all unified into one Clover-connected workflow.
                Get tourist reach without the tablet stack.
              </div>
            </div>
            <div style={{ padding: '0 32px 0', display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 22 }}>
              {DH_PLATFORMS.map(p => (
                <div key={p.name} style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '8px 14px', background: '#FAF7F1', borderRadius: 999,
                  border: `1px solid ${DH_C.ink10}`, fontSize: 13, fontWeight: 600, color: DH_C.ink }}>
                  <span style={{ width: 8, height: 8, borderRadius: 999, background: p.color }}></span>
                  {p.name}
                </div>
              ))}
            </div>
            <div style={{ padding: '0 32px 32px' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px',
                display: 'flex', flexDirection: 'column', gap: 10 }}>
                {DH_TRACKS_FEATURES_AGG.map((it, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, fontSize: 14, color: DH_C.ink, lineHeight: 1.5 }}>
                    <span style={{ color: DH_C.agg, fontWeight: 800 }}>+</span>{it}
                  </li>
                ))}
              </ul>
              <div style={{ background: DH_C.bg, borderRadius: 10, padding: '14px 16px' }}>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: DH_C.aggDeep, marginBottom: 4 }}>Best for</div>
                <div style={{ fontSize: 14, color: DH_C.ink, lineHeight: 1.5 }}>
                  Tourist reach, filling empty kitchen hours, building visibility.
                </div>
              </div>
            </div>
          </div>

          {/* Hula track */}
          <div style={{ background: DH_C.surface, borderRadius: 16, overflow: 'hidden',
            border: `1px solid ${DH_C.ink10}`, borderTop: `4px solid ${DH_C.hula}`,
            position: 'relative' }}>
            <div style={{ position: 'absolute', top: 16, right: 16,
              background: DH_C.hula, color: 'white', padding: '5px 12px',
              borderRadius: 999, fontSize: 10, fontWeight: 800,
              letterSpacing: '0.12em', textTransform: 'uppercase' }}>Aloha-built</div>
            <div style={{ padding: '32px 32px 0' }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: DH_C.hula, marginBottom: 10 }}>Local track</div>
              <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em',
                color: DH_C.ink, marginBottom: 12 }}>Hula Delivery</div>
              <div style={{ fontSize: 15, color: DH_C.ink70, lineHeight: 1.6, marginBottom: 22 }}>
                Our own delivery platform built for Hawaii. Pickup price = delivery price.
                Customer pays a delivery fee. You keep your margin and your customer.
              </div>
            </div>
            <div style={{ margin: '0 32px 22px', padding: '14px 18px',
              background: DH_C.hulaSoft, borderRadius: 10, fontSize: 13, color: DH_C.hulaDeep,
              fontWeight: 700, letterSpacing: '-0.005em' }}>
              huladelivery.com &middot; live in Honolulu
            </div>
            <div style={{ padding: '0 32px 32px' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px',
                display: 'flex', flexDirection: 'column', gap: 10 }}>
                {DH_TRACKS_FEATURES_HULA.map((it, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, fontSize: 14, color: DH_C.ink, lineHeight: 1.5 }}>
                    <span style={{ color: DH_C.hula, fontWeight: 800 }}>+</span>{it}
                  </li>
                ))}
              </ul>
              <div style={{ background: DH_C.hulaSoft, borderRadius: 10, padding: '14px 16px' }}>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: DH_C.hulaDeep, marginBottom: 4 }}>Best for</div>
                <div style={{ fontSize: 14, color: DH_C.ink, lineHeight: 1.5 }}>
                  Loyal local base, repeat regulars, protecting your real menu margin.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DHCompare() {
  const isMobile = useIsMobile();
  return (
    <section style={{ background: DH_C.bgDark, color: 'white', padding: isMobile ? '56px 20px' : '96px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: DH_C.gold, marginBottom: 14 }}>
          Side by side
        </div>
        <h2 style={{ fontSize: isMobile ? 'clamp(26px, 7.5vw, 34px)' : 'clamp(34px, 4vw, 54px)', lineHeight: 1.05,
          letterSpacing: '-0.025em', fontWeight: 700, margin: isMobile ? '0 0 28px' : '0 0 48px', maxWidth: 800 }}>
          Same Clover printer. Different economics.
        </h2>
        {isMobile ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {DH_COMPARE.map((c, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 12,
                border: '1px solid rgba(255,255,255,0.08)', padding: 18 }}>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 12 }}>{c.row}</div>
                <div style={{ marginBottom: 10 }}>
                  <div style={{ fontSize: 10, fontWeight: 800, color: DH_C.agg, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>Aggregator Hub</div>
                  <div style={{ fontSize: 14, color: 'white', lineHeight: 1.5 }}>{c.agg}</div>
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 800, color: '#FF8E73', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>Hula Delivery</div>
                  <div style={{ fontSize: 14, color: 'white', lineHeight: 1.5 }}>{c.hula}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 16,
            border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr 1.3fr',
              padding: '20px 28px', background: 'rgba(255,255,255,0.06)',
              fontSize: 11, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              <div style={{ color: 'rgba(255,255,255,0.5)' }}></div>
              <div style={{ color: DH_C.agg }}>Aggregator Hub</div>
              <div style={{ color: '#FF8E73' }}>Hula Delivery</div>
            </div>
            {DH_COMPARE.map((c, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr 1.3fr',
                padding: '20px 28px', borderTop: '1px solid rgba(255,255,255,0.06)',
                fontSize: 14, alignItems: 'center' }}>
                <div style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 600 }}>{c.row}</div>
                <div style={{ color: 'white', lineHeight: 1.5 }}>{c.agg}</div>
                <div style={{ color: 'white', lineHeight: 1.5 }}>{c.hula}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function DHFAQ() {
  const isMobile = useIsMobile();
  return (
    <section style={{ padding: isMobile ? '56px 20px' : '96px 32px', background: DH_C.bg }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: DH_C.hulaDeep, marginBottom: 14 }}>
          Questions owners ask
        </div>
        <h2 style={{ fontSize: isMobile ? 'clamp(26px, 7.5vw, 34px)' : 'clamp(34px, 4vw, 54px)', lineHeight: 1.05,
          letterSpacing: '-0.025em', fontWeight: 700, margin: isMobile ? '0 0 28px' : '0 0 48px', color: DH_C.ink }}>
          You don't need to know any of this. <span style={{ color: DH_C.ink50 }}>But here's the answer anyway.</span>
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {DH_FAQ.map((f, i) => (
            <details key={i} style={{ background: DH_C.surface, borderRadius: 12,
              border: `1px solid ${DH_C.ink10}`, padding: '4px 0' }}>
              <summary style={{ padding: '20px 24px', fontSize: 16, fontWeight: 700,
                color: DH_C.ink, cursor: 'pointer', listStyle: 'none',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {f.q}
                <span style={{ color: DH_C.hula, fontSize: 22, fontWeight: 400 }}>+</span>
              </summary>
              <div style={{ padding: '0 24px 20px', fontSize: 15, color: DH_C.ink70, lineHeight: 1.65 }}>
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function DHContact() {
  const isMobile = useIsMobile();
  return (
    <section id="contact" style={{ padding: isMobile ? '64px 20px' : '96px 32px', background: DH_C.bgAlt }}>
      <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: DH_C.hulaDeep, marginBottom: 14 }}>
          Ready when you are
        </div>
        <h2 style={{ fontSize: isMobile ? 'clamp(30px, 9vw, 40px)' : 'clamp(36px, 5vw, 60px)', lineHeight: 1.02,
          letterSpacing: '-0.03em', fontWeight: 700, margin: '0 0 16px', color: DH_C.ink }}>
          Send us photos. We'll handle the rest.
        </h2>
        <p style={{ fontSize: isMobile ? 14 : 17, color: DH_C.ink70, maxWidth: 600,
          margin: isMobile ? '0 auto 24px' : '0 auto 36px', lineHeight: 1.6 }}>
            Email us your menu and a few food photos. We come back with a deployment
            plan, a timeline, and a setup we run end-to-end. You stay in the kitchen.
        </p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:info@alohasmartsystem.com?subject=Delivery%20Hub%20-%20Setup" style={{
            background: DH_C.hula, color: 'white', padding: isMobile ? '14px 26px' : '16px 32px', borderRadius: 999,
            fontWeight: 700, fontSize: isMobile ? 14 : 15 }}>Get set up →</a>
          <a href="../find-your-fit.html" style={{ background: 'transparent', color: DH_C.ink,
            border: `1.5px solid ${DH_C.ink30}`, padding: isMobile ? '12.5px 22px' : '14.5px 30px',
            borderRadius: 999, fontWeight: 600, fontSize: isMobile ? 13 : 14 }}>Take the 60-second fit quiz</a>
        </div>
        <div style={{ fontSize: 13, color: DH_C.ink50, marginTop: 28 }}>
          Built in Honolulu &middot; huladelivery.com &middot; (808) 650-3331
        </div>
      </div>
    </section>
  );
}

function DHFooter() {
  return (
    <footer style={{ padding: '24px 32px', borderTop: `1px solid ${DH_C.ink10}`, background: DH_C.bg }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', fontSize: 12, color: DH_C.ink50,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textAlign: 'center' }}>
        <div>Delivery Hub &middot; part of Aloha Smart System &middot; Musubi Media LLC</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, flexWrap: 'wrap', justifyContent: 'center' }}>
          <span>Authorized partner of</span>
          <CardConnectMark scale={0.55} />
          <span>· CCS HQ (877) 682-1117</span>
        </div>
      </div>
    </footer>
  );
}

function DeliveryHubPage() {
  return (
    <div style={{ background: DH_C.bg, color: DH_C.ink,
      fontFamily: "'Inter Tight', system-ui, sans-serif", minHeight: '100vh' }}>
      <DHNav />
      <DHHero />
      <DHSetup />
      <DHPriceProblem />
      <DHTracks />
      <DHCompare />
      <DHFAQ />
      <DHContact />
      <DHFooter />
    </div>
  );
}

window.DeliveryHubPage = DeliveryHubPage;
