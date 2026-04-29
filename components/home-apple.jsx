/* Musubi Media — Home page Variation A (Apple-style minimal) */

const HomeAppleStyle = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll('.va .mm-fade');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="va" style={{ background: '#fff', minHeight: '100%', overflow: 'hidden' }}>
      {/* NAV */}
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
            <a className="mm-btn mm-btn-ghost" href="index.html" style={{padding:'8px 14px', fontSize:13}}>Aloha Smart ↗</a>
            <a className="mm-btn mm-btn-primary" href="#contact">Get started <span>→</span></a>
          </div>
        </div>
      </nav>

      {/* HERO — centered Apple-style */}
      <section style={{ padding: '88px 0 40px', textAlign: 'center', position: 'relative' }}>
        <div className="mm-container">
          <div className="mm-pill" style={{ marginBottom: 28 }}>
            <span className="mm-dot"></span> Now connecting POS · TV · Social
          </div>
          <h1 className="mm-h1" style={{ fontSize: 'clamp(48px, 7vw, 92px)', maxWidth: 1100, margin: '0 auto' }}>
            Marketing &amp; apps,<br/>
            <span style={{ background: 'var(--grad-blue)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              built for hospitality.
            </span>
          </h1>
          <p className="mm-lead" style={{ fontSize: 22, maxWidth: 660, margin: '28px auto 0' }}>
            세련된 디자인과 편리한 기능을 하나로 연결한 시스템.
            인스타그램 광고, 브랜딩, 앱 개발 — 한 스튜디오에서.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 36 }}>
            <a className="mm-btn mm-btn-primary" href="#contact">Book a demo <span>→</span></a>
            <a className="mm-btn mm-btn-ghost" href="#services">See how it works</a>
          </div>
        </div>

        {/* PRODUCT MOCKUP — POS + TV */}
        <div style={{ marginTop: 80, padding: '0 32px' }}>
          <ProductMockup />
        </div>
      </section>

      {/* LOGO ROW */}
      <section style={{ padding: '64px 0 32px' }}>
        <div className="mm-container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 13, color: 'var(--slate-2)', textTransform: 'uppercase', letterSpacing: '0.18em', fontFamily: 'var(--font-mono)', margin: '0 0 28px' }}>
            Trusted by Korean restaurants &amp; bars across the U.S.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 56, flexWrap: 'wrap', opacity: 0.55 }}>
            {['ALOHA', 'TOAST', 'SQUARE', 'CLOVER', 'META', 'INSTAGRAM'].map(b => (
              <span key={b} style={{ fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '0.08em', color: 'var(--slate)', fontSize: 18 }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* THREE-UP FEATURES */}
      <section id="services" style={{ padding: '120px 0 80px' }}>
        <div className="mm-container">
          <div className="mm-fade" style={{ textAlign: 'center', marginBottom: 72 }}>
            <p className="mm-eyebrow">What we do</p>
            <h2 className="mm-h2" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginTop: 12, maxWidth: 720, marginInline: 'auto' }}>
              One studio. Three connected systems.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid var(--line)' }}>
            {[
              {
                num: '01',
                title: 'Social & Instagram Ads',
                kr: '인스타그램 광고와 SNS 콘텐츠 운영.',
                desc: 'End-to-end campaigns — strategy, creative, paid spend, and reporting — tuned for local restaurants and lifestyle brands in your community.',
                tags: ['Meta ads', 'Content production', 'Monthly retainer']
              },
              {
                num: '02',
                title: 'App Development',
                kr: '한인 비즈니스를 위한 맞춤 앱 개발.',
                desc: 'Native and web apps for ordering, loyalty, reservations, and operations. Built by a team that\'s been shipping consumer apps since 2014.',
                tags: ['iOS · Android', 'Web apps', 'Custom dashboards']
              },
              {
                num: '03',
                title: 'Branding & Video',
                kr: '브랜딩과 영상 콘텐츠 제작.',
                desc: 'Logos, menu design, photography, and short-form video. The visual layer that makes a small business feel established and trustworthy.',
                tags: ['Identity systems', 'Photo + video', 'In-store signage']
              },
            ].map((f, i) => (
              <div key={i} className="mm-fade" style={{
                padding: '48px 32px 40px',
                borderRight: i < 2 ? '1px solid var(--line)' : 'none',
                borderBottom: '1px solid var(--line)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--blue-500)', letterSpacing: '0.1em' }}>{f.num}</span>
                  <ServiceIcon kind={i} />
                </div>
                <h3 className="mm-h3" style={{ fontSize: 26, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: 'var(--slate-2)', fontSize: 14, fontFamily: 'var(--font-kr)', margin: '0 0 16px' }}>{f.kr}</p>
                <p style={{ color: 'var(--slate)', fontSize: 15, lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 0', display: 'grid', gap: 8 }}>
                  {f.tags.map(t => (
                    <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--ink-2)' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7L6 10.5L11.5 3.5" stroke="var(--blue-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER — Aloha Smart System */}
      <section style={{ padding: '80px 0', background: 'var(--soft)' }}>
        <div className="mm-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div className="mm-fade">
            <p className="mm-eyebrow">Partner</p>
            <h2 className="mm-h2" style={{ fontSize: 'clamp(32px, 4vw, 48px)', margin: '12px 0 20px' }}>
              Need POS &amp; payments? Meet Aloha Smart System.
            </h2>
            <p className="mm-lead" style={{ fontSize: 18 }}>
              Our sister company handles merchant services, Clover POS, and Zorder table-ordering integrations for restaurants in Hawaii and beyond. When clients need both the marketing layer and the hardware layer, we build it together.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 40 }}>
              {[
                { stat: 'Clover', label: 'Certified developer' },
                { stat: 'Zorder', label: 'Table-order integration' },
                { stat: 'Merchant', label: 'Payment processing' },
                { stat: 'Honolulu', label: 'Live in Hawaii' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--blue-500)' }}>{s.stat}</div>
                  <div style={{ fontSize: 13, color: 'var(--slate)', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <a className="mm-btn-link" href="index.html" style={{ marginTop: 28, display: 'inline-flex' }}>
              Visit Aloha Smart System <span>→</span>
            </a>
          </div>
          <div className="mm-fade">
            <PosTvScene />
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section id="about" style={{ padding: '120px 0' }}>
        <div className="mm-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'center' }}>
          <div className="mm-fade">
            <img src="assets/logo-circle-light.png" alt="" style={{ width: 200, height: 200, marginBottom: 24 }} />
            <p className="mm-eyebrow">Since 2014</p>
          </div>
          <div className="mm-fade">
            <h2 className="mm-h2" style={{ fontSize: 'clamp(32px, 4vw, 44px)', marginBottom: 24 }}>
              We started as a karaoke player company.
            </h2>
            <p className="mm-lead" style={{ marginBottom: 16 }}>
              A decade ago, Musubi built one of the first karaoke players for Korean bars in the United States. We learned what it takes to ship reliable software into a busy hospitality business — at 11pm on a Saturday, with the kitchen ticket printer screaming.
            </p>
            <p className="mm-lead">
              Today we use that same operational discipline to build POS apps, TV ad systems, and digital marketing for the restaurants and brands we grew up serving.
            </p>
            <a className="mm-btn-link" href="#" style={{ marginTop: 24, display: 'inline-flex' }}>Read our story <span>→</span></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0' }}>
        <div className="mm-container">
          <div style={{
            background: 'var(--ink)',
            color: '#fff',
            borderRadius: 'var(--radius-xl)',
            padding: '72px 56px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              right: -120, top: -120, width: 400, height: 400,
              background: 'radial-gradient(circle, rgba(31,168,224,.5) 0%, transparent 70%)',
            }}></div>
            <div style={{ position: 'relative', maxWidth: 720 }}>
              <p className="mm-eyebrow" style={{ color: 'var(--blue-200)' }}>Get in touch</p>
              <h2 className="mm-h2" style={{ fontSize: 'clamp(36px, 5vw, 56px)', color: '#fff', margin: '12px 0 20px' }}>
                Let's wire up your screens.
              </h2>
              <p style={{ fontSize: 18, color: 'rgba(255,255,255,.75)', lineHeight: 1.5, marginBottom: 32 }}>
                Tell us about your business — restaurant, bar, or brand — and we'll send back a 2-page proposal within 48 hours.
              </p>
              <div style={{ display: 'flex', gap: 12 }}>
                <a className="mm-btn mm-btn-blue" href="#">Start a project <span>→</span></a>
                <a className="mm-btn" href="#" style={{ color: '#fff', border: '1px solid rgba(255,255,255,.25)' }}>info@musubimedia.net</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  );
};

window.HomeAppleStyle = HomeAppleStyle;
