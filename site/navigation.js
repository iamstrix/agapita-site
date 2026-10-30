(() => {
  const header = document.querySelector('.header');
  if (!header) return;

  // Keep anchor and focus scrolling clear of the header as navigation wraps or fonts resize.
  function updateHeight() {
    document.documentElement.style.setProperty('--header-height', `${Math.ceil(header.getBoundingClientRect().height)}px`);
  }
  updateHeight();
  if ('ResizeObserver' in window) {
    new ResizeObserver(updateHeight).observe(header);
  } else {
    window.addEventListener('resize', updateHeight);
  }
})();
