// Aloha Smart System v2 — main landing page
// Order: Hero → Credit-card trust → Personas → Products grid → "Built for Hawaii" → FAQ → CTA

// Aloha brand v2 — Sunset Terracotta + Deep Charcoal
const COLORS_V2 = {
  bg: '#F5EFE6',
  bgAlt: '#EDE4D3',
  ink: '#1A1A1F',
  ink70: 'rgba(26,26,31,0.72)',
  ink50: 'rgba(26,26,31,0.5)',
  ink20: 'rgba(26,26,31,0.18)',
  ink10: 'rgba(26,26,31,0.08)',
  accent: '#C8553D',
  accentDeep: '#7A2E1F',
  coral: '#C8553D',
  gold: '#C9941E',
  green: '#1F6E4D',
  white: '#FFFFFF',
  blush: '#F1D9CF',
};

const PLUMERIA_BG = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60"><g fill="none" stroke="%23C8553D" stroke-width="1" stroke-linejoin="round" opacity="0.22"><g transform="translate(30 30)"><path d="M0 -16 C 6 -13 9 -7 6 -1 C 3 3 -3 3 -6 -1 C -9 -7 -6 -13 0 -16 Z"/><g transform="rotate(72)"><path d="M0 -16 C 6 -13 9 -7 6 -1 C 3 3 -3 3 -6 -1 C -9 -7 -6 -13 0 -16 Z"/></g><g transform="rotate(144)"><path d="M0 -16 C 6 -13 9 -7 6 -1 C 3 3 -3 3 -6 -1 C -9 -7 -6 -13 0 -16 Z"/></g><g transform="rotate(216)"><path d="M0 -16 C 6 -13 9 -7 6 -1 C 3 3 -3 3 -6 -1 C -9 -7 -6 -13 0 -16 Z"/></g><g transform="rotate(288)"><path d="M0 -16 C 6 -13 9 -7 6 -1 C 3 3 -3 3 -6 -1 C -9 -7 -6 -13 0 -16 Z"/></g><circle r="2" fill="%23C8553D" stroke="none"/></g></g></svg>')`;

function LogoA({ size = 28, dark = false, color }) {
  const ink = color || (dark ? '#F5EFE6' : '#1A1A1F');
  const dotColor = dark ? '#F1D9CF' : '#C8553D';
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

function NavV2() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(250,250,247,0.92)' : COLORS_V2.bg,
      backdropFilter: scrolled ? 'saturate(140%) blur(12px)' : 'none',
      borderBottom: scrolled ? `1px solid ${COLORS_V2.ink10}` : '1px solid transparent',
      transition: 'all 200ms ease',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '14px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <LogoA size={28} />
          <div style={{ fontWeight: 700, fontSize: 16, letterSpacing: '-0.01em', color: COLORS_V2.ink }}>
            Aloha Smart System
          </div>
        </a>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center', fontSize: 14 }}>
          <a href="#products" style={{ color: COLORS_V2.ink70 }}>Products</a>
          <a href="#personas" style={{ color: COLORS_V2.ink70 }}>Industries</a>
          <a href="#processing" style={{ color: COLORS_V2.ink70 }}>Credit Card Processing</a>
          <a href="#faq" style={{ color: COLORS_V2.ink70 }}>FAQ</a>
          <a href="about.html" style={{ color: COLORS_V2.ink70 }}>About</a>
          <a href="find-your-fit.html" style={{ color: COLORS_V2.ink70 }}>Find your fit</a>
          <a href="#contact" style={{
            background: COLORS_V2.accent, color: 'white',
            padding: '9px 18px', borderRadius: 999, fontWeight: 600,
          }}>Book a demo</a>
        </div>
      </div>
    </nav>
  );
}

function HeroV2() {
  return (
    <section id="top" style={{
      maxWidth: 1320, margin: '0 auto', padding: '64px 32px 56px',
    }}>
      {/* Two-column hero */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1fr)',
        gap: 56, alignItems: 'center',
      }}>
        {/* LEFT — text */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 14px', background: COLORS_V2.bgAlt,
            border: `1px solid ${COLORS_V2.ink10}`,
            borderRadius: 999, fontSize: 12, fontWeight: 600,
            color: COLORS_V2.ink70, letterSpacing: '0.04em', textTransform: 'uppercase',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: COLORS_V2.accent }}></span>
            Built in 808 · Clover-authorized · Honolulu
          </div>

          <h1 style={{
            fontSize: 'clamp(40px, 5.4vw, 76px)',
            lineHeight: 0.98, letterSpacing: '-0.035em',
            fontWeight: 700, margin: '20px 0 18px',
            color: COLORS_V2.ink,
          }}>
            We process your credit&nbsp;cards.<br/>
            <span style={{ color: COLORS_V2.ink50 }}>
              Then we build the system on top.
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 1.25vw, 19px)', lineHeight: 1.5,
            color: COLORS_V2.ink70, maxWidth: 560, margin: '0 0 32px',
          }}>
            Hawaii&rsquo;s payment platform for restaurants, food courts, markets, and multi-vendor halls.
            Credit&nbsp;card processing, POS, kiosks, table ordering, delivery integration, and in-store digital signage —
            engineered locally on Clover and Zorder, installed across O&lsquo;ahu.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
            <a href="find-your-fit.html" style={{
              background: COLORS_V2.accent, color: 'white',
              padding: '17px 30px', borderRadius: 999, fontWeight: 700, fontSize: 16,
              whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: 10,
              boxShadow: `0 8px 24px ${COLORS_V2.accent}33`,
            }}>
              Find your fit
              <span style={{
                fontSize: 11, fontWeight: 600, opacity: 0.85,
                background: 'rgba(255,255,255,0.2)', padding: '3px 8px', borderRadius: 999,
              }}>60 sec</span>
              <span aria-hidden="true">→</span>
            </a>

            <div style={{
              fontSize: 13, color: COLORS_V2.ink50, display: 'flex',
              alignItems: 'center', gap: 14, flexWrap: 'wrap', paddingLeft: 4,
            }}>
              <span>Already know what you need?</span>
              <a href="#contact" style={{
                color: COLORS_V2.ink, fontWeight: 600,
                borderBottom: `1px solid ${COLORS_V2.ink20}`, paddingBottom: 1,
              }}>Book a demo</a>
              <span style={{ color: COLORS_V2.ink20 }}>·</span>
              <a href="#contact" style={{
                color: COLORS_V2.ink, fontWeight: 600,
                borderBottom: `1px solid ${COLORS_V2.ink20}`, paddingBottom: 1,
              }}>Get payment quote</a>
            </div>
          </div>
        </div>

        {/* RIGHT — photo composition */}
        <div style={{ position: 'relative', height: 560, minWidth: 0 }}>
          {/* Storefront photo (background, top-right) */}
          <div style={{
            position: 'absolute', top: 0, right: 0,
            width: '74%', aspectRatio: '4/3',
            borderRadius: 18, overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(14,26,36,0.18), 0 0 0 1px rgba(14,26,36,0.06)',
            transform: 'rotate(1.2deg)',
          }}>
            <img
              src="assets/photos/chois-garden-storefront.png"
              alt="Choi's Garden — Korean restaurant in Honolulu running Aloha Smart System"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            {/* Label tag */}
            <div style={{
              position: 'absolute', top: 14, left: 14,
              background: 'rgba(14,26,36,0.85)', backdropFilter: 'blur(8px)',
              color: 'white', padding: '8px 14px', borderRadius: 999,
              display: 'inline-flex', flexDirection: 'column', gap: 2,
              boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em' }}>
                CHOI&rsquo;S GARDEN
              </div>
              <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.75)' }}>
                Table Order · POS
              </div>
            </div>
          </div>

          {/* Tablet photo (foreground, bottom-left, overlapping) */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0,
            width: '70%', aspectRatio: '4/3',
            borderRadius: 18, overflow: 'hidden',
            boxShadow: '0 32px 80px rgba(14,26,36,0.28), 0 0 0 1px rgba(14,26,36,0.08)',
            transform: 'rotate(-1.5deg)',
            zIndex: 2,
          }}>
            <img
              src="assets/photos/sura-hawaii-tablet-closeup.png"
              alt="Sura Hawaii — Zorder tablet running Aloha Smart System table ordering"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            {/* Label tag */}
            <div style={{
              position: 'absolute', bottom: 14, left: 14,
              background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)',
              color: COLORS_V2.ink, padding: '8px 14px', borderRadius: 999,
              display: 'inline-flex', flexDirection: 'column', gap: 2,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em' }}>
                SURA HAWAII
              </div>
              <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.04em', color: COLORS_V2.ink70 }}>
                Zorder tablet · integrated with our POS
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stat strip */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
        borderTop: `1px solid ${COLORS_V2.ink10}`,
        borderBottom: `1px solid ${COLORS_V2.ink10}`,
        padding: '28px 0', marginTop: 64,
      }}>
        {[
          ['Hawaii-based', 'Honolulu HQ · on-site install'],
          ['Clover authorized', 'Direct merchant services'],
          ['Zorder partner', 'Native integration'],
          ['Multi-language', 'EN · 한국어 · 日本語'],
        ].map(([h, s]) => (
          <div key={h}>
            <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', color: COLORS_V2.ink }}>{h}</div>
            <div style={{ fontSize: 13, color: COLORS_V2.ink70, marginTop: 4 }}>{s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhatYouGetSection() {
  const hardware = [
    { img: 'assets/photos/clover-station.png', name: 'Clover Station', role: 'Counter POS · the workhorse' },
    { img: 'assets/photos/clover-mini.png', name: 'Clover Mini', role: 'Compact countertop · tap-to-pay' },
    { img: 'assets/photos/clover-flex.png', name: 'Clover Flex', role: 'Handheld · tableside ordering' },
    { img: 'assets/photos/clover-kds.png', name: 'Kitchen Display', role: 'Tickets · routes by station' },
    { img: 'assets/photos/clover-kiosk.png', name: 'Self-Order Kiosk', role: 'Customer self-checkout' },
  ];

  const apps = [
    { letter: 'F', name: 'Food Court Master', body: 'One ticket auto-routes to every kitchen. Cuts the runner role entirely.' },
    { letter: 'I', name: 'Inventory Master', body: 'Vision-OCR invoices + auto-reorder. Saves 5–7 manager hours/week.' },
    { letter: 'T', name: 'Table Order', body: 'Guests order from the table. Frees servers for service, not order-taking.' },
    { letter: 'D', name: 'Delivery Hub', body: 'DoorDash + Uber + GrubHub on one screen. Stop juggling three tablets.' },
    { letter: 'K', name: 'Smart Kiosk', body: 'Bilingual self-order at peak hours. Replaces a counter cashier.' },
    { letter: 'M', name: 'Display Network', body: 'In-store TVs sell for you. Lifts ticket size without staff effort.' },
  ];

  return (
    <section style={{
      background: COLORS_V2.white,
      padding: '96px 32px',
      borderTop: `1px solid ${COLORS_V2.ink10}`,
      borderBottom: `1px solid ${COLORS_V2.ink10}`,
    }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
            fontSize: 12, fontWeight: 600, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: COLORS_V2.ink50, marginBottom: 14,
          }}>
            What you actually get
          </div>
          <h2 style={{
            fontSize: 'clamp(36px, 4.5vw, 64px)', lineHeight: 1.02,
            letterSpacing: '-0.03em', fontWeight: 700,
            margin: '0 0 18px', color: COLORS_V2.ink, maxWidth: 900, marginLeft: 'auto', marginRight: 'auto',
          }}>
            Clover hardware on the bottom.<br/>
            <span style={{ color: COLORS_V2.accent }}>Our apps on top.</span>
          </h2>
          <p style={{
            fontSize: 17, lineHeight: 1.6, color: COLORS_V2.ink70,
            maxWidth: 760, margin: '0 auto',
          }}>
            Most providers stop at the hardware. We use Clover as the foundation, then build features
            <strong style={{ color: COLORS_V2.ink }}> no one else has</strong> &mdash; the kind that cut server hours,
            stop missed orders, and let your staff focus on guests instead of paperwork.
          </p>
        </div>

        {/* Layer 1 — Hardware */}
        <div style={{ marginBottom: 64 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            marginBottom: 24, paddingBottom: 14,
            borderBottom: `1px solid ${COLORS_V2.ink10}`,
          }}>
            <div style={{
              fontSize: 11, fontWeight: 800, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: COLORS_V2.ink,
              padding: '5px 10px', background: COLORS_V2.bgAlt, borderRadius: 6,
            }}>
              Layer 1 — Hardware
            </div>
            <div style={{ fontSize: 13, color: COLORS_V2.ink70 }}>
              Comes with every install. <strong style={{ color: COLORS_V2.ink }}>Built on Clover.</strong>
            </div>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14,
          }}>
            {hardware.map((h) => (
              <div key={h.name} style={{
                background: COLORS_V2.bg,
                border: `1px solid ${COLORS_V2.ink10}`,
                borderRadius: 14, overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
              }}>
                <div style={{
                  aspectRatio: '4/3', overflow: 'hidden', background: COLORS_V2.bgAlt,
                }}>
                  <img src={h.img} alt={h.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '14px 16px 16px' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: COLORS_V2.ink, letterSpacing: '-0.01em' }}>
                    {h.name}
                  </div>
                  <div style={{ fontSize: 12, color: COLORS_V2.ink70, marginTop: 4, lineHeight: 1.4 }}>
                    {h.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Layer 2 — Apps */}
        <div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            marginBottom: 24, paddingBottom: 14,
            borderBottom: `1px solid ${COLORS_V2.ink10}`,
          }}>
            <div style={{
              fontSize: 11, fontWeight: 800, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'white',
              padding: '5px 10px', background: COLORS_V2.accent, borderRadius: 6,
            }}>
              Layer 2 — Aloha Apps
            </div>
            <div style={{ fontSize: 13, color: COLORS_V2.ink70 }}>
              What only we give you. <strong style={{ color: COLORS_V2.ink }}>Cuts labor hours. Built in Honolulu.</strong>
            </div>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14,
          }}>
            {apps.map((a) => (
              <div key={a.name} style={{
                background: COLORS_V2.bg,
                border: `1px solid ${COLORS_V2.ink10}`,
                borderRadius: 14, padding: '20px 22px',
                display: 'flex', gap: 16, alignItems: 'flex-start',
              }}>
                <div style={{
                  width: 44, height: 44, flexShrink: 0,
                  borderRadius: 10, background: COLORS_V2.accent,
                  color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22, fontWeight: 800, letterSpacing: '-0.04em',
                  fontFamily: '"Instrument Serif", Georgia, serif',
                }}>
                  {a.letter}
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: COLORS_V2.ink, marginBottom: 4 }}>
                    {a.name}
                  </div>
                  <div style={{ fontSize: 13, color: COLORS_V2.ink70, lineHeight: 1.5 }}>
                    {a.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom framing */}
        <div style={{
          marginTop: 56, padding: '24px 28px',
          background: COLORS_V2.ink, color: 'white',
          borderRadius: 14,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 16,
        }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>
              Same hardware everyone uses. Apps no one else has.
            </div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>
              Restaurants on our stack run with fewer servers, fewer missed tickets, and lower invoice labor &mdash; with one Honolulu support number for all of it.
            </div>
          </div>
          <a href="#contact" style={{
            background: COLORS_V2.accent, color: 'white',
            padding: '12px 22px', borderRadius: 999, fontSize: 14, fontWeight: 600,
            whiteSpace: 'nowrap',
          }}>
            Get a quote &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

function ProcessingSection() {
  return (
    <section id="processing" style={{
      background: COLORS_V2.ink, color: 'white',
      padding: '80px 32px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          fontSize: 12, fontWeight: 600, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)',
          marginBottom: 20,
        }}>
          Hawaii credit card processing
        </div>
        <h2 style={{
          fontSize: 'clamp(36px, 4.5vw, 60px)', lineHeight: 1.05,
          letterSpacing: '-0.025em', fontWeight: 700,
          maxWidth: 1000, margin: '0 0 28px',
        }}>
          The processor and the platform — under one roof.
        </h2>
        <p style={{
          fontSize: 18, lineHeight: 1.55,
          color: 'rgba(255,255,255,0.7)', maxWidth: 720,
        }}>
          Most Hawaii restaurants use one company for credit card processing and another for their POS.
          When something breaks, you&rsquo;re stuck on hold with both. Aloha Smart System is your processor and your platform.
          Local rates, local install, local support — and the apps you actually need on top.
        </p>

        <div style={{
          marginTop: 56,
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32,
        }}>
          {[
            ['01', 'Local rates, local people', 'Negotiated in Honolulu, not at a 1-800 mainland call center. Your account manager has a Hawaii area code.'],
            ['02', 'Built on Clover, integrated with Zorder', 'Clover-authorized for hardware and merchant services. Native Zorder integration for kitchen display and order routing.'],
            ['03', 'Hardware + software + install', 'We deliver the terminal, install at your store, train your staff, and stay on call. One number for everything.'],
          ].map(([n, t, d]) => (
            <div key={n}>
              <div style={{
                fontSize: 13, fontWeight: 700, letterSpacing: '0.1em',
                color: COLORS_V2.blush, marginBottom: 14,
              }}>{n}</div>
              <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 10 }}>{t}</div>
              <div style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(255,255,255,0.65)' }}>{d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PersonaSection() {
  const [active, setActive] = React.useState('restaurants');
  const persona = ALOHA_PERSONAS.find(p => p.id === active);
  const products = ALOHA_PRODUCTS.filter(p => persona.products.includes(p.id));

  return (
    <section id="personas" style={{
      maxWidth: 1280, margin: '0 auto', padding: '96px 32px',
    }}>
      <div style={{
        fontSize: 12, fontWeight: 600, letterSpacing: '0.16em',
        textTransform: 'uppercase', color: COLORS_V2.ink50, marginBottom: 16,
      }}>
        Built for your business
      </div>
      <h2 style={{
        fontSize: 'clamp(36px, 4.5vw, 60px)', lineHeight: 1.05,
        letterSpacing: '-0.025em', fontWeight: 700,
        margin: '0 0 48px', color: COLORS_V2.ink, maxWidth: 1000,
      }}>
        From a single Korean BBQ to a 12-vendor food hall.
      </h2>

      {/* Tabs */}
      <div style={{
        display: 'flex', gap: 0, flexWrap: 'wrap',
        borderBottom: `1px solid ${COLORS_V2.ink10}`,
        marginBottom: 40,
      }}>
        {ALOHA_PERSONAS.map(p => (
          <button key={p.id} onClick={() => setActive(p.id)}
            style={{
              padding: '18px 24px', background: 'transparent',
              border: 'none', borderBottom: `2px solid ${active === p.id ? COLORS_V2.ink : 'transparent'}`,
              fontSize: 16, fontWeight: 600, color: active === p.id ? COLORS_V2.ink : COLORS_V2.ink50,
              letterSpacing: '-0.01em', marginBottom: -1,
            }}>
            {p.label}
            <span style={{ marginLeft: 10, fontSize: 12, fontWeight: 500, color: COLORS_V2.ink50 }}>
              {p.sublabel}
            </span>
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
        <div>
          <h3 style={{
            fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.1,
            letterSpacing: '-0.02em', fontWeight: 700,
            margin: '0 0 20px', color: COLORS_V2.ink,
          }}>
            {persona.headline}
          </h3>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: COLORS_V2.ink70, marginBottom: 32 }}>
            {persona.description}
          </p>

          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: COLORS_V2.ink50, marginBottom: 14 }}>
            What we hear from owners
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {persona.pains.map((pain, i) => (
              <li key={i} style={{
                padding: '14px 0', borderTop: `1px solid ${COLORS_V2.ink10}`,
                fontSize: 16, color: COLORS_V2.ink, display: 'flex', gap: 12,
              }}>
                <span style={{ color: COLORS_V2.accent, fontWeight: 700 }}>✕</span>
                <span style={{ fontStyle: 'italic' }}>&ldquo;{pain}&rdquo;</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: COLORS_V2.ink50, marginBottom: 16 }}>
            We solve it with
          </div>
          <div style={{ display: 'grid', gap: 12 }}>
            {products.map(prod => (
              <a key={prod.id} href={`#${prod.id}`} style={{
                background: COLORS_V2.bgAlt,
                border: `1px solid ${COLORS_V2.ink10}`,
                borderRadius: 16, padding: 24,
                display: 'block',
                transition: 'all 150ms ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS_V2.ink; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS_V2.ink10; }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: prod.color, color: 'white',
                    display: 'grid', placeItems: 'center',
                    fontWeight: 700, fontSize: 18,
                  }}>{prod.name.charAt(0)}</div>
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.01em', color: COLORS_V2.ink }}>
                      {prod.name}
                    </div>
                    <div style={{ fontSize: 12, color: COLORS_V2.ink50, fontWeight: 500 }}>
                      {prod.category}
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: 15, lineHeight: 1.5, color: COLORS_V2.ink70 }}>
                  {prod.tagline}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsGrid() {
  return (
    <section id="products" style={{
      background: COLORS_V2.bgAlt,
      padding: '96px 32px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.16em',
              textTransform: 'uppercase', color: COLORS_V2.ink50, marginBottom: 16 }}>
              Product lineup
            </div>
            <h2 style={{
              fontSize: 'clamp(36px, 4.5vw, 60px)', lineHeight: 1.05,
              letterSpacing: '-0.025em', fontWeight: 700,
              margin: 0, color: COLORS_V2.ink, maxWidth: 800,
            }}>
              Six systems. One platform.
            </h2>
          </div>
          <div style={{ fontSize: 14, color: COLORS_V2.ink70, maxWidth: 320, textAlign: 'right' }}>
            All built on Clover, integrated with Zorder, installed in Hawaii.
          </div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20,
        }}>
          {ALOHA_PRODUCTS.map(prod => (
            <a key={prod.id} id={prod.id} href={`products/${prod.id}.html`} className="aloha-product-card" style={{
              background: COLORS_V2.white,
              border: `1px solid ${COLORS_V2.ink10}`,
              borderRadius: 20, padding: 28,
              display: 'flex', flexDirection: 'column', gap: 16,
              textDecoration: 'none', color: 'inherit',
              transition: 'transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease',
              cursor: 'pointer',
              '--accent': prod.color,
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: prod.color, color: 'white',
                display: 'grid', placeItems: 'center',
                fontWeight: 700, fontSize: 20,
              }}>{prod.name.charAt(0)}</div>

              <div>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em',
                  textTransform: 'uppercase', color: COLORS_V2.ink50, marginBottom: 6 }}>
                  {prod.category}
                </div>
                <h3 style={{
                  fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em',
                  margin: '0 0 10px', color: COLORS_V2.ink,
                }}>
                  {prod.name}
                </h3>
                <div style={{ fontSize: 15, fontWeight: 500, color: COLORS_V2.ink, marginBottom: 12 }}>
                  {prod.tagline}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: COLORS_V2.ink70, margin: 0 }}>
                  {prod.blurb}
                </p>
              </div>

              <ul style={{
                listStyle: 'none', padding: 0, margin: '4px 0 0',
                display: 'flex', flexDirection: 'column', gap: 8,
                borderTop: `1px solid ${COLORS_V2.ink10}`, paddingTop: 16,
              }}>
                {prod.features.map((f, i) => (
                  <li key={i} style={{
                    fontSize: 13, color: COLORS_V2.ink70,
                    display: 'flex', gap: 10, alignItems: 'flex-start',
                  }}>
                    <span style={{ color: prod.color, fontWeight: 700, flexShrink: 0 }}>→</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <span style={{
                marginTop: 'auto', fontSize: 14, fontWeight: 600, color: COLORS_V2.ink,
                paddingTop: 16, display: 'inline-flex', alignItems: 'center', gap: 6,
                borderTop: 'none',
              }}>
                Learn more <span aria-hidden>→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function BuiltForHawaii() {
  return (
    <section style={{
      maxWidth: 1280, margin: '0 auto', padding: '96px 32px',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: COLORS_V2.accent, marginBottom: 16 }}>
            Built for Hawaii
          </div>
          <h2 style={{
            fontSize: 'clamp(36px, 4.5vw, 60px)', lineHeight: 1.05,
            letterSpacing: '-0.025em', fontWeight: 700,
            margin: '0 0 24px', color: COLORS_V2.ink,
          }}>
            We&rsquo;re your neighbors.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: COLORS_V2.ink70, marginBottom: 24 }}>
            Mainland POS companies don&rsquo;t understand a Korean BBQ in Kaka&lsquo;ako, a poke counter in Waikīkī,
            or a 12-vendor food court in Pearlridge. We do — because we eat there.
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: COLORS_V2.ink70, marginBottom: 32 }}>
            Aloha Smart System is operated by Musubi Media LLC, a Honolulu-based studio. Our roots are in
            karaoke and hospitality tech — we&rsquo;ve been building software that talks to TVs and POS terminals
            for years. Now we bring that to every restaurant, market, and food hall in Hawaii.
          </p>

          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em', color: COLORS_V2.ink }}>808</div>
              <div style={{ fontSize: 13, color: COLORS_V2.ink50 }}>Local area code support</div>
            </div>
            <div>
              <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em', color: COLORS_V2.ink }}>3</div>
              <div style={{ fontSize: 13, color: COLORS_V2.ink50 }}>Languages — EN · KO · JP</div>
            </div>
            <div>
              <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em', color: COLORS_V2.ink }}>O&lsquo;ahu</div>
              <div style={{ fontSize: 13, color: COLORS_V2.ink50 }}>On-site installs</div>
            </div>
          </div>
        </div>

        <div style={{
          background: COLORS_V2.bgAlt,
          backgroundImage: PLUMERIA_BG,
          backgroundSize: '60px 60px',
          border: `1px solid ${COLORS_V2.ink10}`,
          borderRadius: 24, padding: 40,
        }}>
          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: COLORS_V2.ink50, marginBottom: 20 }}>
            Serving these neighborhoods
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {ALOHA_LOCATIONS.map(loc => (
              <span key={loc} style={{
                padding: '8px 14px', background: COLORS_V2.white,
                border: `1px solid ${COLORS_V2.ink10}`,
                borderRadius: 999, fontSize: 14, fontWeight: 500, color: COLORS_V2.ink,
              }}>{loc}</span>
            ))}
          </div>

          <div style={{
            marginTop: 32, paddingTop: 24,
            borderTop: `1px solid ${COLORS_V2.ink10}`,
            fontSize: 14, color: COLORS_V2.ink70, lineHeight: 1.6,
          }}>
            Hawaii credit card processing · Hawaii POS system · Honolulu kiosk system ·
            Hawaii table ordering system · Hawaii delivery integration · Korean restaurant POS Hawaii ·
            Japanese restaurant POS Hawaii · Food court POS Hawaii · Clover Hawaii.
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" style={{
      background: COLORS_V2.bgAlt,
      padding: '96px 32px',
    }}>
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: COLORS_V2.ink50, marginBottom: 16 }}>
          Frequently asked
        </div>
        <h2 style={{
          fontSize: 'clamp(36px, 4.5vw, 56px)', lineHeight: 1.05,
          letterSpacing: '-0.025em', fontWeight: 700,
          margin: '0 0 48px', color: COLORS_V2.ink,
        }}>
          Questions Hawaii owners actually ask.
        </h2>

        <div style={{ borderTop: `1px solid ${COLORS_V2.ink20}` }}>
          {ALOHA_FAQ.map((item, i) => (
            <div key={i} style={{ borderBottom: `1px solid ${COLORS_V2.ink20}` }}>
              <button onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: '100%', padding: '24px 0', background: 'transparent',
                  border: 'none', textAlign: 'left',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24,
                  fontSize: 19, fontWeight: 600, letterSpacing: '-0.01em',
                  color: COLORS_V2.ink, lineHeight: 1.4,
                }}>
                <span>{item.q}</span>
                <span style={{
                  fontSize: 24, fontWeight: 400, color: COLORS_V2.ink50,
                  transform: open === i ? 'rotate(45deg)' : 'none',
                  transition: 'transform 200ms',
                  flexShrink: 0,
                }}>+</span>
              </button>
              {open === i && (
                <div style={{
                  paddingBottom: 24, fontSize: 16, lineHeight: 1.6,
                  color: COLORS_V2.ink70, maxWidth: 720,
                }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  const [status, setStatus] = React.useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = React.useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Something went wrong. Please email us directly.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Network error. Please email us directly.');
    }
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.18)',
    borderRadius: 10,
    padding: '14px 16px',
    fontSize: 15,
    color: 'white',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 150ms ease, background 150ms ease',
  };
  const labelStyle = {
    display: 'block', fontSize: 12, fontWeight: 600,
    letterSpacing: '0.06em', textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.65)', marginBottom: 8,
  };

  return (
    <section id="contact" style={{
      background: COLORS_V2.ink, color: 'white',
      padding: '120px 32px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 64 }}>
        {/* LEFT: headline + email/phone */}
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 16 }}>
            Talk to Aloha
          </div>
          <h2 style={{
            fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.0,
            letterSpacing: '-0.03em', fontWeight: 700, margin: '0 0 24px',
          }}>
            Get a payment quote.<br/>
            Or just talk story.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: 'rgba(255,255,255,0.7)', maxWidth: 520, marginBottom: 36 }}>
            Send us your menu, current processor statement, or a photo of the chaos behind your counter.
            We&rsquo;ll come back with a real quote and a plan.
          </p>

          <div style={{ display: 'grid', gap: 18, marginBottom: 32 }}>
            <a href={`mailto:${ALOHA_BRAND.email}`} style={{
              fontSize: 20, fontWeight: 600, color: 'white', letterSpacing: '-0.01em',
              borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: 6, alignSelf: 'flex-start',
            }}>{ALOHA_BRAND.email}</a>
            <a href={`tel:${ALOHA_BRAND.phone.replace(/\D/g,'')}`} style={{
              fontSize: 20, fontWeight: 600, color: 'white', letterSpacing: '-0.01em',
              borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: 6, alignSelf: 'flex-start',
            }}>{ALOHA_BRAND.phone}</a>
          </div>

          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
            Same business day reply, Mon–Fri.<br/>
            On-site visits across O&lsquo;ahu. Remote support neighbor islands.
          </div>
        </div>

        {/* RIGHT: contact form (Web3Forms) */}
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 20, padding: 36,
        }}>
          {status === 'success' ? (
            <div style={{ minHeight: 380, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px 0' }}>
              <div style={{
                width: 64, height: 64, borderRadius: '50%',
                background: COLORS_V2.accent, color: 'white',
                display: 'grid', placeItems: 'center', marginBottom: 24,
                fontSize: 32, fontWeight: 700,
              }}>✓</div>
              <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 12 }}>
                Mahalo — we got it.
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', maxWidth: 380, margin: '0 0 24px' }}>
                We&rsquo;ll reply within one business day. If you don&rsquo;t hear back, check your spam — or email us directly.
              </p>
              <button onClick={() => setStatus('idle')} style={{
                background: 'transparent', color: 'white',
                border: '1px solid rgba(255,255,255,0.3)',
                padding: '10px 20px', borderRadius: 999,
                fontSize: 14, fontWeight: 500,
              }}>Send another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 8 }}>
                Send us a message
              </div>
              <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', marginBottom: 24, lineHeight: 1.5 }}>
                Tell us about your store and we&rsquo;ll reply same business day.
              </div>

              {/* Web3Forms hidden fields */}
              <input type="hidden" name="access_key" value="adeb6c3b-2bf5-4dad-a49a-59875cbaf20d" />
              <input type="hidden" name="subject" value="Aloha Smart System — New Contact Form Submission" />
              <input type="hidden" name="from_name" value="Aloha Smart System Website" />
              {/* honeypot */}
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

              <div style={{ display: 'grid', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div>
                    <label htmlFor="aloha-name" style={labelStyle}>Name *</label>
                    <input id="aloha-name" type="text" name="name" required style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = COLORS_V2.accent; e.target.style.background = 'rgba(255,255,255,0.07)'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.18)'; e.target.style.background = 'rgba(255,255,255,0.05)'; }} />
                  </div>
                  <div>
                    <label htmlFor="aloha-business" style={labelStyle}>Business name</label>
                    <input id="aloha-business" type="text" name="business" placeholder="Optional" style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = COLORS_V2.accent; e.target.style.background = 'rgba(255,255,255,0.07)'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.18)'; e.target.style.background = 'rgba(255,255,255,0.05)'; }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div>
                    <label htmlFor="aloha-email" style={labelStyle}>Email *</label>
                    <input id="aloha-email" type="email" name="email" required style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = COLORS_V2.accent; e.target.style.background = 'rgba(255,255,255,0.07)'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.18)'; e.target.style.background = 'rgba(255,255,255,0.05)'; }} />
                  </div>
                  <div>
                    <label htmlFor="aloha-phone" style={labelStyle}>Phone</label>
                    <input id="aloha-phone" type="tel" name="phone" placeholder="Optional" style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = COLORS_V2.accent; e.target.style.background = 'rgba(255,255,255,0.07)'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.18)'; e.target.style.background = 'rgba(255,255,255,0.05)'; }} />
                  </div>
                </div>

                <div>
                  <label htmlFor="aloha-message" style={labelStyle}>Tell us about your store *</label>
                  <textarea id="aloha-message" name="message" required rows="5"
                    placeholder="What kind of business — restaurant, food court, market? What are you trying to fix or set up?"
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 120, fontFamily: 'inherit' }}
                    onFocus={e => { e.target.style.borderColor = COLORS_V2.accent; e.target.style.background = 'rgba(255,255,255,0.07)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.18)'; e.target.style.background = 'rgba(255,255,255,0.05)'; }} />
                </div>

                {status === 'error' && (
                  <div style={{
                    background: 'rgba(217,79,47,0.15)',
                    border: '1px solid rgba(217,79,47,0.4)',
                    borderRadius: 10, padding: '12px 16px',
                    fontSize: 14, color: '#FFD7CC', lineHeight: 1.5,
                  }}>
                    {errorMsg} Or email <a href={`mailto:${ALOHA_BRAND.email}`} style={{ color: 'white', borderBottom: '1px solid rgba(255,255,255,0.4)' }}>{ALOHA_BRAND.email}</a> directly.
                  </div>
                )}

                <button type="submit" disabled={status === 'submitting'} style={{
                  background: status === 'submitting' ? 'rgba(200,85,61,0.6)' : COLORS_V2.accent,
                  color: 'white', border: 'none',
                  padding: '16px 28px', borderRadius: 999,
                  fontSize: 15, fontWeight: 700, letterSpacing: '-0.01em',
                  cursor: status === 'submitting' ? 'wait' : 'pointer',
                  marginTop: 8, transition: 'background 150ms ease',
                }}>
                  {status === 'submitting' ? 'Sending…' : 'Send message →'}
                </button>

                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5, marginTop: -2 }}>
                  By submitting, you&rsquo;re sharing your contact info with Aloha Smart System (Musubi Media LLC). We don&rsquo;t share it with anyone else.
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function FooterV2() {
  return (
    <footer style={{
      background: COLORS_V2.bg, padding: '56px 32px 40px',
      borderTop: `1px solid ${COLORS_V2.ink10}`,
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <LogoA size={26} />
              <div style={{ fontWeight: 700, fontSize: 15, color: COLORS_V2.ink }}>Aloha Smart System</div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: COLORS_V2.ink70, margin: '0 0 16px', maxWidth: 320 }}>
              Hawaii&rsquo;s payment platform for restaurants, food courts, and markets.
              Credit card processing, POS, kiosks, table ordering, delivery integration, in-store digital signage.
            </p>
            <div style={{ fontSize: 13, color: COLORS_V2.ink50, lineHeight: 1.6 }}>
              Operated by Musubi Media LLC<br/>
              Honolulu, Hawaii<br/>
              <a href="https://musubimedia.net" style={{ color: COLORS_V2.accent, fontWeight: 500 }}>
                Sister company: Musubi Media →
              </a>
            </div>
          </div>

          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: COLORS_V2.ink50, marginBottom: 14 }}>Products</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
              {ALOHA_PRODUCTS.map(p => (
                <li key={p.id}><a href={`#${p.id}`} style={{ fontSize: 14, color: COLORS_V2.ink70 }}>{p.name}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: COLORS_V2.ink50, marginBottom: 14 }}>Industries</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
              {ALOHA_PERSONAS.map(p => (
                <li key={p.id}><a href="#personas" style={{ fontSize: 14, color: COLORS_V2.ink70 }}>{p.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: COLORS_V2.ink50, marginBottom: 14 }}>Contact</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
              <li><a href={`mailto:${ALOHA_BRAND.email}`} style={{ fontSize: 14, color: COLORS_V2.ink70 }}>{ALOHA_BRAND.email}</a></li>
              <li><a href={`tel:${ALOHA_BRAND.phone}`} style={{ fontSize: 14, color: COLORS_V2.ink70 }}>{ALOHA_BRAND.phone}</a></li>
              <li style={{ fontSize: 14, color: COLORS_V2.ink70 }}>Honolulu, HI</li>
            </ul>
          </div>
        </div>

        <div style={{
          paddingTop: 24, borderTop: `1px solid ${COLORS_V2.ink10}`,
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
          fontSize: 12, color: COLORS_V2.ink50, alignItems: 'flex-start',
        }}>
          <div>© {new Date().getFullYear()} Musubi Media LLC. All rights reserved.</div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, textAlign: 'right' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <span>Authorized partner of</span>
              <CardConnectMark scale={0.6} />
              <span>· Clover-authorized · Zorder integration partner</span>
            </div>
            <div style={{ fontSize: 11, color: COLORS_V2.ink50 }}>
              CCS HQ: (877) 682-1117 ·{' '}
              <a href="https://ccscardservice.com" target="_blank" rel="noopener noreferrer"
                style={{ color: COLORS_V2.ink50 }}>ccscardservice.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function AlohaSmartLandingV2() {
  return (
    <div style={{ background: COLORS_V2.bg, color: COLORS_V2.ink, minHeight: '100vh', fontFamily: '"Söhne", "Inter", system-ui, sans-serif' }}>
      <NavV2 />
      <HeroV2 />
      <WhatYouGetSection />
      <ProcessingSection />
      <PersonaSection />
      <ProductsGrid />
      <BuiltForHawaii />
      <FAQSection />
      <ContactCTA />
      <FooterV2 />
    </div>
  );
}

window.AlohaSmartLandingV2 = AlohaSmartLandingV2;
