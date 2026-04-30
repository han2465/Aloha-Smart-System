// Reusable contact form for all Aloha Smart System product pages.
// Submits to Web3Forms → info@alohasmartsystem.com
// Usage:
//   <AlohaContactForm
//     accentColor="#C8553D" deepColor="#7A2E1F"
//     productName="Food Court Master"
//     defaultTopic="Food Court Master"
//   />

const AlohaContactForm = ({
  accentColor = '#C8553D',
  deepColor = '#7A2E1F',
  productName = '',
  defaultTopic = '',
  isMobile = false,
  variant = 'light', // 'light' (form on dark bg) or 'dark' (form on light bg)
}) => {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [business, setBusiness] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [touched, setTouched] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const valid = name.trim().length > 0 && emailValid && message.trim().length > 0;

  const WEB3FORMS_KEY = 'adeb6c3b-2bf5-4dad-a49a-59875cbaf20d';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched(true);
    if (!valid || submitting) return;

    setSubmitting(true);
    setErrorMsg('');

    const subjectPrefix = productName ? `[${productName}] ` : '';
    const businessPart = business.trim() ? ' (' + business.trim() + ')' : '';

    const payload = {
      access_key: WEB3FORMS_KEY,
      subject: `${subjectPrefix}New inquiry — ${name.trim()}${businessPart}`,
      from_name: productName ? `${productName} page` : 'Aloha Smart System',
      product: productName || '(general)',
      topic: defaultTopic || productName || '(not specified)',
      name: name.trim(),
      phone: phone.trim() || '(not provided)',
      email: email.trim(),
      business: business.trim() || '(not provided)',
      message: message.trim(),
      replyto: email.trim(),
      botcheck: '',
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data && data.success) {
        setSent(true);
      } else {
        setErrorMsg((data && data.message) || 'Something went wrong. Please email info@alohasmartsystem.com directly.');
      }
    } catch (err) {
      setErrorMsg('Network error. Please email info@alohasmartsystem.com directly.');
    } finally {
      setSubmitting(false);
    }
  };

  // Form sits on a dark/colored background (most product CTA sections)
  const onDark = variant === 'light';

  const inputBase = {
    width: '100%',
    background: onDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)',
    border: `1px solid ${onDark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.12)'}`,
    borderRadius: 10,
    color: onDark ? '#fff' : '#1A1A1A',
    fontSize: 15,
    padding: '13px 15px',
    outline: 'none',
    fontFamily: 'inherit',
    transition: 'border-color .15s, background .15s',
    boxSizing: 'border-box',
  };
  const labelStyle = {
    display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
    color: onDark ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.6)',
    marginBottom: 7, textTransform: 'uppercase',
  };
  const fieldErr = (cond) => touched && cond
    ? { ...inputBase, borderColor: '#F87171' }
    : inputBase;

  const cardBg = onDark ? 'rgba(255,255,255,0.06)' : '#FFFFFF';
  const cardBorder = onDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.08)';

  if (sent) {
    return (
      <div style={{
        background: cardBg, border: cardBorder, borderRadius: 14,
        padding: isMobile ? '32px 22px' : '40px 28px', textAlign: 'center',
      }}>
        <div style={{
          width: 52, height: 52, margin: '0 auto 16px', borderRadius: '50%',
          background: accentColor, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 26, color: '#fff', fontWeight: 700,
        }}>✓</div>
        <div style={{ fontSize: 20, fontWeight: 700, color: onDark ? '#fff' : '#1A1A1A', marginBottom: 8 }}>Mahalo &mdash; we got it.</div>
        <p style={{ fontSize: 14, color: onDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)', lineHeight: 1.5, margin: '0 0 20px' }}>
          We&rsquo;ll come back within 48 hours.
        </p>
        <button
          type="button"
          onClick={() => { setSent(false); setTouched(false); setName(''); setPhone(''); setEmail(''); setBusiness(''); setMessage(''); setErrorMsg(''); }}
          style={{
            background: 'transparent', color: onDark ? '#fff' : '#1A1A1A',
            border: `1px solid ${onDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.2)'}`,
            padding: '9px 18px', borderRadius: 999, fontWeight: 600,
            fontSize: 13, cursor: 'pointer',
          }}
        >Done</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{
      background: cardBg, border: cardBorder, borderRadius: 14,
      padding: isMobile ? '24px 20px' : '32px 28px', textAlign: 'left',
    }} className={onDark ? 'aloha-form-dark' : 'aloha-form-light'}>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 14 }}>
        <div>
          <label style={labelStyle}>Name<span style={{ color: accentColor }}> *</span></label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}
            placeholder="Your name" style={fieldErr(!name.trim())} autoComplete="name" />
        </div>
        <div>
          <label style={labelStyle}>Phone</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
            placeholder="(808) 555-0000" style={inputBase} autoComplete="tel" />
        </div>
      </div>

      <div style={{ marginTop: 14 }}>
        <label style={labelStyle}>Email<span style={{ color: accentColor }}> *</span></label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="you@yourcompany.com" style={fieldErr(!emailValid)} autoComplete="email" />
      </div>

      <div style={{ marginTop: 14 }}>
        <label style={labelStyle}>Business name</label>
        <input type="text" value={business} onChange={(e) => setBusiness(e.target.value)}
          placeholder="Restaurant, store, food hall..." style={inputBase} autoComplete="organization" />
      </div>

      <div style={{ marginTop: 14 }}>
        <label style={labelStyle}>Tell us more<span style={{ color: accentColor }}> *</span></label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)}
          placeholder={`What you're running, what you'd like to fix or build${productName ? ' with ' + productName : ''}...`}
          rows={4}
          style={{ ...fieldErr(!message.trim()), resize: 'vertical', minHeight: 100, fontFamily: 'inherit' }} />
      </div>

      {touched && !valid && (
        <div style={{ marginTop: 12, fontSize: 13, color: '#F87171' }}>
          Please fill in name, a valid email, and a brief description.
        </div>
      )}
      {errorMsg && (
        <div style={{ marginTop: 12, fontSize: 13, color: '#F87171' }}>{errorMsg}</div>
      )}

      <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
        <button type="submit" disabled={submitting}
          style={{
            background: accentColor, color: '#fff', border: 'none',
            padding: isMobile ? '13px 22px' : '14px 26px', borderRadius: 999, fontWeight: 700,
            fontSize: isMobile ? 14 : 15,
            cursor: submitting ? 'default' : 'pointer', opacity: submitting ? 0.7 : 1,
            display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'inherit',
          }}>
          {submitting ? 'Sending…' : <>Send message <span style={{ fontSize: 16 }}>→</span></>}
        </button>
        <div style={{ fontSize: 12, color: onDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)', lineHeight: 1.45, flex: '1 1 180px', minWidth: 160 }}>
          Goes to <span style={{ color: onDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.75)' }}>info@alohasmartsystem.com</span>. We reply within 48h.
        </div>
      </div>

      <style>{`
        .aloha-form-dark input:focus,
        .aloha-form-dark textarea:focus,
        .aloha-form-dark select:focus {
          border-color: ${accentColor} !important;
          background: rgba(255,255,255,0.12) !important;
        }
        .aloha-form-dark input::placeholder,
        .aloha-form-dark textarea::placeholder {
          color: rgba(255,255,255,0.4);
        }
        .aloha-form-light input:focus,
        .aloha-form-light textarea:focus,
        .aloha-form-light select:focus {
          border-color: ${accentColor} !important;
          background: rgba(0,0,0,0.02) !important;
        }
        .aloha-form-light input::placeholder,
        .aloha-form-light textarea::placeholder {
          color: rgba(0,0,0,0.35);
        }
      `}</style>
    </form>
  );
};

window.AlohaContactForm = AlohaContactForm;
