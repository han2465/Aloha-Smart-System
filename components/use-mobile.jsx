// useIsMobile hook + mobile helpers
// Used by all pages to swap layouts at <=768px

window.useIsMobile = function useIsMobile(breakpoint = 768) {
  // DEBUG: temporary force-mobile via ?force=mobile or localStorage
  const forced = (typeof window !== 'undefined' &&
    (new URLSearchParams(window.location.search).get('force') === 'mobile' ||
     localStorage.getItem('__force_mobile') === '1'));
  const [isMobile, setIsMobile] = React.useState(
    forced || (typeof window !== 'undefined' ? window.innerWidth <= breakpoint : false)
  );
  React.useEffect(() => {
    const forced = (new URLSearchParams(window.location.search).get('force') === 'mobile' ||
                    localStorage.getItem('__force_mobile') === '1');
    if (forced) { setIsMobile(true); return; }
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handler = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    if (mq.addEventListener) mq.addEventListener('change', handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler);
      else mq.removeListener(handler);
    };
  }, [breakpoint]);
  return isMobile;
};

// Pick value based on breakpoint
window.mob = function mob(isMobile, mobileVal, desktopVal) {
  return isMobile ? mobileVal : desktopVal;
};
