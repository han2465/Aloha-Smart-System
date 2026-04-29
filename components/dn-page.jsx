// Musubi Display Network — page

function DNLogoA({ size = 28 }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'baseline',
      fontWeight: 800, fontSize: size, letterSpacing: '-0.04em', color: DN_C.ink,
    }}>
      A<span style={{
        width: size * 0.18, height: size * 0.18, borderRadius: 999,
        background: DN_C.gold, marginLeft: 2, alignSelf: 'flex-end', marginBottom: size * 0.08,
      }}></span>
    </span>
  );
}

function DNNav() {
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
      borderBottom: `1px solid ${DN_C.ink10}`,
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto',
        padding: isMobile ? '12px 18px' : '14px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="../index.html" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <DNLogoA size={isMobile ? 24 : 28} />
          <div style={{ fontWeight: 700, fontSize: isMobile ? 14 : 16, letterSpacing: '-0.01em', color: DN_C.ink }}>
            Aloha Smart System
          </div>
        </a>
        {!isMobile && (
          <div style={{ display: 'flex', gap: 28, alignItems: 'center', fontSize: 14 }}>
            {links.map(([h, l]) => (<a key={h} href={h} style={{ color: DN_C.ink70, whiteSpace: 'nowrap' }}>{l}</a>))}
            <a href="#contact" style={{
              background: DN_C.gold, color: DN_C.ink, padding: '9px 18px',
              borderRadius: 999, fontWeight: 700, whiteSpace: 'nowrap',
            }}>Light up your TVs</a>
          </div>
        )}
        {isMobile && (
          <button onClick={() => setOpen(!open)} style={{
            background: 'transparent', border: 'none', padding: 8,
            display: 'flex', flexDirection: 'column', gap: 4, cursor: 'pointer' }}>
            <span style={{ width: 22, height: 2, background: DN_C.ink, transition: 'transform 0.2s', transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
            <span style={{ width: 22, height: 2, background: DN_C.ink, opacity: open ? 0 : 1 }} />
            <span style={{ width: 22, height: 2, background: DN_C.ink, transition: 'transform 0.2s', transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
          </button>
        )}
      </div>
      {isMobile && open && (
        <div style={{ background: DN_C.bg, borderTop: `1px solid ${DN_C.ink10}`,
          padding: '14px 18px 22px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {links.map(([h, l]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} style={{
              color: DN_C.ink, padding: '12px 8px', fontSize: 16, fontWeight: 500,
              borderBottom: `1px solid ${DN_C.ink10}` }}>{l}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} style={{
            background: DN_C.gold, color: DN_C.ink, padding: '14px 18px',
            borderRadius: 999, fontWeight: 700, marginTop: 14, textAlign: 'center' }}>Light up your TVs</a>
        </div>
      )}
    </nav>
  );
}

function DNHero() {
  const isMobile = useIsMobile();
  return (
    <section style={{ maxWidth: 1320, margin: '0 auto', padding: isMobile ? '36px 20px 32px' : '64px 32px 48px' }}>
      <a href="../index.html#products" style={{
        fontSize: 13, color: DN_C.goldDeep, fontWeight: 700, whiteSpace: 'nowrap',
      }}>← All products</a>

      <div style={{
        display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1fr) minmax(0, 1.05fr)',
        gap: isMobile ? 32 : 56, alignItems: 'center', marginTop: 18,
      }}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 14px', background: DN_C.ink, color: DN_C.gold,
            borderRadius: 999, fontSize: isMobile ? 10 : 11, fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: DN_C.gold }}></span>
            Musubi Display Network &middot; part of Aloha Smart System
          </div>

          <h1 style={{
            fontSize: isMobile ? 'clamp(40px, 11vw, 56px)' : 'clamp(44px, 6vw, 84px)', lineHeight: isMobile ? 1.0 : 0.96, letterSpacing: '-0.035em',
            fontWeight: 700, margin: isMobile ? '16px 0 14px' : '20px 0 18px', color: DN_C.ink,
          }}>
            Your TVs,<br/>
            <span style={{ color: DN_C.goldDeep }}>monetized.</span>
          </h1>

          <p style={{ fontSize: isMobile ? 15 : 'clamp(17px, 1.4vw, 21px)', lineHeight: 1.5,
            color: DN_C.ink70, maxWidth: 580, margin: isMobile ? '0 0 22px' : '0 0 32px' }}>
            One screen, every job. Order numbers, your menu, sale items, local news,
            sports, in-language headlines, and your custom ads — all running together.
            Plugged into Clover so promos update themselves.
          </p>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href="#contact" style={{
              background: DN_C.ink, color: DN_C.gold, padding: isMobile ? '14px 22px' : '16px 28px',
              borderRadius: 999, fontWeight: 700, fontSize: isMobile ? 14 : 15, whiteSpace: 'nowrap',
            }}>Light up your TVs →</a>
            <a href="#how" style={{
              background: 'transparent', color: DN_C.ink,
              border: `1.5px solid ${DN_C.ink20}`, padding: isMobile ? '12.5px 20px' : '14.5px 26px',
              borderRadius: 999, fontWeight: 600, fontSize: isMobile ? 14 : 15, whiteSpace: 'nowrap',
            }}>See how it works</a>
          </div>

          <div style={{ display: 'flex', gap: isMobile ? 18 : 24, marginTop: isMobile ? 24 : 32, flexWrap: 'wrap' }}>
            {[['Live now', 'Soul Chicken · Midtown Eats'], ['Languages', 'EN · KR · JP · ZH'],
              ['Update lag', '< 5 sec from Clover']].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: DN_C.ink50 }}>{k}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: DN_C.ink, marginTop: 4 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo mosaic — horizontal + portrait overlap */}
        <div style={{ position: 'relative', minHeight: isMobile ? 360 : 540, minWidth: 0 }}>
          {/* Horizontal central board */}
          <div style={{
            position: 'absolute', top: 20, right: 0, width: '88%', aspectRatio: '16/9',
            borderRadius: 14, overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(14,26,36,0.28), 0 0 0 1px rgba(14,26,36,0.08)',
            transform: 'rotate(0.6deg)',
          }}>
            <img src="../assets/display-network/midtown-eats-central-board.png"
              alt="Midtown Eats central board running Musubi Display Network"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{
              position: 'absolute', top: 12, left: 12,
              background: 'rgba(14,26,36,0.85)', backdropFilter: 'blur(8px)', color: 'white',
              padding: '5px 10px', borderRadius: 999, fontSize: 10, fontWeight: 700,
              letterSpacing: '0.08em', display: 'inline-flex', alignItems: 'center', gap: 6,
            }}>
              <span style={{ width: 5, height: 5, borderRadius: 999, background: '#4ADE80' }}></span>
              MIDTOWN EATS · CENTRAL BOARD
            </div>
          </div>

          {/* Portrait pickup */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, width: '32%', aspectRatio: '9/16',
            borderRadius: 14, overflow: 'hidden',
            boxShadow: '0 32px 80px rgba(14,26,36,0.32), 0 0 0 1px rgba(14,26,36,0.1)',
            transform: 'rotate(-2deg)', zIndex: 2,
          }}>
            <img src="../assets/display-network/soul-chicken-pickup-display.png"
              alt="Soul Chicken pickup display running Musubi Display Network"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{
              position: 'absolute', bottom: 12, left: 12,
              background: 'rgba(255,255,255,0.95)', color: DN_C.ink,
              padding: '5px 10px', borderRadius: 999, fontSize: 10, fontWeight: 700,
              letterSpacing: '0.08em',
            }}>SOUL CHICKEN · PICKUP</div>
          </div>

          {/* Floating live ticker chip */}
          <div style={{
            position: 'absolute', top: '36%', right: '-3%',
            background: DN_C.ink, color: 'white', borderRadius: 12,
            padding: '12px 16px', boxShadow: '0 12px 32px rgba(14,26,36,0.32)',
            transform: 'rotate(2deg)', zIndex: 3, minWidth: 200,
          }}>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.14em',
              color: DN_C.gold, textTransform: 'uppercase', marginBottom: 4 }}>
              ● Now playing
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '-0.01em' }}>
              Korean news · 韓国語ニュース
            </div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>
              + 1,752 ready · QR giveaway live
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DNAudience() {
  const isMobile = useIsMobile();
  return (
    <section style={{
      background: DN_C.ink, color: 'white', padding: isMobile ? '56px 20px' : '88px 32px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: DN_C.gold, marginBottom: 14 }}>
          Who it's for
        </div>
        <h2 style={{ fontSize: isMobile ? 'clamp(26px, 7.5vw, 34px)' : 'clamp(36px, 4.5vw, 60px)', lineHeight: 1.05,
          letterSpacing: '-0.025em', fontWeight: 700, margin: '0 0 12px', maxWidth: 800 }}>
          Any room with a TV becomes a channel.
        </h2>
        <p style={{ fontSize: isMobile ? 14 : 17, color: 'rgba(255,255,255,0.7)',
          maxWidth: 720, margin: isMobile ? '0 0 28px' : '0 0 48px', lineHeight: 1.55 }}>
          Built for Hawaii small businesses — restaurants, markets, bars, beauty shops.
          Same hardware, same software. The content adapts to your floor.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(240px, 1fr))', gap: isMobile ? 10 : 14 }}>
          {DN_AUDIENCE.map(a => (
            <div key={a.v} style={{
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 14, padding: '24px 22px',
            }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{a.emoji}</div>
              <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 6 }}>
                {a.label}
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>
                {a.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DNModes() {
  const isMobile = useIsMobile();
  return (
    <section id="how" style={{ padding: isMobile ? '56px 20px' : '96px 32px', background: DN_C.bgAlt }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: DN_C.goldDeep, marginBottom: 14 }}>
          One screen, three jobs
        </div>
        <h2 style={{ fontSize: isMobile ? 'clamp(26px, 7.5vw, 34px)' : 'clamp(36px, 4.5vw, 60px)', lineHeight: 1.05,
          letterSpacing: '-0.025em', fontWeight: 700, margin: isMobile ? '0 0 28px' : '0 0 56px', color: DN_C.ink, maxWidth: 800 }}>
          The TV runs three things at once. <br/>
          <span style={{ color: DN_C.ink50 }}>Guests never get bored.</span>
        </h2>

        <div style={{
          display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1.1fr) minmax(0, 1fr)', gap: isMobile ? 24 : 48, alignItems: 'center',
        }}>
          {/* Diagram */}
          <div style={{
            position: 'relative', background: DN_C.ink, borderRadius: 16,
            aspectRatio: '16/9', overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(14,26,36,0.32)',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(232,179,57,0.18) 0%, rgba(184,63,138,0.12) 50%, rgba(14,91,168,0.18) 100%)',
            }}></div>
            {/* News + weather */}
            <div style={{
              position: 'absolute', top: 18, left: 18, right: '34%', bottom: '32%',
              border: `2px dashed ${DN_C.gold}88`, borderRadius: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: DN_C.gold, fontSize: 13, fontWeight: 700, letterSpacing: '0.06em',
            }}>📺 News + Weather</div>
            {/* Order numbers */}
            <div style={{
              position: 'absolute', top: 18, right: 18, width: '30%', bottom: '32%',
              border: `2px dashed ${DN_C.crimson}88`, borderRadius: 10,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              color: DN_C.crimson, fontSize: 12, fontWeight: 700, letterSpacing: '0.06em',
            }}>
              <span style={{ fontSize: 28, fontWeight: 800, color: 'white' }}>1752</span>
              <span style={{ marginTop: 4 }}>📋 Pickup</span>
            </div>
            {/* Promo footer */}
            <div style={{
              position: 'absolute', bottom: 18, left: 18, right: 18, height: '28%',
              border: `2px dashed ${DN_C.glowMagenta}88`, borderRadius: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: DN_C.glowMagenta, fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', gap: 12,
            }}>🎁 Promos + QR giveaway</div>
          </div>

          {/* Modes list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {DN_MODES.map((m, i) => {
              const colors = [DN_C.gold, DN_C.crimson, DN_C.glowMagenta];
              return (
                <div key={i} style={{
                  background: DN_C.surface, borderRadius: 14, padding: '22px 24px',
                  borderLeft: `4px solid ${colors[i]}`,
                  boxShadow: '0 6px 20px rgba(14,26,36,0.06)',
                }}>
                  <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.01em',
                    color: DN_C.ink, marginBottom: 6 }}>
                    {m.title}
                  </div>
                  <div style={{ fontSize: 14, color: DN_C.ink70, lineHeight: 1.55 }}>
                    {m.body}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function DNContent() {
  const isMobile = useIsMobile();
  return (
    <section style={{ padding: isMobile ? '56px 20px' : '96px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: DN_C.goldDeep, marginBottom: 14 }}>
          Content mix
        </div>
        <h2 style={{ fontSize: isMobile ? 'clamp(26px, 7.5vw, 34px)' : 'clamp(36px, 4.5vw, 60px)', lineHeight: 1.05,
          letterSpacing: '-0.025em', fontWeight: 700, margin: '0 0 14px', color: DN_C.ink, maxWidth: 800 }}>
          Six channels of content. <br/>You pick the rotation.
        </h2>
        <p style={{ fontSize: isMobile ? 14 : 17, color: DN_C.ink70, maxWidth: 720, margin: isMobile ? '0 0 28px' : '0 0 48px', lineHeight: 1.55 }}>
          Mix and match for your room. Bar wants more sports. Korean BBQ wants Korean news.
          Convenience store wants near-expiry promos. We tune it once, then it runs itself.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: isMobile ? 10 : 14 }}>
          {DN_CONTENT.map((c, i) => (
            <div key={i} style={{
              background: DN_C.surface, border: `1px solid ${DN_C.ink10}`,
              borderRadius: 14, padding: '24px 24px',
            }}>
              <div style={{
                display: 'inline-block', fontSize: 10, fontWeight: 800, letterSpacing: '0.14em',
                color: c.color, padding: '4px 10px',
                background: `${c.color}14`, borderRadius: 999, marginBottom: 14,
              }}>
                {c.tag}
              </div>
              <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.01em',
                color: DN_C.ink, marginBottom: 8 }}>
                {c.label}
              </div>
              <div style={{ fontSize: 14, color: DN_C.ink70, lineHeight: 1.55 }}>
                {c.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DNClover() {
  const isMobile = useIsMobile();
  return (
    <section style={{ padding: isMobile ? '56px 20px' : '96px 32px', background: DN_C.bgAlt }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1fr) minmax(0, 1.2fr)',
          gap: isMobile ? 28 : 48, alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase', color: DN_C.goldDeep, marginBottom: 14 }}>
              Clover integration
            </div>
            <h2 style={{ fontSize: isMobile ? 'clamp(26px, 7.5vw, 32px)' : 'clamp(34px, 4vw, 52px)', lineHeight: 1.05,
              letterSpacing: '-0.025em', fontWeight: 700, margin: '0 0 16px', color: DN_C.ink }}>
              The TV updates itself.
            </h2>
            <p style={{ fontSize: 16, color: DN_C.ink70, lineHeight: 1.6, margin: '0 0 24px' }}>
              Two-way Clover sync. Your menu, your specials, your sale stickers, your order numbers — all
              flow into the screen automatically. You change a price in Clover; the TV reflects it within seconds.
            </p>
            <div style={{
              background: DN_C.ink, color: 'white', borderRadius: 12, padding: '20px 22px',
              borderLeft: `4px solid ${DN_C.gold}`,
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
                color: DN_C.gold, textTransform: 'uppercase', marginBottom: 6 }}>
                The shortcut
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.55 }}>
                You don't open a separate app to "publish" promos. You manage your menu in Clover like always.
                The screen just listens.
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(220px, 1fr))', gap: isMobile ? 10 : 12 }}>
            {DN_CLOVER.map((c, i) => (
              <div key={i} style={{
                background: DN_C.surface, border: `1px solid ${DN_C.ink10}`,
                borderRadius: 12, padding: '20px 20px',
              }}>
                <div style={{ fontSize: 26, marginBottom: 10 }}>{c.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.01em',
                  color: DN_C.ink, marginBottom: 6 }}>
                  {c.label}
                </div>
                <div style={{ fontSize: 13, color: DN_C.ink70, lineHeight: 1.5 }}>
                  {c.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DNDesigner() {
  const isMobile = useIsMobile();
  return (
    <section style={{ padding: isMobile ? '56px 20px' : '96px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: DN_C.goldDeep, marginBottom: 14 }}>
          No designer needed
        </div>
        <h2 style={{ fontSize: isMobile ? 'clamp(28px, 8vw, 38px)' : 'clamp(36px, 5vw, 64px)', lineHeight: 1.02,
          letterSpacing: '-0.03em', fontWeight: 700, margin: '0 0 16px', color: DN_C.ink }}>
          Upload a photo. <span style={{ color: DN_C.goldDeep }}>That's the design.</span>
        </h2>
        <p style={{ fontSize: isMobile ? 14 : 17, color: DN_C.ink70, maxWidth: 700, margin: isMobile ? '0 auto 28px' : '0 auto 48px', lineHeight: 1.6 }}>
          Most digital signage forces you to hire a designer or buy a $100/mo template app.
          We hand you a library of pre-built layouts that look like real campaigns — drop in your photo and a one-line description, you're live.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(220px, 1fr))', gap: isMobile ? 10 : 14, textAlign: 'left' }}>
          {DN_AUTOMATION.map((a, i) => (
            <div key={i} style={{
              background: DN_C.bgAlt, border: `1px solid ${DN_C.ink10}`,
              borderRadius: 12, padding: '22px 22px',
            }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: DN_C.crimson, marginBottom: 10 }}>
                {a.k}
              </div>
              <div style={{ fontSize: 14, color: DN_C.ink, lineHeight: 1.55 }}>
                {a.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DNLayouts() {
  const isMobile = useIsMobile();
  return (
    <section style={{ padding: isMobile ? '56px 20px' : '96px 32px', background: DN_C.ink, color: 'white' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: DN_C.gold, marginBottom: 14 }}>
          Live builds
        </div>
        <h2 style={{ fontSize: isMobile ? 'clamp(26px, 7.5vw, 34px)' : 'clamp(36px, 4.5vw, 60px)', lineHeight: 1.05,
          letterSpacing: '-0.025em', fontWeight: 700, margin: '0 0 12px', maxWidth: 760 }}>
          Two flavors. Same system.
        </h2>
        <p style={{ fontSize: isMobile ? 14 : 17, color: 'rgba(255,255,255,0.7)', maxWidth: 720,
          margin: isMobile ? '0 0 28px' : '0 0 48px', lineHeight: 1.55 }}>
          Horizontal central boards for rooms with one big screen. Portrait pickup displays for counters and walls.
          Most stores run both — same content, two presentations.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 2fr) minmax(0, 1fr)', gap: isMobile ? 14 : 24 }}>
          {DN_LAYOUTS.map((l, i) => (
            <div key={l.v} style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 14, overflow: 'hidden',
            }}>
              <div style={{ aspectRatio: l.shape, background: '#000' }}>
                <img src={l.photo} alt={l.label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '20px 22px' }}>
                <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 6 }}>
                  {l.label}
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>
                  {l.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DNData() {
  const isMobile = useIsMobile();
  return (
    <section style={{ padding: isMobile ? '56px 20px' : '96px 32px', background: DN_C.bgAlt }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: DN_C.goldDeep, marginBottom: 14 }}>
          Marketing flywheel
        </div>
        <h2 style={{ fontSize: isMobile ? 'clamp(26px, 7.5vw, 34px)' : 'clamp(36px, 4.5vw, 60px)', lineHeight: 1.05,
          letterSpacing: '-0.025em', fontWeight: 700, margin: '0 0 14px', color: DN_C.ink, maxWidth: 800 }}>
          The TV doesn't just inform — <span style={{ color: DN_C.goldDeep }}>it captures.</span>
        </h2>
        <p style={{ fontSize: isMobile ? 14 : 17, color: DN_C.ink70, maxWidth: 720, margin: isMobile ? '0 0 28px' : '0 0 48px', lineHeight: 1.55 }}>
          Every visitor scans the QR for a chance to win something. You get phone numbers and emails.
          Now you can text them when they haven't been back in 30 days.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(260px, 1fr))', gap: isMobile ? 10 : 14 }}>
          {DN_DATA_FEATURES.map((d, i) => (
            <div key={i} style={{
              background: DN_C.surface, border: `1px solid ${DN_C.ink10}`,
              borderRadius: 14, padding: '24px 24px',
            }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{d.icon}</div>
              <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.01em',
                color: DN_C.ink, marginBottom: 8 }}>
                {d.label}
              </div>
              <div style={{ fontSize: 13, color: DN_C.ink70, lineHeight: 1.55 }}>
                {d.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DNOffer() {
  const isMobile = useIsMobile();
  return (
    <section style={{ padding: isMobile ? '56px 20px' : '96px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: DN_C.goldDeep, marginBottom: 14 }}>
          What you get
        </div>
        <h2 style={{ fontSize: isMobile ? 'clamp(26px, 7.5vw, 34px)' : 'clamp(36px, 4.5vw, 60px)', lineHeight: 1.05,
          letterSpacing: '-0.025em', fontWeight: 700, margin: isMobile ? '0 0 28px' : '0 0 48px', color: DN_C.ink, maxWidth: 800 }}>
          One package. <span style={{ color: DN_C.ink50 }}>End-to-end.</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: isMobile ? 10 : 12 }}>
          {DN_OFFER.map((o, i) => (
            <div key={i} style={{
              background: DN_C.bgAlt, borderRadius: 12, padding: '22px 24px',
              borderTop: `3px solid ${DN_C.gold}`,
            }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: DN_C.goldDeep, marginBottom: 8 }}>
                Included
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.01em',
                color: DN_C.ink, marginBottom: 6 }}>
                {o.k}
              </div>
              <div style={{ fontSize: 13, color: DN_C.ink70, lineHeight: 1.55 }}>
                {o.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DNContact() {
  const isMobile = useIsMobile();
  return (
    <section id="contact" style={{ padding: isMobile ? '64px 20px' : '96px 32px', background: DN_C.ink, color: 'white' }}>
      <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: DN_C.gold, marginBottom: 14 }}>
          Get started
        </div>
        <h2 style={{ fontSize: isMobile ? 'clamp(34px, 10vw, 48px)' : 'clamp(40px, 5vw, 68px)', lineHeight: 1.02,
          letterSpacing: '-0.03em', fontWeight: 700, margin: '0 0 16px' }}>
          Light up your TVs.
        </h2>
        <p style={{ fontSize: isMobile ? 14 : 17, color: 'rgba(255,255,255,0.7)',
          maxWidth: 600, margin: isMobile ? '0 auto 24px' : '0 auto 36px', lineHeight: 1.6 }}>
          Send us your floor plan or a photo of your existing TVs.
          We'll come back with a layout proposal, a content rotation, and a number — usually same day.
        </p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:info@alohasmartsystem.com?subject=Musubi%20Display%20Network%20-%20Quote" style={{
            background: DN_C.gold, color: DN_C.ink, padding: isMobile ? '14px 26px' : '16px 32px', borderRadius: 999,
            fontWeight: 700, fontSize: isMobile ? 14 : 15, whiteSpace: 'nowrap',
          }}>Get in touch →</a>
          <a href="../find-your-fit.html" style={{
            background: 'transparent', color: 'white',
            border: '1.5px solid rgba(255,255,255,0.5)', padding: isMobile ? '12.5px 22px' : '14.5px 30px',
            borderRadius: 999, fontWeight: 600, fontSize: isMobile ? 13 : 14, whiteSpace: 'nowrap',
          }}>Take the 60-second fit quiz</a>
        </div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 28 }}>
          Built in Honolulu &middot; Clover-authorized &middot; (808) 650-3331
        </div>
      </div>
    </section>
  );
}

function DNFooter() {
  return (
    <footer style={{ padding: '24px 32px', borderTop: `1px solid ${DN_C.ink10}`, background: DN_C.bg }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', fontSize: 12, color: DN_C.ink50,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textAlign: 'center' }}>
        <div>Musubi Display Network &middot; part of Aloha Smart System &middot; Musubi Media LLC</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, flexWrap: 'wrap', justifyContent: 'center' }}>
          <span>Authorized partner of</span>
          <CardConnectMark scale={0.55} />
          <span>· CCS HQ (877) 682-1117</span>
        </div>
      </div>
    </footer>
  );
}

function DisplayNetworkPage() {
  return (
    <div style={{ background: DN_C.bg, color: DN_C.ink,
      fontFamily: "'Inter Tight', system-ui, sans-serif", minHeight: '100vh' }}>
      <DNNav />
      <DNHero />
      <DNAudience />
      <DNModes />
      <DNContent />
      <DNClover />
      <DNDesigner />
      <DNLayouts />
      <DNData />
      <DNOffer />
      <DNContact />
      <DNFooter />
    </div>
  );
}

window.DisplayNetworkPage = DisplayNetworkPage;
