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

// ── Header scroll shadow ─────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('header').style.boxShadow =
    window.scrollY > 10 ? '0 1px 0 rgba(255,255,255,0.05)' : 'none';
});

// ── Jeu de cartes — Révolte ──────────────────────────────────
const suits = ['noir', 'blanc'];
const values = {
  'Pion': "Pour être joué, doit être avec un autre pion. Vous fait prendre une carte aléatoire d'un adversaire choisi.",
  'Tour': "Mélange la pioche.",
  'Cavalier': "Prendre les deux premières cartes de la pioche et en replacer une aléatoirement dans la pioche.",
  'Fou': "Prend les deux premières cartes de la pioche.",
  'Dame': "Fait jouer 3 tours d'affilée à l'adversaire suivant.",
  'Roi': "Regarde les 3 premières cartes de la pioche.",
  "Oh non je ne l'avais pas vu": "Permet de ne pas appliquer l'effet de toutes les cartes sauf la révolte ou le roque.",
  'Espion': "Force un adversaire choisi à vous donner une carte de son choix. Pour être joué, doit être avec un pion.",
  'Berge': "Fait jouer 2 tours d'affilée à l'adversaire suivant.",
  'Sacrifice': "Déplacer une carte aléatoire de la pioche.",
  'Roque': "Protège contre une carte révolution.",
  "Regle": "",
  'Revolution': "Vous fait quitter la partie ou vous fait perdre une carte roque",
};

let deck = [];
let drawnCards = { noir: [], blanc: [] };

function createDeck() {
  deck = [];
  for (let suit of suits) {
    for (let value in values) {
      deck.push({
        value,
        suit,
        img: `realisation/carte/${suit}/${value}.png`,
        description: values[value]
      });
    }
  }
  shuffleDeck();
}

function shuffleDeck() {
  deck.sort(() => Math.random() - 0.5);
}

function drawAllCards() {
  while (deck.length > 0) drawCard();
}

function drawCard() {
  if (deck.length > 0) {
    const card = deck.pop();
    drawnCards[card.suit].push(card);
    renderCards(card.suit);
  } else {
    alert("Le paquet est vide ! Réinitialisez-le.");
  }
}

function renderCards(suit) {
  const container = document.getElementById(suit);
  const sorted = drawnCards[suit].slice().sort((a, b) => {
    const keys = Object.keys(values);
    return keys.indexOf(a.value) - keys.indexOf(b.value);
  });
  container.innerHTML = '';
  sorted.forEach(card => {
    const div = document.createElement('div');
    div.className = 'card';
    const img = document.createElement('img');
    img.src = card.img;
    img.alt = `${card.value} de ${card.suit}`;
    div.appendChild(img);
    div.onclick = () => openPopup(card);
    container.appendChild(div);
  });
}

function openPopup(card) {
  document.getElementById('popup-title').textContent = card.value;
  document.getElementById('popup-image').src = card.img;
  document.getElementById('popup-description').textContent = card.description;
  document.getElementById('popup').style.display = 'block';
  document.getElementById('popup-overlay').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('popup-overlay').style.display = 'none';
}

function resetDeck() {
  createDeck();
  drawnCards = { noir: [], blanc: [] };
  suits.forEach(suit => { document.getElementById(suit).innerHTML = ''; });
}

createDeck();

// ── Projets externes ─────────────────────────────────────────
function infinitydot() {
  window.open('pages/infinitydot.html');
}
function musicdot() {
  window.open('pages/dotmusic.html');
}
function pandasuit() {
  window.open('https://viewer.pandasuite.com/tUPSxsOH');
}