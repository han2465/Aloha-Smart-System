// Inventory Master — data file

const IM_C = {
  // Teal-led palette to match Aloha Smart System home + Ke'eaumoku tenant
  bg: '#F5EFE6', bgAlt: '#EDE4D3', surface: '#FFFFFF',
  ink: '#1A1A1F',
  ink80: 'rgba(26,26,31,0.82)',
  ink70: 'rgba(26,26,31,0.72)',
  ink50: 'rgba(26,26,31,0.5)',
  ink30: 'rgba(26,26,31,0.28)',
  ink15: 'rgba(26,26,31,0.14)',
  ink10: 'rgba(26,26,31,0.08)',
  ink08: 'rgba(26,26,31,0.08)',
  // Accents
  teal: '#0E8C9E',         // Aloha Smart System teal
  tealDeep: '#0A5C68',
  tealMist: '#D5EAEE',
  // Tenant colors used for the brand-color story
  kalihi: '#E63946',       // Soul Chicken Kalihi
  kalihiDeep: '#A91D2A',
  // Status / supporting
  gold: '#C9941E',
  palm: '#1F6E4D',
  blush: '#F1D9CF',
  terra: '#C8553D',        // shared with FCM for the cross-product nav
};

// Plumeria pattern in teal — same shape language as FCM, different ink
const IM_PLUMERIA_BG = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60"><g fill="none" stroke="%230E8C9E" stroke-width="1" stroke-linejoin="round" opacity="0.18"><g transform="translate(30 30)"><path d="M0 -16 C 6 -13 9 -7 6 -1 C 3 3 -3 3 -6 -1 C -9 -7 -6 -13 0 -16 Z"/><g transform="rotate(72)"><path d="M0 -16 C 6 -13 9 -7 6 -1 C 3 3 -3 3 -6 -1 C -9 -7 -6 -13 0 -16 Z"/></g><g transform="rotate(144)"><path d="M0 -16 C 6 -13 9 -7 6 -1 C 3 3 -3 3 -6 -1 C -9 -7 -6 -13 0 -16 Z"/></g><g transform="rotate(216)"><path d="M0 -16 C 6 -13 9 -7 6 -1 C 3 3 -3 3 -6 -1 C -9 -7 -6 -13 0 -16 Z"/></g><g transform="rotate(288)"><path d="M0 -16 C 6 -13 9 -7 6 -1 C 3 3 -3 3 -6 -1 C -9 -7 -6 -13 0 -16 Z"/></g><circle r="2" fill="%230E8C9E" stroke="none"/></g></g></svg>')`;

// ============================================================================
// MARKET SEGMENTS — restaurants, liquor stores, bars, convenience markets
// ============================================================================
const IM_SEGMENTS = [
  {
    id: 'restaurant',
    label: 'Restaurants',
    status: 'live',
    color: '#0E8C9E',
    headline: 'Track every ingredient, reorder before you run out.',
    proof: 'Soul Chicken Hawaii — 2 stores, 18 months, zero stockouts.',
    bullets: [
      'Staff count on their phones in 30 seconds',
      'Auto-reorder thresholds learned over 2 weeks',
      'Vision OCR reads invoices into stock',
    ],
  },
  {
    id: 'liquor',
    label: 'Liquor stores',
    status: 'in-progress',
    color: '#7A4B9C',
    headline: 'Bottles in, bottles out. Clover does the math.',
    proof: 'Clover sale → stock decrements → reorder fires automatically.',
    bullets: [
      'Per-SKU thresholds with case + bottle units',
      'Sam’s Club / Costco URLs become Quick Orders',
      'No more end-of-month spreadsheet panic',
    ],
  },
  {
    id: 'bar',
    label: 'Bars',
    status: 'next',
    color: '#C9941E',
    headline: 'Smart scale on the back bar. Shots count themselves.',
    proof: 'Coming next — solving the oldest problem in hospitality.',
    bullets: [
      'Weigh hard liquor bottles, get shot-level accuracy',
      'Match Clover sales to ounces poured — see what walked',
      'Daily variance report owners can actually trust',
    ],
  },
  {
    id: 'market',
    label: 'Markets & convenience',
    status: 'next',
    color: '#1F6E4D',
    headline: 'Expiring milk? It puts itself on the TV at 30% off.',
    proof: 'Coming next — Convenience mode + Display Network combo.',
    bullets: [
      'Track expiration on every receipt-date item',
      'Auto-discount feeds the in-store TV signage',
      'Stop dumpstering inventory you already paid for',
    ],
  },
];

// ============================================================================
// THE 8 MODULES — actual Soul Chicken features
// ============================================================================
const IM_MODULES = [
  {
    label: 'Module 01 · Mobile count',
    title: 'A staff phone is a inventory counter.',
    description: 'Open the link, tap a category, type the number. Box, sleeve, piece — three units, one calculator keypad. No app install, no training. Done in 30 seconds per item.',
    bullets: [
      'Bilingual (English / 한국어) per item',
      'Calculator keypad — staff already know it',
      '"Previous record" inline so they know what changed',
    ],
    screenshot: '../assets/inventory-master/mobile-02-count-keypad.png',
    screenshotAlt: 'Mobile count keypad — Kalihi store, Korean staff member counting Shoyu Sauce',
    caption: 'Soul Chicken Kalihi — staff counter. Tenant brand color = red.',
  },
  {
    label: 'Module 02 · Auto-reorder pipeline',
    title: 'Cart → Sent → Restocked. Nothing falls through.',
    description: 'When stock hits the learned threshold, the system drafts an order. The owner reviews, taps Send, and the supplier gets it via Email / Telegram / SMS. Failures auto-retry; restocks reconcile.',
    bullets: [
      '3-stage pipeline with full audit trail',
      'Failure tracking + retry — never silently lost',
      'Restock reconciliation against the original PO',
    ],
    screenshot: '../assets/inventory-master/desktop-04-orders-cart.png',
    screenshotAlt: 'Desktop orders cart with multiple suppliers',
    caption: 'Owner reviewing today’s draft orders.',
  },
  {
    label: 'Module 03 · Vision invoice OCR',
    title: 'Snap the invoice. Stock updates itself.',
    description: 'Powered by Claude Sonnet 4.5 vision. Photograph any supplier invoice — handwritten, thermal-printed, foreign language — and it’s parsed against your item catalog. Confirm matches, hit save.',
    bullets: [
      'Reads handwriting, multiple languages, photos of photos',
      'Auto-matches line items against your existing catalog',
      'One-tap confirmation per item',
    ],
    screenshot: null,
    caption: null,
  },
  {
    label: 'Module 04 · Smart reminders',
    title: 'Staff first. Owner only when it matters.',
    description: 'Counts due? The on-shift counter gets the ping. No response in 2 hours → reminder. 4 hours → second nudge. Still nothing → owner gets paged. Three channels: SMS, Email, Telegram.',
    bullets: [
      'Escalation: counter → reminder ×3 → owner',
      'Three channels: Twilio SMS, email, Telegram',
      'Owner sees who responded and who didn’t',
    ],
    screenshot: null,
    caption: null,
  },
  {
    label: 'Module 05 · Supplier integrations',
    title: 'Paste a Sam’s Club URL. Get a quick-order.',
    description: 'URL parsers for Sam’s Club, Costco Business, Amazon. Drop a product link, the item gets created with name, unit, supplier, and link-back. Reorder by tapping a button — it opens the supplier cart pre-loaded.',
    bullets: [
      'Sam’s Club, Costco Business, Amazon parsers',
      'Quick-order links — supplier cart opens pre-filled',
      'Email / Telegram / SMS dispatch per supplier',
    ],
    screenshot: '../assets/inventory-master/desktop-05-suppliers.png',
    screenshotAlt: 'Suppliers page',
    caption: null,
  },
  {
    label: 'Module 06 · Multi-store tenancy',
    title: 'Same engine. Every store its own brand.',
    description: 'Each location runs in complete isolation — its own inventory, its own staff, its own brand color. Spinning up store #2? Clone setup, change the color, you’re live in five minutes.',
    bullets: [
      'Per-store inventory, staff, suppliers, thresholds',
      'Per-store brand color — runtime CSS variable',
      'Copy Setup workflow for new locations',
    ],
    screenshot: null,
    caption: 'Two stores, same code, different colors — Kalihi runs red, Ke’eaumoku runs teal.',
  },
  {
    label: 'Module 07 · Trends & analytics',
    title: '90 days of "what actually moves."',
    description: 'Top items by consumption. Most ordered. ↑↓ vs last week, last month. The numbers an owner needs to negotiate with suppliers — without exporting to Excel.',
    bullets: [
      '90-day usage curves per item',
      'Top-N by consumption + most-ordered ranks',
      'Per-store + roll-up across locations',
    ],
    screenshot: '../assets/inventory-master/desktop-07-trends.png',
    screenshotAlt: 'Trends page showing top items by consumption',
    caption: 'Ke’eaumoku trends — same system, teal tenant color.',
  },
  {
    label: 'Module 08 · Production pipelines',
    title: 'Raw → prepped, automatically deducted.',
    description: 'When the kitchen marinates 20 lbs of boneless, raw chicken stock drops by 20, prepped chicken stock goes up by 20. One pipeline definition, one tap, the books reconcile.',
    bullets: [
      'Define raw → prepped recipes once',
      'One-tap conversion at the prep station',
      'Stock reconciles automatically across both items',
    ],
    screenshot: '../assets/inventory-master/desktop-11-pipeline.png',
    screenshotAlt: 'Production pipeline screen',
    caption: null,
  },
];

// ============================================================================
// LEARNING MODE — the differentiator
// ============================================================================
const IM_LEARNING_STAGES = [
  {
    week: 'Week 1–2',
    label: 'Just count.',
    body: 'Staff count daily. The system records every entry, computes daily usage, and starts modeling each item’s velocity. No thresholds set yet — we don’t know your store yet.',
  },
  {
    week: 'Week 3+',
    label: 'We tell you when.',
    body: 'Sixty learned suggestions land in the Auto-Reorder screen — Min and Order quantities, ready to apply. Tap "Apply All" or review one by one. Adjust as the season shifts.',
  },
  {
    week: 'Forever',
    label: 'Keep adjusting.',
    body: 'Suggestions never stop. Velocity changes — slower lunches, busier weekends, new menu items — the system re-suggests. You stay in the driver’s seat; we keep the math current.',
  },
];

// ============================================================================
// CLOVER INTEGRATION — why Inventory Master lives inside Aloha Smart System
// ============================================================================
const IM_CLOVER_FLOW = [
  {
    step: '1',
    label: 'Sale at the register',
    body: 'Customer buys a bottle of Crown Royal. Clover Station rings it up. Standard transaction, nothing special — except the receipt also fires an INVENTORY_UPDATE webhook.',
  },
  {
    step: '2',
    label: 'Stock decrements automatically',
    body: 'Inventory Master receives the webhook, decrements the SKU, recomputes velocity. No manual count needed for items already in Clover’s catalog.',
  },
  {
    step: '3',
    label: 'Threshold check + auto-order',
    body: 'If the new stock level crosses the learned Min, the reorder pipeline fires. A draft order lands in the owner’s queue with the right supplier pre-selected.',
  },
  {
    step: '4',
    label: 'One tap → supplier',
    body: 'Owner reviews on phone, taps Send. Supplier gets the order via their preferred channel. Restock arrives, gets scanned in, books reconcile.',
  },
];
