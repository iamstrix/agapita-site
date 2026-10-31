(() => {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;

  const slides = [...carousel.querySelectorAll('.event-slide')];
  const play = carousel.querySelector('.carousel-play');
  const status = carousel.querySelector('.carousel-status');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const wide = window.matchMedia('(min-width: 1000px)');
  let current = 0;
  let paused = motion.matches;
  let hovered = false;
  let visible = false;
  let timer;
  let finishTransition = () => {};
  let pointerPaused;
  let touchStart;

  function schedule() {
    window.clearInterval(timer);
    const label = paused ? 'Play slideshow' : 'Pause slideshow';
    play.setAttribute('aria-label', label);
    play.title = label;
    play.dataset.paused = String(paused);
    if (!paused && !hovered && visible && !document.hidden) {
      timer = window.setInterval(() => show(current + 1), 7000);
    }
  }

  function show(index, direction = 1) {
    finishTransition();
    const previous = current;
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.hidden = i !== current;
      slide.setAttribute('aria-hidden', String(i !== current));
    });
    if (previous !== current && !motion.matches) {
      const leaving = slides[previous];
      leaving.hidden = false;
      leaving.classList.add('is-leaving');
      // The outgoing photo fades out above the new one, so it is never removed while still visible.
      // On the wide layout the new photo also drifts in from the travel direction; its left edge is
      // feathered and its right edge is off-screen, so the drift never exposes a hard edge.
      const options = { duration: 1100, easing: 'cubic-bezier(.45,0,.25,1)', fill: 'both' };
      const outgoing = leaving.querySelector('img').animate([{ opacity: 1 }, { opacity: 0 }], options);
      const incoming = wide.matches ? slides[current].querySelector('img').animate([
        { transform: `translateX(${direction * 4}%)` }, { transform: 'translateX(0)' }
      ], options) : null;
      let finished = false;
      finishTransition = () => {
        if (finished) return;
        finished = true;
        outgoing.cancel();
        incoming?.cancel();
        leaving.hidden = true;
        leaving.classList.remove('is-leaving');
      };
      outgoing.onfinish = finishTransition;
    }
  }

  function navigate(direction) {
    paused = true;
    show(current + direction, direction);
    status.textContent = `Photo ${current + 1} of ${slides.length}: ${slides[current].querySelector('figcaption').textContent.trim()}`;
    schedule();
  }

  carousel.classList.add('is-enhanced');
  slides.forEach((slide, i) => {
    // Load the next photos before their first transition into the hero.
    slide.querySelector('img').loading = 'eager';
    slide.setAttribute('role', 'group');
    slide.setAttribute('aria-roledescription', 'slide');
    slide.setAttribute('aria-label', `${i + 1} of ${slides.length}`);
  });
  play.hidden = false;
  show(0);
  // Capture pointer intent before focus pauses rotation, so the first click can pause.
  play.addEventListener('pointerdown', () => { pointerPaused = paused; });
  play.addEventListener('pointercancel', () => { pointerPaused = undefined; });
  play.addEventListener('click', () => {
    paused = !(pointerPaused ?? paused);
    pointerPaused = undefined;
    if (paused) finishTransition();
    schedule();
  });
  play.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    navigate(event.key === 'ArrowLeft' ? -1 : 1);
  });

  // Listen only on photos; vertical page scrolling and the pause button remain native.
  const photos = carousel.querySelector('.carousel-slides');
  photos.addEventListener('touchstart', (event) => {
    touchStart = event.touches.length === 1
      ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
  }, { passive: true });
  photos.addEventListener('touchcancel', () => { touchStart = null; }, { passive: true });
  photos.addEventListener('touchend', (event) => {
    const start = touchStart;
    touchStart = null;
    if (!start || event.touches.length || event.changedTouches.length !== 1) return;
    const dx = event.changedTouches[0].clientX - start.x;
    const dy = event.changedTouches[0].clientY - start.y;
    if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    const direction = dx < 0 ? 1 : -1;
    navigate(direction);
  }, { passive: true });

  // Focus stops rotation until the visitor explicitly restarts it.
  carousel.addEventListener('focusin', () => { paused = true; schedule(); });
  carousel.addEventListener('mouseenter', () => { hovered = true; schedule(); });
  carousel.addEventListener('mouseleave', () => { hovered = false; schedule(); });
  motion.addEventListener('change', () => {
    if (motion.matches) { paused = true; finishTransition(); }
    schedule();
  });
  document.addEventListener('visibilitychange', schedule);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      schedule();
    }, { threshold: 0.25 }).observe(carousel);
  } else {
    visible = true;
  }
  schedule();
})();
