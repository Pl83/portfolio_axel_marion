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

// À ajouter tout en bas de main.js
window.openProject = openProject;
window.closeDetailPanel = closeDetailPanel;