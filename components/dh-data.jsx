// Delivery Hub — data + tokens

const DH_C = {
  bg: '#F5EFE6',
  bgAlt: '#EEE6D7',
  bgDark: '#0E1A24',
  surface: '#FFFFFF',
  ink: '#0E1A24',
  ink70: 'rgba(14,26,36,0.72)',
  ink50: 'rgba(14,26,36,0.55)',
  ink30: 'rgba(14,26,36,0.30)',
  ink10: 'rgba(14,26,36,0.10)',
  // Aggregator (3rd party) — clover green
  agg: '#1F8B3E',
  aggDeep: '#13682B',
  // Hula — coral / hawaii sunset
  hula: '#E8553D',
  hulaDeep: '#B83A24',
  hulaSoft: '#FBE9E3',
  ocean: '#1B7A8F',
  gold: '#E8B339',
};

// 3rd-party aggregators we connect
const DH_PLATFORMS = [
  { name: 'Uber Eats', color: '#06C167' },
  { name: 'DoorDash', color: '#FF3008' },
  { name: 'GrubHub', color: '#FF8000' },
  { name: '', color: '#FF671F' },
];

// What we do — owner ships us photos, we do everything else
const DH_SETUP_STEPS = [
  { n: '01', k: 'Send us your food photos',
    v: 'Just photos and a menu. No menu sheet? We\'ll come shoot it. We handle every Uber Eats / DoorDash / GrubHub onboarding form for you.' },
  { n: '02', k: 'We connect every platform to one Clover',
    v: 'Uber, DoorDash, GrubHub — all routed into the Clover printer you already have. No third tablet on the counter. No fourth tablet. Zero.' },
  { n: '03', k: 'Order prints. Kitchen makes it. Done.',
    v: 'Orders auto-accept and print to the kitchen the second they hit. Menu and 86-list stay in sync — change the price once, every platform updates.' },
  { n: '04', k: 'We babysit it for you',
    v: 'You don\'t know what a "menu mapping error" is. You don\'t need to. We monitor your account and fix it before you notice.' },
];

// The two tracks: 3rd-party aggregator vs Hula self-platform
const DH_TRACKS_FEATURES_AGG = [
  'Uber Eats · DoorDash · GrubHub on one Clover',
  'No tablet stack — everything prints to your Clover printer',
  'One menu source, one sold-out list — update once, every platform syncs',
  'We handle onboarding, photos, menu mapping, support',
  'Daily reconciliation — see all platforms in one report',
];

const DH_TRACKS_FEATURES_HULA = [
  'Pickup price = delivery price. No 30% markup to the guest',
  'Local-first — built for Hawaii, runs on huladelivery.com',
  'Customer pays delivery fee only. You keep your menu margin',
  'Same Clover printer integration — orders just print',
  'Loyalty + repeat customers stay yours, not the platform\'s',
];

// The 30% problem — visualizes the markup
const DH_PRICE_COMPARE = {
  item: 'Bibimbap',
  pickup: 16.95,
  aggregatorMarkup: 22.04, // ~30% inflated to keep margin
  hulaPrice: 16.95,
  hulaDeliveryFee: 4.99,
};

// Side-by-side compare
const DH_COMPARE = [
  { row: 'Who lists you',
    agg: 'Uber, DoorDash, GrubHub',
    hula: 'huladelivery.com (Aloha-run)' },
  { row: 'Customer-facing price',
    agg: '~30% higher than dine-in',
    hula: 'Same as pickup price' },
  { row: 'Commission to owner',
    agg: '15–30% per order',
    hula: '0% commission, flat platform fee' },
  { row: 'Customer base',
    agg: 'New customers via app discovery',
    hula: 'Hawaii locals, repeat regulars' },
  { row: 'Order routing',
    agg: 'Into your Clover printer',
    hula: 'Into your Clover printer' },
  { row: 'Setup',
    agg: 'We handle onboarding',
    hula: 'We list your menu for you' },
  { row: 'Best for',
    agg: 'New customer reach, fill empty hours',
    hula: 'Loyal local base, protect margin' },
];

// FAQ specific to delivery
const DH_FAQ = [
  { q: 'Do I need to buy a separate tablet for each delivery app?',
    a: 'No. That\'s the whole point. Uber Eats, DoorDash, GrubHub and all route into the Clover printer you already have. We turn those tablets off the day we go live.' },
  { q: 'I don\'t have menu photos. Can you help?',
    a: 'Yes. We can shoot your menu in your store — usually a 2-hour visit covers a full menu. Or send us photos from your phone and we\'ll clean them up.' },
  { q: 'How is huladelivery.com different from Uber Eats?',
    a: 'Two things. (1) The customer pays your pickup price — no 30% markup. (2) You pay a flat platform fee instead of 15–30% commission. The customer pays a delivery fee that goes to the driver. Local guests love it, owners keep their margin.' },
  { q: 'Can I run both at the same time?',
    a: 'Yes — most owners do. Use Uber/DoorDash to get tourist reach, use Hula Delivery to keep your local regulars. Both flow into the same Clover printer.' },
  { q: 'What if I already have a tablet from one of the apps?',
    a: 'We turn it off and box it up. You won\'t need it. Everything routes through Clover.' },
];
