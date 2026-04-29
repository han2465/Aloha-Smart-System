// Food Court Master — Midtown West reference build data

const FCM_BRAND = {
  product: 'Food Court Master',
  parent: 'Aloha Smart System',
  tagline: 'One ticket. Many kitchens. Zero chaos.',
  demoSite: 'Midtown West',
  demoLocation: 'Honolulu reference build',
};

// 13 fictional vendors (illustrative, not real businesses)
const FCM_VENDORS = [
  { id: 'seoul-crunch',  name: 'Seoul Crunch',  cuisine: 'Korean Fried Chicken', items: 58, color: '#D94F2F', initials: 'SC' },
  { id: 'roll-bar',      name: 'Roll Bar',      cuisine: 'Japanese · Sushi',     items: 22, color: '#0E5BA8', initials: 'RB' },
  { id: 'lanai-smoke',   name: 'Lanai Smoke',   cuisine: 'Hawaiian BBQ',         items: 20, color: '#1F6E4D', initials: 'LS' },
  { id: 'bangkok-bowl',  name: 'Bangkok Bowl',  cuisine: 'Thai',                 items: 16, color: '#C9941E', initials: 'BB' },
  { id: 'saigon-press',  name: 'Saigon Press',  cuisine: 'Vietnamese',           items: 16, color: '#7B3F00', initials: 'SP' },
  { id: 'cane-co',       name: 'Cane Co.',      cuisine: 'Fresh Juice',          items: 12, color: '#7CB342', initials: 'CC' },
  { id: 'gelato-808',    name: 'Gelato 808',    cuisine: 'Italian Gelato',       items: 14, color: '#A855F7', initials: 'G8' },
  { id: 'reef-rice',     name: 'Reef & Rice',   cuisine: 'Pacific Rim',          items: 18, color: '#0891B2', initials: 'RR' },
  { id: 'sakura-table',  name: 'Sakura Table',  cuisine: 'Japanese',             items: 24, color: '#EC4899', initials: 'ST' },
  { id: 'boba-lab',      name: 'Boba Lab',      cuisine: 'Drinks · Boba',        items: 28, color: '#F97316', initials: 'BL' },
  { id: 'han-bar',       name: 'Han Bar',       cuisine: 'Korean Bar Food',      items: 20, color: '#DC2626', initials: 'HB' },
  { id: 'olive-flame',   name: 'Olive & Flame', cuisine: 'Mediterranean',        items: 18, color: '#65A30D', initials: 'OF' },
  { id: 'taco-block',    name: 'Taco Block',    cuisine: 'Mexican',              items: 22, color: '#EAB308', initials: 'TB' },
];

const FCM_PROBLEMS = [
  {
    pain: '13 vendors, 13 separate POS terminals',
    consequence: 'Operator runs 13 disconnected POS subscriptions, 13 statements, 13 reconciliations. End-of-day settlement is a multi-hour spreadsheet exercise.',
    solution: 'One unified backoffice across every vendor. Each kitchen takes its own orders — but settlement, reporting, fees, and payouts are all centralized and automated.',
  },
  {
    pain: 'TVs across the hall show inconsistent pickup info',
    consequence: 'No central pickup board. Customers wander asking "is my order ready?" Vendor staff yells order numbers across the floor.',
    solution: 'A single editorial Central Board on the main TV plus per-vendor portrait displays — synced live, themed consistently.',
  },
  {
    pain: 'Marketing campaigns die in operator email inbox',
    consequence: 'Operator emails 13 vendors about Halloween promo. 4 vendors reply. The promo runs half-baked.',
    solution: 'Campaign goes out from Backoffice → vendors approve from their own dashboard → approved promos auto-display on their counter TV.',
  },
  {
    pain: 'Vendor payouts take a week and require a CPA',
    consequence: 'Operator manually reconciles card processor reports, tip pools, and refunds. Vendors call asking when they get paid.',
    solution: 'Settlement and Payouts pages compute net payable per vendor automatically. "Mark Paid" button per vendor. Money fully accounted for, every day.',
  },
];

const FCM_MODULES = [
  {
    id: 'customer-order',
    label: 'Customer Order',
    title: 'Pick a restaurant. Order at that counter. Pay there.',
    description: 'Each kitchen takes its own orders — self-order from kiosk or QR at that vendor, or order from the counter. Trilingual menus EN / 한국어 / 日本語 per vendor. Each vendor keeps full control of its own checkout.',
    bullets: [
      'Per-vendor ordering (one cart per restaurant)',
      'Trilingual menus per item',
      'Photos, modifiers, allergens',
      'Card · Apple Pay · Google Pay',
    ],
  },
  {
    id: 'vendor-pos',
    label: 'Vendor POS',
    title: 'Each kitchen sees only its tickets.',
    description: 'Per-vendor POS view filtered to that kitchen\'s items. Queue tab for incoming, Order tab for new ring-ups, Dashboard for the day. Built on Clover hardware.',
    bullets: [
      'Filtered queue per vendor',
      'Clover Station / Mini / Flex',
      'SNPD card reader integrated',
      'Real-time order status sync',
    ],
  },
  {
    id: 'central-board',
    label: 'Central Board',
    title: 'The big TV at the pickup station.',
    description: 'Editorial 1920×1080 layout — rotating featured vendor with full-bleed photography, live ready queue, vendor directory, and bottom ticker. Three theme presets.',
    bullets: [
      'Rotating featured vendor',
      'Live ready / preparing queue',
      'In-store giveaway QR (scan to enter)',
      'Weather, time, mahalo ticker',
    ],
  },
  {
    id: 'vendor-tv',
    label: 'Vendor TV',
    title: 'Portrait displays at every counter.',
    description: 'Vertical 1080×1920 displays per stall. Tap READY at the counter — the order number appears on the TV instantly and is voice-announced. Vendors swap in their own dish photos and pick their best-seller anytime.',
    bullets: [
      'Tap READY → number shows + voice call',
      'Vendor uploads custom dish photos',
      'Best-seller picked by vendor',
      'Approved campaign banners',
    ],
  },
  {
    id: 'displays-config',
    label: 'Display Themes',
    title: 'Three curated looks. One palette.',
    description: 'Operators choose Dark (nightfall · airport-departures), Warm (candlelit · deep terracotta), or Light (parchment · daytime cafe). Three typography presets — Editorial, Broadcast, Modern.',
    bullets: [
      'Dark · Warm · Light themes',
      'Editorial · Broadcast · Modern type',
      'Cohesive across all displays',
      'No designer required',
    ],
  },
  {
    id: 'marketing',
    label: 'Marketing Engine',
    title: 'Campaigns, announcements, and giveaways — vendors actually run.',
    description: 'Three tabs in one engine. Campaigns push seasonal promos to counter TVs after vendor approval. Announcements broadcast hall-wide notices. Giveaways turn the Central Board into a monthly in-store draw — customers scan the QR to enter, the system auto-picks a winner on the 1st, and every entry becomes a marketing email you can re-target.',
    bullets: [
      'Campaigns · Announcements · Giveaways tabs',
      'Operator request → vendor approves → live',
      'In-store QR draw, auto-picks winners monthly',
      'Every entry captured for re-marketing',
    ],
  },
  {
    id: 'finance',
    label: 'Finance & Settlement',
    title: 'Balanced. Every dollar accounted for.',
    description: 'Daily Orders, Settlement, and Payouts views. Per-vendor net payable computed from gross, tips, refunds, card fees, platform fees, and recovery. Mark Paid button. Export CSV for accounting.',
    bullets: [
      'Auto-computed per-vendor payouts',
      'Card / platform / recovery fees',
      'Mark Paid workflow',
      'CSV export for CPA',
    ],
  },
  {
    id: 'system-config',
    label: 'System Config',
    title: 'Card surcharge, fees, users, health.',
    description: 'Operator controls — food court name, card surcharge rate (2 / 2.5 / 3 / 3.5%), accept cash toggle, platform & card fee structure, user roles, activity log, system health.',
    bullets: [
      'Card surcharge configuration',
      'Platform / card fee structure',
      'User roles & permissions',
      'Activity log + system health',
    ],
  },
];

const FCM_DEMO_PAYOUT = [
  { vendor: 'Cane Co.',       orders:  8, gross:  68.72, card:  -2.73, net:  65.99 },
  { vendor: 'Boba Lab',       orders: 13, gross: 166.50, card:  -5.97, net: 160.53 },
  { vendor: 'Reef & Rice',    orders: 13, gross: 264.00, card:  -8.70, net: 255.30 },
  { vendor: 'Han Bar',        orders: 11, gross: 119.00, card:  -4.44, net: 114.56 },
  { vendor: 'Bangkok Bowl',   orders: 10, gross: 171.00, card:  -5.79, net: 165.21 },
  { vendor: 'Gelato 808',     orders: 17, gross: 119.50, card:  -5.05, net: 114.45 },
  { vendor: 'Olive & Flame',  orders: 17, gross: 278.00, card:  -9.50, net: 268.50 },
  { vendor: 'Saigon Press',   orders:  9, gross: 129.00, card:  -4.52, net: 124.48 },
  { vendor: 'Roll Bar',       orders:  9, gross: 131.41, card:  -4.59, net: 126.82 },
  { vendor: 'Lanai Smoke',    orders: 14, gross: 346.30, card: -11.11, net: 335.19 },
  { vendor: 'Sakura Table',   orders: 10, gross: 153.00, card:  -5.29, net: 147.71 },
  { vendor: 'Seoul Crunch',   orders: 12, gross: 198.00, card:  -6.93, net: 191.07 },
  { vendor: 'Taco Block',     orders: 11, gross: 154.73, card:  -5.41, net: 149.32 },
];

const FCM_DEMO_TOTALS = {
  gross: 2298.16,
  refunds: 0.00,
  tips: 0.00,
  vendorPayout: 2519.13,
  cardFee: 80.84,
  operatorNet: 71.68,
  orders: 164,
};

Object.assign(window, {
  FCM_BRAND, FCM_VENDORS, FCM_PROBLEMS, FCM_MODULES,
  FCM_DEMO_PAYOUT, FCM_DEMO_TOTALS,
});
