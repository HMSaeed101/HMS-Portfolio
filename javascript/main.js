import { projects, photos, academics, skills } from './data.js';
import { renderProjects, renderPhotos, renderAcademics, renderSkills } from './render.js';
import { initLightbox, initMobileMenu, initScrollReveal, initContactForm, initPhotoGrid } from './utils.js';

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
initContactForm();