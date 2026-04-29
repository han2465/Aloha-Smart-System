// Smart Kiosk — data + tokens

const KSK_C = {
  bg: '#F5EFE6',
  bgAlt: '#EEE6D7',
  bgDark: '#0E1A24',
  surface: '#FFFFFF',
  ink: '#0E1A24',
  ink70: 'rgba(14,26,36,0.72)',
  ink50: 'rgba(14,26,36,0.55)',
  ink30: 'rgba(14,26,36,0.30)',
  ink10: 'rgba(14,26,36,0.10)',
  cloverGreen: '#1F8B3E',
  cloverGreenDeep: '#13682B',
  custom: '#7A2E1F',
  customDeep: '#5A1F14',
  gold: '#E8B339',
};

const KSK_FORMS = [
  { v: 'floor', label: 'Floor-standing', sub: 'Single pillar, anchored',
    photo: '../assets/kiosk/custom-floor-standing.png',
    use: 'Fast-casual entry, cafeteria line' },
  { v: 'mobile', label: 'Mobile cart', sub: 'Wheels, repositionable',
    photo: '../assets/kiosk/custom-floor-mobile.png',
    use: 'Pop-ups, events, flexible floor plans' },
  { v: 'counter', label: 'Counter-top tower', sub: 'Tall vertical, on counter',
    photo: '../assets/kiosk/custom-countertop-tall.png',
    use: 'Quick-service, drink ordering, takeout' },
  { v: 'dual', label: 'Dual-screen POS hybrid',
    sub: 'Cashier + customer screens',
    photo: '../assets/kiosk/custom-dual-screen.png',
    use: 'Hybrid mode — staff-assisted self-order' },
];

const KSK_COMPARE = [
  { row: 'Hardware', clover: 'Clover-built, Clover-warranted',
    custom: 'Custom-built, Aloha-warranted' },
  { row: 'Form factors', clover: 'Floor-standing (one design)',
    custom: 'Floor / mobile / counter / dual-screen' },
  { row: 'Branding', clover: 'Standard Clover white',
    custom: 'Custom color, your logo on the body' },
  { row: 'Lead time', clover: '2–3 weeks (in stock)',
    custom: '4–6 weeks (built to spec)' },
  { row: 'Up-front cost', clover: '$$$ (premium)',
    custom: '$$ (more affordable)' },
  { row: 'Service', clover: 'Clover network + us',
    custom: 'Direct from Aloha team in Honolulu' },
  { row: 'Best for', clover: 'Established brands, food courts, zero-fuss',
    custom: 'Multi-store chains, brand-conscious, budget-aware' },
];

const KSK_BENEFITS = [
  { k: 'Cut cashier hours', v: 'One kiosk handles 80–120 orders an hour. Most stores remove 1–2 cashier shifts within the first month.' },
  { k: 'Lift ticket size', v: 'Self-order menus surface modifiers and add-ons cleanly. Average ticket up 8–15% — guests order what cashiers forget to ask.' },
  { k: 'Zero language friction', v: 'EN / KR / JP / ZH menus on the same kiosk. One tap to switch. Tourists and locals both happy.' },
  { k: 'Owns the queue', v: 'Order numbers print to the screen and to the Display Network TV. Guests stop crowding the counter.' },
];
