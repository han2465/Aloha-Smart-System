// About page

function ABLogoA({ size = 28 }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'baseline',
      fontWeight: 800, fontSize: size, letterSpacing: '-0.04em', color: AB_C.ink,
    }}>
      A<span style={{
        width: size * 0.18, height: size * 0.18, borderRadius: 999,
        background: AB_C.crimson, marginLeft: 2, alignSelf: 'flex-end', marginBottom: size * 0.08,
      }}></span>
    </span>
  );
}

function ABNav() {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(false);

  // close menu on link click / resize to desktop
  React.useEffect(() => { if (!isMobile) setOpen(false); }, [isMobile]);

  const links = [
    { href: 'index.html#products', label: 'Products' },
    { href: 'index.html#personas', label: 'Industries' },
    { href: 'index.html#processing', label: 'Processing' },
    { href: 'about.html', label: 'About', active: true },
    { href: 'find-your-fit.html', label: 'Find your fit' },
  ];

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(245,239,230,0.94)', backdropFilter: 'saturate(140%) blur(12px)',
      borderBottom: `1px solid ${AB_C.ink10}`,
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        padding: isMobile ? '12px 18px' : '14px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="index.html" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <ABLogoA size={isMobile ? 24 : 28} />
          <div style={{
            fontWeight: 700, fontSize: isMobile ? 14 : 16,
            letterSpacing: '-0.01em', color: AB_C.ink,
          }}>
            Aloha Smart System
          </div>
        </a>

        {!isMobile && (
          <div style={{ display: 'flex', gap: 28, alignItems: 'center', fontSize: 14 }}>
            {links.map(l => (
              <a key={l.href} href={l.href} style={{
                color: l.active ? AB_C.ink : AB_C.ink70,
                fontWeight: l.active ? 600 : 400,
              }}>{l.label}</a>
            ))}
            <a href="#contact" style={{
              background: AB_C.ink, color: 'white', padding: '9px 18px',
              borderRadius: 999, fontWeight: 700, whiteSpace: 'nowrap',
            }}>Get in touch</a>
          </div>
        )}

        {isMobile && (
          <button
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            style={{
              background: 'transparent', border: 'none', padding: 8, margin: -8,
              display: 'flex', flexDirection: 'column', gap: 5,
              width: 40, height: 40, alignItems: 'center', justifyContent: 'center',
            }}>
            <span style={{
              width: 22, height: 2, background: AB_C.ink,
              transition: 'transform 0.2s, opacity 0.2s',
              transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
            }}></span>
            <span style={{
              width: 22, height: 2, background: AB_C.ink,
              transition: 'opacity 0.2s',
              opacity: open ? 0 : 1,
            }}></span>
            <span style={{
              width: 22, height: 2, background: AB_C.ink,
              transition: 'transform 0.2s',
              transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}></span>
          </button>
        )}
      </div>

      {/* Mobile dropdown */}
      {isMobile && (
        <div style={{
          maxHeight: open ? 480 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.28s ease',
          background: AB_C.bg,
          borderTop: open ? `1px solid ${AB_C.ink10}` : 'none',
        }}>
          <div style={{
            padding: '12px 18px 20px',
            display: 'flex', flexDirection: 'column', gap: 4,
          }}>
            {links.map(l => (
              <a key={l.href} href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  color: l.active ? AB_C.ink : AB_C.ink70,
                  fontWeight: l.active ? 700 : 500,
                  fontSize: 17,
                  padding: '14px 4px',
                  borderBottom: `1px solid ${AB_C.ink08 || 'rgba(14,26,36,0.06)'}`,
                }}>{l.label}</a>
            ))}
            <a href="#contact"
              onClick={() => setOpen(false)}
              style={{
                background: AB_C.ink, color: 'white', padding: '14px 18px',
                borderRadius: 12, fontWeight: 700, fontSize: 15,
                textAlign: 'center', marginTop: 12,
              }}>Get in touch</a>
          </div>
        </div>
      )}
    </nav>
  );
}

function ABHero() {
  const isMobile = useIsMobile();
  return (
    <section style={{
      maxWidth: 1280, margin: '0 auto',
      padding: isMobile ? '40px 20px 32px' : '80px 32px 64px',
    }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '6px 14px', background: AB_C.ink, color: 'white',
        borderRadius: 999, fontSize: 11, fontWeight: 700,
        letterSpacing: '0.1em', textTransform: 'uppercase',
      }}>
        <span style={{ width: 6, height: 6, borderRadius: 999, background: AB_C.gold }}></span>
        About us &middot; Honolulu, Hawaii
      </div>

      <h1 style={{
        fontSize: isMobile ? 'clamp(40px, 11vw, 56px)' : 'clamp(48px, 7vw, 96px)',
        lineHeight: 0.96, letterSpacing: '-0.035em',
        fontWeight: 700, margin: '20px 0 22px', color: AB_C.ink, maxWidth: 1100,
      }}>
        Built by operators,<br/>
        <span style={{ color: AB_C.tealDeep }}>for operators.</span>
      </h1>

      <p style={{
        fontSize: isMobile ? 17 : 'clamp(18px, 1.6vw, 24px)',
        lineHeight: 1.5,
        color: AB_C.ink70, maxWidth: 760, margin: 0,
      }}>
        We don't write software for restaurants from a corporate office. We run two of them ourselves.
        Aloha Smart System and Musubi Media are sister companies built around the same belief —
        that small-business owners in Hawaii deserve tools that match the way they actually work.
      </p>
    </section>
  );
}

function ABStory() {
  const isMobile = useIsMobile();
  return (
    <section style={{ background: AB_C.bgAlt, padding: isMobile ? '56px 20px' : '96px 32px' }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1.3fr) minmax(0, 1fr)',
        gap: isMobile ? 36 : 64, alignItems: 'flex-start',
      }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: AB_C.tealDeep, marginBottom: 14 }}>
            How we got here
          </div>
          <h2 style={{
            fontSize: isMobile ? 'clamp(28px, 7vw, 36px)' : 'clamp(36px, 4.5vw, 60px)',
            lineHeight: 1.05, letterSpacing: '-0.025em', fontWeight: 700,
            margin: '0 0 24px', color: AB_C.ink, maxWidth: 700,
          }}>
            Living through the reality of small business in Hawaii — until the experience itself became a solution.
          </h2>

          <div style={{
            fontSize: isMobile ? 16 : 17, color: AB_C.ink70, lineHeight: 1.7, maxWidth: 640,
            display: 'flex', flexDirection: 'column', gap: 18,
          }}>
            <p style={{ margin: 0 }}>
              Running a small business in Hawaii is a daily uphill climb. Labor costs keep rising. Hiring
              gets harder every year. Operating expenses leave less and less margin. In the middle of that
              reality, our founder Anthony Han spent two decades on the floor — operating dry cleaners,
              restaurants, karaoke lounges, and now Korean fried chicken stores.
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: AB_C.ink }}>The DNA came from family.</strong> A mother who ran restaurants in Korea, who taught the value of
              relentless effort. A father who invented things — who turned ideas into real, working products.
              Aloha Smart System is what happens when those two values meet — diligence and inventiveness,
              applied to the problems we live with every day.
            </p>
            <p style={{ margin: 0 }}>
              That's why Aloha Smart System isn't just another POS. It's a <strong style={{ color: AB_C.ink }}>field-centric solution</strong> — designed
              from the perspective of the boss working the floor, not the engineer in a meeting.
            </p>
          </div>
        </div>

        <div style={{ position: isMobile ? 'static' : 'sticky', top: 100 }}>
          <div style={{
            borderRadius: 16, overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(14,26,36,0.18), 0 0 0 1px rgba(14,26,36,0.08)',
            background: AB_C.bg,
          }}>
            <img src="assets/about/anthony-portrait.png" alt="Anthony Han, founder of Aloha Smart System and Musubi Media"
              style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div style={{ marginTop: 18, fontSize: 13, color: AB_C.ink50, lineHeight: 1.6 }}>
            <strong style={{ color: AB_C.ink, fontWeight: 700 }}>Anthony Han</strong> &middot; Founder<br/>
            <a href="index.html" style={{ color: AB_C.tealDeep, fontWeight: 600 }}>Aloha Smart System</a>
            <span style={{ color: AB_C.ink30, margin: '0 6px' }}>&middot;</span>
            <a href="https://musubimedia.net" target="_blank" rel="noopener" style={{ color: '#0E5BA8', fontWeight: 600 }}>Musubi Media ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ABQuote() {
  const isMobile = useIsMobile();
  return (
    <section style={{
      background: AB_C.bgDark, color: 'white',
      padding: isMobile ? '72px 20px' : '120px 32px',
    }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: AB_C.gold, marginBottom: 24 }}>
          Why we exist
        </div>
        <blockquote style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: isMobile ? 'clamp(28px, 7.5vw, 38px)' : 'clamp(36px, 5vw, 64px)',
          lineHeight: 1.15, letterSpacing: '-0.02em',
          fontWeight: 400, margin: '0 0 28px', color: 'white', fontStyle: 'italic',
        }}>
          {isMobile ? (
            <>"POS isn't just a machine. It's a tool that makes a boss's day <span style={{ color: AB_C.gold, fontStyle: 'normal' }}>easier.</span>"</>
          ) : (
            <>"POS isn't just a machine. <br/>It's a tool that makes a boss's day <span style={{ color: AB_C.gold, fontStyle: 'normal' }}>easier.</span>"</>
          )}
        </blockquote>
        <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em' }}>
          — Anthony Han, founder
        </div>
      </div>
    </section>
  );
}

function ABCompanies() {
  const isMobile = useIsMobile();
  return (
    <section style={{ padding: isMobile ? '64px 20px' : '96px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: AB_C.tealDeep, marginBottom: 14 }}>
          Two companies, one team
        </div>
        <h2 style={{
          fontSize: isMobile ? 'clamp(28px, 7vw, 38px)' : 'clamp(36px, 4.5vw, 60px)',
          lineHeight: 1.05, letterSpacing: '-0.025em', fontWeight: 700,
          margin: '0 0 14px', color: AB_C.ink, maxWidth: 800,
        }}>
          We build the system. <span style={{ color: AB_C.ink50 }}>And we drive the customers.</span>
        </h2>
        <p style={{
          fontSize: isMobile ? 15 : 17, color: AB_C.ink70, maxWidth: 720,
          margin: isMobile ? '0 0 36px' : '0 0 56px', lineHeight: 1.55,
        }}>
          Most software companies hand you the tool and walk away. Most marketing agencies don't understand
          how a restaurant actually runs. We do both — under one roof, with one team that knows your floor.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(420px, 1fr))',
          gap: isMobile ? 14 : 20,
        }}>
          {AB_COMPANIES.map(c => (
            <a key={c.side} href={c.href}
              {...(c.external ? { target: '_blank', rel: 'noopener' } : {})}
              style={{
                background: AB_C.surface, borderRadius: 16,
                padding: isMobile ? '24px 22px' : '32px 32px',
                border: `1px solid ${AB_C.ink10}`, borderTop: `4px solid ${c.color}`,
                display: 'block', transition: 'transform 0.15s, box-shadow 0.15s',
                color: 'inherit',
              }}
              onMouseEnter={e => {
                if (isMobile) return;
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 36px rgba(14,26,36,0.10)';
              }}
              onMouseLeave={e => {
                if (isMobile) return;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.14em',
                textTransform: 'uppercase', color: c.color, marginBottom: 10 }}>
                {c.role}
              </div>
              <div style={{
                fontSize: isMobile ? 26 : 32, fontWeight: 800, letterSpacing: '-0.02em',
                color: AB_C.ink, marginBottom: 12,
              }}>
                {c.name}
              </div>
              <div style={{
                fontSize: isMobile ? 14 : 15, color: AB_C.ink70,
                lineHeight: 1.6, marginBottom: 20,
              }}>
                {c.body}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0,
                display: 'flex', flexDirection: 'column', gap: 8 }}>
                {c.items.map((it, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start',
                    fontSize: isMobile ? 13 : 14, color: AB_C.ink, lineHeight: 1.5 }}>
                    <span style={{ color: c.color, fontWeight: 800, flexShrink: 0 }}>+</span>
                    {it}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 22, fontSize: 13, fontWeight: 700,
                color: c.color, letterSpacing: '0.04em' }}>
                {c.external ? 'musubimedia.net' : 'alohasmartsystem.com'} →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ABPrinciples() {
  const isMobile = useIsMobile();
  return (
    <section style={{ padding: isMobile ? '64px 20px' : '96px 32px', background: AB_C.bgAlt }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: AB_C.tealDeep, marginBottom: 14 }}>
          What we believe
        </div>
        <h2 style={{
          fontSize: isMobile ? 'clamp(28px, 7vw, 38px)' : 'clamp(36px, 4.5vw, 60px)',
          lineHeight: 1.05, letterSpacing: '-0.025em', fontWeight: 700,
          margin: isMobile ? '0 0 32px' : '0 0 56px', color: AB_C.ink, maxWidth: 800,
        }}>
          Four principles. <span style={{ color: AB_C.ink50 }}>Everything else follows.</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: isMobile ? 12 : 14,
        }}>
          {AB_PRINCIPLES.map((p, i) => (
            <div key={i} style={{
              background: AB_C.surface, borderRadius: 14,
              padding: isMobile ? '24px 22px' : '32px 28px',
              border: `1px solid ${AB_C.ink10}`,
            }}>
              <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.04em',
                color: AB_C.crimson, marginBottom: 10, fontFamily: "'Instrument Serif', serif" }}>
                0{i + 1}
              </div>
              <div style={{ fontSize: 19, fontWeight: 700, letterSpacing: '-0.01em',
                color: AB_C.ink, marginBottom: 8 }}>
                {p.k}
              </div>
              <div style={{ fontSize: 14, color: AB_C.ink70, lineHeight: 1.6 }}>
                {p.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ABCustomers() {
  const isMobile = useIsMobile();
  return (
    <section style={{ padding: isMobile ? '64px 20px' : '96px 32px' }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1fr) minmax(0, 1.2fr)',
        gap: isMobile ? 32 : 64, alignItems: 'flex-start',
      }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: AB_C.tealDeep, marginBottom: 14 }}>
            Live in Honolulu
          </div>
          <h2 style={{
            fontSize: isMobile ? 'clamp(26px, 6.5vw, 34px)' : 'clamp(34px, 4vw, 54px)',
            lineHeight: 1.05, letterSpacing: '-0.025em', fontWeight: 700,
            margin: '0 0 16px', color: AB_C.ink,
          }}>
            Stores actually running our system right now.
          </h2>
          <p style={{
            fontSize: isMobile ? 15 : 16, color: AB_C.ink70, lineHeight: 1.6,
            margin: '0 0 28px',
          }}>
            Every product on this site has been validated in a real, paying restaurant before we offered it.
            These are the stores that helped us prove it.
          </p>

          <div style={{
            background: AB_C.bgAlt, borderRadius: 14,
            padding: isMobile ? '20px 22px' : '24px 26px',
            borderLeft: `4px solid ${AB_C.crimson}`,
          }}>
            <div style={{
              fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
              fontSize: isMobile ? 17 : 19, color: AB_C.ink, lineHeight: 1.5, marginBottom: 12,
            }}>
              "After we installed the tablet ordering system, store operations improved
              noticeably and customer satisfaction went up. We strongly recommend
              Aloha Smart System for any restaurant."
            </div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
              color: AB_C.tealDeep, textTransform: 'uppercase' }}>
              — Owner, Sura Hawaii
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {AB_CUSTOMERS.map(c => (
            <div key={c.name} style={{
              background: AB_C.surface, border: `1px solid ${AB_C.ink10}`,
              borderRadius: 12,
              padding: isMobile ? '16px 18px' : '20px 24px',
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1.2fr) minmax(0, 1fr)',
              gap: isMobile ? 10 : 20,
              alignItems: 'center',
            }}>
              <div>
                <div style={{ fontSize: isMobile ? 16 : 18, fontWeight: 700, letterSpacing: '-0.01em',
                  color: AB_C.ink }}>
                  {c.name}
                </div>
                <div style={{ fontSize: 13, color: AB_C.ink50, marginTop: 2 }}>
                  {c.loc}
                </div>
                <div style={{ fontSize: 13, color: AB_C.ink70, marginTop: 6 }}>
                  {c.role}
                </div>
              </div>
              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
                color: AB_C.tealDeep, textTransform: 'uppercase',
                textAlign: isMobile ? 'left' : 'right',
              }}>
                {c.system}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ABFeatured() {
  const isMobile = useIsMobile();
  return (
    <section style={{
      padding: isMobile ? '64px 20px' : '96px 32px',
      background: AB_C.bgDark, color: 'white',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: AB_C.gold, marginBottom: 14 }}>
          As featured in
        </div>
        <h2 style={{
          fontSize: isMobile ? 'clamp(26px, 6.5vw, 34px)' : 'clamp(34px, 4vw, 52px)',
          lineHeight: 1.05, letterSpacing: '-0.025em', fontWeight: 700,
          margin: '0 0 16px', maxWidth: 800,
        }}>
          Hawaii Korean community magazine
        </h2>
        <p style={{
          fontSize: isMobile ? 15 : 16, color: 'rgba(255,255,255,0.7)', maxWidth: 720,
          margin: isMobile ? '0 0 32px' : '0 0 48px', lineHeight: 1.6,
        }}>
          Featured in the Hawaii Korean community magazine — a profile on the founding story
          of Aloha Smart System and Soul Chicken Hawaii.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(0, 1fr))',
          gap: isMobile ? 14 : 20,
        }}>
          {[1, 2, 3].map(n => (
            <a key={n} href={`assets/about/magazine-page-${n}.jpg`} target="_blank" rel="noopener" style={{
              borderRadius: 12, overflow: 'hidden',
              boxShadow: '0 12px 32px rgba(0,0,0,0.32), 0 0 0 1px rgba(255,255,255,0.08)',
              transition: 'transform 0.18s', display: 'block',
            }}
            onMouseEnter={e => { if (!isMobile) e.currentTarget.style.transform = 'translateY(-4px)'; }}
            onMouseLeave={e => { if (!isMobile) e.currentTarget.style.transform = 'translateY(0)'; }}>
              <img src={`assets/about/magazine-page-${n}.jpg`} alt={`Magazine page ${n}`}
                style={{ width: '100%', height: 'auto', display: 'block' }} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ABContact() {
  const isMobile = useIsMobile();
  return (
    <section id="contact" style={{ padding: isMobile ? '64px 20px' : '96px 32px' }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1.3fr) minmax(0, 1fr)',
        gap: isMobile ? 32 : 56, alignItems: 'center',
        background: AB_C.bgAlt, borderRadius: 20,
        padding: isMobile ? '32px 22px' : 'clamp(32px, 6vw, 64px)',
      }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: AB_C.tealDeep, marginBottom: 14 }}>
            Get in touch
          </div>
          <h2 style={{
            fontSize: isMobile ? 'clamp(26px, 6.5vw, 34px)' : 'clamp(32px, 4vw, 52px)',
            lineHeight: 1.05, letterSpacing: '-0.025em', fontWeight: 700,
            margin: '0 0 16px', color: AB_C.ink,
          }}>
            Let's see if we're a fit.
          </h2>
          <p style={{ fontSize: isMobile ? 15 : 16, color: AB_C.ink70, lineHeight: 1.6, margin: '0 0 24px' }}>
            Send a floor plan, a photo, or just a sentence about what you're trying to fix.
            We usually reply same day. Hawaii hours.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href="mailto:info@alohasmartsystem.com" style={{
              background: AB_C.ink, color: 'white',
              padding: isMobile ? '13px 24px' : '16px 32px',
              borderRadius: 999, fontWeight: 700, fontSize: 15, whiteSpace: 'nowrap',
            }}>Email us</a>
            <a href="find-your-fit.html" style={{
              background: 'transparent', color: AB_C.ink,
              border: `1.5px solid ${AB_C.ink30}`,
              padding: isMobile ? '11.5px 22px' : '14.5px 30px',
              borderRadius: 999, fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap',
            }}>Take the 60-second fit quiz</a>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {[
            ['Phone', '(808) 650-3331'],
            ['Email', 'info@alohasmartsystem.com'],
            ['Web', 'alohasmartsystem.com · musubimedia.net'],
            ['Based in', 'Honolulu, Hawaii'],
          ].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: AB_C.ink50, marginBottom: 4 }}>
                {k}
              </div>
              <div style={{
                fontSize: isMobile ? 15 : 16, fontWeight: 600,
                color: AB_C.ink, letterSpacing: '-0.01em',
                wordBreak: 'break-word',
              }}>
                {v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ABFooter() {
  return (
    <footer style={{ padding: '24px 20px', borderTop: `1px solid ${AB_C.ink10}`, background: AB_C.bg }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', fontSize: 12, color: AB_C.ink50,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textAlign: 'center' }}>
        <div>Aloha Smart System &middot; Musubi Media LLC &middot; Honolulu, Hawaii</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, flexWrap: 'wrap', justifyContent: 'center' }}>
          <span>Authorized partner of</span>
          <CardConnectMark scale={0.55} />
          <span>· CCS HQ (877) 682-1117</span>
        </div>
      </div>
    </footer>
  );
}

function AboutPage() {
  return (
    <div style={{ background: AB_C.bg, color: AB_C.ink,
      fontFamily: "'Inter Tight', system-ui, sans-serif", minHeight: '100vh' }}>
      <ABNav />
      <ABHero />
      <ABStory />
      <ABQuote />
      <ABCompanies />
      <ABPrinciples />
      <ABCustomers />
      <ABFeatured />
      <ABContact />
      <ABFooter />
    </div>
  );
}

window.AboutPage = AboutPage;
