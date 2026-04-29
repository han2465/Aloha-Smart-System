/* Aloha Smart System — device mockups & icons (inline HTML/CSS/SVG, no images) */

// Hero cluster: vertical kiosk tablet (front) + Clover Mini (back-right)
const HeroDeviceCluster = () => (
  <div style={{ position: 'relative', width: '100%', height: 540 }}>
    {/* glow */}
    <div style={{ position: 'absolute', right: '10%', top: '20%', width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,124,123,.18), transparent 70%)', filter: 'blur(20px)' }}></div>

    {/* Clover Mini (back-right) */}
    <div style={{ position: 'absolute', right: 0, top: 80, transform: 'rotate(8deg)', filter: 'drop-shadow(0 30px 50px rgba(15,30,50,.18))' }}>
      <CloverMiniMini amount="$24.50" />
    </div>

    {/* Vertical kiosk tablet (front) */}
    <div style={{ position: 'absolute', left: '8%', top: 0, transform: 'rotate(-3deg)', filter: 'drop-shadow(0 40px 60px rgba(15,30,50,.18))' }}>
      <KioskTabletSmall />
    </div>
  </div>
);

// Small kiosk tablet for hero (vertical orientation)
const KioskTabletSmall = () => (
  <div style={{ width: 280, height: 460, borderRadius: 28, padding: 12, background: 'linear-gradient(180deg, #1F2937, #0F1419)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.05)' }}>
    <div style={{ background: '#fff', borderRadius: 20, height: '100%', overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
      {/* status */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', fontSize: 10, color: '#6B7280', fontWeight: 600 }}>
        <span>11:42 AM</span>
        <span style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <span style={{ width: 14, height: 6, border: '1px solid #6B7280', borderRadius: 1, position: 'relative' }}><span style={{ position: 'absolute', inset: 1, background: '#6B7280', width: '70%' }}></span></span>
        </span>
      </div>
      {/* welcome bar */}
      <div style={{ background: '#0E7C7B', color: '#fff', padding: '14px 18px', textAlign: 'center' }}>
        <div style={{ fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: .7, fontWeight: 600 }}>Welcome</div>
        <div style={{ fontSize: 14, fontWeight: 600, marginTop: 2 }}>Tap to order</div>
      </div>
      {/* mini vendor grid 2x3 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 6, padding: 10 }}>
        {[
          ['Ono Burgers', 'Burgers'],
          ['Seoul Bowl', 'Korean'],
          ['Aloha Poke', 'Poke'],
          ['Pho Hale', 'Vietnamese'],
          ['Loco Loco', 'Plate Lunch'],
          ['Mochi Donuts', 'Sweets'],
        ].map(([n, c]) => (
          <div key={n} style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '10px 8px' }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: '#1F2937' }}>{n}</div>
            <div style={{ fontSize: 8, color: '#6B7280', marginTop: 2 }}>{c}</div>
            <div style={{ fontSize: 8, color: '#0E7C7B', fontWeight: 600, marginTop: 4 }}>from $7.50</div>
          </div>
        ))}
      </div>
      {/* cart pill */}
      <div style={{ marginTop: 'auto', padding: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: '#1F2937', color: '#fff', borderRadius: 999 }}>
          <span style={{ fontSize: 10, opacity: .7 }}>Empty cart</span>
          <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.05em' }}>EN · 한 · 日</span>
        </div>
      </div>
    </div>
  </div>
);

// Small Clover Mini for hero
const CloverMiniMini = ({ amount }) => (
  <div style={{ width: 180, height: 240, borderRadius: 18, background: 'linear-gradient(180deg, #2D3748, #1A202C)', padding: 10, position: 'relative' }}>
    <div style={{ background: '#fff', borderRadius: 12, height: 200, padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ fontSize: 9, color: '#6B7280', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>Tap card</div>
      <div style={{ fontSize: 28, fontWeight: 700, color: '#1F2937', marginTop: 8, letterSpacing: '-0.02em' }}>{amount}</div>
      <div style={{ marginTop: 16, width: 60, height: 60, borderRadius: '50%', border: '2px solid #0E7C7B', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M10 12c2 2 2 6 0 8M14 10c3 3 3 9 0 12M18 8c4 4 4 12 0 16" stroke="#0E7C7B" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
        </svg>
      </div>
    </div>
    {/* clover branding strip */}
    <div style={{ position: 'absolute', bottom: 14, left: 0, right: 0, textAlign: 'center', fontSize: 8, color: 'rgba(255,255,255,.4)', letterSpacing: '0.18em', fontWeight: 600 }}>CLOVER</div>
  </div>
);

// MOCKUP 1: Customer Kiosk (full vertical 24" frame)
const KioskMockup = () => (
  <div style={{ width: '100%', maxWidth: 380, margin: '0 auto', filter: 'drop-shadow(0 30px 50px rgba(15,30,50,.15))' }}>
    {/* outer bezel */}
    <div style={{ borderRadius: 32, padding: 14, background: 'linear-gradient(180deg, #1F2937, #0F1419)', position: 'relative', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.05)' }}>
      <div style={{ background: '#fff', borderRadius: 22, overflow: 'hidden' }}>
        {/* top status */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', fontSize: 11, color: '#6B7280', fontWeight: 600 }}>
          <span>11:42 AM</span>
          <span>· · ·</span>
        </div>
        {/* welcome */}
        <div style={{ background: '#0E7C7B', color: '#fff', padding: '20px', textAlign: 'center' }}>
          <div style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: .8, fontWeight: 600 }}>Welcome</div>
          <div style={{ fontSize: 22, fontWeight: 600, marginTop: 4, letterSpacing: '-0.01em' }}>Tap to order</div>
        </div>
        {/* vendor grid 3x3 */}
        <div style={{ padding: 14, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          {[
            ['Ono Burgers', 'Burgers'],
            ['Seoul Bowl', 'Korean'],
            ['Aloha Poke', 'Poke'],
            ['Mochi Donuts', 'Sweets'],
            ['Kalua Sandwich Co', 'BBQ'],
            ['Pho Hale', 'Vietnamese'],
            ['Island Curry', 'Curry'],
            ['Loco Loco', 'Plate Lunch'],
            ['Sweet Leaf Tea', 'Drinks'],
          ].map(([n, c]) => (
            <div key={n} style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '10px 8px', minHeight: 78, display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: 18, height: 18, borderRadius: 4, background: 'linear-gradient(135deg, #F5E6D3, #E8D4B8)', marginBottom: 6 }}></div>
              <div style={{ fontSize: 10, fontWeight: 600, color: '#1F2937', lineHeight: 1.2 }}>{n}</div>
              <div style={{ fontSize: 8, color: '#6B7280', marginTop: 2 }}>{c}</div>
              <div style={{ fontSize: 9, color: '#0E7C7B', fontWeight: 600, marginTop: 'auto' }}>from $7.50</div>
            </div>
          ))}
        </div>
        {/* bottom cart + lang */}
        <div style={{ padding: '12px 14px 18px', display: 'flex', gap: 8 }}>
          <div style={{ flex: 1, padding: '12px 16px', background: '#1F2937', color: '#fff', borderRadius: 999, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 11, opacity: .65 }}>Empty cart</span>
            <span style={{ fontSize: 10, opacity: .65 }}>0 items</span>
          </div>
          <div style={{ padding: '12px 14px', background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 999, fontSize: 10, fontWeight: 600, color: '#1F2937', letterSpacing: '0.06em' }}>EN · 한 · 日</div>
        </div>
      </div>
    </div>
    {/* stand */}
    <div style={{ width: 140, height: 8, background: '#1F2937', borderRadius: 2, margin: '4px auto 0' }}></div>
    <div style={{ width: 220, height: 4, background: '#1F2937', borderRadius: 2, margin: '0 auto' }}></div>
  </div>
);

// MOCKUP 2: Vendor Counter (iPad horizontal + Clover Mini)
const VendorCounterMockup = () => (
  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 24, justifyContent: 'center' }}>
    {/* iPad horizontal */}
    <div style={{ filter: 'drop-shadow(0 30px 50px rgba(15,30,50,.15))' }}>
      <div style={{ width: 580, borderRadius: 22, padding: 12, background: 'linear-gradient(180deg, #1F2937, #0F1419)' }}>
        <div style={{ background: '#fff', borderRadius: 14, overflow: 'hidden' }}>
          {/* Header */}
          <div style={{ padding: '14px 18px', borderBottom: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 26, height: 26, borderRadius: 6, background: 'linear-gradient(135deg, #F5E6D3, #E8D4B8)' }}></div>
              <span style={{ fontSize: 14, fontWeight: 700, color: '#1F2937' }}>Seoul Bowl</span>
            </div>
            <div style={{ display: 'flex', background: '#F3F4F6', borderRadius: 8, padding: 2, fontSize: 10, fontWeight: 600 }}>
              <span style={{ padding: '6px 12px', background: '#fff', borderRadius: 6, color: '#1F2937', boxShadow: '0 1px 2px rgba(0,0,0,.05)' }}>Counter mode</span>
              <span style={{ padding: '6px 12px', color: '#6B7280' }}>Customer-tap</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', minHeight: 280 }}>
            {/* left: menu */}
            <div style={{ borderRight: '1px solid #E5E7EB' }}>
              <div style={{ display: 'flex', gap: 4, padding: '10px 12px', borderBottom: '1px solid #E5E7EB', overflow: 'hidden' }}>
                {['Bowls', 'Bibimbap', 'Sides', 'Drinks'].map((c, i) => (
                  <span key={c} style={{ fontSize: 10, padding: '5px 10px', borderRadius: 6, background: i === 0 ? '#0E7C7B' : 'transparent', color: i === 0 ? '#fff' : '#6B7280', fontWeight: 600 }}>{c}</span>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, padding: 10 }}>
                {[
                  ['Bulgogi Bowl', '$13.50'],
                  ['Spicy Pork', '$13.50'],
                  ['Tofu Bowl', '$11.50'],
                  ['Galbi Plate', '$15.50'],
                  ['Kimchi Stew', '$12.00'],
                  ['Japchae', '$11.00'],
                ].map(([n, p]) => (
                  <div key={n} style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 6, padding: 8 }}>
                    <div style={{ width: '100%', height: 30, borderRadius: 4, background: 'linear-gradient(135deg, #F5E6D3, #E8D4B8)', marginBottom: 6 }}></div>
                    <div style={{ fontSize: 9, fontWeight: 600, color: '#1F2937' }}>{n}</div>
                    <div style={{ fontSize: 9, color: '#0E7C7B', fontWeight: 600, marginTop: 2 }}>{p}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* right: order pane */}
            <div style={{ padding: 14, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 10, color: '#6B7280', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>Order #4421</div>
              <div style={{ display: 'grid', gap: 6, marginBottom: 10 }}>
                {[
                  ['Bulgogi Bowl', '1', '$13.50'],
                  ['Galbi Plate', '1', '$15.50'],
                  ['Kimchi Stew (sm)', '1', '$6.00'],
                ].map(([n, q, p]) => (
                  <div key={n} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 10 }}>
                    <span style={{ color: '#1F2937' }}><span style={{ color: '#6B7280', marginRight: 6 }}>{q}×</span>{n}</span>
                    <span style={{ fontWeight: 600 }}>{p}</span>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: 10, display: 'grid', gap: 4, fontSize: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#6B7280' }}><span>Subtotal</span><span>$35.00</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#6B7280' }}><span>Tax</span><span>$1.66</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#1F2937', fontWeight: 700, fontSize: 12, marginTop: 4 }}><span>Total</span><span>$36.66</span></div>
              </div>
              <button style={{ marginTop: 'auto', background: '#0E7C7B', color: '#fff', border: 0, borderRadius: 8, padding: '10px', fontSize: 12, fontWeight: 600, marginTop: 12 }}>Charge $24.50</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Clover Mini sidekick */}
    <div style={{ filter: 'drop-shadow(0 24px 40px rgba(15,30,50,.15))' }}>
      <CloverMiniMini amount="$24.50" />
    </div>
  </div>
);

// MOCKUP 3: Pickup Order Board (16:9 TV)
const PickupBoardMockup = () => (
  <div style={{ width: '100%', maxWidth: 820, margin: '0 auto', filter: 'drop-shadow(0 30px 50px rgba(15,30,50,.15))' }}>
    {/* TV bezel */}
    <div style={{ borderRadius: 14, padding: 10, background: 'linear-gradient(180deg, #1F2937, #0F1419)' }}>
      <div style={{ background: '#0F1419', borderRadius: 6, aspectRatio: '16/9', padding: 24, color: '#fff', position: 'relative', overflow: 'hidden' }}>
        {/* split */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, height: 'calc(100% - 28px)' }}>
          {/* now preparing */}
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', fontWeight: 600, marginBottom: 14 }}>Now Preparing</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
              {['#4418', '#4419', '#4420', '#4421', '#4422', '#4423'].map(n => (
                <div key={n} style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 6, padding: '14px 8px', textAlign: 'center' }}>
                  <div style={{ fontSize: 22, fontWeight: 600, color: 'rgba(255,255,255,.7)', letterSpacing: '-0.02em' }}>{n}</div>
                </div>
              ))}
            </div>
          </div>
          {/* ready */}
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#5EEAD4', fontWeight: 600, marginBottom: 14 }}>Ready for Pickup</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
              {['#4415', '#4416', '#4417'].map((n, i) => (
                <div key={n} style={{ background: 'rgba(14,124,123,.18)', border: '1px solid rgba(94,234,212,.4)', borderRadius: 8, padding: '20px 8px', textAlign: 'center', animation: `a-pulse 2s ease-in-out ${i * 0.3}s infinite` }}>
                  <div style={{ fontSize: 36, fontWeight: 700, color: '#5EEAD4', letterSpacing: '-0.02em' }}>{n}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* sponsor strip */}
        <div style={{ position: 'absolute', bottom: 10, left: 24, right: 24, padding: '8px 14px', background: 'rgba(245,230,211,.08)', border: '1px solid rgba(245,230,211,.18)', borderRadius: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,.5)', letterSpacing: '0.1em', fontWeight: 600 }}>LOCAL SPONSOR</span>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,.7)' }}>Hawaiian Sun · The original local drink since 1953</span>
        </div>
      </div>
    </div>
  </div>
);

// Product icons for the 3-card lineup
const ProductIcon = ({ kind }) => {
  if (kind === 0) return (
    <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(14,124,123,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="4" width="16" height="11" rx="1.5" stroke="#0E7C7B" strokeWidth="1.5"/>
        <path d="M7 18h8M9 15v3M13 15v3" stroke="#0E7C7B" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  );
  if (kind === 1) return (
    <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(245,230,211,.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="16" height="11" rx="1.5" stroke="#9A4F1A" strokeWidth="1.5"/>
        <path d="M11 14v3M8 17h6" stroke="#9A4F1A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  );
  return (
    <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(255,228,214,.7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 6h16M3 11h16M3 16h16" stroke="#9A4F1A" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="7" cy="6" r="1.2" fill="#9A4F1A"/>
        <circle cx="14" cy="11" r="1.2" fill="#9A4F1A"/>
        <circle cx="10" cy="16" r="1.2" fill="#9A4F1A"/>
      </svg>
    </div>
  );
};

// Why-FCM feature icons
const FeatureIcon = ({ kind }) => {
  const stroke = "#0E7C7B";
  if (kind === 0) return (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 7h14M3 11h14M3 15h14" stroke={stroke} strokeWidth="1.5" strokeLinecap="round"/><circle cx="6" cy="7" r="1.5" fill={stroke}/><circle cx="14" cy="11" r="1.5" fill={stroke}/><circle cx="9" cy="15" r="1.5" fill={stroke}/></svg>);
  if (kind === 1) return (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="6" stroke={stroke} strokeWidth="1.5"/><path d="M10 6v4l2.5 2" stroke={stroke} strokeWidth="1.5" strokeLinecap="round"/></svg>);
  if (kind === 2) return (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="5" width="14" height="10" rx="1.5" stroke={stroke} strokeWidth="1.5"/><path d="M3 9h14" stroke={stroke} strokeWidth="1.5"/></svg>);
  return (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="6" cy="6" r="2.5" stroke={stroke} strokeWidth="1.5"/><circle cx="14" cy="6" r="2.5" stroke={stroke} strokeWidth="1.5"/><circle cx="6" cy="14" r="2.5" stroke={stroke} strokeWidth="1.5"/><circle cx="14" cy="14" r="2.5" stroke={stroke} strokeWidth="1.5"/></svg>);
};

Object.assign(window, { HeroDeviceCluster, KioskTabletSmall, CloverMiniMini, KioskMockup, VendorCounterMockup, PickupBoardMockup, ProductIcon, FeatureIcon });
