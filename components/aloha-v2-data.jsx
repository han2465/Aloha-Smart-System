// Aloha Smart System v2 — shared data
// SEO keywords woven through copy, products organized by persona

const ALOHA_BRAND = {
  name: 'Aloha Smart System',
  tagline: 'Hawaii\'s payment + commerce platform',
  email: 'info@alohasmartsystem.com',
  phone: '(808) 650-3331',
  address: 'Honolulu, Hawaii',
  parent: 'Musubi Media LLC',
};

// Primary SEO keywords woven into copy:
// "Hawaii credit card processing", "Hawaii POS system", "Hawaii kiosk system",
// "Hawaii table ordering system", "Hawaii delivery integration",
// "Honolulu restaurant POS", "Clover Hawaii", "Korean restaurant POS Hawaii",
// "Food court POS Hawaii", "Japanese restaurant POS Hawaii"

const ALOHA_PRODUCTS = [
  {
    id: 'food-court-master',
    name: 'Food Court Master',
    category: 'Multi-vendor POS',
    tagline: 'One ticket, many kitchens.',
    blurb: 'Multi-vendor food court POS built on Clover. Centralized ordering, kitchen routing, automated settlement, pickup-board displays.',
    persona: 'food-courts',
    features: [
      'Centralized customer ordering across all vendors',
      'Per-vendor kitchen display & ticket routing',
      'Automated end-of-day settlement & vendor payouts',
      'Real-time pickup boards on TVs',
      'Built on Clover · integrates with Zorder',
    ],
    color: 'oklch(0.55 0.18 240)',
  },
  {
    id: 'inventory-master',
    name: 'Inventory Master',
    category: 'Inventory + Display',
    tagline: 'Expiring stock becomes today\'s deal.',
    blurb: 'Inventory and expiration tracking that automatically promotes near-expiry items on your in-store TVs. Built for liquor stores, markets, and bakeries.',
    persona: 'markets',
    features: [
      'Real-time inventory + expiration tracking',
      'Auto-generated discount tags & TV promotions',
      'No graphic designer needed — system creates the ad',
      'Reduce waste, lift basket size',
      'Works with Clover inventory & barcode scanners',
    ],
    color: 'oklch(0.55 0.16 145)',
  },
  {
    id: 'table-order',
    name: 'Table Order',
    category: 'QR + Mobile ordering',
    tagline: 'Order from the table. No waiting for a server.',
    blurb: 'QR-code table ordering for Hawaii restaurants. Customers scan, browse, order — orders fire straight to the kitchen via Clover. Payment at the counter.',
    persona: 'restaurants',
    features: [
      'QR code per table — no app download',
      'Real-time menu, photos, modifiers',
      'Direct fire to Clover KDS or printer',
      'Payment at the counter (not at table)',
      'English / Korean / Japanese menus',
    ],
    color: 'oklch(0.6 0.16 30)',
  },
  {
    id: 'delivery-hub',
    name: 'Delivery Hub',
    category: 'Third-party delivery integration',
    tagline: 'DoorDash, Uber, GrubHub — one screen.',
    blurb: 'Stop juggling three tablets. Aggregate every third-party delivery order into a single Clover-connected workflow with synced menu and inventory.',
    persona: 'restaurants',
    features: [
      'DoorDash · Uber Eats · GrubHub',
      'One menu source — push everywhere',
      'Auto-hide sold-out items across all platforms',
      'Consolidated reporting & reconciliation',
      'Stop the tablet hell',
    ],
    color: 'oklch(0.6 0.18 70)',
  },
  {
    id: 'kiosk',
    name: 'Smart Kiosk',
    category: 'Self-order kiosk',
    tagline: 'Self-order without the wait.',
    blurb: 'Self-order kiosks for quick-service restaurants and food courts. Bilingual interface, Clover payment, custom branding per location.',
    persona: 'restaurants',
    features: [
      'Built on Clover Flex / Mini hardware',
      'Bilingual & trilingual menus (EN / KO / JP)',
      'Upsell prompts & combo logic',
      'Card, Apple Pay, Google Pay',
      'Standalone or paired with Food Court Master',
    ],
    color: 'oklch(0.55 0.14 280)',
  },
  {
    id: 'display-network',
    name: 'Musubi Display Network',
    category: 'In-store digital signage',
    tagline: 'Your TVs, monetized.',
    blurb: 'Turn any in-store TV into a programmable channel. Run your own promos, Inventory Master discounts, or rent slots to other local merchants.',
    persona: 'all',
    features: [
      'Schedule menus, promos, brand reels',
      'Inventory Master auto-runs expiring-stock deals',
      'Cross-promote with neighboring merchants',
      'Remote management — push from phone',
      'Optional ad marketplace revenue share',
    ],
    color: 'oklch(0.55 0.2 320)',
  },
];

const ALOHA_PERSONAS = [
  {
    id: 'restaurants',
    label: 'Restaurants',
    sublabel: 'Korean · Japanese · local kitchens',
    headline: 'Front of house, back of house, delivery — one system.',
    description: 'Hawaii restaurant POS that handles dine-in, takeout, table ordering, and every delivery app from one Clover terminal.',
    products: ['table-order', 'delivery-hub', 'kiosk'],
    pains: [
      'Three tablets for DoorDash / Uber / GrubHub',
      'Menu changes have to be done five places',
      'Servers running back and forth for payment',
    ],
  },
  {
    id: 'food-courts',
    label: 'Food Courts',
    sublabel: 'Multi-vendor halls & shared kitchens',
    headline: 'One order, many kitchens, zero chaos.',
    description: 'Food court POS for Hawaii — centralized ordering across vendors, automatic settlement, real-time pickup boards.',
    products: ['food-court-master', 'kiosk', 'display-network'],
    pains: [
      'Separate POS per vendor, no shared cart',
      'End-of-day settlement is a spreadsheet nightmare',
      'Customers wandering looking for their food',
    ],
  },
  {
    id: 'markets',
    label: 'Markets & Liquor',
    sublabel: 'Grocers, bakeries, liquor stores',
    headline: 'Inventory that sells itself.',
    description: 'Inventory Master watches expiration dates and promotes near-expiry items on your TVs — automatic, no graphic designer.',
    products: ['inventory-master', 'display-network'],
    pains: [
      'Throwing away expired stock every week',
      'Designer + printer for every weekend sale',
      'No real-time view of what\'s running low',
    ],
  },
  {
    id: 'multi-location',
    label: 'Multi-location',
    sublabel: 'Chains & franchises',
    headline: 'Run every location like one.',
    description: 'Centralized menu, pricing, and reporting across every Hawaii location — push a change once, see it everywhere.',
    products: ['food-court-master', 'delivery-hub', 'display-network'],
    pains: [
      'Each location has different menus and prices',
      'No way to compare performance store-to-store',
      'Updates require visiting every store',
    ],
  },
];

const ALOHA_FAQ = [
  {
    q: 'Do you actually process the credit cards, or just resell someone else\'s system?',
    a: 'We process them. Aloha Smart System is a Clover-authorized merchant services provider serving Hawaii. Your settlement comes from us, your support comes from us, and your rate is negotiated with us — not a 1-800 number on the mainland.',
  },
  {
    q: 'How is this different from buying Clover directly?',
    a: 'Clover hardware is the foundation — we build the apps and workflows on top. Food Court Master, Inventory Master, Table Order, Delivery Hub — none of that comes out of the box. We design and install the full system for your specific business.',
  },
  {
    q: 'Do you support Korean and Japanese restaurants in Hawaii?',
    a: 'Yes — bilingual and trilingual menus (English / Korean / Japanese) are built into Table Order, Smart Kiosk, and our Display Network. Receipts, kitchen tickets, and customer-facing screens all support multi-language.',
  },
  {
    q: 'Can I keep my existing Clover hardware?',
    a: 'In most cases, yes. We can layer Aloha Smart System apps onto an existing Clover Station, Mini, or Flex. We also help you switch your merchant processing over so everything is under one roof.',
  },
  {
    q: 'How fast can you install?',
    a: 'A single restaurant: typically 1–2 weeks from contract signing. Food courts and multi-location rollouts: 4–8 weeks depending on vendor count and integrations.',
  },
  {
    q: 'Where are you based?',
    a: 'Honolulu, Hawaii. We install on-site across Oʻahu and remote-support the neighbor islands. Aloha Smart System is operated by Musubi Media LLC.',
  },
];

const ALOHA_LOCATIONS = [
  'Honolulu', 'Waikīkī', 'Kakaʻako', 'Kapolei', 'Pearl City',
  'Mililani', 'Kailua', 'Aiea', 'Waipahu', 'Hawaiʻi Kai',
];

Object.assign(window, {
  ALOHA_BRAND,
  ALOHA_PRODUCTS,
  ALOHA_PERSONAS,
  ALOHA_FAQ,
  ALOHA_LOCATIONS,
});
