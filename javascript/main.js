import { renderProjects, renderPhotos, renderAcademics } from './render.js';
import { initLightbox, initMobileMenu, initScrollReveal, initContactForm } from './utils.js';

const openLightbox = initLightbox();

renderProjects();
renderPhotos(openLightbox);
renderAcademics();

initMobileMenu();
initScrollReveal();
initContactForm();