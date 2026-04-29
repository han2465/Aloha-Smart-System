/* Musubi Media — Variation C: Tech / Dark Premium */

const HomeTechDark = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll('.vc .mm-fade');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="vc" style={{ background: '#0A0E14', color: '#fff', minHeight: '100%', overflow: 'hidden' }}>
      <style>{`
        .vc .mm-nav { background: rgba(10,14,20,.75); border-bottom-color: rgba(255,255,255,.06); }
        .vc .mm-nav-links a { color: rgba(255,255,255,.75); }
        .vc .mm-nav-links a:hover { color: #fff; }
        .vc .mm-lang { background: rgba(255,255,255,.06); border-color: rgba(255,255,255,.1); color: rgba(255,255,255,.6); }
        .vc .mm-lang span.active { color: #fff; }
        .vc .mm-btn-primary { background: #fff; color: #0A0E14; }
        .vc .mm-btn-primary:hover { background: var(--blue-200); color: #0A0E14; }
        .vc .mm-btn-ghost { color: #fff; border-color: rgba(255,255,255,.18); }
        .vc .mm-btn-ghost:hover { border-color: #fff; }
        .vc .mm-eyebrow { color: var(--blue-300); }
        .vc .mm-pill { background: rgba(255,255,255,.06); border-color: rgba(255,255,255,.12); color: rgba(255,255,255,.7); }
        .vc .mm-footer { background: #06090E; border-top-color: rgba(255,255,255,.06); }
        .vc .mm-footer h4 { color: #fff; }
        .vc .mm-footer ul a { color: rgba(255,255,255,.55); }
        .vc .mm-footer ul a:hover { color: #fff; }
        .vc .mm-footer-brand p { color: rgba(255,255,255,.55); }
        .vc .mm-footer-grid { border-bottom-color: rgba(255,255,255,.06); }
        .vc .mm-footer-bottom { color: rgba(255,255,255,.4); }
        .vc .mm-h1, .vc .mm-h2, .vc .mm-h3 { color: #fff; }
        .vc .mm-lead { color: rgba(255,255,255,.65); }
      `}</style>

      <nav className="mm-nav">
        <div className="mm-nav-inner">
          <a href="#" className="mm-nav-logo" style={{ color: '#fff' }}>
            <img src="assets/logo-stacked-dark.png" alt="Musubi Media" style={{ height: 32, filter: 'brightness(1.1)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, letterSpacing: '-0.01em' }}>Musubi.</span>
          </a>
          <div className="mm-nav-links">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="mm-nav-right">
            <div className="mm-lang"><span className="active">EN</span><span>·</span><span>KR</span></div>
            <a className="mm-btn mm-btn-primary" href="#contact">Get started ↗</a>
          </div>
        </div>
      </nav>

      {/* HERO — full-bleed dark with glow + grid */}
      <section style={{ padding: '120px 0 100px', position: 'relative', overflow: 'hidden' }}>
        {/* grid bg */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center top, #000 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center top, #000 30%, transparent 75%)',
        }}></div>
        {/* glow */}
        <div style={{
          position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
          width: 1000, height: 700, pointerEvents: 'none',
          background: 'radial-gradient(ellipse, rgba(31,168,224,.35) 0%, rgba(11,114,185,.15) 30%, transparent 60%)',
          filter: 'blur(40px)',
        }}></div>

        <div className="mm-container" style={{ position: 'relative', textAlign: 'center' }}>
          <div className="mm-pill" style={{ marginBottom: 32 }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--blue-300)', boxShadow: '0 0 8px var(--blue-300)' }}></span>
            v.2026 — POS · TV · Social, unified
          </div>
          <h1 className="mm-h1" style={{ fontSize: 'clamp(56px, 8.5vw, 132px)', fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1 }}>
            <span style={{ color: 'rgba(255,255,255,.4)' }}>No-noise.</span><br/>
            Hospitality<br/>
            <span style={{ background: 'linear-gradient(120deg, #1FA8E0 0%, #C7E7F8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontStyle: 'italic', fontWeight: 400 }}>
              media studio.
            </span>
          </h1>
          <p className="mm-lead" style={{ fontSize: 19, maxWidth: 620, margin: '32px auto 0', color: 'rgba(255,255,255,.6)' }}>
            We build the POS apps, TV ad systems, and social campaigns that Korean restaurants and lifestyle brands actually want to run.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 36 }}>
            <a className="mm-btn mm-btn-primary" href="#contact">Book intro call ↗</a>
            <a className="mm-btn mm-btn-ghost" href="#services">Explore services</a>
          </div>

          {/* metrics row */}
          <div style={{
            marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            border: '1px solid rgba(255,255,255,.08)', borderRadius: 16,
            background: 'rgba(255,255,255,.02)', backdropFilter: 'blur(8px)',
          }}>
            {[
              ['12+', 'restaurants live'],
              ['2014', 'shipping since'],
              ['<200ms', 'POS → TV sync'],
              ['24/7', 'managed displays'],
            ].map(([k, v], i) => (
              <div key={i} style={{ padding: '32px 24px', borderRight: i < 3 ? '1px solid rgba(255,255,255,.08)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 600, letterSpacing: '-0.02em', color: '#fff' }}>{k}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-mono)', marginTop: 6 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT VIEWER — TV mockup hero */}
      <section style={{ padding: '40px 0 120px' }}>
        <div className="mm-container">
          <div className="mm-fade" style={{
            background: 'linear-gradient(180deg, rgba(31,168,224,.08) 0%, rgba(11,114,185,.04) 100%)',
            border: '1px solid rgba(255,255,255,.08)',
            borderRadius: 24, padding: 48,
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 40, alignItems: 'center' }}>
              <div style={{ background: '#000', borderRadius: 12, padding: 8, boxShadow: '0 30px 80px rgba(0,0,0,.5), 0 0 60px rgba(31,168,224,.2)' }}>
                <div style={{ aspectRatio: '16 / 9', borderRadius: 6, position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #001F3F 0%, #003C75 50%, #1FA8E0 100%)' }}>
                  <TvAdContent />
                </div>
              </div>
              <div>
                <p className="mm-eyebrow">FLAGSHIP / 01</p>
                <h2 className="mm-h2" style={{ fontSize: 36, marginTop: 12, marginBottom: 16 }}>POS-driven TV advertising.</h2>
                <p style={{ color: 'rgba(255,255,255,.65)', fontSize: 15, lineHeight: 1.6, marginBottom: 24 }}>
                  Your menu boards, happy hour spots, and promo loops update themselves — driven by what's happening at your registers in real time.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
                  {['Aloha Smart System bridge', 'Push specials in 3 minutes', 'Schedule by daypart or table'].map(t => (
                    <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: 'rgba(255,255,255,.85)' }}>
                      <span style={{ width: 16, height: 16, borderRadius: 999, background: 'var(--blue-500)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5L4 7L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
                <a className="mm-btn-link" href="#" style={{ color: 'var(--blue-300)', marginTop: 28 }}>Read the case study →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES STACK */}
      <section id="services" style={{ padding: '80px 0' }}>
        <div className="mm-container">
          <div className="mm-fade" style={{ marginBottom: 64 }}>
            <p className="mm-eyebrow">/ 02 — SERVICES</p>
            <h2 className="mm-h2" style={{ fontSize: 'clamp(40px, 6vw, 72px)', maxWidth: 900, marginTop: 16, fontWeight: 500, letterSpacing: '-0.03em' }}>
              One studio. <span style={{ color: 'rgba(255,255,255,.4)' }}>Everything you need to</span> run modern hospitality media.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              {
                tag: '01 / SYSTEMS',
                title: 'POS × TV Ads',
                desc: 'Real-time, in-store ad system tied to your point-of-sale.',
                features: ['Aloha integration', 'Custom playlists', 'Daypart scheduling', 'Loyalty triggers'],
              },
              {
                tag: '02 / SOFTWARE',
                title: 'App development',
                desc: 'iOS, Android, and web apps for ordering, loyalty, and ops.',
                features: ['React Native', 'POS bridges', 'Custom dashboards', 'White-label'],
              },
              {
                tag: '03 / GROWTH',
                title: 'Social & Instagram',
                desc: 'End-to-end campaigns and creative for local brands.',
                features: ['Meta ads', 'Content production', 'Reels & video', 'Monthly retainer'],
              },
            ].map((s, i) => (
              <div key={i} className="mm-fade" style={{
                padding: 28,
                background: 'rgba(255,255,255,.03)',
                border: '1px solid rgba(255,255,255,.08)',
                borderRadius: 16, position: 'relative',
                transition: 'transform .3s ease, border-color .3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(31,168,224,.5)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', color: 'var(--blue-300)', marginBottom: 24 }}>{s.tag}</div>
                <h3 className="mm-h3" style={{ fontSize: 28, color: '#fff', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 14, lineHeight: 1.55, margin: 0 }}>{s.desc}</p>
                <div style={{ height: 1, background: 'rgba(255,255,255,.08)', margin: '24px 0 16px' }}></div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
                  {s.features.map(f => (
                    <li key={f} style={{ fontSize: 13, color: 'rgba(255,255,255,.7)', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ color: 'var(--blue-300)' }}>+</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT — heritage */}
      <section id="about" style={{ padding: '120px 0' }}>
        <div className="mm-container">
          <div className="mm-fade" style={{
            display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'center',
            padding: 56, borderRadius: 20,
            background: 'linear-gradient(135deg, rgba(31,168,224,.08), rgba(11,114,185,.02))',
            border: '1px solid rgba(255,255,255,.08)',
          }}>
            <div>
              <img src="assets/logo-circle-dark.png" alt="" style={{ width: 220, height: 220, borderRadius: '50%' }} />
            </div>
            <div>
              <p className="mm-eyebrow">/ 03 — ABOUT</p>
              <h2 className="mm-h2" style={{ fontSize: 'clamp(32px, 4vw, 48px)', marginTop: 12, marginBottom: 20, fontWeight: 500 }}>
                A decade of shipping into Korean hospitality.
              </h2>
              <p className="mm-lead" style={{ marginBottom: 16 }}>
                Musubi started in 2014 as a karaoke player company — wiring up Korean bars across the United States. We learned how to ship reliable software into late-night, ticket-printer-screaming, coffee-spilled-on-the-tablet hospitality businesses.
              </p>
              <p className="mm-lead">
                Today we use that operational discipline for POS apps, TV ad systems, and digital marketing.
              </p>
              <a className="mm-btn-link" href="#" style={{ color: 'var(--blue-300)', marginTop: 24 }}>Our story →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0 120px' }}>
        <div className="mm-container" style={{ textAlign: 'center' }}>
          <p className="mm-eyebrow">/ 04 — START A PROJECT</p>
          <h2 className="mm-h2" style={{ fontSize: 'clamp(48px, 7vw, 96px)', marginTop: 16, fontWeight: 500, letterSpacing: '-0.03em' }}>
            Let's wire up<br/>
            <span style={{ color: 'rgba(255,255,255,.4)' }}>your screens.</span>
          </h2>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 36 }}>
            <a className="mm-btn mm-btn-primary" href="#">info@musubimedia.net ↗</a>
            <a className="mm-btn mm-btn-ghost" href="#">Schedule a call</a>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  );
};

window.HomeTechDark = HomeTechDark;
