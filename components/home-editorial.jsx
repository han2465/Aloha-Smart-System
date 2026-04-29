/* Musubi Media — Variation B: Editorial / Modular Grid */

const HomeEditorial = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll('.vb .mm-fade');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="vb" style={{ background: '#fff', minHeight: '100%', overflow: 'hidden' }}>
      <nav className="mm-nav">
        <div className="mm-nav-inner">
          <a href="#" className="mm-nav-logo">
            <img src="assets/logo-horizontal.png" alt="Musubi Media" />
          </a>
          <div className="mm-nav-links">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="mm-nav-right">
            <div className="mm-lang"><span className="active">EN</span><span>·</span><span>KR</span></div>
            <a className="mm-btn mm-btn-blue" href="#contact">Start a project</a>
          </div>
        </div>
      </nav>

      {/* HERO — left-aligned editorial */}
      <section style={{ padding: '80px 0 64px', borderBottom: '1px solid var(--line)' }}>
        <div className="mm-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'end' }}>
            <div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 32, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.12em', color: 'var(--slate)' }}>
                <span>EST. 2014</span>
                <span style={{ color: 'var(--line)' }}>/</span>
                <span>MEDIA · APPS · POS</span>
                <span style={{ color: 'var(--line)' }}>/</span>
                <span style={{ color: 'var(--blue-500)' }}>● TAKING NEW WORK</span>
              </div>
              <h1 className="mm-h1" style={{ fontSize: 'clamp(56px, 8vw, 120px)', fontWeight: 500, letterSpacing: '-0.04em' }}>
                Screens,<br/>
                connected.<br/>
                <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--blue-500)' }}>Sales,</span> driven.
              </h1>
            </div>
            <div style={{ paddingBottom: 16 }}>
              <p className="mm-lead" style={{ fontSize: 17, marginBottom: 24 }}>
                Musubi Media is a small studio in the U.S. building POS apps, in-store TV ad systems, and digital marketing for Korean restaurants and lifestyle brands.
              </p>
              <p style={{ fontFamily: 'var(--font-kr)', color: 'var(--slate)', fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                세련된 디자인과 편리한 기능을 하나로 연결한 시스템. POS, TV 광고, SNS 마케팅을 하나의 흐름으로 운영합니다.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
                <a className="mm-btn mm-btn-primary" href="#">Book intro call →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE / running tape */}
      <div style={{ borderBottom: '1px solid var(--line)', padding: '14px 0', overflow: 'hidden', background: 'var(--soft)' }}>
        <div style={{ display: 'flex', gap: 32, whiteSpace: 'nowrap', animation: 'mm-marq 30s linear infinite', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.18em', color: 'var(--slate)' }}>
          {Array.from({length: 3}).flatMap((_, i) => [
            <span key={`a${i}`}>POS × TV ADVERTISING</span>,
            <span key={`b${i}`} style={{color:'var(--blue-500)'}}>●</span>,
            <span key={`c${i}`}>ALOHA SMART INTEGRATION</span>,
            <span key={`d${i}`} style={{color:'var(--blue-500)'}}>●</span>,
            <span key={`e${i}`}>APP DEVELOPMENT</span>,
            <span key={`f${i}`} style={{color:'var(--blue-500)'}}>●</span>,
            <span key={`g${i}`}>INSTAGRAM ADS</span>,
            <span key={`h${i}`} style={{color:'var(--blue-500)'}}>●</span>,
            <span key={`i${i}`}>SOCIAL MEDIA</span>,
            <span key={`j${i}`} style={{color:'var(--blue-500)'}}>●</span>,
          ])}
        </div>
        <style>{`@keyframes mm-marq { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </div>

      {/* WORK / CASE GRID — modular */}
      <section id="services" style={{ padding: '96px 0' }}>
        <div className="mm-container">
          <div className="mm-fade" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
            <div>
              <p className="mm-eyebrow">№ 01 — Services</p>
              <h2 className="mm-h2" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginTop: 12 }}>
                Three things, done well.
              </h2>
            </div>
            <p style={{ color: 'var(--slate)', maxWidth: 320, fontSize: 14, lineHeight: 1.6 }}>
              Hire us for a single piece, or for the whole stack. We're senior, hands-on, and small enough that you'll always know who's working on your account.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gridAutoRows: '1fr', gap: 16 }}>
            {/* Big POS+TV card */}
            <div className="mm-fade" style={{
              gridColumn: 'span 4', gridRow: 'span 2',
              borderRadius: 20, padding: 36,
              background: 'linear-gradient(135deg, #001F3F 0%, #003C75 60%, #0B72B9 100%)',
              color: '#fff', position: 'relative', overflow: 'hidden', minHeight: 420,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', color: 'var(--blue-200)', marginBottom: 12 }}>FLAGSHIP SERVICE</div>
                <h3 className="mm-h2" style={{ color: '#fff', fontSize: 40, maxWidth: 460 }}>POS &amp; TV, talking to each other.</h3>
                <p style={{ color: 'rgba(255,255,255,.7)', maxWidth: 480, fontSize: 16, lineHeight: 1.55, marginTop: 16 }}>
                  Run real-time menu boards and promo loops driven by what's happening at your POS. Push specials when you need them, pull old ads instantly.
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', position: 'relative', zIndex: 2 }}>
                <a className="mm-btn-link" href="#" style={{ color: 'var(--blue-200)' }}>See the system →</a>
                <div style={{ display: 'flex', gap: 8 }}>
                  <span className="mm-pill" style={{ background: 'rgba(255,255,255,.08)', color: '#fff', borderColor: 'rgba(255,255,255,.18)' }}>Aloha</span>
                  <span className="mm-pill" style={{ background: 'rgba(255,255,255,.08)', color: '#fff', borderColor: 'rgba(255,255,255,.18)' }}>Toast</span>
                  <span className="mm-pill" style={{ background: 'rgba(255,255,255,.08)', color: '#fff', borderColor: 'rgba(255,255,255,.18)' }}>Square</span>
                </div>
              </div>
              {/* abstract M shape */}
              <svg style={{ position: 'absolute', right: -40, top: -40, opacity: 0.18 }} width="320" height="320" viewBox="0 0 320 320" fill="none">
                <g transform="rotate(-20 160 160)">
                  <rect x="40" y="60" width="38" height="200" rx="19" fill="#1FA8E0"/>
                  <rect x="100" y="60" width="38" height="200" rx="19" fill="#1FA8E0"/>
                  <rect x="160" y="60" width="38" height="200" rx="19" fill="#1FA8E0"/>
                  <rect x="220" y="60" width="38" height="200" rx="19" fill="#1FA8E0"/>
                </g>
              </svg>
            </div>

            {/* App dev */}
            <div className="mm-fade" style={{
              gridColumn: 'span 2', gridRow: 'span 1',
              borderRadius: 20, padding: 28, background: 'var(--soft)', border: '1px solid var(--line)',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 200,
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', color: 'var(--blue-500)' }}>02 / APPS</div>
              <div>
                <h3 className="mm-h3" style={{ fontSize: 24 }}>App development</h3>
                <p style={{ color: 'var(--slate)', fontSize: 14, marginTop: 8 }}>iOS, Android, web. POS bridges &amp; loyalty programs.</p>
              </div>
            </div>

            {/* Marketing */}
            <div className="mm-fade" style={{
              gridColumn: 'span 2', gridRow: 'span 1',
              borderRadius: 20, padding: 28, background: 'var(--blue-50)', border: '1px solid var(--blue-100)',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 200,
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', color: 'var(--blue-500)' }}>03 / SOCIAL</div>
              <div>
                <h3 className="mm-h3" style={{ fontSize: 24 }}>Instagram &amp; SNS ads</h3>
                <p style={{ color: 'var(--slate)', fontSize: 14, marginTop: 8 }}>Strategy, creative, paid spend, monthly reporting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDEX TABLE — services as a list */}
      <section style={{ padding: '64px 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="mm-container">
          <p className="mm-eyebrow" style={{ marginBottom: 24 }}>№ 02 — Capabilities</p>
          <div>
            {[
              ['POS × TV system', 'Real-time menu boards · happy hour automation · loyalty triggers'],
              ['Aloha Smart integration', 'Order events · ticket bridge · custom dashboards'],
              ['Mobile apps', 'iOS · Android · React Native · ordering & loyalty'],
              ['Instagram management', 'Content calendar · reels · paid ads · creator partnerships'],
              ['Brand & visual', 'Logos · menu design · in-store signage · video'],
              ['Karaoke media', 'Legacy karaoke media licensing & display systems'],
            ].map(([title, desc], i) => (
              <a key={i} href="#" className="mm-fade" style={{
                display: 'grid', gridTemplateColumns: '60px 1fr 2fr 40px',
                alignItems: 'center', padding: '24px 0',
                borderTop: '1px solid var(--line)',
                transition: 'padding .25s ease',
              }}
                onMouseEnter={e => e.currentTarget.style.paddingLeft = '12px'}
                onMouseLeave={e => e.currentTarget.style.paddingLeft = '0'}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--slate-2)' }}>{String(i+1).padStart(2,'0')}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 500, letterSpacing: '-0.02em' }}>{title}</span>
                <span style={{ color: 'var(--slate)', fontSize: 14 }}>{desc}</span>
                <span style={{ color: 'var(--slate-2)', fontSize: 18, justifySelf: 'end' }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: '120px 0' }}>
        <div className="mm-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80 }}>
          <div className="mm-fade">
            <p className="mm-eyebrow">№ 03 — About</p>
            <div style={{ marginTop: 24, padding: 32, background: 'var(--soft)', borderRadius: 16 }}>
              <img src="assets/logo-circle-light.png" alt="" style={{ width: 120, height: 120, marginBottom: 16 }} />
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', color: 'var(--slate)', margin: 0 }}>2014 → 2026</p>
              <p style={{ fontSize: 14, color: 'var(--slate)', marginTop: 8 }}>From karaoke media to full-stack hospitality systems.</p>
            </div>
          </div>
          <div className="mm-fade">
            <h2 className="mm-h2" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 500, letterSpacing: '-0.03em' }}>
              We started by shipping karaoke into Korean bars across the country.
            </h2>
            <p className="mm-lead" style={{ marginTop: 24 }}>
              That meant late-night deploys, finicky hardware, and a lot of conversations with operators about what actually moves the needle in a hospitality business. A decade later, we're applying the same playbook to POS, TV ad systems, and social marketing.
            </p>
            <p className="mm-lead" style={{ marginTop: 16 }}>
              Small team, deep roots, full stack — and we still pick up the phone.
            </p>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ padding: '80px 0', borderTop: '1px solid var(--line)' }}>
        <div className="mm-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
          <div>
            <h2 className="mm-h2" style={{ fontSize: 'clamp(32px, 4vw, 48px)', maxWidth: 720 }}>
              Ready to wire up your screens? <span style={{ color: 'var(--blue-500)' }}>Let's talk.</span>
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <a className="mm-btn mm-btn-primary" href="#">Email us →</a>
            <a className="mm-btn mm-btn-ghost" href="#">Schedule call</a>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  );
};

window.HomeEditorial = HomeEditorial;
