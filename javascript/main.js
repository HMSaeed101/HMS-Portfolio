import { projects, photos, academics, skills } from './data.js';
import { renderProjects, renderPhotos, renderAcademics, renderSkills } from './render.js';
import { initLightbox, initMobileMenu, initScrollReveal, initScrollSpy, initContactForm, initPhotoGrid } from './utils.js';

// Controller fetches from model, passes to view
renderProjects(projects);
renderPhotos(photos);
renderAcademics(academics);
renderSkills(skills);

// Controller wires view dependencies together
const openLightbox = initLightbox();
initPhotoGrid(openLightbox);
initMobileMenu();
initScrollReveal();
initScrollSpy();
initContactForm();

// Photo category filter
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.photo-item').forEach(item => {
      const match = filter === 'all' || item.dataset.category === filter;
      item.classList.toggle('hidden', !match);
    });
  });
});