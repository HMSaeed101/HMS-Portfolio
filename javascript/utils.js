/* ── UTILS ────────────────────────────────────────────────── */

/* ── LIGHTBOX ─────────────────────────────────────────────── */
export function initLightbox() {
  const lightbox    = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  return openLightbox;
}


/* ── MOBILE MENU ──────────────────────────────────────────── */

export function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  menuToggle.addEventListener('click', () => mobileMenu.classList.toggle('open'));

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      mobileMenu.classList.remove('open');
    }
  });
}


/* ── SCROLL REVEAL ────────────────────────────────────────── */

export function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}


/* ── CONTACT FORM ─────────────────────────────────────────── */

export function initContactForm() {
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('.form-submit');
    btn.textContent = 'Message Sent ✓';
    btn.style.background = '#4a7c3f';
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = '';
      this.reset();
    }, 3000);
  });
}

/* ── PHOTO GRID ─────────────────────────────────────────── */
export function initPhotoGrid(openLightbox) {
  document.getElementById('photo-grid').addEventListener('click', (e) => {
    const item = e.target.closest('.photo-item');
    if (!item) return;
    openLightbox(item.dataset.src, item.dataset.caption);
  });
}

/* ── Render List ─────────────────────────────────────────── */
export function renderList(containerId, dataArray, buildElement) {
  const container = document.getElementById(containerId);
  const fragment = document.createDocumentFragment();

  dataArray.forEach((item, i) => {
    const el = buildElement(item, i);
    fragment.appendChild(el);
  });

  container.appendChild(fragment);
}