/* ── RENDER ───────────────────────────────────────────────── */

import { projects, photos, academics, skills } from './data.js';

export function renderProjects() {
  const grid = document.getElementById('projects-grid');

  projects.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.style.transitionDelay = (i * 0.08) + 's';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}" loading="lazy">
      <div class="project-body">
        <span class="project-tag">${p.tag}</span>
        <div class="project-title">${p.title}</div>
        <p class="project-desc">${p.desc}</p>
        <div class="project-links">
          <a href="${p.demo}" class="project-link">
            <svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Live Demo
          </a>
          <a href="${p.code}" class="project-link">
            <svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            View Code
          </a>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

export function renderPhotos(openLightbox) {
  const grid = document.getElementById('photo-grid');

  photos.forEach(ph => {
    const item = document.createElement('div');
    item.className = 'photo-item';
    item.innerHTML = `
      <img src="${ph.src}" alt="${ph.caption}" loading="lazy">
      <div class="photo-overlay"><span class="photo-caption">${ph.caption}</span></div>`;
    item.addEventListener('click', () => openLightbox(ph.src, ph.caption));
    grid.appendChild(item);
  });
}

export function renderAcademics() {
  const list = document.getElementById('academic-list');

  academics.forEach(a => {
    const item = document.createElement('div');
    item.className = 'academic-item reveal';
    item.innerHTML = `
      <div class="academic-year">${a.year}</div>
      <div class="academic-body">
        <div class="academic-degree">${a.degree}</div>
        <div class="academic-school">${a.school}</div>
        <p class="academic-desc">${a.desc}</p>
        <span class="academic-badge">${a.badge}</span>
      </div>`;
    list.appendChild(item);
  });
}

export function renderSkills() {
  const wrapper = document.getElementById('skills-grid');

  skills.forEach(cat => {
    const section = document.createElement('div');
    section.className = 'skills-category';

    const title = document.createElement('div');
    title.className = 'skills-category-title';
    title.textContent = cat.category;

    const pills = document.createElement('div');
    pills.className = 'skills-pills';

    cat.items.forEach(name => {
      const pill = document.createElement('span');
      pill.className = 'skill-pill';
      pill.innerHTML = `<span class="skill-dot" style="background:${cat.color}"></span>${name}`;
      pills.appendChild(pill);
    });

    section.appendChild(title);
    section.appendChild(pills);
    wrapper.appendChild(section);
  });
}