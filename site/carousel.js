(() => {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;

  const slides = [...carousel.querySelectorAll('.event-slide')];
  const controls = carousel.querySelector('.carousel-controls');
  const play = carousel.querySelector('.carousel-play');
  const count = carousel.querySelector('.carousel-count');
  const status = carousel.querySelector('.carousel-status');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let paused = motion.matches;
  let hovered = false;
  let visible = false;
  let timer;
  let finishTransition = () => {};

  function schedule() {
    window.clearInterval(timer);
    play.textContent = paused ? 'Play slideshow' : 'Pause slideshow';
    if (!paused && !hovered && visible && !document.hidden) {
      timer = window.setInterval(() => show(current + 1), 7000);
    }
  }

  function show(index, announce = false, direction = 1) {
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
        { transform: 'translateX(0)' }, { transform: `translateX(${-direction * 100}%)` }
      ], options);
      const incoming = slides[current].querySelector('img').animate([
        { transform: `translateX(${direction * 100}%)` }, { transform: 'translateX(0)' }
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
    count.textContent = `${current + 1} / ${slides.length}`;
    if (announce) {
      status.textContent = `Photo ${current + 1} of ${slides.length}: ${slides[current].querySelector('figcaption').textContent.trim()}`;
    }
  }

  function navigate(offset) {
    paused = true;
    show(current + offset, true, offset);
    schedule();
  }

  carousel.classList.add('is-enhanced');
  slides.forEach((slide, i) => {
    slide.setAttribute('role', 'group');
    slide.setAttribute('aria-roledescription', 'slide');
    slide.setAttribute('aria-label', `${i + 1} of ${slides.length}`);
  });
  controls.hidden = false;
  show(0);
  carousel.querySelector('.carousel-previous').addEventListener('click', () => navigate(-1));
  carousel.querySelector('.carousel-next').addEventListener('click', () => navigate(1));
  play.addEventListener('click', () => { paused = !paused; schedule(); });

  // Focus stops rotation until the visitor explicitly restarts it.
  carousel.addEventListener('focusin', () => { paused = true; schedule(); });
  carousel.addEventListener('mouseenter', () => { hovered = true; schedule(); });
  carousel.addEventListener('mouseleave', () => { hovered = false; schedule(); });
  controls.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    navigate(event.key === 'ArrowLeft' ? -1 : 1);
  });
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
