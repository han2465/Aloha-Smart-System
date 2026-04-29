// Musubi Display Network — data + tokens

const DN_C = {
  bg: '#F5EFE6',         // warm sand
  bgAlt: '#EEE6D7',      // deeper sand for sections
  surface: '#FFFFFF',
  ink: '#0E1A24',        // deep ink
  ink70: 'rgba(14,26,36,0.72)',
  ink50: 'rgba(14,26,36,0.55)',
  ink20: 'rgba(14,26,36,0.20)',
  ink10: 'rgba(14,26,36,0.12)',
  gold: '#E8B339',       // signage gold
  goldDeep: '#B07F18',
  crimson: '#C53030',    // order-board red
  glowMagenta: '#B83F8A',
};

const DN_AUDIENCE = [
  { v: 'restaurant', emoji: '🍜', label: 'Restaurants',
    sub: 'Order numbers, specials, drink menu while guests wait.' },
  { v: 'foodcourt', emoji: '🏪', label: 'Food courts',
    sub: 'Central board for every vendor — one screen, all orders.' },
  { v: 'market', emoji: '🛒', label: 'Markets & convenience',
    sub: 'Near-expiry deals, weekly ad, in-language news.' },
  { v: 'bar', emoji: '🍺', label: 'Bars & lounges',
    sub: 'Sports, drink specials, Spotify-style now-playing.' },
  { v: 'beauty', emoji: '💇', label: 'Salons & beauty',
    sub: 'Service menu, before/after, queue position.' },
  { v: 'liquor', emoji: '🍷', label: 'Liquor stores',
    sub: 'New arrivals, weekly deals, age-verification reminder.' },
];

const DN_MODES = [
  { title: 'Information', body: 'News, weather, in-language headlines, surf report. Guests glance up — there is something to look at.' },
  { title: 'Service', body: 'Live order numbers from Clover. "Order 1752 — pickup ready." No more shouting names across the room.' },
  { title: 'Promotion', body: 'Your menu, your sale items, today\'s specials. QR codes for giveaways. Lifts ticket size 8–15%.' },
];

const DN_CONTENT = [
  { tag: 'NEWS', color: '#0E5BA8', label: 'Local & in-language news',
    body: 'KHON, Hawaii News Now, Korean (KBS), Japanese (NHK), Chinese (CCTV). Auto-translated tickers, regional weather.' },
  { tag: 'SPORTS', color: '#0B7A3E', label: 'Sports & live scores',
    body: 'NFL, NBA, MLB, K-League, J-League, soccer. Bar-friendly auto-rotation when a game tips off.' },
  { tag: 'POS', color: '#C53030', label: 'Live order board',
    body: 'Clover ticket numbers, status (pickup / preparing / ready), wait estimates. Pulled from the POS in real time.' },
  { tag: 'PROMO', color: '#E8B339', label: 'Specials & happy hour',
    body: 'Today\'s sale stickers, BOGO, near-expiry markdowns. Triggered by Clover inventory levels.' },
  { tag: 'AD', color: '#B83F8A', label: 'Custom ads & campaigns',
    body: 'Your branded campaigns. New menu launch, holiday hours, landlord co-promo. We design the spot.' },
  { tag: 'AMBIENT', color: '#0E1A24', label: 'Ambient & lifestyle',
    body: 'Hawaii nature loops, surf breaks, food b-roll, ambient lo-fi. Quiet hours when the room is empty.' },
];

const DN_CLOVER = [
  { icon: '🏷️', label: 'Menu auto-sync',
    body: 'Items, prices, photos pulled directly from your Clover catalog.' },
  { icon: '📋', label: 'Order numbers live',
    body: 'When a ticket prints, the number appears on the screen within 5 seconds.' },
  { icon: '⚠️', label: 'Inventory triggers',
    body: 'Low stock → hide item from the screen. Near expiry → flash sale promo.' },
  { icon: '🕒', label: 'Hour-aware',
    body: 'Happy hour auto-switches at 4pm. Brunch board at 9am. Kitchen closed at 9pm.' },
];

const DN_AUTOMATION = [
  { k: 'Drop-in templates', v: 'Pre-built layouts for new menu, sale, holiday, hiring, grand opening. Pick one, drop your photo, done.' },
  { k: 'Photo first', v: 'Upload a photo of the dish or product. The template uses it as the hero. No Photoshop, no fonts to pick.' },
  { k: 'One-line copy', v: 'Type a headline ("Spicy Bibimbap — $14") and a sub ("Lunch only · until 3pm"). The system handles the rest.' },
  { k: 'Need help? We design it', v: 'For custom campaigns or seasonal launches, our team designs the spot for you. Usually 24–48 hours.' },
];

const DN_LAYOUTS = [
  { v: 'horizontal', shape: '16/9', label: 'Central board · horizontal',
    photo: '../assets/display-network/midtown-eats-central-board.png',
    sub: 'For dining rooms and food courts. Central order board + news + promo footer. One TV, three jobs.' },
  { v: 'portrait', shape: '9/16', label: 'Pickup display · portrait',
    photo: '../assets/display-network/soul-chicken-pickup-display.png',
    sub: 'For counters and pickup walls. Big numbers, scrolling promo strip.' },
];

const DN_DATA_FEATURES = [
  { icon: '📱', label: 'QR giveaways',
    body: 'Footer QR runs a daily giveaway. Guests scan, enter phone or email, opt in for SMS deals.' },
  { icon: '📊', label: 'Customer database',
    body: 'Every scan lands in your CRM. Tagged by store, time of day, what they ordered (Clover-matched).' },
  { icon: '✉️', label: 'Re-engagement texts',
    body: 'Auto-message anyone who hasn\'t been back in 30 days. "Miss you — 10% off this week."' },
  { icon: '🎯', label: 'A/B testing',
    body: 'Run two versions of a promo on different days. The system tells you which one drove more orders.' },
];

const DN_OFFER = [
  { k: 'TVs + media players', v: 'We supply or work with your existing TVs. Compact media players (Android-based), no PC needed.' },
  { k: 'On-site install', v: 'Anthony or a technician comes out, mounts the screens, runs the cable, gets it live.' },
  { k: 'Content rotation setup', v: 'We build your starter rotation — news mix, your menu, your hours, your promos.' },
  { k: 'Ongoing campaigns', v: 'New menu launches, seasonal promos, landlord co-marketing. We design and schedule for you.' },
  { k: 'Clover integration', v: 'Menu, prices, order numbers all wired to your Clover. No extra apps for staff to learn.' },
  { k: 'Honolulu support', v: 'Local team. Same-day fixes if a screen goes black. (808) 650-3331.' },
];
