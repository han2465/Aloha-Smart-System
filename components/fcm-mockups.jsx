// Food Court Master — REAL screenshot frames (no fake mockups)
// All images live in /assets/fcm/ — these are the actual product screenshots.

const FCM_SHOT_BASE = '../assets/fcm/';

// Browser-style frame for backoffice screenshots (desktop UI)
function ScreenshotFrame({ src, alt, label, ratio = '16/10' }) {
  return (
    <figure style={{ margin: 0 }}>
      <div style={{
        background: 'white',
        border: '1px solid rgba(14,26,36,0.10)',
        borderRadius: 14,
        boxShadow: '0 30px 60px -30px rgba(14,26,36,0.25), 0 8px 20px -10px rgba(14,26,36,0.12)',
        overflow: 'hidden',
      }}>
        {/* Window chrome */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 6,
          padding: '10px 14px',
          background: '#F4F1EA',
          borderBottom: '1px solid rgba(14,26,36,0.08)',
        }}>
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FF5F57' }}></span>
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FEBC2E' }}></span>
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28C840' }}></span>
          <div style={{ flex: 1, textAlign: 'center', fontSize: 11, color: 'rgba(14,26,36,0.5)',
            fontFamily: 'ui-monospace, Menlo, monospace', letterSpacing: '0.02em' }}>
            backoffice.alohasmartsystem.com
          </div>
        </div>
        <div style={{ aspectRatio: ratio, background: '#F8F8F5', overflow: 'hidden' }}>
          <img src={src} alt={alt} loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
        </div>
      </div>
      {label && (
        <figcaption style={{ marginTop: 12, fontSize: 12, color: 'rgba(14,26,36,0.55)',
          letterSpacing: '0.04em', textTransform: 'uppercase', fontWeight: 600 }}>{label}</figcaption>
      )}
    </figure>
  );
}

// Tablet/POS-style frame for kiosk + customer order screen
function TabletFrame({ src, alt, label, mode = 'portrait' }) {
  const ratio = mode === 'portrait' ? '3/4' : '4/3';
  return (
    <figure style={{ margin: 0 }}>
      <div style={{
        background: '#0E1A24',
        borderRadius: 22,
        padding: 10,
        boxShadow: '0 30px 60px -30px rgba(14,26,36,0.35), 0 8px 20px -10px rgba(14,26,36,0.15)',
      }}>
        <div style={{
          background: 'white',
          borderRadius: 14,
          aspectRatio: ratio,
          overflow: 'hidden',
          border: '1px solid rgba(0,0,0,0.05)',
        }}>
          <img src={src} alt={alt} loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
        </div>
      </div>
      {label && (
        <figcaption style={{ marginTop: 12, fontSize: 12, color: 'rgba(14,26,36,0.55)',
          letterSpacing: '0.04em', textTransform: 'uppercase', fontWeight: 600 }}>{label}</figcaption>
      )}
    </figure>
  );
}

// TV-style frame for landscape Central Board
function TVFrame({ src, alt, label }) {
  return (
    <figure style={{ margin: 0 }}>
      <div style={{
        background: '#0E1A24',
        borderRadius: 14,
        padding: 12,
        boxShadow: '0 30px 60px -30px rgba(14,26,36,0.4), 0 8px 20px -10px rgba(14,26,36,0.2)',
        position: 'relative',
      }}>
        <div style={{
          background: 'black',
          borderRadius: 6,
          aspectRatio: '16/9',
          overflow: 'hidden',
        }}>
          <img src={src} alt={alt} loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        {/* TV stand suggestion */}
        <div style={{
          position: 'absolute', bottom: -8, left: '50%', transform: 'translateX(-50%)',
          width: 80, height: 6, background: '#0E1A24', borderRadius: '0 0 4px 4px',
        }}></div>
      </div>
      {label && (
        <figcaption style={{ marginTop: 20, fontSize: 12, color: 'rgba(14,26,36,0.55)',
          letterSpacing: '0.04em', textTransform: 'uppercase', fontWeight: 600 }}>{label}</figcaption>
      )}
    </figure>
  );
}

// Vertical / portrait TV frame (per-vendor counter display)
function VerticalTVFrame({ src, alt, label }) {
  return (
    <figure style={{ margin: 0 }}>
      <div style={{
        background: '#0E1A24',
        borderRadius: 12,
        padding: 8,
        boxShadow: '0 30px 60px -30px rgba(14,26,36,0.4), 0 8px 20px -10px rgba(14,26,36,0.2)',
        maxWidth: 320,
        margin: '0 auto',
      }}>
        <div style={{
          background: 'black',
          borderRadius: 4,
          aspectRatio: '9/16',
          overflow: 'hidden',
        }}>
          <img src={src} alt={alt} loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
      {label && (
        <figcaption style={{ marginTop: 12, fontSize: 12, color: 'rgba(14,26,36,0.55)',
          letterSpacing: '0.04em', textTransform: 'uppercase', fontWeight: 600, textAlign: 'center' }}>
          {label}
        </figcaption>
      )}
    </figure>
  );
}

// Named exports — used by fcm-page.jsx
const FCM_MOCKUPS = {
  CustomerOrder: () => (
    <TabletFrame
      src={FCM_SHOT_BASE + 'customer-order.png'}
      alt="Customer order screen — Pick a restaurant, Midtown West"
      mode="portrait"
    />
  ),
  VendorPOS: () => (
    <ScreenshotFrame
      src={FCM_SHOT_BASE + 'vendor-pos.png'}
      alt="Vendor POS — Soul Chicken queue, order, dashboard"
      ratio="16/10"
    />
  ),
  CentralBoard: () => (
    <TVFrame
      src={FCM_SHOT_BASE + 'central-board-tv.png'}
      alt="Central Board TV — editorial 1920×1080 layout, now-serving queue"
    />
  ),
  VendorTV: () => (
    <VerticalTVFrame
      src={FCM_SHOT_BASE + 'vendor-tv.png'}
      alt="Vendor TV — vertical counter display, READY 1752"
    />
  ),
  DisplaysConfig: () => (
    <ScreenshotFrame
      src={FCM_SHOT_BASE + 'displays-config.png'}
      alt="Displays config — three theme presets and three typography presets"
      ratio="16/10"
    />
  ),
  MarketingCampaign: () => (
    <ScreenshotFrame
      src={FCM_SHOT_BASE + 'marketing-campaign.png'}
      alt="Marketing campaign creator — seasonal presets and vendor approval workflow"
      ratio="16/10"
    />
  ),
  FinanceSettlement: () => (
    <ScreenshotFrame
      src={FCM_SHOT_BASE + 'finance-settlement.png'}
      alt="Finance & settlement — per-vendor payouts, balanced reconciliation"
      ratio="16/10"
    />
  ),
  SystemConfig: () => (
    <ScreenshotFrame
      src={FCM_SHOT_BASE + 'system-settings.png'}
      alt="System config — card surcharge, platform fees, user roles"
      ratio="16/10"
    />
  ),
};

window.FCM_MOCKUPS = FCM_MOCKUPS;
window.ScreenshotFrame = ScreenshotFrame;
window.TabletFrame = TabletFrame;
window.TVFrame = TVFrame;
window.VerticalTVFrame = VerticalTVFrame;
