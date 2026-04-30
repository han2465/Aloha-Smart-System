// Inventory Master — page components

// Shared A· wordmark
function IMLogoA({ size = 28, dark = false }) {
  const ink = dark ? '#F5EFE6' : IM_C.ink;
  const dotColor = dark ? IM_C.tealMist : IM_C.teal;
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

function IMNav() {
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
      borderBottom: `1px solid ${IM_C.ink10}`,
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto',
        padding: isMobile ? '12px 18px' : '14px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="../index.html" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <IMLogoA size={isMobile ? 24 : 28} />
          <div style={{ fontWeight: 700, fontSize: isMobile ? 14 : 16, letterSpacing: '-0.01em', color: IM_C.ink }}>
            Aloha Smart System
          </div>
        </a>
        {!isMobile && (
          <div style={{ display: 'flex', gap: 28, alignItems: 'center', fontSize: 14 }}>
            {links.map(([href, label]) => (
              <a key={href} href={href} style={{ color: IM_C.ink70, whiteSpace: 'nowrap' }}>{label}</a>
            ))}
            <a href="#contact" style={{
              background: IM_C.teal, color: 'white', padding: '9px 18px',
              borderRadius: 999, fontWeight: 600, whiteSpace: 'nowrap',
            }}>Book a demo</a>
          </div>
        )}
        {isMobile && (
          <button onClick={() => setOpen(!open)} style={{
            background: 'transparent', border: 'none', padding: 8,
            display: 'flex', flexDirection: 'column', gap: 4, cursor: 'pointer',
          }}>
            <span style={{ width: 22, height: 2, background: IM_C.ink, transition: 'transform 0.2s', transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
            <span style={{ width: 22, height: 2, background: IM_C.ink, opacity: open ? 0 : 1 }} />
            <span style={{ width: 22, height: 2, background: IM_C.ink, transition: 'transform 0.2s', transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
          </button>
        )}
      </div>
      {isMobile && open && (
        <div style={{
          background: IM_C.bg, borderTop: `1px solid ${IM_C.ink10}`,
          padding: '14px 18px 22px', display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {links.map(([href, label]) => (
            <a key={href} href={href} style={{
              color: IM_C.ink, padding: '12px 8px', fontSize: 16, fontWeight: 500,
              borderBottom: `1px solid ${IM_C.ink10}`,
            }}>{label}</a>
          ))}
          <a href="#contact" style={{
            background: IM_C.teal, color: 'white', padding: '14px 18px',
            borderRadius: 999, fontWeight: 600, marginTop: 14, textAlign: 'center',
          }}>Book a demo</a>
        </div>
      )}
    </nav>
  );
}

function IMHero() {
  const isMobile = useIsMobile();
  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '36px 20px 32px' : '64px 32px 48px' }}>
      <a href="../index.html#products" style={{
        fontSize: 13, color: IM_C.teal, fontWeight: 600, whiteSpace: 'nowrap',
      }}>← All products</a>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px',
        background: IM_C.tealMist, border: `1px solid ${IM_C.teal}40`, borderRadius: 999,
        fontSize: isMobile ? 11 : 12, fontWeight: 700, color: IM_C.tealDeep, letterSpacing: '0.08em',
        textTransform: 'uppercase', marginTop: 16, marginLeft: isMobile ? 0 : 14 }}>
        <span style={{ width: 6, height: 6, borderRadius: 999, background: IM_C.teal }}></span>
        Inventory · Part of Aloha Smart System
      </div>
      <h1 style={{ fontSize: isMobile ? 'clamp(34px, 9vw, 46px)' : 'clamp(48px, 7vw, 96px)',
        lineHeight: isMobile ? 1.02 : 0.96,
        letterSpacing: '-0.035em', fontWeight: 700, margin: isMobile ? '16px 0 16px' : '20px 0 20px',
        color: IM_C.ink, maxWidth: 1100 }}>
        Know what you have.<br/>
        <span style={{ color: IM_C.teal }}>Order before you run out.</span>
      </h1>
      <p style={{ fontSize: isMobile ? 16 : 'clamp(18px, 1.5vw, 22px)', lineHeight: 1.5,
        color: IM_C.ink70, maxWidth: 760, margin: '0 0 14px' }}>
        Five minutes to set up. Two weeks for the system to learn your store. After that,
        it tells you when to reorder — for restaurants, liquor stores, bars, and corner markets.
      </p>
      <p style={{ fontSize: isMobile ? 13 : 14, lineHeight: 1.6, color: IM_C.ink50, maxWidth: 700, marginBottom: isMobile ? 24 : 32 }}>
        Independent SaaS. Connects to Clover POS so sales auto-decrement stock and reorders fire themselves.
      </p>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <a href="https://inventory.soulchickenhawaii.com" target="_blank" rel="noopener" style={{
          background: IM_C.ink, color: 'white',
          padding: isMobile ? '14px 22px' : '16px 28px', borderRadius: 999, fontWeight: 600,
          fontSize: isMobile ? 14 : 15, whiteSpace: 'nowrap',
        }}>See it live →</a>
        <a href="#contact" style={{ background: 'transparent', color: IM_C.ink,
          border: `1.5px solid ${IM_C.ink30}`, padding: isMobile ? '12.5px 20px' : '14.5px 26px', borderRadius: 999,
          fontWeight: 600, fontSize: isMobile ? 14 : 15, whiteSpace: 'nowrap' }}>Get in touch</a>
      </div>
    </section>
  );
}

function IMReferenceBuild() {
  const isMobile = useIsMobile();
  return (
    <section id="live-demo" style={{
      background: IM_C.bgAlt,
      backgroundImage: IM_PLUMERIA_BG,
      backgroundSize: '120px 120px',
      padding: isMobile ? '48px 20px' : '72px 32px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.1fr 1fr',
          gap: isMobile ? 32 : 64, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase', color: IM_C.teal, marginBottom: 14 }}>
              Reference build
            </div>
            <h2 style={{ fontSize: isMobile ? 'clamp(28px, 8vw, 38px)' : 'clamp(36px, 4.5vw, 56px)', lineHeight: 1.05,
              letterSpacing: '-0.025em', fontWeight: 700, margin: '0 0 16px', color: IM_C.ink }}>
              Soul Chicken Hawaii.<br/>Anthony's own restaurants.
            </h2>
            <p style={{ fontSize: isMobile ? 15 : 18, lineHeight: 1.6, color: IM_C.ink70, marginBottom: 18 }}>
              Inventory Master wasn't built by engineers guessing what restaurants need.
              It was built by Anthony Han for his two Korean fried chicken stores in
              Kalihi and Ke'eaumoku — running production every day at <a
                href="https://inventory.soulchickenhawaii.com" target="_blank" rel="noopener"
                style={{ color: IM_C.teal, fontWeight: 600 }}>inventory.soulchickenhawaii.com</a>.
            </p>
            <p style={{ fontSize: isMobile ? 14 : 15, lineHeight: 1.6, color: IM_C.ink70, marginBottom: 24 }}>
              Eighteen months of real shifts, real counts, real reorders. When you read
              "the system suggests," it means the system has been suggesting things in
              Anthony's kitchen for over a year.
            </p>
            <div style={{ display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: isMobile ? 12 : 20, marginBottom: 24 }}>
              {[['2', 'Stores'], ['18 mo', 'In production'], ['~120', 'SKUs counted'], ['0', 'Stockouts']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontSize: isMobile ? 22 : 28, fontWeight: 800, letterSpacing: '-0.02em', color: IM_C.ink }}>{n}</div>
                  <div style={{ fontSize: isMobile ? 11 : 12, color: IM_C.ink50 }}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 11, color: IM_C.ink50, fontStyle: 'italic' }}>
              Live at inventory.soulchickenhawaii.com. Tenant data isolated per store.
            </div>
          </div>
          <div style={{
            background: IM_C.surface, borderRadius: 16, padding: isMobile ? 18 : 24,
            border: `1px solid ${IM_C.ink10}`,
            boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16,
              paddingBottom: 14, borderBottom: `1px solid ${IM_C.ink10}` }}>
              <div style={{ width: 10, height: 10, borderRadius: 999, background: IM_C.palm,
                boxShadow: `0 0 0 4px ${IM_C.palm}33` }}></div>
              <div style={{ fontSize: 13, fontWeight: 700, color: IM_C.ink }}>Live</div>
              <div style={{ fontSize: 12, color: IM_C.ink50 }}>· inventory.soulchickenhawaii.com</div>
            </div>
            <div style={{ display: 'grid', gap: 12 }}>
              {[
                { store: 'Kalihi', color: IM_C.kalihi, items: 16, last: '2h ago' },
                { store: 'Ke’eaumoku', color: IM_C.teal, items: 24, last: '4h ago' },
              ].map(s => (
                <div key={s.store} style={{
                  background: IM_C.bg, borderRadius: 12, padding: '14px 16px',
                  display: 'flex', alignItems: 'center', gap: 14,
                  borderLeft: `4px solid ${s.color}`,
                }}>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: IM_C.ink }}>{s.store}</div>
                    <div style={{ fontSize: 12, color: IM_C.ink50 }}>Last count {s.last}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: s.color, letterSpacing: '-0.02em' }}>{s.items}</div>
                    <div style={{ fontSize: 11, color: IM_C.ink50 }}>items</div>
                  </div>
                </div>
              ))}
              <div style={{ background: IM_C.tealMist, borderRadius: 12, padding: '14px 16px',
                fontSize: 13, color: IM_C.tealDeep, lineHeight: 1.5 }}>
                <strong>Same code. Different colors.</strong> Tenants get their own brand color
                injected at runtime — Kalihi runs red, Ke’eaumoku runs teal.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IMSegments() {
  const isMobile = useIsMobile();
  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '56px 20px' : '96px 32px' }}>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em',
        textTransform: 'uppercase', color: IM_C.ink50, marginBottom: 16 }}>
        Who it's for
      </div>
      <h2 style={{ fontSize: isMobile ? 'clamp(28px, 8vw, 38px)' : 'clamp(36px, 4.5vw, 56px)', lineHeight: 1.05,
        letterSpacing: '-0.025em', fontWeight: 700, margin: '0 0 14px', color: IM_C.ink, maxWidth: 1000 }}>
        One inventory engine. Four very different storefronts.
      </h2>
      <p style={{ fontSize: isMobile ? 15 : 17, lineHeight: 1.6, color: IM_C.ink70, maxWidth: 760, marginBottom: isMobile ? 32 : 56 }}>
        The hardware changes — register, scale, scanner. The math changes — perishables, par levels,
        shot pours. The principle doesn't: count what you have, watch what sells, reorder before you run out.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: isMobile ? 14 : 20 }}>
        {IM_SEGMENTS.map(s => {
          const isLive = s.status === 'live';
          const statusLabel = isLive ? 'Live in production'
            : s.status === 'in-progress' ? 'Rolling out' : 'Coming next';
          const statusBg = isLive ? `${IM_C.palm}1A`
            : s.status === 'in-progress' ? `${IM_C.gold}1A` : IM_C.ink10;
          const statusColor = isLive ? IM_C.palm
            : s.status === 'in-progress' ? IM_C.gold : IM_C.ink70;
          return (
            <div key={s.id} style={{
              background: IM_C.surface, border: `1px solid ${IM_C.ink10}`,
              borderRadius: 18, padding: isMobile ? 22 : 32,
              borderTop: `4px solid ${s.color}`,
              display: 'flex', flexDirection: 'column', gap: 16,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: s.color,
                  letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</div>
                <div style={{ fontSize: 11, fontWeight: 700, padding: '4px 10px',
                  background: statusBg, color: statusColor, borderRadius: 999,
                  letterSpacing: '0.06em', textTransform: 'uppercase' }}>{statusLabel}</div>
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.015em',
                lineHeight: 1.2, color: IM_C.ink, margin: 0 }}>{s.headline}</h3>
              <div style={{ fontSize: 14, color: IM_C.ink70, fontStyle: 'italic', lineHeight: 1.5 }}>
                {s.proof}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
                {s.bullets.map(b => (
                  <li key={b} style={{ fontSize: 14, color: IM_C.ink, display: 'flex', gap: 10, lineHeight: 1.45 }}>
                    <span style={{ color: s.color, fontWeight: 700 }}>→</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function IMModuleGallery() {
  const isMobile = useIsMobile();
  return (
    <section id="modules" style={{ background: IM_C.surface, padding: isMobile ? '56px 20px' : '96px 32px',
      borderTop: `1px solid ${IM_C.ink08}`, borderBottom: `1px solid ${IM_C.ink08}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: IM_C.teal, marginBottom: 16 }}>
          The eight modules
        </div>
        <h2 style={{ fontSize: isMobile ? 'clamp(28px, 8vw, 38px)' : 'clamp(36px, 4.5vw, 56px)', lineHeight: 1.05,
          letterSpacing: '-0.025em', fontWeight: 700, margin: '0 0 14px', color: IM_C.ink, maxWidth: 900 }}>
          Every screen Anthony actually uses.
        </h2>
        <p style={{ fontSize: isMobile ? 15 : 17, lineHeight: 1.6, color: IM_C.ink70, maxWidth: 740, marginBottom: isMobile ? 36 : 64 }}>
          Not a feature list — eight working modules in production at Soul Chicken right now.
        </p>
        {IM_MODULES.map((m, i) => (
          <IMModuleRow key={m.label} m={m} flip={i % 2 === 1} last={i === IM_MODULES.length - 1} />
        ))}
      </div>
    </section>
  );
}

function IMModuleRow({ m, flip, last }) {
  const isMobile = useIsMobile();
  const hasShot = !!m.screenshot;
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : (hasShot ? '1fr 1.1fr' : '1fr'),
      gap: isMobile ? 24 : (hasShot ? 64 : 0),
      alignItems: 'center',
      padding: isMobile ? '32px 0' : '56px 0',
      borderBottom: last ? 'none' : `1px solid ${IM_C.ink08}`,
      direction: !isMobile && hasShot && flip ? 'rtl' : 'ltr',
    }}>
      <div style={{ direction: 'ltr', maxWidth: hasShot ? 'none' : 760 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: IM_C.teal, letterSpacing: '0.14em',
          textTransform: 'uppercase', marginBottom: 12 }}>
          {m.label}
        </div>
        <h3 style={{ fontSize: isMobile ? 'clamp(22px, 6vw, 28px)' : 'clamp(26px, 2.6vw, 36px)', lineHeight: 1.1,
          letterSpacing: '-0.02em', fontWeight: 700, margin: '0 0 14px', color: IM_C.ink }}>
          {m.title}
        </h3>
        <p style={{ fontSize: isMobile ? 15 : 16, lineHeight: 1.6, color: IM_C.ink70, marginBottom: 18 }}>
          {m.description}
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
          {m.bullets.map(b => (
            <li key={b} style={{ fontSize: 14, color: IM_C.ink, display: 'flex', gap: 10, lineHeight: 1.45 }}>
              <span style={{ color: IM_C.teal, fontWeight: 700 }}>→</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
      {hasShot && (
        <div style={{ direction: 'ltr' }}>
          <div style={{
            background: IM_C.bg, borderRadius: 14, padding: 14,
            border: `1px solid ${IM_C.ink10}`,
            boxShadow: '0 12px 32px rgba(0,0,0,0.06)',
          }}>
            <img src={m.screenshot} alt={m.screenshotAlt}
              style={{ width: '100%', height: 'auto', display: 'block',
                borderRadius: 8, border: `1px solid ${IM_C.ink08}` }}
            />
          </div>
          {m.caption && (
            <div style={{ fontSize: 12, color: IM_C.ink50, marginTop: 10, fontStyle: 'italic', lineHeight: 1.5 }}>
              {m.caption}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function IMLearningMode() {
  const isMobile = useIsMobile();
  return (
    <section style={{ background: IM_C.ink, color: 'white', padding: isMobile ? '56px 20px' : '96px 32px',
      backgroundImage: `linear-gradient(180deg, ${IM_C.ink} 0%, #0d1418 100%)` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr', gap: isMobile ? 32 : 80, alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase', color: IM_C.tealMist, marginBottom: 16 }}>
              The learning mode
            </div>
            <h2 style={{ fontSize: isMobile ? 'clamp(28px, 8vw, 38px)' : 'clamp(36px, 4.5vw, 56px)', lineHeight: 1.05,
              letterSpacing: '-0.025em', fontWeight: 700, margin: '0 0 20px' }}>
              We learn your store. <span style={{ color: IM_C.teal }}>You don't fill out a form.</span>
            </h2>
            <p style={{ fontSize: isMobile ? 15 : 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)', marginBottom: 18 }}>
              Other systems make you input lead times, par levels, reorder points. That's
              jargon for "we don't want to do this work, you do it."
            </p>
            <p style={{ fontSize: isMobile ? 15 : 18, lineHeight: 1.6, color: 'rgba(255,255,255,0.75)', marginBottom: 28 }}>
              Inventory Master watches the actual counts for two weeks, then drops sixty
              suggestions on your screen. Apply them all, or tweak each one. That's the
              setup.
            </p>
            <div style={{ background: 'rgba(14,140,158,0.15)', border: `1px solid ${IM_C.teal}66`,
              borderRadius: 12, padding: isMobile ? '14px 16px' : '16px 20px' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: IM_C.tealMist,
                letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>
                What competitors say
              </div>
              <div style={{ fontSize: isMobile ? 13 : 14, color: 'rgba(255,255,255,0.7)', marginBottom: 14, fontStyle: 'italic' }}>
                "Please input the reorder point, lead time in days, safety stock, and supplier minimum order quantity for each of your 120 SKUs."
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, color: IM_C.tealMist,
                letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>
                What we say
              </div>
              <div style={{ fontSize: isMobile ? 14 : 16, color: 'white', fontWeight: 600 }}>
                "Just count for two weeks. We'll handle it from there."
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gap: 14 }}>
            {IM_LEARNING_STAGES.map((s, i) => (
              <div key={s.week} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 14, padding: isMobile ? 18 : 24,
                display: 'grid', gridTemplateColumns: isMobile ? '90px 1fr' : '120px 1fr', gap: isMobile ? 14 : 24,
              }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: IM_C.tealMist,
                    letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>
                    Stage 0{i + 1}
                  </div>
                  <div style={{ fontSize: isMobile ? 13 : 15, fontWeight: 700, color: 'white' }}>{s.week}</div>
                </div>
                <div>
                  <div style={{ fontSize: isMobile ? 18 : 22, fontWeight: 700, letterSpacing: '-0.015em',
                    color: 'white', marginBottom: 8 }}>{s.label}</div>
                  <div style={{ fontSize: isMobile ? 13 : 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{s.body}</div>
                </div>
              </div>
            ))}
            <div style={{
              background: 'rgba(14,140,158,0.18)',
              border: `1px solid ${IM_C.teal}`,
              borderRadius: 14, padding: isMobile ? 18 : 24,
              display: 'flex', alignItems: 'center', gap: isMobile ? 12 : 18, flexWrap: 'wrap',
            }}>
              <div style={{ fontSize: isMobile ? 28 : 36, fontWeight: 800, letterSpacing: '-0.02em',
                color: IM_C.tealMist, lineHeight: 1 }}>60</div>
              <div style={{ flex: '1 1 140px', minWidth: 0 }}>
                <div style={{ fontSize: isMobile ? 13 : 15, fontWeight: 700, color: 'white' }}>item suggestions ready</div>
                <div style={{ fontSize: isMobile ? 12 : 13, color: 'rgba(255,255,255,0.65)', marginTop: 2 }}>
                  Real screenshot from Anthony's Auto-Reorder dashboard
                </div>
              </div>
              <div style={{ background: IM_C.palm, color: 'white',
                padding: '8px 16px', borderRadius: 999, fontSize: isMobile ? 12 : 13, fontWeight: 700 }}>
                ✨ Apply All
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IMLearningProof() {
  const isMobile = useIsMobile();
  return (
    <section style={{ background: IM_C.bgAlt, padding: isMobile ? '48px 20px' : '72px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.4fr', gap: isMobile ? 28 : 64, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em',
              textTransform: 'uppercase', color: IM_C.teal, marginBottom: 14 }}>
              Proof — actual auto-reorder screen
            </div>
            <h3 style={{ fontSize: isMobile ? 'clamp(24px, 7vw, 32px)' : 'clamp(28px, 3.4vw, 42px)', lineHeight: 1.1,
              letterSpacing: '-0.02em', fontWeight: 700, margin: '0 0 18px', color: IM_C.ink }}>
              Sixty suggestions. One Apply All button.
            </h3>
            <p style={{ fontSize: isMobile ? 15 : 16, lineHeight: 1.6, color: IM_C.ink70, marginBottom: 14 }}>
              "Suggested: Min 1 · Order 3 (1/day)" — that's the system telling you
              "we've seen this item move at one per day, here's the reorder math we'd
              recommend."
            </p>
            <p style={{ fontSize: isMobile ? 15 : 16, lineHeight: 1.6, color: IM_C.ink70 }}>
              Note the "<strong>×2 learned</strong>" tag — that's the system telling you
              the math has been refined twice as new data came in. Velocity changes; the
              suggestions follow.
            </p>
          </div>
          <div style={{ background: IM_C.surface, borderRadius: 14, padding: isMobile ? 10 : 14,
            border: `1px solid ${IM_C.ink10}`, boxShadow: '0 12px 32px rgba(0,0,0,0.08)' }}>
            <img src="../assets/inventory-master/desktop-10-auto-reorder.png"
              alt="Auto-reorder suggestions screen — 60 item suggestions ready, Apply All"
              style={{ width: '100%', height: 'auto', display: 'block',
                borderRadius: 8, border: `1px solid ${IM_C.ink08}` }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function IMCloverIntegration() {
  const isMobile = useIsMobile();
  return (
    <section id="clover" style={{ background: IM_C.surface, padding: isMobile ? '56px 20px' : '96px 32px',
      borderTop: `1px solid ${IM_C.ink08}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: IM_C.teal, marginBottom: 16 }}>
          Why it lives inside Aloha Smart System
        </div>
        <h2 style={{ fontSize: isMobile ? 'clamp(28px, 8vw, 38px)' : 'clamp(36px, 4.5vw, 56px)', lineHeight: 1.05,
          letterSpacing: '-0.025em', fontWeight: 700, margin: '0 0 14px', color: IM_C.ink, maxWidth: 1000 }}>
          Clover sells it. We count it. The loop closes itself.
        </h2>
        <p style={{ fontSize: isMobile ? 15 : 17, lineHeight: 1.6, color: IM_C.ink70, maxWidth: 820, marginBottom: isMobile ? 32 : 56 }}>
          Inventory Master runs standalone — Soul Chicken proves that. But the magic
          happens when it talks to Clover POS. Every sale becomes a stock event. Every
          stock event can fire a reorder. The owner does <em>nothing</em>.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: isMobile ? 14 : 20, position: 'relative' }}>
          {IM_CLOVER_FLOW.map((step, i) => (
            <div key={step.step} style={{
              background: IM_C.bg,
              border: `1px solid ${IM_C.ink10}`,
              borderRadius: 16, padding: isMobile ? 22 : 28,
              position: 'relative',
            }}>
              <div style={{
                width: isMobile ? 36 : 40, height: isMobile ? 36 : 40, borderRadius: 999,
                background: IM_C.teal, color: 'white',
                display: 'grid', placeItems: 'center',
                fontSize: isMobile ? 16 : 18, fontWeight: 800,
                marginBottom: isMobile ? 14 : 18,
              }}>{step.step}</div>
              <div style={{ fontSize: isMobile ? 16 : 17, fontWeight: 700, color: IM_C.ink,
                letterSpacing: '-0.015em', marginBottom: 10, lineHeight: 1.25 }}>
                {step.label}
              </div>
              <div style={{ fontSize: isMobile ? 13 : 13, color: IM_C.ink70, lineHeight: 1.55 }}>
                {step.body}
              </div>
              {!isMobile && i < 3 && (
                <div style={{
                  position: 'absolute', right: -14, top: 48,
                  width: 28, height: 2, background: IM_C.ink15,
                  display: 'flex', alignItems: 'center',
                }}>
                  <span style={{ position: 'absolute', right: -4, top: -4,
                    width: 0, height: 0,
                    borderTop: '5px solid transparent',
                    borderBottom: '5px solid transparent',
                    borderLeft: `8px solid ${IM_C.ink30}` }}></span>
                </div>
              )}
            </div>
          ))}
        </div>
        <div style={{ marginTop: isMobile ? 32 : 48, padding: isMobile ? 22 : 28,
          background: IM_C.tealMist, borderRadius: 16,
          border: `1px solid ${IM_C.teal}40`,
          display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr', gap: isMobile ? 12 : 32, alignItems: 'center' }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: IM_C.tealDeep,
            letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            That’s why Aloha
          </div>
          <div style={{ fontSize: isMobile ? 15 : 17, color: IM_C.ink, lineHeight: 1.55 }}>
            Inventory Master, Food Court Master, Table Order, Delivery Hub —
            every Aloha module connects to Clover the same way. Buy one, plug in.
            Buy two, they share the same sales data. <strong>That’s the whole point of the umbrella.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function IMTechStack() {
  const isMobile = useIsMobile();
  const stack = [
    { label: 'Hardware', items: ['Staff phones (BYOD)', 'Tablet for admin', 'Barcode scanner (optional)', 'Smart scale — Bar mode, 2026'] },
    { label: 'Software', items: ['Next.js 16 + Tailwind v4', 'Prisma + Postgres', 'Multi-tenant per store', 'Mobile-first PWA'] },
    { label: 'Integrations', items: ['Clover POS — OAuth + webhooks', 'Twilio SMS', 'Telegram bot API', 'Sam’s Club / Costco / Amazon parsers'] },
    { label: 'AI', items: ['Claude Sonnet 4.5 — Vision OCR', 'Learned reorder suggestions', 'Velocity modeling per SKU'] },
  ];
  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '56px 20px' : '96px 32px' }}>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em',
        textTransform: 'uppercase', color: IM_C.ink50, marginBottom: 16 }}>
        Under the hood
      </div>
      <h2 style={{ fontSize: isMobile ? 'clamp(26px, 7.5vw, 34px)' : 'clamp(32px, 4vw, 48px)', lineHeight: 1.05,
        letterSpacing: '-0.025em', fontWeight: 700, margin: isMobile ? '0 0 28px' : '0 0 48px', color: IM_C.ink, maxWidth: 800 }}>
        Honolulu-built, modern stack.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? 18 : 24 }}>
        {stack.map(s => (
          <div key={s.label}>
            <div style={{ fontSize: 13, fontWeight: 700, color: IM_C.teal, letterSpacing: '0.08em',
              textTransform: 'uppercase', marginBottom: 14, paddingBottom: 12,
              borderBottom: `1px solid ${IM_C.ink15}` }}>
              {s.label}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10 }}>
              {s.items.map(i => (
                <li key={i} style={{ fontSize: 14, color: IM_C.ink, lineHeight: 1.4 }}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function IMComingNext() {
  const isMobile = useIsMobile();
  const items = [
    {
      tag: 'Bar mode',
      title: 'Smart scale on the back bar.',
      body: 'Hard liquor bottles sit on a connected scale. Pour a shot, the bottle gets lighter, the system sees it. Match against Clover sales — variance becomes visible. The oldest unsolved problem in hospitality, finally measurable.',
      eta: '2026',
    },
    {
      tag: 'Convenience mode',
      title: 'Expiring milk → 30% off on the in-store TV.',
      body: 'Track receipt-date items. As expiration approaches, the system marks down and pushes the discount to your in-store TV via Display Network. Stop dumpstering inventory you already paid for.',
      eta: '2026',
    },
  ];
  return (
    <section style={{ background: IM_C.bgAlt, padding: isMobile ? '56px 20px' : '96px 32px',
      backgroundImage: IM_PLUMERIA_BG, backgroundSize: '120px 120px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: IM_C.gold, marginBottom: 16 }}>
          Coming next
        </div>
        <h2 style={{ fontSize: isMobile ? 'clamp(28px, 8vw, 38px)' : 'clamp(36px, 4.5vw, 56px)', lineHeight: 1.05,
          letterSpacing: '-0.025em', fontWeight: 700, margin: '0 0 14px', color: IM_C.ink, maxWidth: 1000 }}>
          The roadmap is hardware, not features.
        </h2>
        <p style={{ fontSize: isMobile ? 15 : 17, lineHeight: 1.6, color: IM_C.ink70, maxWidth: 760, marginBottom: isMobile ? 32 : 56 }}>
          Restaurant mode is mature. Liquor stores join via Clover this year. The next two
          modes need a piece of hardware — a scale, a TV. We’re building both.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 14 : 24 }}>
          {items.map(it => (
            <div key={it.tag} style={{
              background: IM_C.surface, border: `1px solid ${IM_C.ink10}`,
              borderRadius: 18, padding: isMobile ? 24 : 36,
              display: 'flex', flexDirection: 'column', gap: 14,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                <div style={{ fontSize: 12, fontWeight: 700, padding: '5px 12px',
                  background: `${IM_C.gold}1A`, color: IM_C.gold,
                  borderRadius: 999, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {it.tag}
                </div>
                <div style={{ fontSize: 12, color: IM_C.ink50, fontWeight: 600 }}>ETA {it.eta}</div>
              </div>
              <h3 style={{ fontSize: isMobile ? 22 : 26, fontWeight: 700, letterSpacing: '-0.015em',
                lineHeight: 1.2, color: IM_C.ink, margin: 0 }}>{it.title}</h3>
              <p style={{ fontSize: isMobile ? 14 : 15, color: IM_C.ink70, lineHeight: 1.6, margin: 0 }}>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IMContactCTA() {
  const isMobile = useIsMobile();
  return (
    <section id="contact" style={{
      background: `linear-gradient(135deg, ${IM_C.teal}, ${IM_C.tealDeep})`,
      color: 'white', padding: isMobile ? '72px 20px' : '120px 32px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto',
        display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? 32 : 64, alignItems: 'start' }}>
        <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>
            Try it on your store
          </div>
          <h2 style={{ fontSize: isMobile ? 'clamp(34px, 9vw, 48px)' : 'clamp(36px, 4.5vw, 60px)', lineHeight: 1.0,
            letterSpacing: '-0.03em', fontWeight: 700, margin: '0 0 18px' }}>
            Five minutes to set up.<br/>Two weeks to learn.
          </h2>
          <p style={{ fontSize: isMobile ? 15 : 17, lineHeight: 1.55, color: 'rgba(255,255,255,0.85)',
            maxWidth: 520, margin: isMobile ? '0 auto 24px' : '0 0 24px' }}>
            See Soul Chicken&rsquo;s live system, then we&rsquo;ll spin up your tenant.
            Your brand color, your suppliers, your first count by Friday.
          </p>
          <a href="https://inventory.soulchickenhawaii.com" target="_blank" rel="noopener" style={{
            display: 'inline-block', color: 'white',
            borderBottom: '1px solid rgba(255,255,255,0.4)', fontSize: 14, fontWeight: 600, marginBottom: 18,
          }}>See Soul Chicken live →</a>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
            <div>📧 <a href="mailto:info@alohasmartsystem.com" style={{ color: 'white', borderBottom: '1px solid rgba(255,255,255,0.4)' }}>info@alohasmartsystem.com</a></div>
            <div>📞 <a href="tel:+18086503331" style={{ color: 'white', borderBottom: '1px solid rgba(255,255,255,0.4)' }}>(808) 650-3331</a></div>
          </div>
        </div>
        <AlohaContactForm
          accentColor={IM_C.tealDeep}
          productName="Inventory Master"
          isMobile={isMobile}
        />
      </div>
    </section>
  );
}

function IMFooter() {
  const isMobile = useIsMobile();
  return (
    <footer style={{ background: IM_C.bg, padding: isMobile ? '32px 20px' : '48px 32px',
      borderTop: `1px solid ${IM_C.ink08}` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, alignItems: 'flex-start',
        fontSize: isMobile ? 12 : 13, color: IM_C.ink70 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <IMLogoA size={18} />
          <span>© {new Date().getFullYear()} Musubi Media LLC · Aloha Smart System · Honolulu, HI</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'flex-start' : 'flex-end', gap: 4, fontSize: isMobile ? 11 : 12, color: IM_C.ink50 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, flexWrap: 'wrap' }}>
            <span>Authorized partner of</span>
            <CardConnectMark scale={0.55} />
            <span>· Clover-authorized · Restaurant + Liquor + Bar + Convenience</span>
          </div>
          <div>CCS HQ: (877) 682-1117 · ccscardservice.com</div>
        </div>
      </div>
    </footer>
  );
}

function InventoryMasterPage() {
  return (
    <div style={{ background: IM_C.bg, color: IM_C.ink, fontFamily: '"Inter Tight", system-ui, sans-serif' }}>
      <IMNav />
      <IMHero />
      <IMReferenceBuild />
      <IMSegments />
      <IMModuleGallery />
      <IMLearningMode />
      <IMLearningProof />
      <IMCloverIntegration />
      <IMTechStack />
      <IMComingNext />
      <IMContactCTA />
      <IMFooter />
    </div>
  );
}

window.InventoryMasterPage = InventoryMasterPage;
