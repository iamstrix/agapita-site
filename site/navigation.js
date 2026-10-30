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

  // Mark the link for the section under the header; the hero has no link, so nothing is marked there.
  const nav = header.querySelector('.header-nav');
  const sections = [...nav.querySelectorAll('a[href^="#"]')]
    .map(link => [link, document.getElementById(link.hash.slice(1))])
    .filter(([, section]) => section);
  let current = null;
  let frame = 0;

  function updateCurrent() {
    frame = 0;
    const line = header.getBoundingClientRect().bottom + window.innerHeight * 0.25;
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    let next = null;
    for (const [link, section] of sections) {
      if (section.getBoundingClientRect().top <= line) next = link;
    }
    // The last section can be too short to reach the line, so the page bottom selects it.
    if (atBottom && sections.length) next = sections[sections.length - 1][0];
    if (next === current) return;
    current?.removeAttribute('aria-current');
    next?.setAttribute('aria-current', 'location');
    current = next;

    // On narrow screens the links scroll sideways; bring the marked one into view.
    if (next && nav.scrollWidth > nav.clientWidth) {
      const navBox = nav.getBoundingClientRect();
      const linkBox = next.getBoundingClientRect();
      if (linkBox.left < navBox.left || linkBox.right > navBox.right) {
        nav.scrollLeft += linkBox.left - navBox.left - (navBox.width - linkBox.width) / 2;
      }
    }
  }

  function requestUpdate() {
    if (!frame) frame = requestAnimationFrame(updateCurrent);
  }
  updateCurrent();
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
})();
