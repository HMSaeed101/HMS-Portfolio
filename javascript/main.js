import { renderProjects, renderPhotos, renderAcademics, renderSkills } from './render.js';
import { initLightbox, initMobileMenu, initScrollReveal, initContactForm } from './utils.js';

const openLightbox = initLightbox();

renderProjects();
renderPhotos(openLightbox);
renderAcademics();
renderSkills();

initMobileMenu();
initScrollReveal();
initContactForm();