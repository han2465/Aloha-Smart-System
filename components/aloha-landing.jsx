/* Aloha Smart System — Food Court Master landing
   IP-protected: NO settlement tables, NO KDS routing, NO operator dashboards rendered. */

const AlohaSmartLanding = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll('.aloha .mm-fade');
    const io = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="aloha" style={{ background: '#fff', color: '#1F2937', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <style>{`
        .aloha { --teal: #0E7C7B; --teal-deep: #0A5F5E; --sand: #F5E6D3; --sand-deep: #E8D4B8; --char: #1F2937; --line: #E5E7EB; --bg-soft: #F9FAFB; }
        .aloha h1, .aloha h2, .aloha h3, .aloha h4 { color: var(--char); letter-spacing: -0.02em; font-weight: 600; margin: 0; line-height: 1.1; }
        .aloha p { margin: 0; }
        .aloha .a-container { max-width: 1240px; margin: 0 auto; padding: 0 32px; }
        .aloha .a-eyebrow { font-size: 12px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: var(--teal); }
        .aloha .a-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 22px; border-radius: 10px; font-weight: 500; font-size: 15px; transition: transform .15s, background .2s, border-color .2s; border: 1px solid transparent; cursor: pointer; }
        .aloha .a-btn:hover { transform: translateY(-1px); }
        .aloha .a-btn-primary { background: var(--teal); color: #fff; }
        .aloha .a-btn-primary:hover { background: var(--teal-deep); }
        .aloha .a-btn-ghost { background: transparent; color: var(--teal); border-color: var(--teal); }
        .aloha .a-btn-ghost:hover { background: var(--teal); color: #fff; }
        .aloha .a-card { border: 1px solid var(--line); border-radius: 16px; background: #fff; transition: transform .25s, box-shadow .25s; }
        .aloha .a-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(15,30,50,.08); }
        .aloha .a-pill { display: inline-flex; align-items: center; padding: 4px 10px; border-radius: 999px; font-size: 11px; font-weight: 600; letter-spacing: 0.04em; }
        .aloha .a-fade { opacity: 0; transform: translateY(16px); transition: opacity .8s, transform .8s; }
        .aloha .a-fade.in { opacity: 1; transform: none; }
        @keyframes a-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.55; } }
      `}</style>

      {/* NAV */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--line)' }}>
        <div className="a-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #0E7C7B, #14A8A6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 14, letterSpacing: '-0.02em' }}>A</div>
            <span style={{ fontWeight: 600, fontSize: 16, letterSpacing: '-0.01em' }}>Aloha Smart System</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <a href="#products" style={{ fontSize: 14, color: 'var(--char)', textDecoration: 'none', fontWeight: 500 }}>Products</a>
            <a href="#" style={{ fontSize: 14, color: 'var(--char)', textDecoration: 'none', fontWeight: 500 }}>Pricing</a>
            <a href="#" style={{ fontSize: 14, color: 'var(--char)', textDecoration: 'none', fontWeight: 500 }}>About</a>
            <a href="#" style={{ fontSize: 14, color: 'var(--char)', textDecoration: 'none', fontWeight: 500 }}>Contact</a>
            <button className="a-btn a-btn-primary">Book a Demo</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: '88px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div className="a-container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <p className="a-eyebrow">Featured Product</p>
            <h1 style={{ fontSize: 'clamp(48px, 6.5vw, 84px)', marginTop: 16, fontWeight: 600 }}>Food Court Master</h1>
            <p style={{ fontSize: 20, color: '#4B5563', lineHeight: 1.55, marginTop: 24, maxWidth: 540 }}>
              The first multi-vendor POS built for modern food halls. <span style={{ color: 'var(--char)', fontWeight: 500 }}>One tap, every vendor paid.</span> Clover-native, Zorder-integrated, marketplace-ready.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
              <button className="a-btn a-btn-primary">See it live →</button>
              <button className="a-btn a-btn-ghost">Watch 90s demo</button>
            </div>
          </div>
          <div style={{ position: 'relative', minHeight: 540 }}>
            <HeroDeviceCluster />
          </div>
        </div>

        {/* 4-stat row */}
        <div className="a-container" style={{ marginTop: 80 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
            {[
              ['Multi-vendor', 'single tap'],
              ['Auto vendor', 'settlement'],
              ['Clover +', 'Zorder ready'],
              ['Live in', 'Honolulu today'],
            ].map(([a, b], i) => (
              <div key={i} style={{ padding: '28px 24px', borderRight: i < 3 ? '1px solid var(--line)' : 'none' }}>
                <div style={{ fontSize: 11, color: 'var(--teal)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{a}</div>
                <div style={{ fontSize: 22, fontWeight: 600, marginTop: 8, letterSpacing: '-0.01em' }}>{b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS — 3 cards */}
      <section id="products" style={{ padding: '96px 0', background: 'var(--bg-soft)' }}>
        <div className="a-container">
          <div className="a-fade" style={{ textAlign: 'center', marginBottom: 56, maxWidth: 720, marginInline: 'auto' }}>
            <p className="a-eyebrow">Product Lineup</p>
            <h2 style={{ fontSize: 'clamp(36px, 4.5vw, 52px)', marginTop: 12 }}>One platform. Three products.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { badge: 'Flagship', badgeBg: 'var(--teal)', badgeFg: '#fff', name: 'Food Court Master', desc: 'Multi-vendor POS for food halls and food courts.', features: ['Central kiosk + per-vendor counters', 'Pickup order board for guests', 'Clover Online Ordering + DoorDash Drive'] },
              { badge: 'Network', badgeBg: 'var(--sand)', badgeFg: 'var(--char)', name: 'Musubi Display Network', desc: "Hawaii's digital signage + local ad marketplace.", features: ['Plug any screen into the network', 'Mix your content with paid local ads', 'Revenue share for venue owners'] },
              { badge: 'New', badgeBg: '#FFE4D6', badgeFg: '#9A4F1A', name: 'Inventory Master', desc: 'Turn expiring inventory into in-store offers.', features: ['Auto % off as expiry approaches', 'Live shelf display for shoppers', 'Restaurants, bakeries, markets, liquor stores'] },
            ].map((p, i) => (
              <div key={i} className="a-card a-fade" style={{ padding: 32 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
                  <ProductIcon kind={i} />
                  <span className="a-pill" style={{ background: p.badgeBg, color: p.badgeFg }}>{p.badge}</span>
                </div>
                <h3 style={{ fontSize: 24, marginBottom: 8 }}>{p.name}</h3>
                <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.55, marginBottom: 20 }}>{p.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10, paddingTop: 20, borderTop: '1px solid var(--line)' }}>
                  {p.features.map(f => (
                    <li key={f} style={{ fontSize: 14, color: 'var(--char)', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" style={{ flexShrink: 0, marginTop: 2 }}><path d="M3 8L6.5 11.5L13 4" stroke="var(--teal)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: 13, color: '#6B7280', marginTop: 40, fontStyle: 'italic' }}>
            Shared plugin layer — content, ads, and shelf offers can appear on any Aloha display.
          </p>
        </div>
      </section>

      {/* DEVICE MOCKUP GALLERY */}
      <section style={{ padding: '120px 0' }}>
        <div className="a-container">
          <div className="a-fade" style={{ textAlign: 'center', marginBottom: 72, maxWidth: 720, marginInline: 'auto' }}>
            <p className="a-eyebrow">See it on every screen</p>
            <h2 style={{ fontSize: 'clamp(36px, 4.5vw, 52px)', marginTop: 12 }}>Three customer-facing surfaces.<br/>One unified system.</h2>
          </div>

          {/* staggered grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 32, alignItems: 'start' }}>
            <div className="a-fade" style={{ gridColumn: 'span 5' }}>
              <KioskMockup />
              <p style={{ marginTop: 24, fontSize: 14, color: '#4B5563', textAlign: 'center' }}>
                <span style={{ fontWeight: 600, color: 'var(--char)' }}>Central kiosk</span> — one cart across every vendor.
              </p>
            </div>
            <div className="a-fade" style={{ gridColumn: 'span 7', paddingTop: 80 }}>
              <VendorCounterMockup />
              <p style={{ marginTop: 24, fontSize: 14, color: '#4B5563', textAlign: 'center' }}>
                <span style={{ fontWeight: 600, color: 'var(--char)' }}>Vendor counter</span> — works in both staff and customer-tap modes.
              </p>
            </div>
            <div className="a-fade" style={{ gridColumn: '3 / span 8', marginTop: 32 }}>
              <PickupBoardMockup />
              <p style={{ marginTop: 24, fontSize: 14, color: '#4B5563', textAlign: 'center' }}>
                <span style={{ fontWeight: 600, color: 'var(--char)' }}>Pickup board</span> — guests always know where their food is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GATED TEASER ROW */}
      <section style={{ padding: '96px 0', background: 'var(--bg-soft)' }}>
        <div className="a-container">
          <div className="a-fade" style={{ textAlign: 'center', marginBottom: 48, maxWidth: 640, marginInline: 'auto' }}>
            <p className="a-eyebrow">More for operators</p>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', marginTop: 12 }}>The parts of Food Court Master we share privately, under demo.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {[
              { title: 'Kitchen Operations', desc: 'Per-vendor kitchen display with smart order routing. Available in live demo.' },
              { title: 'Operator Settlement', desc: 'Automated multi-vendor payout and reconciliation. Available in live demo.' },
            ].map((t, i) => (
              <div key={i} className="a-card a-fade" style={{ padding: 32, position: 'relative' }}>
                <div style={{ position: 'absolute', top: 24, right: 24, width: 36, height: 36, borderRadius: '50%', background: 'var(--bg-soft)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="#6B7280" strokeWidth="1.4"/>
                    <path d="M5.5 7V4.5a2.5 2.5 0 0 1 5 0V7" stroke="#6B7280" strokeWidth="1.4"/>
                  </svg>
                </div>
                {/* blurred preview pane */}
                <div style={{
                  height: 180, borderRadius: 12, marginBottom: 24,
                  border: '1.5px dashed #CBD5E1',
                  background: 'linear-gradient(135deg, rgba(14,124,123,.08) 0%, rgba(245,230,211,.4) 100%)',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{ position: 'absolute', inset: 0, backdropFilter: 'blur(20px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: '#94A3B8' }}>
                      <svg width="22" height="22" viewBox="0 0 16 16" fill="none">
                        <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="#94A3B8" strokeWidth="1.2"/>
                        <path d="M5.5 7V4.5a2.5 2.5 0 0 1 5 0V7" stroke="#94A3B8" strokeWidth="1.2"/>
                      </svg>
                      <span style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>Available in live demo</span>
                    </div>
                  </div>
                </div>
                <h3 style={{ fontSize: 22, marginBottom: 8 }}>{t.title}</h3>
                <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.55, marginBottom: 24 }}>{t.desc}</p>
                <button className="a-btn a-btn-ghost">Request a walkthrough →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY FOOD COURT MASTER */}
      <section style={{ padding: '120px 0' }}>
        <div className="a-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80, alignItems: 'start' }}>
          <div className="a-fade">
            <p className="a-eyebrow">Why Food Court Master</p>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 44px)', marginTop: 12, marginBottom: 24 }}>Single-merchant POS systems break in food halls.</h2>
            <p style={{ fontSize: 17, color: '#4B5563', lineHeight: 1.6 }}>
              Shared checkout, separate kitchens, separate payouts. Food Court Master is the only platform built from day one for the way modern food halls actually operate — and the only one that handles the operator side at the same time.
            </p>
          </div>
          <div className="a-fade" style={{ display: 'grid', gap: 4 }}>
            {[
              { title: 'Multi-vendor cart, single tap', desc: 'Guests order from any combination of vendors and pay once.' },
              { title: 'Built-in pickup orchestration', desc: 'Order numbers, ready-board, and notifications out of the box.' },
              { title: 'Marketplace-ready settlement', desc: 'Automated multi-vendor payout (private demo).' },
              { title: 'Configurable for any operator model', desc: 'Single operator, marketplace, independent tenants, or ghost kitchen.' },
            ].map((f, i) => (
              <div key={i} style={{ display: 'flex', gap: 20, padding: '20px 0', borderBottom: i < 3 ? '1px solid var(--line)' : 'none' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(14,124,123,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <FeatureIcon kind={i} />
                </div>
                <div>
                  <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>{f.title}</h4>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.5 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOVER TRUST BAND */}
      <section style={{ padding: '56px 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="a-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, flexWrap: 'wrap', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ padding: '8px 16px', background: '#0F1F36', color: '#fff', borderRadius: 6, fontWeight: 700, fontSize: 18, letterSpacing: '-0.02em', fontFamily: 'Inter' }}>clover</div>
          </div>
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontSize: 15, fontWeight: 600 }}>Certified Clover developer · Zorder integration partner.</p>
            <p style={{ fontSize: 14, color: '#6B7280', marginTop: 2 }}>Works with Clover Mini, Compact, Station Solo, and Flex. Connects with Zorder table-ordering. Available soon on the Clover App Market.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '96px 0', background: 'var(--teal)', color: '#fff', textAlign: 'center' }}>
        <div className="a-container">
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', color: '#fff', marginBottom: 16 }}>See Food Court Master live in Honolulu.</h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,.85)', maxWidth: 620, margin: '0 auto 36px' }}>
            Visit Midtown Eats, Keeaumoku — running on Food Court Master today.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <button className="a-btn" style={{ background: '#fff', color: 'var(--teal)' }}>Book a Demo →</button>
            <button className="a-btn" style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.4)' }}>Get the deck</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '64px 0 32px', background: '#0F1419', color: 'rgba(255,255,255,.7)' }}>
        <div className="a-container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 48, paddingBottom: 40, borderBottom: '1px solid rgba(255,255,255,.08)' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #0E7C7B, #14A8A6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>A</div>
                <span style={{ color: '#fff', fontWeight: 600 }}>Aloha Smart System</span>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.6 }}>Made in Honolulu 🌺</p>
            </div>
            {[
              ['Products', ['Food Court Master', 'Musubi Display Network', 'Inventory Master']],
              ['Company', ['About', 'Careers', 'Press']],
              ['Legal', ['Privacy', 'Terms', 'Security']],
              ['Contact', ['Book a Demo', 'Support', 'Partners']],
            ].map(([h, items]) => (
              <div key={h}>
                <h4 style={{ fontSize: 11, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>{h}</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
                  {items.map(i => <li key={i} style={{ fontSize: 13 }}><a href="#" style={{ color: 'rgba(255,255,255,.6)', textDecoration: 'none' }}>{i}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ paddingTop: 24, fontSize: 12, color: 'rgba(255,255,255,.4)' }}>
            © 2026 Aloha Smart System. Clover is a trademark of Clover Network, LLC.
          </div>
        </div>
      </footer>
    </div>
  );
};

window.AlohaSmartLanding = AlohaSmartLanding;
