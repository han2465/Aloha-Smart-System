// Table Order — data file

const TO_C = {
  bg: '#F5EFE6', bgAlt: '#EDE4D3', surface: '#FFFFFF',
  ink: '#1A1A1F',
  ink80: 'rgba(26,26,31,0.82)',
  ink70: 'rgba(26,26,31,0.72)',
  ink50: 'rgba(26,26,31,0.5)',
  ink30: 'rgba(26,26,31,0.28)',
  ink15: 'rgba(26,26,31,0.14)',
  ink10: 'rgba(26,26,31,0.08)',
  ink08: 'rgba(26,26,31,0.08)',
  // Accent — deep crimson to echo Korean BBQ fire
  crimson: '#C8192B',
  crimsonDeep: '#7A0F1A',
  crimsonMist: '#F7D6DA',
  // Supporting
  teal: '#0E8C9E',
  gold: '#C9941E',
  palm: '#1F6E4D',
  terra: '#C8553D',
};

const TO_PLUMERIA_BG = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60"><g fill="none" stroke="%23C8192B" stroke-width="1" stroke-linejoin="round" opacity="0.14"><g transform="translate(30 30)"><path d="M0 -16 C 6 -13 9 -7 6 -1 C 3 3 -3 3 -6 -1 C -9 -7 -6 -13 0 -16 Z"/><g transform="rotate(72)"><path d="M0 -16 C 6 -13 9 -7 6 -1 C 3 3 -3 3 -6 -1 C -9 -7 -6 -13 0 -16 Z"/></g><g transform="rotate(144)"><path d="M0 -16 C 6 -13 9 -7 6 -1 C 3 3 -3 3 -6 -1 C -9 -7 -6 -13 0 -16 Z"/></g><g transform="rotate(216)"><path d="M0 -16 C 6 -13 9 -7 6 -1 C 3 3 -3 3 -6 -1 C -9 -7 -6 -13 0 -16 Z"/></g><g transform="rotate(288)"><path d="M0 -16 C 6 -13 9 -7 6 -1 C 3 3 -3 3 -6 -1 C -9 -7 -6 -13 0 -16 Z"/></g><circle r="2" fill="%23C8192B" stroke="none"/></g></g></svg>')`;

// ============================================================================
// REFERENCE BUILDS
// ============================================================================
const TO_REFERENCES = [
  {
    id: 'sura',
    name: 'Sura Hawaii',
    subtitle: 'Korean BBQ · Waikiki',
    logo: '../assets/table-order/sura-hawaii-logo.png',
    photo: '../assets/table-order/sura-hawaii-zorder-tablet.jpg',
    mode: 'AYCE',
    color: '#C8192B',
    description: 'AYCE rounds, butcher cuts, sake refills — every order goes straight from the table to the grill and the bar. Staff handles the experience, not the notepad.',
    handles: '@Sura_Hawaii',
  },
  {
    id: 'chois',
    name: "Choi's Garden",
    subtitle: 'Korean BBQ · Hawaii',
    logo: '../assets/table-order/chois-garden-logo.png',
    logoBg: '#1A1A1F',
    photo: null,
    mode: 'Table Order',
    color: '#C8192B',
    description: 'Full-service Korean BBQ. Tablet handles every refill round so servers focus on the grill and the guest.',
    handles: "Choi's Garden",
  },
  {
    id: 'izakaya',
    name: 'Izakaya / Yakitori',
    subtitle: 'Coming soon · Honolulu',
    logo: null,
    photo: null,
    mode: 'À la carte',
    color: '#1A1A1F',
    description: 'Small-plate flow — 3 yakitori, 3 more, sake refill, dessert. Built for high-frequency reorders.',
    handles: 'In conversation',
    isLantern: true,
  },
];

// (Choi's Garden now lives in TO_REFERENCES; this list kept empty for compatibility)
const TO_ALSO_LIVE = [];

// ============================================================================
// HOW IT WORKS — 4 steps
// ============================================================================
const TO_FLOW = [
  {
    step: '1',
    label: 'Guest sits down',
    body: 'The tablet wakes. The menu is already there — categories, photos, prices, descriptions in the guest\'s language. No server needed to hand out menus.',
  },
  {
    step: '2',
    label: 'Guest orders from the tablet',
    body: 'They tap items, customize, add to cart. AYCE mode shows the dinner timer and which round they\'re on. À la carte shows running total. No waiting for a server to come by.',
  },
  {
    step: '3',
    label: 'Order routes to the kitchen instantly',
    body: 'Zorder sends the ticket directly to the POS — kitchen printer, bar printer, or KDS. Clover registers the sale. The server doesn\'t write anything down.',
  },
  {
    step: '4',
    label: 'Staff serves, not takes orders',
    body: 'Your team focuses on the grill, the refills, the experience. Follow-up orders — another round of kalbi, a drink refill — come in without a raised hand or a wait.',
  },
];

// ============================================================================
// KEY BENEFITS
// ============================================================================
const TO_BENEFITS = [
  {
    label: 'Labor costs',
    title: 'Run more tables with fewer servers.',
    body: 'In Hawaii, a full-service server costs $18–22/hr after tips. Table ordering means one server handles 2–3× the section. The system takes the order; the person delivers the experience.',
    stat: '2–3×',
    statLabel: 'section per server',
  },
  {
    label: 'Revenue',
    title: 'Guests order more when they browse at their pace.',
    body: 'No rushing the waiter\'s attention. No hesitation about asking for another round. Interactive menus drive upsell on drinks, sides, and desserts — consistently more per check.',
    stat: '+18%',
    statLabel: 'avg check increase (Zorder data)',
  },
  {
    label: 'Tips',
    title: 'Tips went up, not down.',
    body: '"Won\'t tablets kill tips?" — a real concern. In one Zorder client case, tips increased 5% the month after launch. Staff spend more time on hospitality; guests appreciate it.',
    stat: '+5%',
    statLabel: 'tips after launch',
  },
  {
    label: 'AYCE control',
    title: 'Timer on-screen. Rounds tracked. No disputes.',
    body: 'AYCE restaurants live and die by round discipline. The dinner timer runs on the tablet, visible to the guest. Round tracking is automatic. No awkward "how long have they been here?" conversations.',
    stat: '0',
    statLabel: 'round disputes',
  },
];

// ============================================================================
// AYCE MODE DETAILS
// ============================================================================
const TO_AYCE_FEATURES = [
  'On-screen countdown timer — guests see their window, no disputes',
  'Round tracking — system knows which round, throttles accordingly',
  'Category locks — kitchen items only available in correct sequence',
  'Order throttling — prevent abuse, protect your food cost',
  '"Dinner AYCE" vs "Lunch AYCE" — separate rules per daypart',
  'Table count display — party size tracked from the start',
];
