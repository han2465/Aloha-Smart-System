const C = {
  bg: '#F5EFE6', bgAlt: '#EDE4D3', surface: '#FFFFFF',
  ink: '#1A1A1F', ink70: 'rgba(26,26,31,0.72)', ink50: 'rgba(26,26,31,0.5)',
  ink20: 'rgba(26,26,31,0.18)', ink10: 'rgba(26,26,31,0.08)',
  accent: '#C8553D', accentDeep: '#7A2E1F', blush: '#F1D9CF',
  gold: '#C9941E',
};

const QUESTIONS = [
  {
    id: 'business',
    title: 'What kind of business are you running?',
    sub: 'Pick the closest match.',
    options: [
      { v: 'restaurant', label: 'Full-service restaurant', sub: 'Korean BBQ, sushi, AYCE, sit-down', emoji: '🍜' },
      { v: 'qsr',        label: 'Quick-service / Takeout', sub: 'Plate lunch, poke, fast casual', emoji: '🥡' },
      { v: 'cafe',       label: 'Coffee shop / Cafe', sub: 'Coffee, boba, bakery, dessert', emoji: '☕' },
      { v: 'bar',        label: 'Bar / Pub / Lounge', sub: 'Bar-forward, cocktails, late night', emoji: '🍺' },
      { v: 'foodcourt',  label: 'Food court / Food hall', sub: 'Multiple kitchens, one space', emoji: '🏪' },
      { v: 'ghost',      label: 'Ghost kitchen / Delivery-only', sub: 'No dine-in, all online', emoji: '🛵' },
      { v: 'liquor',     label: 'Liquor store', sub: 'Wine, beer, spirits', emoji: '🍷' },
      { v: 'market',     label: 'Convenience / Mini-market', sub: 'Grocery, deli, mini-mart', emoji: '🛒' },
      { v: 'retail',     label: 'Retail / Other', sub: 'Gift shop, clothing, salon', emoji: '🛍' },
    ],
  },
  {
    id: 'size',
    title: 'How big is your team?',
    sub: 'Including you and part-timers.',
    options: [
      { v: 'solo',     label: '1–5 people', sub: 'Just opened or family-run', emoji: '👤' },
      { v: 'small',    label: '6–15 people', sub: 'Single location, busy', emoji: '👥' },
      { v: 'medium',   label: '16–30 people', sub: 'Established, growing', emoji: '👨' },
      { v: 'multi',    label: '30+ or multi-location', sub: 'Multiple stores', emoji: '🏬' },
    ],
  },
  {
    id: 'stage',
    title: 'Where are you in your journey?',
    sub: 'This helps us pace the recommendation.',
    options: [
      { v: 'planning', label: 'Planning a new store', sub: 'Opening soon', emoji: '🌱' },
      { v: 'basic',    label: 'Open but using basic POS', sub: 'Square, Toast, generic Clover', emoji: '🔧' },
      { v: 'upgrade',  label: 'Open and looking to upgrade', sub: 'Current system can\'t keep up', emoji: '⚡' },
      { v: 'clover',   label: 'Already on Clover', sub: 'Just need apps and integrations', emoji: '🔁' },
    ],
  },
  {
    id: 'pain',
    title: 'What is the biggest headache right now?',
    sub: 'Pick the one that hurts most. We\'ll address others too.',
    options: [
      { v: 'labor',     label: 'Labor is too expensive', sub: 'Hard to find, expensive to keep', emoji: '💸' },
      { v: 'inventory', label: 'Inventory is a mess', sub: 'Running out, over-ordering, waste', emoji: '📦' },
      { v: 'orders',    label: 'Missed or slow orders', sub: 'Tickets get lost, customers wait', emoji: '⏱' },
      { v: 'customers', label: 'Not enough customers', sub: 'Need marketing, delivery, awareness', emoji: '📣' },
      { v: 'fees',      label: 'Processing fees too high', sub: 'Toast/Square taking too much', emoji: '💳' },
      { v: 'silos',     label: 'Systems don\'t talk', sub: 'POS, inventory, delivery all separate', emoji: '🧩' },
      { v: 'custom',    label: 'I need custom software', sub: 'Off-the-shelf doesn\'t fit my workflow', emoji: '🛠' },
    ],
  },
  {
    id: 'goals',
    title: 'What would help your business most?',
    sub: 'Pick all that apply — we\'ll tailor the recommendation.',
    multi: true,
    options: [
      { v: 'cut-labor',   label: 'Cut labor hours', sub: 'Replace tasks staff hate', emoji: '⚡' },
      { v: 'self-order',  label: 'Self-order (kiosk / tablet / QR)', sub: 'Customers order themselves', emoji: '📱' },
      { v: 'delivery',    label: 'Connect delivery apps', sub: 'DoorDash, Uber, GrubHub', emoji: '🛵' },
      { v: 'marketing',   label: 'In-store TV / digital signage', sub: 'Promote menu, lift tickets', emoji: '📺' },
      { v: 'auto-order',  label: 'Auto-reorder inventory', sub: 'Stop running out of staples', emoji: '🔁' },
      { v: 'loyalty',     label: 'Loyalty / repeat customers', sub: 'Bring people back', emoji: '🎁' },
      { v: 'lower-rates', label: 'Lower credit card rates', sub: 'Local processing, no mainland', emoji: '💳' },
      { v: 'multi-loc',   label: 'Multi-location reporting', sub: 'Manage all stores from one place', emoji: '🏬' },
    ],
  },
];

// Recommendation logic
function recommend(a) {
  const products = new Set();
  const savings = [];
  let custom = false;

  // Always processing
  products.add('processing');

  // Custom software pain — special signal
  if (a.pain === 'custom') {
    custom = true;
    products.add('custom-build');
    savings.push({ icon: '', label: 'We build software for a living', detail: 'Inventory Master, Food Court Master, Soul Chicken, Sura tablets — all built in-house. If you can describe it, we can ship it on top of Clover.' });
  }

  // Business type
  if (a.business === 'foodcourt') {
    products.add('food-court-master');
    savings.push({ icon: '', label: 'Run every kitchen from one ticket', detail: 'Food Court Master routes orders automatically. Cuts the runner role entirely.' });
  }
  if (a.business === 'restaurant' || a.business === 'cafe' || a.business === 'qsr') {
    products.add('table-order');
  }
  if (a.business === 'cafe') {
    products.add('kiosk');
  }
  if (a.business === 'bar') {
    products.add('inventory-master');
    savings.push({ icon: '', label: 'Pour cost & spirit inventory under control', detail: 'Inventory Master tracks bottles by oz with auto-reorder. Owners stop guessing what walked out.' });
  }
  if (a.business === 'ghost') {
    products.add('delivery-hub');
    savings.push({ icon: '', label: 'All delivery apps on one screen', detail: 'DoorDash, Uber Eats, GrubHub on a single tablet. No more juggling 4 devices at peak.' });
  }
  if (a.business === 'liquor' || a.business === 'market' || a.business === 'retail') {
    products.add('inventory-master');
    products.add('display-network');
  }

  // Pain points
  if (a.pain === 'labor') {
    products.add('table-order');
    products.add('kiosk');
    savings.push({ icon: '', label: 'Cut server hours with self-order', detail: 'Table Order + Smart Kiosk replace order-taking. Servers focus on service, not paperwork.' });
  }
  if (a.pain === 'inventory') {
    products.add('inventory-master');
    savings.push({ icon: '', label: 'Save 5–7 manager hours/week', detail: 'Inventory Master uses Vision OCR on invoices and auto-reorders. Live at Soul Chicken Hawaii.' });
  }
  if (a.pain === 'orders') {
    products.add('food-court-master');
    products.add('table-order');
    savings.push({ icon: '⏱', label: 'Stop missed and slow orders', detail: 'Tickets route directly to KDS. Guests order at their pace. No waiting on a server.' });
  }
  if (a.pain === 'customers') {
    products.add('display-network');
    products.add('delivery-hub');
    savings.push({ icon: '', label: 'Lift tickets without staff effort', detail: 'In-store TV signage promotes menu items automatically. Plus delivery apps in one screen.' });
  }
  if (a.pain === 'fees') {
    savings.push({ icon: '', label: 'Local Hawaii processing rates', detail: 'Direct merchant services through us. Not a mainland call center. We\'ll quote against your current statement.' });
  }
  if (a.pain === 'silos') {
    savings.push({ icon: '', label: 'One system, end to end', detail: 'POS + Inventory + Delivery + Signage all on Clover, talking to each other. No more spreadsheet bridges.' });
  }

  // Goals
  if ((a.goals || []).includes('lower-rates')) {
    savings.push({ icon: '', label: 'Lower processing rates than Toast/Square', detail: 'Local Hawaii rates, direct merchant services. We\'ll show you the math against your current statement.' });
  }
  if ((a.goals || []).includes('delivery'))   products.add('delivery-hub');
  if ((a.goals || []).includes('marketing'))  products.add('display-network');
  if ((a.goals || []).includes('auto-order')) products.add('inventory-master');
  if ((a.goals || []).includes('self-order')) { products.add('table-order'); products.add('kiosk'); }
  if ((a.goals || []).includes('cut-labor')) {
    products.add('table-order'); products.add('kiosk'); products.add('inventory-master');
  }
  if ((a.goals || []).includes('loyalty')) {
    products.add('custom-build');
    savings.push({ icon: '', label: 'Loyalty built into your POS', detail: 'We integrate Clover loyalty + custom rewards apps. Repeat customers without printed punch cards.' });
  }
  if ((a.goals || []).includes('multi-loc') || a.size === 'multi') {
    savings.push({ icon: '', label: 'One backoffice across stores', detail: 'Per-store tenancy with central reporting. Copy setup to a new location in 5 minutes.' });
  }

  // Stage messaging
  if (a.stage === 'planning') {
    savings.unshift({ icon: '', label: 'Day-one setup, done right', detail: 'We help plan the floor, install hardware, configure menus before you open. No retrofitting later.' });
  }
  if (a.stage === 'upgrade' || a.stage === 'basic') {
    savings.push({ icon: '', label: 'Migrate your menu and data', detail: 'We move your menu, modifiers, and pricing from Square/Toast/old Clover. You don\'t restart from zero.' });
  }

  return { products: [...products], savings, custom };
}

const PRODUCT_INFO = {
  'processing':       { name: 'Credit Card Processing',       tag: 'PROCESSING',  color: '#0E5BA8', body: 'Hawaii-local rates. Direct Clover-authorized merchant services. One support number for all of it.', link: 'index.html#processing' },
  'food-court-master':{ name: 'Food Court Master',            tag: 'POS',         color: '#7A2E1F', body: 'Multi-vendor POS. One ticket, every kitchen paid. Built for food halls.', link: 'products/food-court-master.html' },
  'inventory-master': { name: 'Inventory Master',             tag: 'INVENTORY',   color: '#1F6E4D', body: 'Vision-OCR invoices. Auto-reorder. Live at Soul Chicken Hawaii.', link: 'products/inventory-master.html' },
  'table-order':      { name: 'Table Order',                  tag: 'ORDERING',    color: '#C8553D', body: 'Zorder tablets at every table. AYCE rounds. Live at Sura & Choi\'s Garden.', link: 'products/table-order.html' },
  'delivery-hub':     { name: 'Delivery Hub',                 tag: 'DELIVERY',    color: '#C9941E', body: 'DoorDash, Uber Eats, GrubHub on one screen. Stop juggling tablets.', link: 'index.html#products' },
  'kiosk':            { name: 'Smart Kiosk',                  tag: 'KIOSK',       color: '#5B3FA8', body: 'Bilingual self-order. Replaces a counter cashier at peak hours.', link: 'index.html#products' },
  'display-network':  { name: 'Display Network',              tag: 'DISPLAYS',    color: '#0E1A24', body: 'Your in-store TVs sell for you. Auto-promote menu items, lift ticket size.', link: 'index.html#products' },
  'custom-build':     { name: 'Custom Software Build',        tag: 'CUSTOM',      color: '#C8553D', body: 'Off-the-shelf doesn\'t fit? We build. In-house dev team, all running on Clover.', link: 'index.html#products' },
};



function FindYourFit() {
  var isMobile = useIsMobile();
  var _s = React.useState(0), step = _s[0], setStep = _s[1];
  var _a = React.useState({}), answers = _a[0], setAnswers = _a[1];
  var total = QUESTIONS.length;
  var done = step >= total;
  var q = QUESTIONS[step];

  var select = function(v) {
    if (q.multi) {
      var cur = answers[q.id] || [];
      var next = cur.indexOf(v) >= 0 ? cur.filter(function(x){return x !== v}) : cur.concat([v]);
      var newA = Object.assign({}, answers);
      newA[q.id] = next;
      setAnswers(newA);
    } else {
      var newA = Object.assign({}, answers);
      newA[q.id] = v;
      setAnswers(newA);
      setTimeout(function(){ setStep(step + 1); }, 220);
    }
  };

  var restart = function() { setAnswers({}); setStep(0); };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{
        padding: isMobile ? '14px 18px' : '20px 32px', borderBottom: '1px solid ' + C.ink10,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: C.bg, position: 'sticky', top: 0, zIndex: 10,
      }}>
        <a href="index.html" style={{ display: 'inline-flex', alignItems: 'baseline', fontWeight: 700, letterSpacing: '-0.04em', fontSize: isMobile ? 16 : 20 }}>
          Aloha Smart System<span style={{ color: C.accent }}>.</span>
        </a>
        <div style={{ fontSize: isMobile ? 11 : 12, color: C.ink70, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          {done ? 'Your fit' : (isMobile ? (step + 1) + ' / ' + total : 'Question ' + (step + 1) + ' of ' + total)}
        </div>
      </header>

      <div style={{ height: 4, background: C.ink10 }}>
        <div style={{
          height: '100%', width: ((done ? total : step) / total * 100) + '%',
          background: C.accent, transition: 'width 0.4s ease',
        }}></div>
      </div>

      <div style={{ flex: 1, padding: isMobile ? '32px 18px' : '56px 32px', maxWidth: 1100, width: '100%', margin: '0 auto' }}>
        {!done && (
          <QuestionView q={q} value={answers[q.id]} onSelect={select}
            isMobile={isMobile}
            onNext={function(){ setStep(step + 1); }}
            onBack={step > 0 ? function(){ setStep(step - 1); } : null}
            isLast={step === total - 1} />
        )}
        {done && <ResultView answers={answers} onRestart={restart} isMobile={isMobile} />}
      </div>

      <footer style={{ padding: isMobile ? '20px' : '24px 32px', borderTop: '1px solid ' + C.ink10 }}>
        <div style={{ fontSize: 12, color: C.ink50,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textAlign: 'center' }}>
          <div>Aloha Smart System · Built in Honolulu · Clover-authorized</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, flexWrap: 'wrap', justifyContent: 'center' }}>
            <span>Authorized partner of</span>
            <CardConnectMark scale={0.55} />
            <span>· CCS HQ (877) 682-1117</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function QuestionView(props) {
  var q = props.q, value = props.value, onSelect = props.onSelect;
  var onNext = props.onNext, onBack = props.onBack, isLast = props.isLast;
  var isMobile = props.isMobile;
  var isMulti = !!q.multi;
  var selected = isMulti ? (value || []) : value;
  var hasSelection = isMulti ? selected.length > 0 : !!selected;

  return (
    <div>
      <h1 style={{
        fontSize: isMobile ? 'clamp(26px, 7vw, 34px)' : 'clamp(32px, 4vw, 52px)',
        lineHeight: 1.05, letterSpacing: '-0.03em',
        fontWeight: 700, margin: '0 0 10px', color: C.ink, maxWidth: 800,
      }}>
        {q.title}
      </h1>
      <p style={{ fontSize: isMobile ? 15 : 17, color: C.ink70, margin: isMobile ? '0 0 24px' : '0 0 36px', maxWidth: 700 }}>
        {q.sub}
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: isMobile ? 10 : 14,
      }}>
        {q.options.map(function(opt) {
          var isSel = isMulti ? selected.indexOf(opt.v) >= 0 : selected === opt.v;
          return (
            <button key={opt.v} onClick={function(){ onSelect(opt.v); }}
              style={{
                background: isSel ? C.ink : C.surface,
                color: isSel ? 'white' : C.ink,
                border: '2px solid ' + (isSel ? C.ink : C.ink10),
                borderRadius: isMobile ? 12 : 16,
                padding: isMobile ? '16px 14px' : '24px 22px',
                textAlign: 'left', position: 'relative',
                transition: 'all 0.18s ease',
                outline: 'none',
              }}>
              <div style={{ fontSize: isMobile ? 28 : 36, marginBottom: isMobile ? 8 : 12, lineHeight: 1 }}>{opt.emoji}</div>
              <div style={{ fontSize: isMobile ? 14 : 18, fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 4, lineHeight: 1.2 }}>
                {opt.label}
              </div>
              <div style={{ fontSize: isMobile ? 11 : 13, color: isSel ? 'rgba(255,255,255,0.65)' : C.ink70, lineHeight: 1.4 }}>
                {opt.sub}
              </div>
              {isSel && (
                <div style={{
                  position: 'absolute', top: isMobile ? 10 : 14, right: isMobile ? 10 : 14,
                  width: isMobile ? 20 : 24, height: isMobile ? 20 : 24,
                  borderRadius: 999, background: C.accent,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: isMobile ? 11 : 14, color: 'white',
                }}>OK</div>
              )}
            </button>
          );
        })}
      </div>

      {isMulti && (
        <div style={{ display: 'flex', gap: 12, marginTop: isMobile ? 24 : 36, justifyContent: 'space-between' }}>
          <button onClick={onBack} disabled={!onBack}
            style={{ background: 'transparent', color: onBack ? C.ink70 : C.ink20,
              padding: '12px 20px', fontWeight: 600, fontSize: 14,
              cursor: onBack ? 'pointer' : 'default' }}>
            Back
          </button>
          <button onClick={onNext} disabled={!hasSelection}
            style={{ background: hasSelection ? C.accent : C.ink10,
              color: hasSelection ? 'white' : C.ink50,
              padding: isMobile ? '12px 20px' : '14px 28px', borderRadius: 999, fontWeight: 600, fontSize: 15,
              cursor: hasSelection ? 'pointer' : 'default' }}>
            {isLast ? 'See my fit' : 'Next'}
          </button>
        </div>
      )}

      {!isMulti && onBack && (
        <div style={{ marginTop: isMobile ? 20 : 28 }}>
          <button onClick={onBack}
            style={{ background: 'transparent', color: C.ink70, padding: '8px 0', fontWeight: 600, fontSize: 14 }}>
            Back
          </button>
        </div>
      )}
    </div>
  );
}

function ResultView(props) {
  var answers = props.answers, onRestart = props.onRestart, isMobile = props.isMobile;
  var result = recommend(answers);
  var products = result.products, savings = result.savings, custom = result.custom;

  return (
    <div>
      <div style={{ marginBottom: isMobile ? 28 : 40 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 14px', background: C.blush,
          border: '1px solid ' + C.accent + '33', borderRadius: 999,
          fontSize: 11, fontWeight: 700, color: C.accentDeep,
          letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 18,
        }}>
          Your tailored recommendation
        </div>
        <h1 style={{
          fontSize: isMobile ? 'clamp(28px, 8vw, 38px)' : 'clamp(36px, 5vw, 64px)',
          lineHeight: 1.02, letterSpacing: '-0.03em',
          fontWeight: 700, margin: '0 0 16px', color: C.ink, maxWidth: 900,
        }}>
          {custom ? 'Whatever you need - ' : 'Here is what Aloha Smart System gives '}
          <span style={{ color: C.accent }}>{custom ? 'we can build it.' : 'your business.'}</span>
        </h1>
        <p style={{ fontSize: isMobile ? 15 : 18, color: C.ink70, margin: '0 0 0', maxWidth: 760, lineHeight: 1.55 }}>
          {custom
            ? 'Based on your answers, we combine our products with custom development. Same Clover hardware everyone uses - but with software no one else has.'
            : 'Based on your answers, these are the products and outcomes we recommend. Same Clover hardware everyone uses - but with apps no one else has.'
          }
        </p>
      </div>

      {savings.length > 0 && (
        <div style={{ marginBottom: isMobile ? 32 : 48 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', color: C.ink70, textTransform: 'uppercase', marginBottom: 14 }}>
            What you save and gain
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: 10 }}>
            {savings.map(function(s, i) {
              return (
                <div key={i} style={{
                  background: C.ink, color: 'white', borderRadius: 14, padding: '22px 24px',
                }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
                  <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 6 }}>
                    {s.label}
                  </div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                    {s.detail}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div style={{ marginBottom: isMobile ? 32 : 48 }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', color: C.ink70, textTransform: 'uppercase', marginBottom: 14 }}>
          Your stack ({products.length} {products.length === 1 ? 'product' : 'products'})
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: 10 }}>
          {products.map(function(pid) {
            var p = PRODUCT_INFO[pid];
            return (
              <a key={pid} href={p.link} style={{
                background: C.surface, border: '1px solid ' + C.ink10,
                borderRadius: 14, padding: '22px 24px', display: 'block',
                color: 'inherit',
              }}>
                <div style={{
                  display: 'inline-block', fontSize: 10, fontWeight: 800, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: p.color, marginBottom: 10,
                }}>
                  {p.tag}
                </div>
                <div style={{ fontSize: 19, fontWeight: 700, color: C.ink, letterSpacing: '-0.02em', marginBottom: 6 }}>
                  {p.name}
                </div>
                <div style={{ fontSize: 13, color: C.ink70, lineHeight: 1.5, marginBottom: 14 }}>
                  {p.body}
                </div>
                <div style={{ fontSize: 12, fontWeight: 600, color: p.color }}>
                  Learn more
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <ContactForm answers={answers} products={products} custom={custom} onRestart={onRestart} isMobile={isMobile} />
    </div>
  );
}

function ContactForm(props) {
  var answers = props.answers, products = props.products, custom = props.custom, onRestart = props.onRestart, isMobile = props.isMobile;
  var _n = React.useState(''), name = _n[0], setName = _n[1];
  var _e = React.useState(''), email = _e[0], setEmail = _e[1];
  var _p = React.useState(''), phone = _p[0], setPhone = _p[1];
  var _b = React.useState(''), biz = _b[0], setBiz = _b[1];
  var _no = React.useState(''), note = _no[0], setNote = _no[1];
  var _s = React.useState(false), sent = _s[0], setSent = _s[1];

  var bizType = (QUESTIONS[0].options.find(function(o){return o.v === answers.business}) || {}).label || '';
  var teamSize = (QUESTIONS[1].options.find(function(o){return o.v === answers.size}) || {}).label || '';
  var stage = (QUESTIONS[2].options.find(function(o){return o.v === answers.stage}) || {}).label || '';
  var pain = (QUESTIONS[3].options.find(function(o){return o.v === answers.pain}) || {}).label || '';
  var goals = (answers.goals || []).map(function(g){ return (QUESTIONS[4].options.find(function(o){return o.v === g}) || {}).label; }).filter(Boolean).join(', ');
  var recProducts = products.map(function(pid){ var p = PRODUCT_INFO[pid]; return p ? p.name : pid; }).join(', ');

  var quizSummary = 'Business: ' + bizType + '\nTeam: ' + teamSize + '\nStage: ' + stage + '\nBiggest pain: ' + pain + '\nGoals: ' + goals + '\nRecommended: ' + recProducts;

  var handleSubmit = function() {
    var subject = custom ? 'Custom Build Inquiry - Aloha Smart System' : 'Quote Request - Aloha Smart System';
    var parts = ['Name: ' + name, 'Email: ' + email, 'Phone: ' + phone];
    if (biz) parts.push('Business: ' + biz);
    if (note) parts.push('Note: ' + note);
    parts.push('');
    parts.push('--- Quiz Results ---');
    parts.push(quizSummary);
    var body = parts.join('\n');
    window.location.href = 'mailto:info@alohasmartsystem.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    setSent(true);
  };

  var valid = name.trim() && email.trim() && phone.trim();

  if (sent) {
    return (
      <div style={{
        background: '#E8F5EE', borderRadius: 18, padding: '48px 36px',
        textAlign: 'center', border: '1px solid #2EA86B33',
      }}>
        <div style={{ fontSize: 24, fontWeight: 700, color: C.ink, marginBottom: 10 }}>
          Email app opened!
        </div>
        <div style={{ fontSize: 15, color: C.ink70, lineHeight: 1.55, maxWidth: 480, margin: '0 auto 24px' }}>
          Your quiz results are pre-filled in the email. Hit send and we reply within 24 hours.
        </div>
        <button onClick={onRestart} style={{
          background: C.ink, color: 'white', padding: '12px 24px', borderRadius: 999,
          fontWeight: 600, fontSize: 14,
        }}>Start over</button>
      </div>
    );
  }

  return (
    <div style={{
      background: C.accent, color: 'white', borderRadius: isMobile ? 14 : 18,
      padding: isMobile ? '24px 20px' : 'clamp(28px, 5vw, 48px)',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 1fr) minmax(0, 1.1fr)',
      gap: isMobile ? 24 : 40, alignItems: 'start',
    }}>
      <div>
        <div style={{ fontSize: isMobile ? 22 : 26, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 10 }}>
          {custom ? 'Tell us what you need.' : 'Get in touch.'}
        </div>
        <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', lineHeight: 1.55, marginBottom: 28 }}>
          {custom
            ? 'Our team will scope your project and come back with a build plan. Clover-authorized. Honolulu-based.'
            : 'Our team will look at your setup and walk you through these products. Clover-authorized. Honolulu-based.'
          }
        </div>

        <div style={{
          background: 'rgba(0,0,0,0.15)', borderRadius: 12, padding: '18px 20px',
          fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6,
        }}>
          <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 10 }}>
            Your quiz answers (auto-included)
          </div>
          <div>Type: {bizType}</div>
          <div>Team: {teamSize}</div>
          <div>Stage: {stage}</div>
          <div>Pain: {pain}</div>
          {goals && <div>Goals: {goals}</div>}
          <div>Recommended: {recProducts}</div>
        </div>

        <button onClick={onRestart} style={{
          background: 'transparent', color: 'rgba(255,255,255,0.6)',
          border: '1px solid rgba(255,255,255,0.25)',
          padding: '10px 18px', borderRadius: 999, fontWeight: 500, fontSize: 12,
          marginTop: 18,
        }}>Start over</button>
      </div>

      <div style={{
        background: 'white', borderRadius: 14, padding: isMobile ? '22px 20px' : '28px 28px',
        color: C.ink,
      }}>
        <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 20 }}>
          Quick info
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <label style={{ fontSize: 12, fontWeight: 700, color: C.ink50,
              letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6, display: 'block' }}>
              Name *
            </label>
            <input value={name} onChange={function(e){setName(e.target.value)}}
              placeholder="Your name"
              style={{
                width: '100%', padding: '12px 14px', borderRadius: 10,
                border: '1.5px solid ' + C.ink10, fontSize: 15, outline: 'none',
                fontFamily: 'inherit', boxSizing: 'border-box',
              }} />
          </div>

          <div>
            <label style={{ fontSize: 12, fontWeight: 700, color: C.ink50,
              letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6, display: 'block' }}>
              Email *
            </label>
            <input value={email} onChange={function(e){setEmail(e.target.value)}}
              placeholder="you@email.com" type="email"
              style={{
                width: '100%', padding: '12px 14px', borderRadius: 10,
                border: '1.5px solid ' + C.ink10, fontSize: 15, outline: 'none',
                fontFamily: 'inherit', boxSizing: 'border-box',
              }} />
          </div>

          <div>
            <label style={{ fontSize: 12, fontWeight: 700, color: C.ink50,
              letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6, display: 'block' }}>
              Phone *
            </label>
            <input value={phone} onChange={function(e){setPhone(e.target.value)}}
              placeholder="(808) 000-0000" type="tel"
              style={{
                width: '100%', padding: '12px 14px', borderRadius: 10,
                border: '1.5px solid ' + C.ink10, fontSize: 15, outline: 'none',
                fontFamily: 'inherit', boxSizing: 'border-box',
              }} />
          </div>

          <div>
            <label style={{ fontSize: 12, fontWeight: 700, color: C.ink50,
              letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6, display: 'block' }}>
              Business name
            </label>
            <input value={biz} onChange={function(e){setBiz(e.target.value)}}
              placeholder="e.g. Seoul Kitchen"
              style={{
                width: '100%', padding: '12px 14px', borderRadius: 10,
                border: '1.5px solid ' + C.ink10, fontSize: 15, outline: 'none',
                fontFamily: 'inherit', boxSizing: 'border-box',
              }} />
          </div>

          <div>
            <label style={{ fontSize: 12, fontWeight: 700, color: C.ink50,
              letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6, display: 'block' }}>
              Anything else? (optional)
            </label>
            <textarea value={note} onChange={function(e){setNote(e.target.value)}}
              placeholder="e.g. 12 tables, Korean BBQ, need kiosk too"
              rows={2}
              style={{
                width: '100%', padding: '12px 14px', borderRadius: 10,
                border: '1.5px solid ' + C.ink10, fontSize: 15, outline: 'none',
                fontFamily: 'inherit', resize: 'vertical', boxSizing: 'border-box',
              }} />
          </div>
        </div>

        <button onClick={handleSubmit} disabled={!valid}
          style={{
            width: '100%', marginTop: 20, padding: '16px 24px',
            borderRadius: 999, fontWeight: 700, fontSize: 16,
            background: valid ? C.accent : C.ink10,
            color: valid ? 'white' : C.ink50,
            cursor: valid ? 'pointer' : 'default',
          }}>
          {custom ? 'Email us your project' : 'Get in touch'}
        </button>

        <div style={{ fontSize: 11, color: C.ink50, marginTop: 12, textAlign: 'center', lineHeight: 1.5 }}>
          Opens your email app with quiz results pre-filled.
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<FindYourFit />);
