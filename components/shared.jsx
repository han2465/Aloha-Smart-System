/* Musubi Media — shared visual components */

// Service icons (line, simple)
const ServiceIcon = ({ kind }) => {
  const stroke = "var(--blue-500)";
  if (kind === 0) return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="4" y="6" width="32" height="20" rx="2" stroke={stroke} strokeWidth="1.5"/>
      <path d="M14 30h12M16 26v4M24 26v4" stroke={stroke} strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="9" y="11" width="22" height="10" rx="1" fill="var(--blue-100)"/>
      <circle cx="14" cy="16" r="1.5" fill={stroke}/>
      <path d="M18 16h10" stroke={stroke} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
  if (kind === 1) return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="11" y="4" width="18" height="32" rx="3" stroke={stroke} strokeWidth="1.5"/>
      <rect x="14" y="8" width="12" height="20" rx="1" fill="var(--blue-100)"/>
      <circle cx="20" cy="32" r="1.2" fill={stroke}/>
    </svg>
  );
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="6" y="6" width="28" height="28" rx="7" stroke={stroke} strokeWidth="1.5"/>
      <circle cx="20" cy="20" r="6" stroke={stroke} strokeWidth="1.5"/>
      <circle cx="28" cy="12" r="1.5" fill={stroke}/>
    </svg>
  );
};

// Hero product mockup: TV next to POS tablet, both on a soft floor
const ProductMockup = () => (
  <div style={{
    maxWidth: 1120, margin: '0 auto', position: 'relative',
    background: 'linear-gradient(180deg, #F5F8FB 0%, #E8F1F8 100%)',
    borderRadius: 28, padding: '64px 56px 0', overflow: 'hidden',
    border: '1px solid var(--line)',
  }}>
    <div style={{
      display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 48, alignItems: 'end',
    }}>
      {/* TV */}
      <div style={{ position: 'relative' }}>
        <div style={{
          background: '#0A0A0A', borderRadius: 14, padding: 10,
          boxShadow: '0 30px 60px rgba(0,40,90,.18), 0 8px 16px rgba(0,0,0,.1)',
          border: '1px solid #222',
        }}>
          <div style={{
            aspectRatio: '16 / 9', borderRadius: 6, overflow: 'hidden', position: 'relative',
            background: 'linear-gradient(135deg, #001F3F 0%, #003C75 50%, #1FA8E0 100%)',
          }}>
            <TvAdContent />
          </div>
        </div>
        {/* TV stand */}
        <div style={{ width: 80, height: 6, background: '#0A0A0A', margin: '8px auto 0', borderRadius: 2 }}></div>
        <div style={{ width: 160, height: 4, background: '#0A0A0A', margin: '0 auto', borderRadius: 2 }}></div>
      </div>

      {/* POS tablet */}
      <div style={{ position: 'relative', transform: 'translateY(40px)' }}>
        <div style={{
          background: '#1A1F2A', borderRadius: 22, padding: 10,
          boxShadow: '0 24px 48px rgba(0,40,90,.20), 0 6px 12px rgba(0,0,0,.1)',
          border: '1px solid #2A3142',
        }}>
          <div style={{
            background: '#fff', borderRadius: 14, aspectRatio: '3 / 4',
            padding: 14, position: 'relative', overflow: 'hidden',
          }}>
            <PosScreen />
          </div>
        </div>
      </div>
    </div>

    {/* "connected" line */}
    <svg style={{ position: 'absolute', left: 0, right: 0, top: '40%', width: '100%', height: 80, pointerEvents: 'none' }} viewBox="0 0 1000 80" preserveAspectRatio="none">
      <path d="M 380 40 Q 500 20 620 40" stroke="var(--blue-400)" strokeWidth="2" fill="none" strokeDasharray="4 4" opacity="0.5"/>
    </svg>
  </div>
);

const TvAdContent = () => (
  <div style={{ position: 'absolute', inset: 0, padding: 24, color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', opacity: 0.7 }}>
      <span>● LIVE · TODAY'S SPECIAL</span>
      <span>7:42 PM</span>
    </div>
    <div>
      <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', letterSpacing: '0.16em', opacity: 0.7, marginBottom: 8 }}>HAPPY HOUR · UNTIL 9 PM</div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
        Soju &amp; Pajeon<br/>
        <span style={{ color: 'var(--blue-200)' }}>$18 set</span>
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
      <img src="assets/logo-stacked-dark.png" style={{ height: 28, opacity: 0.9, background: 'transparent' }} alt="" />
      <div style={{ fontSize: 10, fontFamily: 'var(--font-mono)', opacity: 0.5 }}>POWERED BY MUSUBI</div>
    </div>
  </div>
);

const PosScreen = () => (
  <div style={{ position: 'absolute', inset: 14, display: 'flex', flexDirection: 'column' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
      <div style={{ fontSize: 11, color: 'var(--slate-2)', fontFamily: 'var(--font-mono)' }}>TABLE 7 · Open</div>
      <div style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--blue-500)' }}>● ALOHA</div>
    </div>
    <div style={{ background: 'var(--soft)', borderRadius: 8, padding: 10, marginBottom: 8 }}>
      <div style={{ fontSize: 12, color: 'var(--ink)', fontWeight: 600 }}>Soju &amp; Pajeon Set</div>
      <div style={{ fontSize: 10, color: 'var(--slate)', marginTop: 2 }}>1 × $18.00</div>
    </div>
    <div style={{ background: 'var(--soft)', borderRadius: 8, padding: 10, marginBottom: 8 }}>
      <div style={{ fontSize: 12, color: 'var(--ink)', fontWeight: 600 }}>Bulgogi</div>
      <div style={{ fontSize: 10, color: 'var(--slate)', marginTop: 2 }}>2 × $24.00</div>
    </div>
    <div style={{ background: 'var(--blue-50)', borderRadius: 8, padding: 10, border: '1px solid var(--blue-100)' }}>
      <div style={{ fontSize: 9, color: 'var(--blue-500)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>NOW ON TV</div>
      <div style={{ fontSize: 11, color: 'var(--ink)', fontWeight: 600, marginTop: 2 }}>Happy Hour spot</div>
    </div>
    <div style={{ flex: 1 }}></div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--line)', paddingTop: 8, marginTop: 8 }}>
      <span style={{ fontSize: 10, color: 'var(--slate)' }}>Subtotal</span>
      <span style={{ fontSize: 14, fontWeight: 600 }}>$66.00</span>
    </div>
    <button style={{ marginTop: 8, background: 'var(--blue-400)', color: '#fff', border: 0, borderRadius: 6, padding: '8px', fontSize: 11, fontWeight: 600 }}>Send to kitchen</button>
  </div>
);

// POS+TV side scene for Showcase section
const PosTvScene = () => (
  <div style={{ position: 'relative', aspectRatio: '4 / 3', background: '#fff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--line)', padding: 24, overflow: 'hidden' }}>
    {/* TV */}
    <div style={{ position: 'absolute', top: 32, left: 32, right: 'auto', width: '60%' }}>
      <div style={{ background: '#0A0A0A', borderRadius: 8, padding: 6 }}>
        <div style={{ aspectRatio: '16 / 9', background: 'linear-gradient(135deg, #003C75, #1FA8E0)', borderRadius: 4, padding: 12, color: '#fff', position: 'relative' }}>
          <div style={{ fontSize: 9, fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', opacity: 0.7 }}>● LIVE</div>
          <div style={{ position: 'absolute', bottom: 12, left: 12 }}>
            <div style={{ fontSize: 8, fontFamily: 'var(--font-mono)', opacity: 0.7 }}>SPECIAL</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600 }}>Pajeon $18</div>
          </div>
        </div>
      </div>
    </div>
    {/* POS */}
    <div style={{ position: 'absolute', bottom: 24, right: 24, width: '38%' }}>
      <div style={{ background: '#1A1F2A', borderRadius: 12, padding: 4 }}>
        <div style={{ background: '#fff', borderRadius: 8, aspectRatio: '3 / 4', padding: 10 }}>
          <div style={{ fontSize: 8, fontFamily: 'var(--font-mono)', color: 'var(--slate)' }}>TABLE 7</div>
          <div style={{ background: 'var(--blue-50)', borderRadius: 4, padding: 6, marginTop: 8 }}>
            <div style={{ fontSize: 9, fontWeight: 600 }}>Pajeon Set</div>
            <div style={{ fontSize: 8, color: 'var(--blue-500)' }}>+ ON TV</div>
          </div>
          <div style={{ background: 'var(--soft)', borderRadius: 4, padding: 6, marginTop: 4, height: 24 }}></div>
          <div style={{ background: 'var(--soft)', borderRadius: 4, padding: 6, marginTop: 4, height: 24 }}></div>
        </div>
      </div>
    </div>
    {/* connection line */}
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} preserveAspectRatio="none">
      <path d="M 60% 50% Q 70% 60% 75% 75%" stroke="var(--blue-400)" strokeWidth="1.5" fill="none" strokeDasharray="3 3" opacity="0.6" pathLength="1"/>
    </svg>
  </div>
);

// Shared footer
const SharedFooter = () => (
  <footer className="mm-footer">
    <div className="mm-container">
      <div className="mm-footer-grid">
        <div className="mm-footer-brand">
          <img src="assets/logo-horizontal.png" alt="Musubi Media" />
          <p>Connecting POS, TV, and social into one system for Korean-American hospitality and lifestyle brands. Since 2014.</p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="#">POS × TV Ads</a></li>
            <li><a href="#">App development</a></li>
            <li><a href="#">Social marketing</a></li>
            <li><a href="#">Aloha integration</a></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:info@musubimedia.net">info@musubimedia.net</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Book a call</a></li>
          </ul>
        </div>
      </div>
      <div className="mm-footer-bottom" style={{ flexWrap: 'wrap', gap: 12 }}>
        <span>© 2026 MUSUBI MEDIA LLC</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', fontSize: 12, color: 'var(--slate)' }}>
          Authorized partner of <CardConnectMark scale={0.55} /> · CCS HQ (877) 682-1117
        </span>
        <span>PRIVACY · TERMS</span>
      </div>
    </div>
  </footer>
);

Object.assign(window, { ServiceIcon, ProductMockup, TvAdContent, PosScreen, PosTvScene, SharedFooter });
