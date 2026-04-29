// Food Court Master — product detail page (Sunset Terracotta brand)

const FCM_C = {
  // Brand v2 — Sunset Terracotta + Deep Charcoal (matches Aloha Smart System home)
  bg: '#F5EFE6', bgAlt: '#EDE4D3', bgDeep: '#E2D4BD', surface: '#FFFFFF',
  ink: '#1A1A1F',
  ink80: 'rgba(26,26,31,0.82)',
  ink70: 'rgba(26,26,31,0.72)',
  ink50: 'rgba(26,26,31,0.5)',
  ink30: 'rgba(26,26,31,0.28)',
  ink15: 'rgba(26,26,31,0.14)',
  ink10: 'rgba(26,26,31,0.08)',
  ink08: 'rgba(26,26,31,0.08)',
  // Accent palette
  terra: '#C8553D',
  terraDeep: '#7A2E1F',
  blush: '#F1D9CF',
  sand: '#F5EFE6',
  gold: '#C9941E',
  palm: '#1F6E4D',
};

// Plumeria pattern — terracotta on sand, very low opacity
const FCM_PLUMERIA_BG = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60"><g fill="none" stroke="%23C8553D" stroke-width="1" stroke-linejoin="round" opacity="0.18"><g transform="translate(30 30)"><path d="M0 -16 C 6 -13 9 -7 6 -1 C 3 3 -3 3 -6 -1 C -9 -7 -6 -13 0 -16 Z"/><g transform="rotate(72)"><path d="M0 -16 C 6 -13 9 -7 6 -1 C 3 3 -3 3 -6 -1 C -9 -7 -6 -13 0 -16 Z"/></g><g transform="rotate(144)"><path d="M0 -16 C 6 -13 9 -7 6 -1 C 3 3 -3 3 -6 -1 C -9 -7 -6 -13 0 -16 Z"/></g><g transform="rotate(216)"><path d="M0 -16 C 6 -13 9 -7 6 -1 C 3 3 -3 3 -6 -1 C -9 -7 -6 -13 0 -16 Z"/></g><g transform="rotate(288)"><path d="M0 -16 C 6 -13 9 -7 6 -1 C 3 3 -3 3 -6 -1 C -9 -7 -6 -13 0 -16 Z"/></g><circle r="2" fill="%23C8553D" stroke="none"/></g></g></svg>')`;

// Shared A· wordmark — matches main site
function FCMLogoA({ size = 28, dark = false }) {
  const ink = dark ? '#F5EFE6' : FCM_C.ink;
  const dotColor = dark ? '#F1D9CF' : FCM_C.terra;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'baseline',
      fontFamily: '"Inter Tight", system-ui, sans-serif',
      fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1,
      fontSize: size, color: ink,
    }}>
      A
      <span style={{
        display: 'inline-block',
        width: '0.18em', height: '0.18em', borderRadius: '50%',
        background: dotColor, marginLeft: '0.06em', transform: 'translateY(-0.06em)',
      }} />
    </span>
  );
}

function FCMNav() {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(false);
  const links = [
    ['../index.html#products', 'Products'],
    ['../index.html#personas', 'Industries'],
    ['../index.html#processing', 'Processing'],
    ['../about.html', 'About'],
    ['../find-your-fit.html', 'Find your fit'],
  ];
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(245,239,230,0.94)', backdropFilter: 'saturate(140%) blur(12px)',
      borderBottom: `1px solid ${FCM_C.ink10}`,
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto',
        padding: isMobile ? '12px 18px' : '14px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="../index.html" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <FCMLogoA size={isMobile ? 24 : 28} />
          <div style={{ fontWeight: 700, fontSize: isMobile ? 14 : 16, letterSpacing: '-0.01em', color: FCM_C.ink }}>
            Aloha Smart System
          </div>
        </a>
        {!isMobile && (
          <div style={{ display: 'flex', gap: 28, alignItems: 'center', fontSize: 14 }}>
            {links.map(([href, label]) => (
              <a key={href} href={href} style={{ color: FCM_C.ink70, whiteSpace: 'nowrap' }}>{label}</a>
            ))}
            <a href="../index.html#contact" style={{
              background: FCM_C.terra, color: 'white', padding: '9px 18px',
              borderRadius: 999, fontWeight: 600, whiteSpace: 'nowrap',
            }}>Book a demo</a>
          </div>
        )}
        {isMobile && (
          <button onClick={() => setOpen(!open)} style={{
            background: 'transparent', border: 'none', padding: 8,
            display: 'flex', flexDirection: 'column', gap: 4, cursor: 'pointer',
          }}>
            <span style={{ width: 22, height: 2, background: FCM_C.ink, transition: 'transform 0.2s', transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
            <span style={{ width: 22, height: 2, background: FCM_C.ink, opacity: open ? 0 : 1 }} />
            <span style={{ width: 22, height: 2, background: FCM_C.ink, transition: 'transform 0.2s', transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
          </button>
        )}
      </div>
      {isMobile && open && (
        <div style={{
          background: FCM_C.bg, borderTop: `1px solid ${FCM_C.ink10}`,
          padding: '14px 18px 22px', display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {links.map(([href, label]) => (
            <a key={href} href={href} style={{
              color: FCM_C.ink, padding: '12px 8px', fontSize: 16, fontWeight: 500,
              borderBottom: `1px solid ${FCM_C.ink08}`,
            }}>{label}</a>
          ))}
          <a href="../index.html#contact" style={{
            background: FCM_C.terra, color: 'white', padding: '14px 18px',
            borderRadius: 999, fontWeight: 600, marginTop: 14, textAlign: 'center',
          }}>Book a demo</a>
        </div>
      )}
    </nav>
  );
}

function FCMHero() {
  const isMobile = useIsMobile();
  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '36px 20px 32px' : '64px 32px 48px' }}>
      <a href="../index.html#products" style={{
        fontSize: 13, color: FCM_C.terra, fontWeight: 600, whiteSpace: 'nowrap',
      }}>← All products</a>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px',
        background: FCM_C.blush, border: `1px solid ${FCM_C.terra}40`, borderRadius: 999,
        fontSize: isMobile ? 11 : 12, fontWeight: 700, color: FCM_C.terraDeep, letterSpacing: '0.08em',
        textTransform: 'uppercase', marginTop: 16, marginLeft: isMobile ? 0 : 14,
        display: isMobile ? 'inline-flex' : 'inline-flex' }}>
        <span style={{ width: 6, height: 6, borderRadius: 999, background: FCM_C.terra }}></span>
        Multi-vendor POS · Built on Clover
      </div>
      <h1 style={{ fontSize: isMobile ? 'clamp(34px, 9vw, 46px)' : 'clamp(48px, 7vw, 96px)',
        lineHeight: isMobile ? 1.02 : 0.96,
        letterSpacing: '-0.035em', fontWeight: 700, margin: isMobile ? '16px 0 16px' : '20px 0 20px',
        color: FCM_C.ink, maxWidth: 1100 }}>
        Food Court Master.<br/>
        <span style={{ color: FCM_C.terra }}>One ticket, many kitchens.</span>
      </h1>
      <p style={{ fontSize: isMobile ? 16 : 'clamp(18px, 1.5vw, 22px)', lineHeight: 1.5,
        color: FCM_C.ink70, maxWidth: 760, margin: isMobile ? '0 0 24px' : '0 0 32px' }}>
        The full operating system for multi-vendor food halls. Customer ordering, per-kitchen POS,
        editorial pickup boards, marketing campaigns, automated settlement — engineered on Clover, integrated with Zorder.
      </p>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <a href="#live-demo" style={{ background: FCM_C.ink, color: 'white',
          padding: isMobile ? '14px 22px' : '16px 28px', borderRadius: 999, fontWeight: 600, fontSize: isMobile ? 14 : 15,
          whiteSpace: 'nowrap' }}>See it live →</a>
        <a href="#contact" style={{ background: 'transparent', color: FCM_C.ink,
          border: `1.5px solid ${FCM_C.ink30}`, padding: isMobile ? '12.5px 20px' : '14.5px 26px', borderRadius: 999,
          fontWeight: 600, fontSize: isMobile ? 14 : 15, whiteSpace: 'nowrap' }}>Get a quote</a>
      </div>
    </section>
  );
}

function FCMReferenceBuild() {
  const isMobile = useIsMobile();
  return (
    <section id="live-demo" style={{
      background: FCM_C.bgAlt,
      backgroundImage: FCM_PLUMERIA_BG,
      backgroundSize: '120px 120px',
      padding: isMobile ? '48px 20px' : '72px 32px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 32 : 64, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase', color: FCM_C.terra, marginBottom: 14 }}>
              Reference build
            </div>
            <h2 style={{ fontSize: isMobile ? 'clamp(28px, 8vw, 38px)' : 'clamp(36px, 4.5vw, 56px)', lineHeight: 1.05,
              letterSpacing: '-0.025em', fontWeight: 700, margin: '0 0 16px', color: FCM_C.ink }}>
              Meet Midtown West.
            </h2>
            <p style={{ fontSize: isMobile ? 15 : 18, lineHeight: 1.6, color: FCM_C.ink70, marginBottom: 24 }}>
              Our 13-vendor demonstration food hall in Honolulu. We built every screen,
              every workflow, every dashboard you'll see on this page. Tour it before
              you commit to a single piece of hardware.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: isMobile ? 14 : 20, marginBottom: 24 }}>
              {[['13', 'Vendors'], ['164', 'Sample orders/day'], ['$2,298', 'Sample gross'], ['3', 'Languages']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontSize: isMobile ? 26 : 32, fontWeight: 800, letterSpacing: '-0.02em', color: FCM_C.ink }}>{n}</div>
                  <div style={{ fontSize: 13, color: FCM_C.ink50 }}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 11, color: FCM_C.ink50, fontStyle: 'italic' }}>
              Vendor names and figures are illustrative — a working demonstration environment.
              Actual food court branding is fully customizable per installation.
            </div>
          </div>
          <div style={{ overflow: isMobile ? 'auto' : 'visible', maxWidth: '100%' }}>
            <FCM_MOCKUPS.CustomerOrder />
          </div>
        </div>

        <div style={{ marginTop: isMobile ? 32 : 56, display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(auto-fill, minmax(120px, 1fr))' : 'repeat(auto-fill, minmax(140px, 1fr))', gap: 8 }}>
          {FCM_VENDORS.map(v => (
            <div key={v.id} style={{ background: FCM_C.surface, border: `1px solid ${FCM_C.ink08}`,
              borderRadius: 12, padding: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: v.color, color: 'white',
                display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>{v.initials}</div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: FCM_C.ink,
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{v.name}</div>
                <div style={{ fontSize: 10, color: FCM_C.ink50,
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{v.cuisine}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FCMProblems() {
  const isMobile = useIsMobile();
  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '56px 20px' : '96px 32px' }}>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em',
        textTransform: 'uppercase', color: FCM_C.ink50, marginBottom: 16 }}>
        Why operators call us
      </div>
      <h2 style={{ fontSize: isMobile ? 'clamp(28px, 8vw, 38px)' : 'clamp(36px, 4.5vw, 56px)', lineHeight: 1.05,
        letterSpacing: '-0.025em', fontWeight: 700, margin: isMobile ? '0 0 32px' : '0 0 56px', color: FCM_C.ink, maxWidth: 900 }}>
        Running a food hall on stitched-together POS is brutal.
      </h2>
      <div style={{ display: 'grid', gap: 0 }}>
        {FCM_PROBLEMS.map((p, i) => (
          <div key={i} style={{ borderTop: `1px solid ${FCM_C.ink15}`,
            display: 'grid',
            gridTemplateColumns: isMobile ? '40px 1fr' : '60px 1.2fr 1fr 1.4fr',
            padding: isMobile ? '24px 0' : '32px 0',
            gap: isMobile ? 14 : 32, alignItems: 'start' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: FCM_C.terra, letterSpacing: '0.08em' }}>
              {String(i + 1).padStart(2, '0')}
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: FCM_C.ink50, letterSpacing: '0.08em',
                textTransform: 'uppercase', marginBottom: 6 }}>The pain</div>
              <div style={{ fontSize: isMobile ? 16 : 18, fontWeight: 700, color: FCM_C.ink, letterSpacing: '-0.01em', lineHeight: 1.35,
                marginBottom: isMobile ? 14 : 0 }}>
                {p.pain}
              </div>
              {isMobile && (
                <>
                  <div style={{ fontSize: 11, fontWeight: 700, color: FCM_C.ink50, letterSpacing: '0.08em',
                    textTransform: 'uppercase', marginBottom: 4, marginTop: 8 }}>What it costs</div>
                  <div style={{ fontSize: 14, color: FCM_C.ink70, lineHeight: 1.55, marginBottom: 12 }}>
                    {p.consequence}
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: FCM_C.terra, letterSpacing: '0.08em',
                    textTransform: 'uppercase', marginBottom: 4 }}>How FCM fixes it</div>
                  <div style={{ fontSize: 14, color: FCM_C.ink, lineHeight: 1.55 }}>
                    {p.solution}
                  </div>
                </>
              )}
            </div>
            {!isMobile && (
              <>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: FCM_C.ink50, letterSpacing: '0.08em',
                    textTransform: 'uppercase', marginBottom: 6 }}>What it costs</div>
                  <div style={{ fontSize: 14, color: FCM_C.ink70, lineHeight: 1.55 }}>
                    {p.consequence}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: FCM_C.terra, letterSpacing: '0.08em',
                    textTransform: 'uppercase', marginBottom: 6 }}>How FCM fixes it</div>
                  <div style={{ fontSize: 14, color: FCM_C.ink, lineHeight: 1.55 }}>
                    {p.solution}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
        <div style={{ borderTop: `1px solid ${FCM_C.ink15}` }}></div>
      </div>
    </section>
  );
}

function FCMModuleGallery() {
  const isMobile = useIsMobile();
  return (
    <section id="modules" style={{ background: FCM_C.surface, padding: isMobile ? '56px 20px' : '96px 32px',
      borderTop: `1px solid ${FCM_C.ink08}`, borderBottom: `1px solid ${FCM_C.ink08}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: FCM_C.terra, marginBottom: 16 }}>
          The eight modules
        </div>
        <h2 style={{ fontSize: isMobile ? 'clamp(28px, 8vw, 38px)' : 'clamp(36px, 4.5vw, 56px)', lineHeight: 1.05,
          letterSpacing: '-0.025em', fontWeight: 700, margin: isMobile ? '0 0 36px' : '0 0 64px', color: FCM_C.ink, maxWidth: 900 }}>
          Every screen your food hall needs.
        </h2>

        {/* All 8 modules — every screen is a real product screenshot */}
        <ModuleRow flip={false} m={FCM_MODULES[0]} mockup={<FCM_MOCKUPS.CustomerOrder />} />
        <ModuleRow flip={true}  m={FCM_MODULES[1]} mockup={<FCM_MOCKUPS.VendorPOS />} />
        <ModuleRow flip={false} m={FCM_MODULES[2]} mockup={<FCM_MOCKUPS.CentralBoard />} />
        <ModuleRow flip={true}  m={FCM_MODULES[3]} mockup={<FCM_MOCKUPS.VendorTV />} />
        <ModuleRow flip={false} m={FCM_MODULES[4]} mockup={<FCM_MOCKUPS.DisplaysConfig />} />
        <ModuleRow flip={true}  m={FCM_MODULES[5]} mockup={<FCM_MOCKUPS.MarketingCampaign />} />
        <ModuleRow flip={false} m={FCM_MODULES[6]} mockup={<FCM_MOCKUPS.FinanceSettlement />} />
        <ModuleRow flip={true}  m={FCM_MODULES[7]} mockup={<FCM_MOCKUPS.SystemConfig />} last />
      </div>
    </section>
  );
}

function ModuleRow({ m, mockup, flip, last }) {
  const isMobile = useIsMobile();
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr',
      gap: isMobile ? 28 : 80, alignItems: 'center',
      padding: isMobile ? '36px 0' : '64px 0',
      borderBottom: last ? 'none' : `1px solid ${FCM_C.ink08}`,
      direction: isMobile ? 'ltr' : (flip ? 'rtl' : 'ltr'),
    }}>
      <div style={{ direction: 'ltr' }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: FCM_C.terra, letterSpacing: '0.14em',
          textTransform: 'uppercase', marginBottom: 12 }}>
          {m.label}
        </div>
        <h3 style={{ fontSize: isMobile ? 'clamp(22px, 6vw, 28px)' : 'clamp(28px, 3vw, 40px)', lineHeight: 1.1,
          letterSpacing: '-0.02em', fontWeight: 700, margin: '0 0 14px', color: FCM_C.ink }}>
          {m.title}
        </h3>
        <p style={{ fontSize: isMobile ? 15 : 16, lineHeight: 1.6, color: FCM_C.ink70, marginBottom: 20 }}>
          {m.description}
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
          {m.bullets.map(b => (
            <li key={b} style={{ fontSize: 14, color: FCM_C.ink, display: 'flex', gap: 10 }}>
              <span style={{ color: FCM_C.terra, fontWeight: 700 }}>→</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ direction: 'ltr', overflow: isMobile ? 'auto' : 'visible' }}>{mockup}</div>
    </div>
  );
}

function FCMSettlementMath() {
  const isMobile = useIsMobile();
  const t = FCM_DEMO_TOTALS;
  return (
    <section style={{ background: FCM_C.ink, color: 'white', padding: isMobile ? '56px 20px' : '96px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: FCM_C.blush, marginBottom: 16 }}>
          Settlement math
        </div>
        <h2 style={{ fontSize: isMobile ? 'clamp(28px, 8vw, 38px)' : 'clamp(36px, 4.5vw, 64px)', lineHeight: 1.05,
          letterSpacing: '-0.025em', fontWeight: 700, margin: '0 0 20px', maxWidth: 1000 }}>
          Balanced. Every dollar accounted for.
        </h2>
        <p style={{ fontSize: isMobile ? 15 : 18, lineHeight: 1.55, color: 'rgba(255,255,255,0.7)', maxWidth: 740, marginBottom: isMobile ? 36 : 56 }}>
          End-of-day reconciliation that took your CPA hours now takes one screen.
          Card fees, platform fees, recovery, tax routing, vendor net — computed automatically per order.
          A green &ldquo;Balanced&rdquo; banner means the books are closed.
        </p>

        <div style={{ display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)',
          gap: isMobile ? 10 : 16, marginBottom: 24 }}>
          {[
            ['Gross', `$${t.gross.toFixed(2)}`, `${t.orders} orders`],
            ['Refunds', `$${t.refunds.toFixed(2)}`, '0 cancelled'],
            ['Tips', `$${t.tips.toFixed(2)}`, 'pass-through'],
            ['Vendor payout', `$${t.vendorPayout.toFixed(2)}`, 'all 13 vendors'],
            ['Operator net', `$${t.operatorNet.toFixed(2)}`, 'after fees'],
          ].map(([l, v, s]) => (
            <div key={l} style={{ background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: isMobile ? 14 : 18 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.55)',
                letterSpacing: '0.06em', textTransform: 'uppercase' }}>{l}</div>
              <div style={{ fontSize: isMobile ? 18 : 22, fontWeight: 800, letterSpacing: '-0.02em', marginTop: 6 }}>{v}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{s}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(31, 110, 77, 0.2)', border: '1px solid rgba(31, 110, 77, 0.5)',
          borderRadius: 12, padding: isMobile ? '12px 14px' : '14px 20px', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <div style={{ width: 24, height: 24, borderRadius: '50%', background: FCM_C.palm,
            color: 'white', fontSize: 14, display: 'grid', placeItems: 'center', fontWeight: 700, flexShrink: 0 }}>✓</div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700 }}>Balanced — money is fully accounted for</div>
            <div style={{ fontSize: isMobile ? 11 : 12, color: 'rgba(255,255,255,0.6)', marginTop: 2, lineHeight: 1.5 }}>
              Vendors $2,217.32 · Operator $71.68 · Card→Clover $80.84 · Recovery $80.84 · Tax→State $108.32
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FCMTechStack() {
  const isMobile = useIsMobile();
  const stack = [
    { label: 'Hardware', items: ['Clover Station', 'Clover Mini', 'Clover Flex', 'Pickup TVs (1080p+)', 'Counter portrait TVs'] },
    { label: 'Software', items: ['Multi-vendor POS', 'Backoffice operator panel', 'Central Board renderer', 'Vendor counter app'] },
    { label: 'Integrations', items: ['Clover merchant services', 'Clover App Market — submission in progress', 'Square integration — in progress', 'Zorder native partner', 'SNPD card reader', 'Clover inventory sync'] },
    { label: 'Languages', items: ['English', '한국어 (Korean)', '日本語 (Japanese)'] },
  ];
  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '56px 20px' : '96px 32px' }}>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em',
        textTransform: 'uppercase', color: FCM_C.ink50, marginBottom: 16 }}>
        Under the hood
      </div>
      <h2 style={{ fontSize: isMobile ? 'clamp(26px, 7vw, 34px)' : 'clamp(32px, 4vw, 48px)', lineHeight: 1.05,
        letterSpacing: '-0.025em', fontWeight: 700, margin: isMobile ? '0 0 28px' : '0 0 48px', color: FCM_C.ink, maxWidth: 800 }}>
        Hawaii-built on standards that actually work.
      </h2>
      <div style={{ display: 'grid',
        gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
        gap: isMobile ? 18 : 24 }}>
        {stack.map(s => (
          <div key={s.label}>
            <div style={{ fontSize: 13, fontWeight: 700, color: FCM_C.terra, letterSpacing: '0.08em',
              textTransform: 'uppercase', marginBottom: 14, paddingBottom: 12,
              borderBottom: `1px solid ${FCM_C.ink15}` }}>
              {s.label}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
              {s.items.map(i => (
                <li key={i} style={{ fontSize: 14, color: FCM_C.ink, lineHeight: 1.4 }}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function FCMContactCTA() {
  const isMobile = useIsMobile();
  return (
    <section id="contact" style={{
      background: `linear-gradient(135deg, ${FCM_C.terra}, ${FCM_C.terraDeep})`,
      color: 'white', padding: isMobile ? '72px 20px' : '120px 32px',
      backgroundImage: `linear-gradient(135deg, ${FCM_C.terra}, ${FCM_C.terraDeep}), ${FCM_PLUMERIA_BG}`,
      backgroundBlendMode: 'normal',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>
          Build your food hall
        </div>
        <h2 style={{ fontSize: isMobile ? 'clamp(30px, 9vw, 42px)' : 'clamp(40px, 5.5vw, 80px)', lineHeight: 1.0,
          letterSpacing: '-0.03em', fontWeight: 700, margin: '0 0 20px' }}>
          See Food Court Master.<br/>Then build yours.
        </h2>
        <p style={{ fontSize: isMobile ? 15 : 18, lineHeight: 1.55, color: 'rgba(255,255,255,0.8)',
          maxWidth: 640, margin: isMobile ? '0 auto 28px' : '0 auto 40px' }}>
          We&rsquo;ll walk you through the full Food Court Master demo live. Bring your floor plan, your vendor mix,
          and your existing processor statement — we&rsquo;ll come back with a real quote.
        </p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:info@alohasmartsystem.com" style={{ background: 'white', color: FCM_C.terraDeep,
            padding: isMobile ? '14px 24px' : '16px 32px', borderRadius: 999, fontWeight: 700, fontSize: isMobile ? 14 : 15, whiteSpace: 'nowrap' }}>
            Book a live walkthrough →
          </a>
          <a href="../index.html#products" style={{ background: 'transparent', color: 'white',
            border: '1.5px solid rgba(255,255,255,0.5)', padding: isMobile ? '12.5px 22px' : '14.5px 30px', borderRadius: 999,
            fontWeight: 600, fontSize: isMobile ? 14 : 15, whiteSpace: 'nowrap' }}>
            See other products
          </a>
        </div>
      </div>
    </section>
  );
}

function FCMFooter() {
  const isMobile = useIsMobile();
  return (
    <footer style={{ background: FCM_C.bg, padding: isMobile ? '32px 20px' : '48px 32px',
      borderTop: `1px solid ${FCM_C.ink08}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, alignItems: 'flex-start',
        fontSize: isMobile ? 12 : 13, color: FCM_C.ink70 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <FCMLogoA size={18} />
          <span>© {new Date().getFullYear()} Musubi Media LLC · Aloha Smart System · Honolulu, HI</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'flex-start' : 'flex-end', gap: 4, fontSize: isMobile ? 11 : 12, color: FCM_C.ink50 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, flexWrap: 'wrap' }}>
            <span>Authorized partner of</span>
            <CardConnectMark scale={0.55} />
            <span>· Clover-authorized · Zorder integration partner</span>
          </div>
          <div>CCS HQ: (877) 682-1117 · ccscardservice.com</div>
        </div>
      </div>
    </footer>
  );
}

function FoodCourtMasterPage() {
  return (
    <div style={{ background: FCM_C.bg, color: FCM_C.ink, fontFamily: '"Inter Tight", system-ui, sans-serif' }}>
      <FCMNav />
      <FCMHero />
      <FCMReferenceBuild />
      <FCMProblems />
      <FCMModuleGallery />
      <FCMSettlementMath />
      <FCMTechStack />
      <FCMContactCTA />
      <FCMFooter />
    </div>
  );
}

window.FoodCourtMasterPage = FoodCourtMasterPage;
