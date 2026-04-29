// About page — data + tokens

const AB_C = {
  bg: '#F5EFE6',         // warm sand (matches site)
  bgAlt: '#EEE6D7',      // deeper sand
  bgDark: '#0E1A24',     // deep ink for contrast sections
  surface: '#FFFFFF',
  ink: '#0E1A24',
  ink70: 'rgba(14,26,36,0.72)',
  ink50: 'rgba(14,26,36,0.55)',
  ink30: 'rgba(14,26,36,0.30)',
  ink10: 'rgba(14,26,36,0.10)',
  teal: '#2A6F73',       // Aloha Smart System teal
  tealDeep: '#1B4F52',
  crimson: '#C53030',    // Soul Chicken / accent red
  gold: '#E8B339',       // Display Network gold
  goldDeep: '#B07F18',
};

const AB_PRINCIPLES = [
  { k: 'Field-tested, not theory',
    v: 'Every module ships only after it has run inside one of our own restaurants for months. We do not sell what we have not used.' },
  { k: 'Built for Hawaii\'s reality',
    v: 'Immigrant owners. Bilingual staff. Tight margins. Tourists in the morning, locals at night. Generic mainland software does not fit. We start there.' },
  { k: 'Connected, not bolted-on',
    v: 'POS, inventory, table order, kiosk, signage — one system, one source of truth. The screen on the wall knows what the cashier just sold.' },
  { k: 'Boss\'s success = our success',
    v: 'A tool that makes one boss\'s day easier is worth more than ten "innovative" features no one uses. We measure ourselves by your floor, not our roadmap.' },
];

const AB_COMPANIES = [
  {
    side: 'aloha',
    name: 'Aloha Smart System',
    role: 'Software & operations',
    body: 'POS, kiosks, table ordering, inventory, in-store digital signage. Built on Clover, integrated end-to-end. The system that runs your floor.',
    items: ['Clover-authorized POS', 'Inventory Master · Table Order · Kiosk · Display Network', 'On-site install in Honolulu', 'Bilingual support — EN / KR'],
    color: '#2A6F73',
    href: '../index.html',
  },
  {
    side: 'musubi',
    name: 'Musubi Media',
    role: 'Marketing & growth',
    body: 'Instagram and SNS marketing for Hawaii small businesses. Photo, copy, ad campaigns — built around your store, your menu, your community.',
    items: ['Instagram & TikTok ad campaigns', 'In-language content (EN / KR / JP)', 'Local food & lifestyle photography', 'Same team as Aloha Smart System'],
    color: '#0E5BA8',
    href: 'https://musubimedia.net',
    external: true,
  },
];

const AB_CUSTOMERS = [
  { name: 'Soul Chicken Hawaii', loc: 'Dillingham · Midtown Eats Keaumoku',
    role: 'Founding store · Anthony\'s own', system: 'POS · Inventory · Display' },
  { name: 'Sura Hawaii', loc: 'Kapiolani', role: 'Korean BBQ · AYCE',
    system: 'Table Order · POS' },
  { name: 'Choi\'s Garden', loc: 'Honolulu', role: 'Korean restaurant',
    system: 'Table Order' },
  { name: 'Midtown Eats', loc: 'Keaumoku', role: 'Food court · 8 vendors',
    system: 'Food Court Master · Display' },
];

const AB_TIMELINE = [
  { year: 'Early 2010s', label: 'Karaoke systems',
    body: 'Anthony\'s first software venture in Hawaii — building digital karaoke players for local KTVs.' },
  { year: '2015–2020', label: 'Hands-on operations',
    body: 'Operating dry cleaners, restaurants, and karaoke lounges in Honolulu. Living the small-business reality first-hand.' },
  { year: '2021', label: 'Soul Chicken opens',
    body: 'First Korean fried chicken store on Dillingham Boulevard. Internal tools start taking shape.' },
  { year: '2023', label: 'Aloha Smart System',
    body: 'The internal toolkit becomes a product. Clover-authorized. First external customers.' },
  { year: '2024', label: 'Soul Chicken 2호점',
    body: 'Second Soul Chicken opens at Midtown Eats food court. Validates the multi-location side of the system.' },
  { year: '2026', label: 'Today',
    body: 'Aloha Smart System + Musubi Media — software and marketing for Hawaii\'s self-employed bosses.' },
];
