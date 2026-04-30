// Smart Kiosk page

function KSKLogoA({ size = 28 }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'baseline',
      fontWeight: 800, fontSize: size, letterSpacing: '-0.04em', color: KSK_C.ink }}>
      A<span style={{ width: size * 0.18, height: size * 0.18, borderRadius: 999,
        background: KSK_C.cloverGreen, marginLeft: 2, alignSelf: 'flex-end', marginBottom: size * 0.08 }}></span>
    </span>
  );
}

function KSKNav() {
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
      borderBottom: `1px solid ${KSK_C.ink10}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto',
        padding: isMobile ? '12px 18px' : '14px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="../index.html" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <KSKLogoA size={isMobile ? 24 : 28} />
          <div style={{ fontWeight: 700, fontSize: isMobile ? 14 : 16, color: KSK_C.ink }}>Aloha Smart System</div>
        </a>
        {!isMobile && (
          <div style={{ display: 'flex', gap: 28, alignItems: 'center', fontSize: 14 }}>
            {links.map(([h, l]) => (<a key={h} href={h} style={{ color: KSK_C.ink70 }}>{l}</a>))}
            <a href="#contact" style={{ background: KSK_C.cloverGreen, color: 'white', padding: '9px 18px',
              borderRadius: 999, fontWeight: 700, whiteSpace: 'nowrap' }}>Get a quote</a>
          </div>
        )}
        {isMobile && (
          <button onClick={() => setOpen(!open)} style={{
            background: 'transparent', border: 'none', padding: 8,
            display: 'flex', flexDirection: 'column', gap: 4, cursor: 'pointer' }}>
            <span style={{ width: 22, height: 2, background: KSK_C.ink, transition: 'transform 0.2s', transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
            <span style={{ width: 22, height: 2, background: KSK_C.ink, opacity: open ? 0 : 1 }} />
            <span style={{ width: 22, height: 2, background: KSK_C.ink, transition: 'transform 0.2s', transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
          </button>
        )}
      </div>
      {isMobile && open && (
        <div style={{ background: KSK_C.bg, borderTop: `1px solid ${KSK_C.ink10}`,
          padding: '14px 18px 22px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {links.map(([h, l]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} style={{
              color: KSK_C.ink, padding: '12px 8px', fontSize: 16, fontWeight: 500,
              borderBottom: `1px solid ${KSK_C.ink10}` }}>{l}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} style={{
            background: KSK_C.cloverGreen, color: 'white', padding: '14px 18px',
            borderRadius: 999, fontWeight: 700, marginTop: 14, textAlign: 'center' }}>Get a quote</a>
        </div>
      )}
    </nav>
  );
}

function KSKHero() {
  const isMobile = useIsMobile();
  return (
    <section style={{ maxWidth: 1320, margin: '0 auto', padding: isMobile ? '36px 20px 32px' : '64px 32px 48px' }}>
      <a href="../index.html#products" style={{
        fontSize: 13, color: KSK_C.cloverGreenDeep, fontWeight: 700, whiteSpace: 'nowrap' }}>← All products</a>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1fr) minmax(0, 1.15fr)',
        gap: isMobile ? 28 : 56, alignItems: 'center', marginTop: 18 }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 14px', background: KSK_C.ink, color: 'white',
            borderRadius: 999, fontSize: isMobile ? 10 : 11, fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: KSK_C.cloverGreen }}></span>
            Smart Kiosk &middot; part of Aloha Smart System
          </div>
          <h1 style={{ fontSize: isMobile ? 'clamp(34px, 9vw, 44px)' : 'clamp(44px, 6vw, 84px)', lineHeight: isMobile ? 1.02 : 0.96,
            letterSpacing: '-0.035em', fontWeight: 700, margin: isMobile ? '16px 0 14px' : '20px 0 18px', color: KSK_C.ink }}>
            Two paths to <span style={{ color: KSK_C.cloverGreenDeep }}>self-order.</span><br/>
            One smart system.
          </h1>
          <p style={{ fontSize: isMobile ? 15 : 'clamp(17px, 1.4vw, 21px)', lineHeight: 1.5,
            color: KSK_C.ink70, maxWidth: 580, margin: isMobile ? '0 0 22px' : '0 0 32px' }}>
            We can deliver a kiosk in any form you want. Pick the polished Clover hardware
            for zero-fuss deployment, or let us build a custom kiosk shaped around your store,
            your brand, and your budget.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href="#tracks" style={{ background: KSK_C.cloverGreen, color: 'white', padding: isMobile ? '14px 22px' : '16px 28px',
              borderRadius: 999, fontWeight: 700, fontSize: isMobile ? 14 : 15 }}>Compare both →</a>
            <a href="#contact" style={{ background: 'transparent', color: KSK_C.ink,
              border: `1.5px solid ${KSK_C.ink30}`, padding: isMobile ? '12.5px 20px' : '14.5px 26px',
              borderRadius: 999, fontWeight: 600, fontSize: isMobile ? 14 : 15 }}>Talk to us</a>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: isMobile ? 10 : 16, alignItems: 'stretch' }}>
          <div style={{ borderRadius: 14, overflow: 'hidden',
            boxShadow: '0 12px 32px rgba(14,26,36,0.15)', background: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 12 }}>
            <img src="../assets/kiosk/custom-floor-standing.png"
              alt="Custom-built kiosk"
              style={{ width: '100%', display: 'block', objectFit: 'contain' }} />
          </div>
          <div style={{ borderRadius: 14, overflow: 'hidden',
            boxShadow: '0 12px 32px rgba(14,26,36,0.15)' }}>
            <img src="../assets/kiosk/clover-lifestyle-customer.png"
              alt="Customer using Clover kiosk"
              style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function KSKBenefits() {
  const isMobile = useIsMobile();
  return (
    <section style={{ background: KSK_C.bgDark, color: 'white', padding: isMobile ? '56px 20px' : '88px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: KSK_C.gold, marginBottom: 14 }}>
          Why kiosks
        </div>
        <h2 style={{ fontSize: isMobile ? 'clamp(26px, 7.5vw, 34px)' : 'clamp(36px, 4.5vw, 60px)', lineHeight: 1.05,
          letterSpacing: '-0.025em', fontWeight: 700, margin: isMobile ? '0 0 28px' : '0 0 48px', maxWidth: 800 }}>
          One kiosk = one less cashier shift. <span style={{ color: 'rgba(255,255,255,0.55)' }}>And a bigger ticket.</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(240px, 1fr))', gap: isMobile ? 10 : 14 }}>
          {KSK_BENEFITS.map((b, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: '24px 22px' }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.12em',
                color: KSK_C.gold, marginBottom: 10 }}>0{i + 1}</div>
              <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 8 }}>{b.k}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.55 }}>{b.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function KSKTracks() {
  const isMobile = useIsMobile();
  return (
    <section id="tracks" style={{ padding: isMobile ? '56px 20px' : '96px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: KSK_C.cloverGreenDeep, marginBottom: 14 }}>
          Two tracks
        </div>
        <h2 style={{ fontSize: isMobile ? 'clamp(26px, 7.5vw, 34px)' : 'clamp(36px, 4.5vw, 60px)', lineHeight: 1.05,
          letterSpacing: '-0.025em', fontWeight: 700, margin: isMobile ? '0 0 28px' : '0 0 56px', color: KSK_C.ink, maxWidth: 800 }}>
          Pick the path that fits <span style={{ color: KSK_C.ink50 }}>your floor and your budget.</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(420px, 1fr))', gap: isMobile ? 14 : 24 }}>
          {/* Clover track */}
          <div style={{ background: KSK_C.surface, borderRadius: 16, overflow: 'hidden',
            border: `1px solid ${KSK_C.ink10}`, borderTop: `4px solid ${KSK_C.cloverGreen}` }}>
            <div style={{ aspectRatio: '4/3', background: '#F8F8F8' }}>
              <img src="../assets/kiosk/clover-product-pair.png" alt="Clover Kiosk product"
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
            </div>
            <div style={{ padding: '32px 32px' }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: KSK_C.cloverGreen, marginBottom: 10 }}>Premium track</div>
              <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em',
                color: KSK_C.ink, marginBottom: 12 }}>Clover Kiosk</div>
              <div style={{ fontSize: 15, color: KSK_C.ink70, lineHeight: 1.6, marginBottom: 22 }}>
                Official Clover hardware. Polished, warrantied, on the shelf.
                Costs more — but you plug it in and run.
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px',
                display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Clover-built and Clover-warranted', 'Native Clover OS — every Clover app works', '24" portrait touchscreen + payment + receipt printer',
                  'Same look guests already know from Chipotle, Sweetgreen', 'In stock — 2–3 week deployment'].map((it, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, fontSize: 14, color: KSK_C.ink, lineHeight: 1.5 }}>
                    <span style={{ color: KSK_C.cloverGreen, fontWeight: 800 }}>+</span>{it}
                  </li>
                ))}
              </ul>
              <div style={{ background: KSK_C.bgAlt, borderRadius: 10, padding: '14px 16px', marginBottom: 18 }}>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: KSK_C.cloverGreenDeep, marginBottom: 4 }}>Best for</div>
                <div style={{ fontSize: 14, color: KSK_C.ink, lineHeight: 1.5 }}>
                  Established restaurants and food courts that want zero risk and fast deployment.
                </div>
              </div>
            </div>
          </div>

          {/* Custom track */}
          <div style={{ background: KSK_C.surface, borderRadius: 16, overflow: 'hidden',
            border: `1px solid ${KSK_C.ink10}`, borderTop: `4px solid ${KSK_C.custom}` }}>
            <div style={{ aspectRatio: '4/3', background: '#F8F8F8',
              display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 1 }}>
              {KSK_FORMS.map((f, i) => (
                <div key={f.v} style={{ background: '#FCFCFC', overflow: 'hidden' }}>
                  <img src={f.photo} alt={f.label}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', padding: 8 }} />
                </div>
              ))}
            </div>
            <div style={{ padding: '32px 32px' }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: KSK_C.custom, marginBottom: 10 }}>Custom track</div>
              <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em',
                color: KSK_C.ink, marginBottom: 12 }}>Custom Kiosk</div>
              <div style={{ fontSize: 15, color: KSK_C.ink70, lineHeight: 1.6, marginBottom: 22 }}>
                We build the hardware around your store. Pick a form factor,
                pick a color, put your logo on the body. More affordable, fully yours.
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px',
                display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['4 form factors — floor, mobile, counter-top, dual-screen', 'Custom paint, custom branding on the body',
                  'Same Clover-connected software — runs your menu', 'Built and serviced direct by Aloha team',
                  'Lower up-front cost than Clover hardware'].map((it, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, fontSize: 14, color: KSK_C.ink, lineHeight: 1.5 }}>
                    <span style={{ color: KSK_C.custom, fontWeight: 800 }}>+</span>{it}
                  </li>
                ))}
              </ul>
              <div style={{ background: KSK_C.bgAlt, borderRadius: 10, padding: '14px 16px', marginBottom: 18 }}>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: KSK_C.customDeep, marginBottom: 4 }}>Best for</div>
                <div style={{ fontSize: 14, color: KSK_C.ink, lineHeight: 1.5 }}>
                  Multi-store chains and brand-conscious operators who want a kiosk that looks like their store.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KSKForms() {
  const isMobile = useIsMobile();
  return (
    <section style={{ background: KSK_C.bgAlt, padding: isMobile ? '56px 20px' : '96px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: KSK_C.customDeep, marginBottom: 14 }}>
          Custom form factors
        </div>
        <h2 style={{ fontSize: isMobile ? 'clamp(26px, 7.5vw, 32px)' : 'clamp(34px, 4vw, 54px)', lineHeight: 1.05,
          letterSpacing: '-0.025em', fontWeight: 700, margin: '0 0 14px', color: KSK_C.ink, maxWidth: 800 }}>
          Whatever shape your floor needs.
        </h2>
        <p style={{ fontSize: isMobile ? 14 : 17, color: KSK_C.ink70, maxWidth: 720, margin: isMobile ? '0 0 28px' : '0 0 48px', lineHeight: 1.55 }}>
          Four standard form factors. Or tell us what you need — we build to spec.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(240px, 1fr))', gap: isMobile ? 10 : 16 }}>
          {KSK_FORMS.map(f => (
            <div key={f.v} style={{ background: KSK_C.surface, borderRadius: 14,
              border: `1px solid ${KSK_C.ink10}`, overflow: 'hidden' }}>
              <div style={{ aspectRatio: '3/4', background: '#FCFCFC', padding: 16 }}>
                <img src={f.photo} alt={f.label}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
              </div>
              <div style={{ padding: '20px 22px', borderTop: `1px solid ${KSK_C.ink10}` }}>
                <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.01em',
                  color: KSK_C.ink, marginBottom: 4 }}>{f.label}</div>
                <div style={{ fontSize: 13, color: KSK_C.ink50, marginBottom: 10 }}>{f.sub}</div>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em',
                  color: KSK_C.custom, textTransform: 'uppercase' }}>{f.use}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function KSKLifestyle() {
  const isMobile = useIsMobile();
  return (
    <section style={{ padding: isMobile ? '48px 20px' : '96px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: KSK_C.cloverGreenDeep, marginBottom: 14 }}>
          The Clover kiosk in the wild
        </div>
        <h2 style={{ fontSize: isMobile ? 'clamp(26px, 7.5vw, 32px)' : 'clamp(34px, 4vw, 54px)', lineHeight: 1.05,
          letterSpacing: '-0.025em', fontWeight: 700, margin: isMobile ? '0 0 24px' : '0 0 48px', color: KSK_C.ink, maxWidth: 800 }}>
          Polished, fast, customer-friendly.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1.4fr) minmax(0, 1fr)', gap: isMobile ? 12 : 20 }}>
          <div style={{ borderRadius: 14, overflow: 'hidden',
            boxShadow: '0 12px 32px rgba(14,26,36,0.12)' }}>
            <img src="../assets/kiosk/clover-lifestyle-multi.png" alt="Clover kiosks in restaurant"
              style={{ width: '100%', display: 'block' }} />
          </div>
          <div style={{ borderRadius: 14, overflow: 'hidden', background: '#F8F8F8',
            boxShadow: '0 12px 32px rgba(14,26,36,0.12)', display: 'flex', alignItems: 'center', padding: 20 }}>
            <img src="../assets/kiosk/clover-product-detail.png" alt="Clover kiosk menu screen"
              style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function KSKCompare() {
  const isMobile = useIsMobile();
  return (
    <section style={{ background: KSK_C.bgDark, color: 'white', padding: isMobile ? '56px 20px' : '96px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: KSK_C.gold, marginBottom: 14 }}>
          Side by side
        </div>
        <h2 style={{ fontSize: isMobile ? 'clamp(26px, 7.5vw, 34px)' : 'clamp(34px, 4vw, 54px)', lineHeight: 1.05,
          letterSpacing: '-0.025em', fontWeight: 700, margin: isMobile ? '0 0 28px' : '0 0 48px', maxWidth: 800 }}>
          Both run the same software. Different hardware tradeoffs.
        </h2>
        {isMobile ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {KSK_COMPARE.map((c, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 12,
                border: '1px solid rgba(255,255,255,0.08)', padding: 18 }}>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 12 }}>{c.row}</div>
                <div style={{ marginBottom: 10 }}>
                  <div style={{ fontSize: 10, fontWeight: 800, color: KSK_C.cloverGreen, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>Clover Kiosk</div>
                  <div style={{ fontSize: 14, color: 'white', lineHeight: 1.5 }}>{c.clover}</div>
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 800, color: '#E8915C', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>Custom Kiosk</div>
                  <div style={{ fontSize: 14, color: 'white', lineHeight: 1.5 }}>{c.custom}</div>
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
              <div style={{ color: KSK_C.cloverGreen }}>Clover Kiosk</div>
              <div style={{ color: '#E8915C' }}>Custom Kiosk</div>
            </div>
            {KSK_COMPARE.map((c, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr 1.3fr',
                padding: '20px 28px', borderTop: '1px solid rgba(255,255,255,0.06)',
                fontSize: 14, alignItems: 'center' }}>
                <div style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 600 }}>{c.row}</div>
                <div style={{ color: 'white', lineHeight: 1.5 }}>{c.clover}</div>
                <div style={{ color: 'white', lineHeight: 1.5 }}>{c.custom}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function KSKContact() {
  const isMobile = useIsMobile();
  return (
    <section id="contact" style={{
      background: `linear-gradient(135deg, ${KSK_C.cloverGreen}, ${KSK_C.cloverGreenDeep})`,
      color: 'white', padding: isMobile ? '72px 20px' : '112px 32px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto',
        display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? 32 : 64, alignItems: 'start' }}>
        <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>
            Not sure which?
          </div>
          <h2 style={{ fontSize: isMobile ? 'clamp(30px, 9vw, 40px)' : 'clamp(36px, 4.5vw, 56px)', lineHeight: 1.02,
            letterSpacing: '-0.03em', fontWeight: 700, margin: '0 0 18px' }}>
            We&rsquo;ll spec it for you.
          </h2>
          <p style={{ fontSize: isMobile ? 14 : 17, color: 'rgba(255,255,255,0.85)', maxWidth: 520,
            margin: isMobile ? '0 auto 24px' : '0 0 24px', lineHeight: 1.6 }}>
            Send us a photo of where the kiosk goes and tell us your daily ticket count.
            We&rsquo;ll come back with a hardware recommendation, a layout, and a number &mdash; usually same day.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
            <div>📧 <a href="mailto:info@alohasmartsystem.com" style={{ color: 'white', borderBottom: '1px solid rgba(255,255,255,0.4)' }}>info@alohasmartsystem.com</a></div>
            <div>📞 <a href="tel:+18086503331" style={{ color: 'white', borderBottom: '1px solid rgba(255,255,255,0.4)' }}>(808) 650-3331</a></div>
          </div>
        </div>
        <AlohaContactForm
          accentColor={KSK_C.cloverGreenDeep}
          productName="Smart Kiosk"
          isMobile={isMobile}
        />
      </div>
    </section>
  );
}

function KSKFooter() {
  return (
    <footer style={{ padding: '24px 32px', borderTop: `1px solid ${KSK_C.ink10}`, background: KSK_C.bg }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', fontSize: 12, color: KSK_C.ink50,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textAlign: 'center' }}>
        <div>Smart Kiosk &middot; part of Aloha Smart System &middot; Musubi Media LLC</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, flexWrap: 'wrap', justifyContent: 'center' }}>
          <span>Authorized partner of</span>
          <CardConnectMark scale={0.55} />
          <span>· CCS HQ (877) 682-1117</span>
        </div>
      </div>
    </footer>
  );
}

function SmartKioskPage() {
  return (
    <div style={{ background: KSK_C.bg, color: KSK_C.ink,
      fontFamily: "'Inter Tight', system-ui, sans-serif", minHeight: '100vh' }}>
      <KSKNav />
      <KSKHero />
      <KSKBenefits />
      <KSKTracks />
      <KSKForms />
      <KSKLifestyle />
      <KSKCompare />
      <KSKContact />
      <KSKFooter />
    </div>
  );
}

window.SmartKioskPage = SmartKioskPage;
