(() => {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;

  const slides = [...carousel.querySelectorAll('.event-slide')];
  const play = carousel.querySelector('.carousel-play');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let paused = motion.matches;
  let hovered = false;
  let visible = false;
  let timer;
  let finishTransition = () => {};
  let pointerPaused;

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

  function show(index) {
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
      const options = { duration: 1100, easing: 'cubic-bezier(.22,.61,.36,1)', fill: 'both' };
      const outgoing = leaving.querySelector('img').animate([
        { transform: 'translateX(0)' }, { transform: 'translateX(-100%)' }
      ], options);
      const incoming = slides[current].querySelector('img').animate([
        { transform: 'translateX(100%)' }, { transform: 'translateX(0)' }
      ], options);
      let finished = false;
      finishTransition = () => {
        if (finished) return;
        finished = true;
        outgoing.cancel();
        incoming.cancel();
        leaving.hidden = true;
        leaving.classList.remove('is-leaving');
      };
      incoming.onfinish = finishTransition;
    }
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
