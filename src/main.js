// ── Drawer mobile ────────────────────────────────────────────
function toggleDrawer() {
  const drawer = document.getElementById('drawer');
  const btn    = document.getElementById('burgerBtn');
  const overlay = document.getElementById('drawerOverlay');
  const open = drawer.classList.toggle('open');
  btn.classList.toggle('open', open);
  overlay.style.display = open ? 'block' : 'none';
}

function closeDrawer() {
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('burgerBtn').classList.remove('open');
  document.getElementById('drawerOverlay').style.display = 'none';
}

document.getElementById('burgerBtn').addEventListener('click', toggleDrawer);

// ── Header scroll shadow + Hero blur ─────────────────────────
const _hero = document.getElementById('hero');
window.addEventListener('scroll', () => {
  document.getElementById('header').style.boxShadow =
    window.scrollY > 10 ? '0 1px 0 rgba(255,255,255,0.05)' : 'none';

  if (_hero) {
    const progress = Math.min(window.scrollY / (window.innerHeight * 0.5), 1);
    _hero.style.filter  = `blur(${progress * 7}px)`;
    _hero.style.opacity = Math.max(0.25, 1 - progress * 0.7);
  }
}, { passive: true });



// ── Detail Panel — page d'accueil ────────────────────────────
function openProject(id) {
  const p = (window.PROJECTS || []).find(proj => proj.id === id);
  if (!p) return;

  document.getElementById('dp-title').textContent = p.title;
  document.getElementById('dp-meta').textContent = `${p.type} · ${p.platform || ''} · ${p.year}`;
  const cover = document.getElementById('dp-cover');
  cover.src = p.img;
  cover.alt = p.title;
  document.getElementById('dp-desc').textContent = p.desc;

  document.getElementById('dp-infos').innerHTML = `
    <div class="detail-info"><strong>Mon rôle</strong><span>${(p.role || []).join(', ')}</span></div>
    <div class="detail-info"><strong>Équipe</strong><span>${p.team || ''}</span></div>
    <div class="detail-info"><strong>Moteur / Outil</strong><span>${p.engine || ''}</span></div>
    <div class="detail-info"><strong>Durée</strong><span>${p.duration}</span></div>
  `;

  document.getElementById('dp-contrib').innerHTML = (p.contributions || p.role || []).map(c => `<li>${c}</li>`).join('');

  const link = document.getElementById('dp-link');
  link.href = p.link;
  link.style.display = p.link === '#' ? 'none' : 'inline-flex';

  document.getElementById('detail-panel').classList.add('open');
  document.getElementById('detail-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDetailPanel() {
  document.getElementById('detail-panel').classList.remove('open');
  document.getElementById('detail-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeDetailPanel();
});

window.openProject = openProject;
window.closeDetailPanel = closeDetailPanel;

// ── Galerie projets — index ───────────────────────────────────
// Couleurs des tags project.color, définies dans public/data.js (window.COLORS.tags)
const TAG_COLORS = Object.fromEntries(
  Object.entries((window.COLORS && window.COLORS.tags) || {}).map(([k, v]) => [k, v.value])
);

const FEATURED_IDS = ['dotmusic', 'infinitydot', 'floatland', 'longnigth'];

function renderProjectsGallery() {
  const grid = document.getElementById('projects-grid');
  if (!grid || !window.PROJECTS) return;

  const featured = window.PROJECTS
    .map((p, i) => ({ p, i }))
    .filter(({ p }) => FEATURED_IDS.includes(p.id) || FEATURED_IDS.includes(p.title));

  grid.innerHTML = featured.map(({ p, i }) => {
    const border = TAG_COLORS[p.color] || getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
    const imgHtml = p.img
      ? `<img src="${p.thumb || p.img}" alt="${p.title}" loading="lazy">`
      : `<div class="card-placeholder">${p.title}</div>`;
    return `
      <div class="card-project" style="border-top:3px solid ${border}" onclick="openProjectByIndex(${i})">
        <div class="card-img-wrap">${imgHtml}</div>
        <div class="card-info">
          <span class="card-cat">${p.type || ''}</span>
          <h3>${p.title}</h3>
          <p class="card-desc-clamp">${p.desc || ''}</p>
          <span class="card-arrow">↗</span>
        </div>
      </div>`;
  }).join('');
}

function toDocEmbedUrl(src) {
  if (!src) return null;
  if (src.includes('docs.google.com')) {
    return src.replace(/\/(edit|view|pub)(\?.*)?$/, '/preview');
  }
  return null;
}

function toEmbedUrl(url) {
  if (!url) return '';
  if (url.includes('/embed/')) return url;
  const m = url.match(/[?&]v=([^&]+)/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : url;
}

function openProjectByIndex(i) {
  const p = (window.PROJECTS || [])[i];
  if (!p) return;

  document.getElementById('dp-title').textContent = p.title;
  document.getElementById('dp-meta').textContent = [p.type, p.platform, p.year].filter(Boolean).join(' · ');
  document.getElementById('dp-desc').textContent = p.desc || '';

  // Normalise gallery items: string → { src, caption: '', type: 'image' }
  const toItem = g => {
    if (typeof g === 'string') return { src: g, caption: '', type: 'image' };
    return { type: 'image', caption: '', ...g };
  };

  // Build media list: videos first, then images/docs
  const rawGallery = (p.gallery || []).map(toItem).filter(g => g.src !== p.img);
  const mediaList = [
    ...(p.video  ? [{ type: 'video', src: toEmbedUrl(p.video),  thumb: p.img, caption: '' }] : []),
    ...(p.videos ? p.videos.map(v => ({ type: 'video', src: toEmbedUrl(v), thumb: p.img, caption: '' })) : []),
    ...(p.img && !p.thumb ? [{ type: 'image', src: p.img, caption: '' }] : []),
    ...rawGallery,
  ];

  const mediaEl  = document.getElementById('dp-media');
  const thumbsEl = document.getElementById('dp-thumbs');

  const captionEl = document.getElementById('dp-caption');

  function showMedia(idx) {
    const item = mediaList[idx];
    if (!item) return;
    if (item.type === 'video') {
      mediaEl.innerHTML = `<iframe src="${item.src}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe>`;
    } else if (item.type === 'doc') {
      const embedUrl = toDocEmbedUrl(item.src);
      if (embedUrl) {
        mediaEl.innerHTML = `<iframe src="${embedUrl}" frameborder="0" style="width:100%;height:100%"></iframe>`;
      } else {
        const ext = item.src.split('.').pop().toUpperCase();
        const icon = ['XLS','XLSX','CSV'].includes(ext) ? '📊' : '📝';
        mediaEl.innerHTML = `
          <div class="doc-card">
            <div class="doc-card-icon">${icon}</div>
            <div class="doc-card-name">${item.label || ext}</div>
            <div class="doc-card-ext">${ext}</div>
            <a href="${item.src}" target="_blank" class="doc-card-btn">Ouvrir le document ↗</a>
            <a href="${item.src}" download class="doc-card-dl">↓ Télécharger</a>
          </div>`;
      }
    } else {
      mediaEl.innerHTML = `<img src="${item.src}" alt="${p.title}">`;
    }
    if (captionEl) captionEl.textContent = item.caption || '';
    thumbsEl.querySelectorAll('.dp-thumb').forEach((t, k) => t.classList.toggle('active', k === idx));
  }

  window.dpShowMedia = showMedia;

  if (mediaList.length > 1) {
    thumbsEl.style.display = 'flex';
    thumbsEl.innerHTML = mediaList.map((item, k) => {
      if (item.type === 'video') {
        const bg = item.thumb ? `style="background-image:url('${item.thumb}');background-size:cover;background-position:center"` : '';
        return `<div class="dp-thumb dp-thumb-video" ${bg} onclick="dpShowMedia(${k})"><span>▶</span></div>`;
      }
      if (item.type === 'doc') {
        const ext = item.src.split('.').pop().toUpperCase();
        const icon = ['XLS','XLSX','CSV'].includes(ext) ? '📊' : ['DOC','DOCX'].includes(ext) ? '📝' : '📄';
        return `<div class="dp-thumb dp-thumb-doc" onclick="dpShowMedia(${k})">${icon}<span>${ext}</span></div>`;
      }
      return `<div class="dp-thumb" onclick="dpShowMedia(${k})"><img src="${item.src}" alt=""></div>`;
    }).join('');
  } else {
    thumbsEl.style.display = 'none';
    thumbsEl.innerHTML = '';
  }

  showMedia(0);

  document.getElementById('dp-infos').innerHTML = `
    <div class="detail-info"><strong>Mon rôle</strong><span>${(p.role || []).join(', ')}</span></div>
    <div class="detail-info"><strong>Durée</strong><span>${p.duration || '—'}</span></div>
    <div class="detail-info"><strong>École</strong><span>${p.tag || '—'}</span></div>
    <div class="detail-info"><strong>Outils</strong><span>${(p.tools || []).join(', ') || '—'}</span></div>
  `;

  document.getElementById('dp-contrib').innerHTML = (p.role || []).map(c => `<li>${c}</li>`).join('');

  const link = document.getElementById('dp-link');
  link.href = p.link || '#';
  link.style.display = (!p.link || p.link === '#') ? 'none' : 'inline-flex';

  document.getElementById('detail-panel').classList.add('open');
  document.getElementById('detail-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

window.openProjectByIndex = openProjectByIndex;

renderProjectsGallery();