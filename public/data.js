// ── Internationalisation (FR/EN) ─────────────────────────────
// window.LANG : langue active ("fr" ou "en"). Détectée automatiquement à la
// première visite (langue du navigateur), puis mémorisée dans localStorage —
// window.setLang("fr"|"en") change la langue et recharge la page.
//
// Un champ traduisible dans PROJECTS/DIPLOMAS/RESUME est soit une chaîne
// simple (identique dans les deux langues — noms propres, logiciels...), soit
// un objet { fr: "...", en: "..." }. window.t(champ) renvoie la bonne version
// pour la langue active (repli sur fr si la traduction anglaise manque).
(function initLang() {
  const STORAGE_KEY = "site-lang";
  let lang = null;
  try { lang = localStorage.getItem(STORAGE_KEY); } catch (e) { /* stockage indisponible */ }
  if (lang !== "fr" && lang !== "en") {
    lang = (navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en";
  }
  window.LANG = lang;
  window.setLang = function (next) {
    if (next !== "fr" && next !== "en") return;
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* stockage indisponible */ }
    window.location.reload();
  };
})();

window.t = function (value) {
  if (value == null) return value;
  if (Array.isArray(value)) return value.map(window.t);
  if (typeof value === "object" && ("fr" in value || "en" in value)) {
    return value[window.LANG] || value.fr || value.en || "";
  }
  return value;
};

// Textes fixes de l'interface (navigation, boutons, libellés communs à
// plusieurs pages) — utilisés via window.STRINGS[window.LANG].xxx.
window.STRINGS = {
  fr: {
    navHome: "Accueil",
    navProjects: "Projets",
    navMemoir: "Mémoire",
    navAbout: "À propos",
    cvDownload: "CV ↓",
    seeAllDetail: "Vue détaillée →",
    sectionProjects: "Projets",
    seeProject: "Voir le projet ↗",
    myContributions: "Mes contributions",
    myRole: "Mon rôle",
    team: "Équipe",
    engineTool: "Moteur / Outil",
    duration: "Durée",
    school: "École",
    toolsUsed: "Outils",
    openDocument: "Ouvrir le document ↗",
    download: "↓ Télécharger",
    langToggleLabel: "EN",
    homeHeroSub: "Bonjour, je suis Axel Marion",
    homeHeroTitle: "Game Designer<br>\n      <span class=\"hero-accent\">Designer Web &<br> Coder Web</span>",
    homeHeroDesc: "Faire des choses pas sérieuses sérieusement",
    projetHeroSub: "Portfolio jeu vidéo",
    projetHeroTitle: "Projets<br>\n        <span class=\"hero-accent\">Expériences</span>",
    projetHeroDesc: "Mon parcours de 2022 à aujourd'hui — projets, formations et expériences.",
    timelineTitle: "Frise chronologique",
    legendLabel: "Légende —",
    legendPersonnel: "Personnel",
    timelineHint: "Faites défiler la frise",
    allProjectsTitle: "Tous les projets",
    myRoleLabel: "Mon rôle",
    toolsUsedLabel: "Outils utilisés",
    durationLabel: "Durée",
    whatILearnedLabel: "Ce que j'ai appris",
    seeProjectLabel: "Voir le projet",
    shortProject: "Projet court",
    aboutHeroEyebrow: "curriculum vitæs",
    aboutHeroDesc: "Étudiant en game design, passionné par la création de jeux vidéo\n        et la conception d'expériences interactives.",
    myCvTitle: "Mon CV",
    experiencesLabel: "Expériences",
    languagesLabel: "Langues",
    traitsLabel: "Caractéristiques",
    diplomasLabel: "Diplômes",
    faqMotivationQ: "Qu'est-ce qui me motive ?",
    faqMotivationP1: "Ce qui m'attire dans le jeu vidéo, c'est <span class=\"highlight\">sa capacité à transmettre</span>. Un jeu peut divertir, émouvoir, faire réfléchir ou tout à la fois. C'est un médium immersif comme aucun autre.",
    faqMotivationP2: "Mes inspirations viennent de partout : un livre, une chanson, un film, un autre jeu. Je m'en nourris pour créer des expériences qui touchent les gens, des univers et des instants qui laissent quelque chose.",
    faqGoalsQ: "Quels sont mes objectifs ?",
    faqGoalsP1: "Je suis à la recherche d'un stage, d'une alternance ou d'un premier emploi dans un studio de taille moyenne ou un environnement où ma polyvalence est un atout, pas une contrainte.",
    faqGoalsP2: "Mon objectif : devenir <span class=\"highlight\">level designer</span>. Concevoir des espaces qui racontent une histoire, guident le joueur sans qu'il s'en rende compte, et créent des émotions par la seule architecture du niveau.",
    faqGoalsTag1: "Stage",
    faqGoalsTag2: "Alternance",
    faqGoalsTag3: "Premier emploi",
    faqOutsideQ: "Qu'est-ce que je fais hors du jeu vidéo ?",
    faqOutsideP1: "J'aime <span class=\"highlight\">apprendre de nouvelles choses</span> et <span class=\"highlight\">fabriquer avec mes mains</span>. La randonnée en fait aussi partie, pour décrocher et prendre l'air.",
    faqOutsideP2: "Côté centres d'intérêt plus posés : la musique et la lecture.",
    faqProjectQ: "Quel projet me représente le mieux ?",
    faqProjectP1: "<a href=\"/pages/projet.html?p=autoportrait\" class=\"highlight\">Autoportrait</a> et <a href=\"/pages/projet.html?p=revolte\" class=\"highlight\">Revolte</a> sont les deux projets qui me représentent le plus.",
    faqProjectP2: "Revolte en particulier : je l'ai conçu, écrit, illustré et équilibré entièrement seul où j'ai tenu la comparaison face à des camarades qui travaillaient en groupe sur leur propre jeu.",
    faqProjectLink1: "Voir Autoportrait →",
    faqProjectLink2: "Voir Revolte →",
    hardSkillsLabel: "Hard skills",
    softSkillsLabel: "Soft skills",
    whatIDidLabel: "Ce que j'ai fait",
    videoLabel: "Vidéo",
  },
  en: {
    navHome: "Home",
    navProjects: "Projects",
    navMemoir: "Thesis",
    navAbout: "About",
    cvDownload: "Resume ↓",
    seeAllDetail: "Full view →",
    sectionProjects: "Projects",
    seeProject: "View project ↗",
    myContributions: "My contributions",
    myRole: "My role",
    team: "Team",
    engineTool: "Engine / Tool",
    duration: "Duration",
    school: "School",
    toolsUsed: "Tools",
    openDocument: "Open document ↗",
    download: "↓ Download",
    langToggleLabel: "FR",
    homeHeroSub: "Hi, I'm Axel Marion",
    homeHeroTitle: "Game Designer<br>\n      <span class=\"hero-accent\">Web Designer &<br> Web Coder</span>",
    homeHeroDesc: "Doing unserious things seriously",
    projetHeroSub: "Video game portfolio",
    projetHeroTitle: "Projects<br>\n        <span class=\"hero-accent\">Experience</span>",
    projetHeroDesc: "My journey from 2022 to today — projects, training and experience.",
    timelineTitle: "Timeline",
    legendLabel: "Legend —",
    legendPersonnel: "Personal",
    timelineHint: "Scroll the timeline",
    allProjectsTitle: "All projects",
    myRoleLabel: "My role",
    toolsUsedLabel: "Tools used",
    durationLabel: "Duration",
    whatILearnedLabel: "What I learned",
    seeProjectLabel: "View project",
    shortProject: "Short project",
    aboutHeroEyebrow: "curriculum vitae",
    aboutHeroDesc: "Game design student, passionate about creating video games\n        and designing interactive experiences.",
    myCvTitle: "My Resume",
    experiencesLabel: "Experience",
    languagesLabel: "Languages",
    traitsLabel: "Traits",
    diplomasLabel: "Diplomas",
    faqMotivationQ: "What motivates me?",
    faqMotivationP1: "What draws me to video games is <span class=\"highlight\">their ability to convey something</span>. A game can entertain, move, or make you think — sometimes all at once. It's an immersive medium like no other.",
    faqMotivationP2: "My inspirations come from everywhere: a book, a song, a film, another game. I draw on them to create experiences that touch people — worlds and moments that leave something behind.",
    faqGoalsQ: "What are my goals?",
    faqGoalsP1: "I'm looking for an internship, an apprenticeship, or a first job in a mid-sized studio, or an environment where my versatility is an asset rather than a constraint.",
    faqGoalsP2: "My goal: to become a <span class=\"highlight\">level designer</span>. Designing spaces that tell a story, guide the player without them noticing, and create emotion through the architecture of the level alone.",
    faqGoalsTag1: "Internship",
    faqGoalsTag2: "Apprenticeship",
    faqGoalsTag3: "First job",
    faqOutsideQ: "What do I do outside of video games?",
    faqOutsideP1: "I love <span class=\"highlight\">learning new things</span> and <span class=\"highlight\">making things with my hands</span>. Hiking is part of that too, to unwind and get some fresh air.",
    faqOutsideP2: "On the quieter side: music and reading.",
    faqProjectQ: "Which project represents me best?",
    faqProjectP1: "<a href=\"/pages/projet.html?p=autoportrait\" class=\"highlight\">Autoportrait</a> and <a href=\"/pages/projet.html?p=revolte\" class=\"highlight\">Revolte</a> are the two projects that represent me the most.",
    faqProjectP2: "Revolte in particular: I designed, wrote, illustrated and balanced it entirely on my own, holding my own against classmates who worked in groups on their own games.",
    faqProjectLink1: "View Autoportrait →",
    faqProjectLink2: "View Revolte →",
    hardSkillsLabel: "Hard skills",
    softSkillsLabel: "Soft skills",
    whatIDidLabel: "What I did",
    videoLabel: "Video",
  },
};

// Abréviations de mois pour l'affichage des dates de projet (calculées à
// partir de year/month, jamais stockées en dur — voir window.formatProjectDate).
window.MONTH_ABBR = {
  fr: ["JANV.", "FÉV.", "MARS", "AVR.", "MAI", "JUIN", "JUIL.", "AOÛT", "SEPT.", "OCT.", "NOV.", "DÉC."],
  en: ["JAN.", "FEB.", "MAR.", "APR.", "MAY", "JUN.", "JUL.", "AUG.", "SEP.", "OCT.", "NOV.", "DEC."],
};
window.formatProjectDate = function (year, month) {
  const arr = window.MONTH_ABBR[window.LANG] || window.MONTH_ABBR.fr;
  return `${arr[month]} ${year}`;
};

// ── Projets du portfolio ──────────────────────────────────────
// Chaque entrée du tableau est un projet. Modifier ce fichier met à jour
// toutes les pages qui l'utilisent (accueil, pages/projet.html).
//
// Internationalisation : un champ traduisible est soit une chaîne simple
// (identique en fr/en — noms propres, logiciels...), soit un objet
// { fr: "...", en: "..." }, lu via window.t(champ) (gère aussi les tableaux).
//
// Champs communs à tous les projets :
//   title    : titre du projet — nom propre, à écrire en { fr, en } seulement
//              s'il a vraiment besoin d'une traduction (ex: "Autoportrait" →
//              "Self-Portrait"), sinon laisse-le en chaîne simple
//   type     : sous-titre affiché sous le titre (ex: "Jeux vidéo", "Illustrator") — traduisible
//   tag      : école/contexte affiché sur la carte ("Gobelins", "IIM" identiques en anglais ;
//              "Personnel" → objet traduisible pour devenir "Personal")
//   color    : couleur de la carte — "blue", "orange" ou "pink"
//   year, month : servent à trier les projets ET à générer la date affichée sur la carte
//                 (month: 0 = janvier ... 11 = décembre) via window.formatProjectDate(year, month)
//   desc     : description courte, affichée sur la carte et en tête du panneau détail — traduisible
//   duration : durée du projet, affichée dans le détail (ex: "2 semaines") — traduisible
//   role     : liste des rôles tenus sur le projet — items traduisibles
//   tools    : liste des outils/logiciels utilisés — items traduisibles si ce sont des mots
//              courants (ex: "Papier"), identiques si ce sont des noms de logiciels (ex: "Unity")
//   link     : lien externe ("#" si aucun lien : masque le bouton "Voir le projet")
//
// Champs optionnels :
//   id            : identifiant utilisé pour ouvrir le détail depuis l'accueil (openProject) et pour les projets mis en avant
//   contributions : liste détaillée des contributions ; remplace "role" dans le panneau détail si présent — traduisible
//   learned       : liste de ce qui a été appris, affichée dans "Ce que j'ai appris" (pages/projet.html) — traduisible
//   team          : composition de l'équipe (ex: "Solo", "3 personnes", "Équipe") — traduisible
//   engine        : moteur/outil principal (ex: "Unity", "Unreal Engine")
//   platform      : plateforme (ex: "PC", "VR / PC", "Mobile") — traduisible
//
// Champs image / vidéo :
//   img     : image principale (carte + première image du détail)
//   thumb   : miniature spécifique à la carte, si différente de "img" (n'apparaît PAS dans la galerie)
//   video   : une seule vidéo, URL YouTube (rétrocompatible)
//   videos  : plusieurs vidéos — ex: ["url1", "url2", ...]
//   gallery : galerie enrichie, chaque élément peut être :
//     "/realisation/img.png"                                     ← image simple
//     { src: "/realisation/img.png", caption: "Texte" }          ← image avec légende
//     { src: "/realisation/gdd.docx", type: "doc", label: "GDD" }        ← document Word
//     { src: "/realisation/balance.xlsx", type: "doc", label: "Balance" } ← document Excel

// Traduction anglaise du libellé d'école affiché ("Personnel" → "Personal") —
// le champ project.tag lui-même reste inchangé (utilisé pour le groupement/tri).
window.translateTag = function (tag) {
  if (tag === "Personnel") return window.t({ fr: "Personnel", en: "Personal" });
  return tag;
};

// Trois learned/contributions revenant sur plusieurs projets Blocking/Prototype —
// définis une fois pour garder une traduction cohérente partout où ils apparaissent.
const FEEL_FEEDBACK_TEST = [
  { fr: "Améliorer le ressenti des actions", en: "Improving the feel of actions" },
  { fr: "Créer des feedbacks lisibles", en: "Creating readable feedback" },
  { fr: "Tester rapidement une mécanique", en: "Quickly testing a mechanic" },
];
const COMBAT_PROTOTYPE_DESC = { fr: "Prototype orienté combat, feedback visuel et sensations de jeu.", en: "Combat-oriented prototype focused on visual feedback and game feel." };

window.PROJECTS = [
  {
    id: "autoportrait",
    title: { fr: "Autoportrait", en: "Self-Portrait" },
    type: { fr: "Papier & Crayon", en: "Paper & Pencil" },
    tag: "Gobelins", color: "blue",
    year: 2022, month: 8,
    img: "/realisation/autoportart.jpg",
    desc: { fr: "Réalisation d'un autoportrait où je devais me représenter par ce que j'aime", en: "Creating a self-portrait where I had to represent myself through what I love" },
    duration: { fr: "1 semaine", en: "1 week" },
    role: [
      { fr: "Dessinateur", en: "Illustrator" },
      { fr: "Concepteur de l'image", en: "Image designer" },
      { fr: "Choix des éléments visuels", en: "Visual elements selection" },
    ],
    learned: [
      { fr: "Croquis", en: "Sketching" },
      { fr: "dessin", en: "drawing" },
      { fr: "composition visuelle", en: "visual composition" },
    ],
    tools: [{ fr: "Crayon", en: "Pencil" }, { fr: "Papier", en: "Paper" }],
    link: "#"
  },
  {
    id: "montre-vectorisee",
    title: { fr: "Montre vectorisée", en: "Vectorized Watch" },
    type: "Illustrator",
    tag: "Gobelins", color: "blue",
    year: 2022, month: 9,
    img: "/realisation/montre/montre-realise.png",
    gallery: ["/realisation/montre/montre-realise.png", "/realisation/montre/montre-de-base.png"],
    desc: { fr: "Vectorisation d'une montre à partir d'une image de référence", en: "Vectorizing a watch from a reference image" },
    duration: { fr: "3 semaines", en: "3 weeks" },
    role: [{ fr: "Vectoriseur", en: "Vectorizer" }],
    learned: ["Illustrator"],
    tools: ["Illustrator"],
    link: "#"
  },
  {
    id: "vinyle",
    title: { fr: "Vinyle", en: "Vinyl Record" },
    type: "Illustrator & Photoshop",
    tag: "Gobelins", color: "blue",
    year: 2022, month: 10,
    img: "/realisation/vinyle/recto.png",
    gallery: ["/realisation/vinyle/recto.png", "/realisation/vinyle/macarron.png", "/realisation/vinyle/verso.png", "/realisation/vinyle/macarron-2.png"],
    desc: { fr: "Création d'un visuel de pochette de vinyle, avec recto et verso, avec les macarons, puis de l'imprimer pour un vrai vinyle", en: "Creating a vinyl record sleeve, front and back, with the center labels, then printing it for a real vinyl record" },
    duration: { fr: "2 semaines", en: "2 weeks" },
    role: [{ fr: "Illustrateur", en: "Illustrator" }, { fr: "Imprimeur", en: "Printer" }],
    learned: [{ fr: "Mise en page pour impression", en: "Print layout" }, "Photoshop", "Illustrator", "InDesign"],
    tools: ["Illustrator", "Photoshop", "InDesign"],
    link: "#"
  },
  {
    id: "carte-de-visite",
    title: { fr: "Carte de visite", en: "Business Card" },
    type: "InDesign",
    tag: "Gobelins", color: "blue",
    year: 2023, month: 0,
    img: "/realisation/cartedevisite/logo.png",
    gallery: ["/realisation/cartedevisite/logo.png", "/realisation/cartedevisite/texte.png"],
    desc: { fr: "Création d'une carte de visite avec notre identité visuelle.", en: "Creating a business card with our visual identity." },
    duration: { fr: "1 Mois", en: "1 month" },
    role: ["Designer", { fr: "Mise en page", en: "Layout" }, { fr: "Création de logo", en: "Logo design" }],
    learned: ["InDesign", { fr: "typographie", en: "typography" }, { fr: "composition visuelle", en: "visual composition" }],
    tools: ["InDesign"],
    link: "#"
  },
  {
    id: "revolte",
    title: "Revolte",
    type: { fr: "Jeu De Carte", en: "Card Game" },
    platform: { fr: "Physique", en: "Physical" },
    engine: { fr: "Prototype papier", en: "Paper prototype" },
    tag: "Gobelins", color: "blue",
    year: 2023, month: 1,
    team: "Solo",
    img: "/realisation/carte/dos.png",
    gallery: ["/realisation/carte/dos.png", "/realisation/carte/blanc/onjn.png", "/realisation/carte/blanc/revolution.png", "/realisation/carte/jeuechec.png"],
    desc: { fr: "Un jeu de carte sur les visuels des échecs et sur les règles du jeu Exploding Kittens", en: "A card game using chess visuals and the rules of the game Exploding Kittens" },
    duration: { fr: "2 Mois", en: "2 months" },
    role: ["Game Designer", "Level Designer", { fr: "Illustrateur", en: "Illustrator" }, { fr: "Équilibrage", en: "Balancing" }, { fr: "Imprimeur", en: "Printer" }, { fr: "Testeur", en: "Tester" }],
    contributions: [
      { fr: "Création des règles de jeu", en: "Creating the game rules" },
      { fr: "Conception des cartes et de leurs effets", en: "Designing the cards and their effects" },
      { fr: "Direction graphique du jeu", en: "Art direction for the game" },
      { fr: "Prototype interactif sur le portfolio", en: "Interactive prototype on the portfolio" },
    ],
    learned: [
      { fr: "Concevoir des niveaux immersifs et cohérents", en: "Designing immersive and coherent levels" },
      { fr: "Travailler en équipe avec une bonne organisation", en: "Working in a team with good organization" },
      { fr: "Itérer grâce aux tests joueurs", en: "Iterating through playtests" },
    ],
    tools: ["InDesign", "Illustrator"],
    link: "#"
  },
  {
    id: "decoration",
    title: { fr: "Décoration", en: "Decoration" },
    type: { fr: "Découpeuse laser", en: "Laser Cutter" },
    tag: "Personnel", color: "pink",
    year: 2023, month: 4,
    img: "/realisation/decoration.png",
    desc: { fr: "Création d'une décoration en bois avec gravure à la découpeuse laser", en: "Creating a wooden decoration engraved with a laser cutter" },
    duration: { fr: "1 semaine", en: "1 week" },
    role: ["Designer"],
    learned: [{ fr: "Découpeuse laser", en: "Laser cutter" }, "Illustrator"],
    tools: ["Illustrator", { fr: "Découpeuse laser", en: "Laser cutter" }],
    link: "#"
  },
  {
    id: "around-the-rock",
    title: "Around The Rock",
    type: { fr: "Création d'identité visuelle", en: "Visual identity creation" },
    tag: "Gobelins", color: "blue",
    year: 2023, month: 5,
    img: "/realisation/festival/mindmapping.png",
    gallery: [
      "/realisation/festival/mindmapping.png",
      "/realisation/festival/billetfestival.png",
      "/realisation/festival/lisseappli.png",
      "/realisation/festival/lissesite.png",
      "/realisation/festival/Plan-de-travail1.png",
      "/realisation/festival/Plan.png",
      "/realisation/festival/Plandetravail.png"
    ],
    desc: { fr: "Création d'un festival de musique avec une identité visuelle cohérente", en: "Creating a music festival with a coherent visual identity" },
    duration: { fr: "2 mois", en: "2 months" },
    role: ["Designer", { fr: "Créateur d'identité visuelle", en: "Visual identity creator" }, { fr: "Concepteur de l'expérience globale", en: "Overall experience designer" }],
    learned: [{ fr: "Travail d'équipe", en: "Teamwork" }, { fr: "gestion de projet", en: "project management" }, { fr: "création d'une identité visuelle", en: "visual identity creation" }],
    tools: ["InDesign", "Photoshop", "Illustrator" ],
    link: "#"
  },
  {
    id: "after-the-revolte",
    title: "After the Révolte",
    type: "Prototype",
    platform: "PandaSuite",
    engine: "PandaSuite",
    tag: "Gobelins", color: "blue",
    year: 2024, month: 1,
    team: "Solo",
    img: "/realisation/afterrevolt/moyen.png",
    desc: { fr: "Prototype narratif inspiré de Reigns, où le joueur avance par décisions successives et conséquences immédiates.", en: "Narrative prototype inspired by Reigns, where the player progresses through successive decisions and immediate consequences." },
    duration: { fr: "Projet court", en: "Short project" },
    role: [{ fr: "Narration interactive", en: "Interactive narrative" }, "UX", { fr: "Prototypage", en: "Prototyping" }],
    contributions: [
      { fr: "Structure de l'expérience interactive", en: "Structuring the interactive experience" },
      { fr: "Création du système de décisions", en: "Creating the decision system" },
      { fr: "Écriture des situations", en: "Writing the scenarios" },
      { fr: "Intégration sur PandaSuite", en: "Integration on PandaSuite" },
    ],
    learned: [{ fr: "Narration interactive", en: "Interactive narrative" }, "UX", { fr: "Prototypage", en: "Prototyping" }],
    tools: ["PandaSuite"],
    link: "#"
  },
  {
    id: "whellcome-to-hell",
    title: "Whellcome To Hell",
    type: { fr: "Vidéo IA", en: "AI Video" },
    tag: "Gobelins", color: "blue",
    year: 2024, month: 2,
    img: "/realisation/whellcome.png",
    video: "https://www.youtube.com/embed/mYO2WOaA8CU?si=jT7o28wQXJ149gHN",
    desc: { fr: "Vidéo humoristique sous forme d'une vidéo de présentation d'entreprise fictive, avec des images générées par l'IA", en: "Humorous video in the form of a fictional corporate presentation, featuring AI-generated images" },
    duration: { fr: "1 Semaine", en: "1 week" },
    role: [{ fr: "Monteur", en: "Editor" }, { fr: "Concepteur de l'image", en: "Image designer" }, { fr: "Choix des éléments visuels", en: "Visual elements selection" }],
    learned: [{ fr: "Utiliser les outils d'IA pour créer du contenu visuel", en: "Using AI tools to create visual content" }, { fr: "Storybord", en: "Storyboarding" }, { fr: "Montage vidéo", en: "Video editing" }],
    tools: [{ fr: "Intelligence Artificielle", en: "Artificial Intelligence" }, "After Effects"],
    link: "#"
  },
  {
    id: "animation-3d",
    title: { fr: "Animation 3D", en: "3D Animation" },
    type: { fr: "Vidéo", en: "Video" },
    tag: "Gobelins", color: "blue",
    year: 2024, month: 3,
    img: "/realisation/Pokeball.png",
    video: "https://www.youtube.com/embed/sAeUvNG19OA?si=KS0gEqwmWWne0eha",
    desc: { fr: "Animation 3D d'une pokeball et d'un combat de pokemon", en: "3D animation of a Poké Ball and a Pokémon battle" },
    duration: { fr: "1 Semaine", en: "1 week" },
    role: [{ fr: "Animateur 3D", en: "3D Animator" }, { fr: "Modélisateur", en: "Modeler" }, { fr: "Monteur", en: "Editor" }],
    learned: ["Blender", { fr: "Animation 3D", en: "3D Animation" }],
    tools: ["Blender", "After Effects"],
    link: "#"
  },
  {
    id: "floatland",
    title: "FloatLand",
    type: { fr: "Jeux vidéo VR", en: "VR Video Game" },
    platform: "VR / PC",
    tag: "Gobelins", color: "blue",
    year: 2024, month: 5,
    team: { fr: "3 personnes", en: "3 people" },
    engine: "Unity",
    img: "/realisation/floatland/floatland.png",
    video: "https://www.youtube.com/watch?v=p1svvKTsktk",
    desc: { fr: "Jeu de relaxation en VR, où le joueur va sur une île flottante avec une identité visuelle propre avec un mini jeu dessus", en: "A relaxation game in VR, where the player visits a floating island with its own visual identity and a mini-game on it" },
    duration: { fr: "Projet fin d'année", en: "End-of-year project" },
    role: ["Game Designer", "Level Designer", { fr: "Développeur", en: "Developer" }],
    contributions: [{ fr: "Conception du level design", en: "Level design" }, { fr: "Mécaniques de gameplay", en: "Gameplay mechanics" }, { fr: "Développement Unity", en: "Unity development" }],
    learned: [{ fr: "Développement Unity VR", en: "Unity VR development" }, "Level Design", "Game Design"],
    tools: ["Unity", "Blender"],
    link: "#"
  },
  {
    id: "infinitydot",
    title: "Infinity Dot",
    type: { fr: "Site Three.js", en: "Three.js Website" },
    platform: "Web",
    tag: "Gobelins", color: "blue",
    year: 2024, month: 9,
    team: "Solo",
    engine: "Three.js",
    img: "/realisation/infinitydot.png",
    desc: { fr: "Représenter la fin de toute chose", en: "Representing the end of everything" },
    duration: { fr: "1 semaine", en: "1 week" },
    role: [{ fr: "Développeur", en: "Developer" }, "Designer"],
    contributions: [{ fr: "Création de la scène Three.js", en: "Creating the Three.js scene" }, { fr: "Animation des particules", en: "Particle animation" }, { fr: "Design et intégration", en: "Design and integration" }],
    learned: [{ fr: "Améliorer un ancien concept", en: "Improving an older concept" }, { fr: "Rendre une DA plus cohérente", en: "Making the art direction more coherent" }, { fr: "Clarifier l'expérience joueur", en: "Clarifying the player experience" }],
    tools: ["Three.js"],
    link: "/pages/infinitydot.html"
  },
  {
    id: "dotmusic",
    title: "Dot Music",
    type: { fr: "Site Vue.js", en: "Vue.js Website" },
    platform: "Web",
    tag: "Gobelins", color: "blue",
    year: 2024, month: 10,
    team: "Solo",
    engine: "Vue.js",
    img: "/realisation/dotmusic.png",
    desc: { fr: "Représenter l'effet du son sur les particules", en: "Representing the effect of sound on particles" },
    duration: { fr: "1 semaine", en: "1 week" },
    role: [{ fr: "Développeur", en: "Developer" }, "Designer"],
    contributions: [{ fr: "Visualisation audio réactive", en: "Reactive audio visualization" }, { fr: "Lien entre son et animation", en: "Connecting sound and animation" }, { fr: "Interface interactive", en: "Interactive interface" }],
    learned: [{ fr: "Améliorer un ancien concept", en: "Improving an older concept" }, { fr: "Rendre une DA plus cohérente", en: "Making the art direction more coherent" }],
    tools: ["Vue.js"],
    link: "/pages/dotmusic.html"
  },
  {
    id: "mac-s-story",
    title: "Mac's Story",
    type: { fr: "Vidéo", en: "Video" },
    tag: "Gobelins", color: "blue",
    year: 2024, month: 11,
    img: "/realisation/macstory.png",
    gallery: ["/realisation/macstory.png", "/realisation/macstory1.png"],
    video: "https://www.youtube.com/embed/jl-DCLoXv2w?si=Si-nQJpyGj4MTeXj",
    desc: { fr: "Vidéo de deux ordinateurs qui discutent sans interaction directe", en: "Video of two computers talking without direct interaction" },
    duration: { fr: "2 semaines", en: "2 weeks" },
    role: [{ fr: "Monteur", en: "Editor" }, { fr: "Animation", en: "Animation" }, { fr: "Doublage", en: "Voice acting" }, { fr: "Conception de l'image", en: "Image design" }],
    learned: FEEL_FEEDBACK_TEST,
    tools: ["Chataigne", "After Effects", "Photoshop"],
    link: "#"
  },
  {
    id: "memoir-level-design",
    title: "Memoir Level Design",
    type: { fr: "Mémoire", en: "Thesis" },
    tag: "Gobelins", color: "blue",
    year: 2025, month: 1,
    img: "/realisation/memoir/abstract.png",
    desc: { fr: "Comment le joueur est guidé par le Level Design dans un jeu vidéo, plus particulièrement dans les jeux à la première personne ?", en: "How is the player guided by level design in a video game, particularly in first-person games?" },
    duration: { fr: "6 Mois", en: "6 months" },
    role: [{ fr: "Rédaction", en: "Writing" }, { fr: "Chercheur", en: "Researcher" }, { fr: "Analyste", en: "Analyst" }],
    learned: [{ fr: "Rédiger un texte en fonction d'analyse", en: "Writing a text based on analysis" }, { fr: "Rechercher sur un sujet", en: "Researching a topic" }],
    tools: ["Google Docs"],
    link: "/realisation/memoir/memoir-level-design.pdf"
  },
  {
    id: "fragment",
    title: "Fragment",
    type: { fr: "Jeux vidéo", en: "Video game" },
    platform: "PC",
    engine: "Unity",
    tag: "Gobelins", color: "blue",
    year: 2025, month: 5,
    team: "Solo",
    img: "/realisation/fragment/fragment.png",
    desc: { fr: "Exprimer des émotions par l'environnement et guider le joueur sans interface directe.", en: "Expressing emotions through the environment and guiding the player without a direct interface." },
    duration: { fr: "6 Mois", en: "6 months" },
    role: [{ fr: "Développeur", en: "Developer" }, "Level Designer", "Game Designer"],
    contributions: [
      { fr: "Création d'un gameplay expressif", en: "Creating expressive gameplay" },
      { fr: "Expression des émotions par l'ambiance", en: "Expressing emotions through atmosphere" },
      { fr: "Réflexion sur le guidage joueur", en: "Reflection on player guidance" },
    ],
    learned: FEEL_FEEDBACK_TEST,
    tools: ["Unity", "Blender"],
    link: "#"
  },
  {
    id: "game-designer-so-briquet",
    title: "Game Designer - So'Briquet",
    type: { fr: "Jeux vidéo", en: "Video game" },
    platform: "PC",
    engine: "Unity",
    tag: "IIM", color: "orange",
    year: 2025, month: 8,
    team: "Solo",
    img: "/realisation/sobriquet/sobriquet.png",
    desc: { fr: "Jeu de dextérité où le joueur doit faire brûler des lianes et faire attention à toujours avoir du feu", en: "A dexterity game where the player must burn vines while always making sure to keep the fire going" },
    duration: { fr: "1 Mois", en: "1 month" },
    role: ["Game Design"],
    contributions: [{ fr: "Conception du gameplay", en: "Gameplay design" }, { fr: "équilibrage", en: "balancing" }, { fr: "tests", en: "testing" }],
    learned: FEEL_FEEDBACK_TEST,
    tools: ["Unity", "Blender"],
    link: "https://anatole13.itch.io/team-10-sobriquet#"
  },
  {
    id: "level-design-portal-2",
    title: "Level Design Portal 2",
    type: "Blocking",
    platform: "PC",
    engine: "Hammer Editor",
    tag: "IIM", color: "orange",
    year: 2025, month: 9,
    team: "Solo",
    thumb: "/realisation/portal/Portal2Logo.png",
    desc: { fr: "Création d'un niveau Portal 2, axé sur une mécanique pour faire des puzzles.", en: "Creating a Portal 2 level focused on a mechanic for building puzzles." },
    duration: { fr: "1 Semaine", en: "1 week" },
    role: ["Level Design", "Blocking", "Puzzle Design"],
    contributions: [
      { fr: "Analyse d'une mécanique de Portal 2", en: "Analyzing a Portal 2 mechanic" },
      { fr: "Blocking et itérations", en: "Blocking and iterations" },
      { fr: "Étude des signes visuels de Portal 2", en: "Studying Portal 2's visual signage" },
    ],
    learned: FEEL_FEEDBACK_TEST,
    tools: [{ fr: "Portal 2 Éditeur", en: "Portal 2 Editor" }],
    link: "#"
  },
  {
    id: "modvember",
    title: "Modvember",
    type: { fr: "Jeux vidéo", en: "Video game" },
    tag: "Personnel", color: "pink",
    year: 2025, month: 10,
    thumb: "/realisation/Trackmania.avif",
    videos: [
      "https://www.youtube.com/watch?v=0dp348jROX4",
      "https://www.youtube.com/watch?v=0V8YQs3msWo",
      "https://www.youtube.com/watch?v=kJqhrHaqJn8",
      "https://www.youtube.com/watch?v=VpzC4WX6iJA",
    ],
    desc: { fr: "Map trackmania sur différents types de course trackmania", en: "Trackmania map covering different types of Trackmania races" },
    duration: { fr: "1 Mois", en: "1 month" },
    role: ["Level Design"],
    learned: [{ fr: "Level design de course", en: "Racing level design" }],
    tools: [{ fr: "Trackmania Éditeur", en: "Trackmania Editor" }],
    link: "#"
  },
  {
    id: "level-design-far-cry-5",
    title: "Level Design Far Cry 5",
    type: "Blocking",
    platform: "PC",
    engine: "Far Cry Arcade",
    tag: "IIM", color: "orange",
    year: 2025, month: 11,
    team: "Solo",
    thumb: "/realisation/farcry/FC5Logo.png",
    video: "https://www.youtube.com/watch?v=O8hXSBKPLLQ",
    desc: { fr: "Reproduction d'une zone de Far Cry 5 en blocking pour analyser les choix de level design du studio.", en: "Recreating an area from Far Cry 5 in blocking to analyze the studio's level design choices." },
    duration: { fr: "1 Mois", en: "1 month" },
    role: ["Level Design", "Blocking"],
    contributions: [ "Level design"],
    learned: [{ fr: "Level design de FPS", en: "FPS level design" }, "Blocking"],
    tools: [{ fr: "Far Cry 5 Éditeur", en: "Far Cry 5 Editor" }],
    link: "/realisation/farcry/niveaufarcry.pdf"
  },
  {
    id: "longnigth",
    title: "Long Night At Grandma's",
    type: { fr: "Jeux vidéo", en: "Video game" },
    platform: "Mobile",
    tag: "IIM", color: "orange",
    year: 2026, month: 1,
    team: { fr: "Équipe", en: "Team" },
    engine: "Unity",
    thumb: "/realisation/longnigth/longnigth.png",
    gallery: [
      "/realisation/longnigth/ecrantitre.jpg",
      "/realisation/longnigth/ingame.jpg",
      { src: "https://docs.google.com/document/d/1fDn_6eyT4rtfno3CSW_KH2T5ynaEfMe871f1WIkwWqE/edit?usp=sharing", type: "doc", label: "GDD" },
    ],
    desc: { fr: "Jeu de réflexion sur mobile, où le joueur doit défendre son manoir contre des vagues d'ennemis", en: "A mobile puzzle game where the player must defend their manor against waves of enemies" },
    duration: { fr: "1 Mois", en: "1 month" },
    role: ["Lead Game Designer"],
    contributions: [
      { fr: "Direction du game design", en: "Game design direction" },
      { fr: "Conception des mécaniques", en: "Mechanics design" },
      { fr: "Itération et tests", en: "Iteration and testing" },
    ],
    learned: [
      { fr: "Direction du game design", en: "Game design direction" },
      { fr: "Conception des mécaniques de puzzle", en: "Puzzle mechanics design" },
      { fr: "Itérations et tests joueurs", en: "Iterations and playtesting" },
      { fr: "Documentation de game design", en: "Game design documentation" },
    ],
    tools: ["Unity", "Google Docs", "Figma"],
    link: "https://play.google.com/store/apps/details?id=com.IIMaxeJV.LongNightAtGrandmas&hl=fr"
  },
  {
    id: "golf-unreal-engine",
    title: "Golf Unreal Engine",
    type: { fr: "Jeux vidéo", en: "Video game" },
    tag: "IIM", color: "orange",
    year: 2026, month: 3,
    thumb: "/realisation/UE5logo.jpg",
    desc: COMBAT_PROTOTYPE_DESC,
    duration: { fr: "1 Mois", en: "1 month" },
    role: ["Level Design", { fr: "Mécanique de jeu", en: "Game mechanics" }, { fr: "Tests de sensations", en: "Game feel testing" }, "Blueprint"],
    learned: FEEL_FEEDBACK_TEST,
    tools: ["Unreal Engine"],
    link: "#"
  },
  {
    id: "level-design-plague-tale",
    title: "Level Design Plague Tale",
    type: "Blocking",
    platform: "PC",
    engine: "Unreal Engine",
    tag: "IIM", color: "orange",
    year: 2026, month: 4,
    team: "Solo",
    thumb: "/realisation/plaguetalelogo.png",
    video: "https://www.youtube.com/watch?v=7jLs_lC8rA4",
    desc: { fr: "Reproduction d'une zone de A Plague Tale Requiem pour analyser la direction artistique et le level design narratif.", en: "Recreating an area from A Plague Tale Requiem to analyze the art direction and narrative level design." },
    duration: { fr: "1 Mois", en: "1 month" },
    role: ["Level Design", "Blocking", { fr: "Ambiance", en: "Atmosphere" }],
    contributions: [
      { fr: "Analyse du level design de référence", en: "Analyzing the reference level design" },
      { fr: "Blocking fidèle à la scène originale", en: "Blocking faithful to the original scene" },
      { fr: "Étude de la narration environnementale", en: "Studying environmental storytelling" },
      { fr: "Rapport d'analyse", en: "Analysis report" },
    ],
    learned: FEEL_FEEDBACK_TEST,
    tools: ["Unreal Engine"],
    link: "#"
  },
  {
    id: "zeropaws",
    title: "ZeroPaws",
    type: { fr: "Jeux vidéo", en: "Video game" },
    tag: "IIM", color: "orange",
    year: 2026, month: 5,
    thumb: "/realisation/zeropaws/zeropawslogo.png",
    video: "https://www.youtube.com/watch?v=1cxjRNqCTfA",
    desc: COMBAT_PROTOTYPE_DESC,
    duration: { fr: "1 Mois", en: "1 month" },
    role: [{ fr: "Feedback visuel", en: "Visual feedback" }, { fr: "Tests de sensations", en: "Game feel testing" }, "Level Design", "Blueprint", { fr: "technic art", en: "technical art" }],
    learned: FEEL_FEEDBACK_TEST,
    tools: ["Unreal Engine"],
    link: "https://blueprint-trifi.itch.io/zero-paws"
  },
  {
    id: "t-y-l-try-your-luck",
    title: "T.Y.L. Try Your Luck",
    type: { fr: "Jeux vidéo", en: "Video game" },
    tag: "IIM", color: "orange",
    year: 2026, month: 8,
    thumb: "/realisation/TYL/TYLLogo.png",
    desc: COMBAT_PROTOTYPE_DESC,
    duration: { fr: "1 Semaine", en: "1 week" },
    role: ["Game Design"],
    learned: [{ fr: "Travail d'équipe", en: "Teamwork" }],
    tools: ["Unreal Engine"],
    link: "https://arcdragons.itch.io/13event-tyl"
  },
];

// ── Frise diplômes / alternance (pages/projet.html) ──────────
// Chaque entrée est une étape affichée sur la frise chronologique.
//   title    : titre court affiché en avant (ex: "DIPLÔME OBTENU") — traduisible
//   subtitle : détail sous le titre, peut contenir "<br>" pour aller à la ligne — traduisible
//   date     : texte affiché en dessous (ex: nom du diplôme, intitulé du poste...) — traduisible
//   year, month : servent à trier/positionner l'étape sur la frise (month: 0 = janvier ... 11 = décembre)
const START_OF_STUDIES = { fr: "Début de formation", en: "Beginning of studies" };

window.DIPLOMAS = [
  {
    title: START_OF_STUDIES,
    subtitle: { fr: "Coder sa créativité <br> DN MADe Mention Numérique", en: "Coding my creativity <br> DN MADe Digital Design Diploma" },
    date: START_OF_STUDIES,
    year: 2022, month: 8
  },
  {
    title: { fr: "Alternance", en: "Apprenticeship" },
    subtitle: { fr: "Alternance chez Scale", en: "Apprenticeship at Scale" },
    date: { fr: "Technicien du spectacle", en: "Stage Technician" },
    year: 2023, month: 11
  },
  {
    title: { fr: "DIPLÔME OBTENU", en: "DEGREE EARNED" },
    subtitle: { fr: "Coder sa créativité", en: "Coding my creativity" },
    date: { fr: "DN MADe Mention Numérique", en: "DN MADe Digital Design Diploma" },
    year: 2025, month: 5
  },
  {
    title: START_OF_STUDIES,
    subtitle: { fr: "Game Design & Level Design <br> Bachelor IIM", en: "Game Design & Level Design <br> IIM Bachelor's Degree" },
    date: START_OF_STUDIES,
    year: 2025, month: 8
  },
];

// ── CV / Résumé — format JSON Resume (jsonresume.org) ────────
// Affiché dynamiquement sur pages/cv.html (le script y lit window.RESUME).
// Pour modifier le CV visible sur le site, éditer uniquement ce bloc.
//   basics.profiles : liens externes affichés en chips/cartes (LinkedIn, Itch.io, book InDesign...)
//   work, education  : listes affichées en frise, dans l'ordre où elles sont écrites ici
//     dates au format "AAAA-MM-JJ" (ou "AAAA-MM" si le jour n'est pas connu)
//     highlights (work) / courses (education) : champs JSON Resume standard, non
//       affichés sur le site (gardés pour référence/export)
//     hardSkills, softSkills, accomplishments : extensions hors schéma JSON Resume —
//       affichées dans le menu déroulant de chaque expérience/formation (pages/a-propos.html).
//       Une entrée sans aucun de ces 3 champs rempli n'affiche pas de menu déroulant.
//   skills, languages, interests : affichés sous forme de tags dans la colonne de gauche
window.RESUME = {
  basics: {
    name: "Axel Marion",
    label: { fr: "Game Designer — Design Web & Dev", en: "Game Designer — Web Design & Dev" },
    image: "",
    email: "axelmarion6@gmail.com",
    phone: "+33 7 83 63 35 88",
    url: "",
    summary: { fr: "Diplômé DN MADe (Gobelins), polyvalent entre web design, UI/UX, game design, level design et développement. À la recherche d'une alternance, d'un stage ou d'un premier poste dans un studio de taille moyenne.", en: "DN MADe graduate (Gobelins), versatile across web design, UI/UX, game design, level design and development. Looking for an apprenticeship, internship or first position in a mid-sized studio." },
    location: {
      address: "",
      postalCode: "95540",
      city: "Méry-sur-Oise",
      countryCode: "FR",
      region: "Île-de-France"
    },
    // Extension hors schéma JSON Resume : second domicile, affiché en plus de "location"
    location2: {
      address: "",
      postalCode: "75017",
      city: "Paris",
      countryCode: "FR",
      region: "Île-de-France"
    },
    profiles: [
      { network: "LinkedIn", username: "axel-marion-763034259", url: "https://www.linkedin.com/in/axel-marion-763034259" },
      { network: "Itch.io", username: "axelmar", url: "https://axelmar.itch.io" }
    ]
  },
  work: [
    {
      name: "Couch Game",
      position: { fr: "Employé polyvalent", en: "General Employee" },
      url: "",
      location: "IIM Paris",
      startDate: "2026-10",
      endDate: "2026-12",
      summary: "",
      highlights: ["Level Design", "Game Design", "Equilibrage", "Documentation"],
      hardSkills: ["Level Design", "Game Design", { fr: "Équilibrage", en: "Balancing" }, "Documentation"],
      softSkills: [],
      accomplishments: []
    },
    {
      name: "ZeroPaws",
      position: "Lead Game Designer",
      url: "",
      location: "IIM Paris",
      startDate: "2026-05",
      endDate: "2026-06",
      summary: "",
      highlights: ["Travail en équipe", "Documentation", "Level Design", "Game Design","Unreal Engine","technic art"],
      hardSkills: ["Documentation", "Level Design", "Game Design", "Unreal Engine", "Technical Art"],
      softSkills: [{ fr: "Travail en équipe", en: "Teamwork" }],
      accomplishments: []
    },
    {
      name: "Collectif Scale",
      position: { fr: "Employé polyvalent", en: "General Employee" },
      url: "",
      location: "Montereau-Fault-Yonne",
      startDate: "2023-11",
      endDate: "2025-07",
      summary: "",
      highlights: ["Création d'œuvres", "Entretien des œuvres", "Montage des œuvres"],
      hardSkills: [],
      softSkills: [],
      accomplishments: [
        { fr: "Création d'œuvres", en: "Creating artworks" },
        { fr: "Entretien des œuvres", en: "Maintaining artworks" },
        { fr: "Montage des œuvres", en: "Installing artworks" },
      ]
    },
  ],
  education: [
    {
      institution: "IIM Paris",
      url: "",
      area: "Game Design & Level Design",
      studyType: "Bachelor 3 Game Design",
      startDate: "2025-09",
      endDate: "2027-07",
      score: "",
      courses: ["unity", "unreal engine", "mantis", "documentation", "travail d'équipe", "game feel", "escape game",
                "blocking", "narrative design", "mission design", "gameplay", "game jam", "prototypage rapide","mise en scène","schématisation design" ],
      hardSkills: ["Unity", "Unreal Engine", "Mantis", "Documentation",
                   { fr: "Game feel", en: "Game feel" }, { fr: "Escape game", en: "Escape room" }, "Blocking",
                   { fr: "Narrative design", en: "Narrative design" }, { fr: "Mission design", en: "Mission design" },
                   "Gameplay", "Game jam", { fr: "Prototypage rapide", en: "Rapid prototyping" },
                   { fr: "Mise en scène", en: "Staging" }, { fr: "Schématisation design", en: "Design schematics" }],
      softSkills: [{ fr: "Travail d'équipe", en: "Teamwork" }],
      accomplishments: []
    },
    {
      institution: "Gobelins Paris",
      url: "",
      area: { fr: "Coder sa créativité", en: "Coding my creativity" },
      studyType: { fr: "Diplôme national des métiers d'art et du design (DN MADe)", en: "National Diploma of Arts and Design Crafts (DN MADe)" },
      startDate: "2022-09",
      endDate: "2025-07",
      score: "",
      courses: [],
      hardSkills: [],
      softSkills: [],
      accomplishments: []
    },
  ],
  skills: [
    { name: { fr: "Compétences", en: "Skills" }, level: "", keywords: [{ fr: "Créative", en: "Creative" }, "Canva", "Unreal Engine", "Unity", "Blender", "HTML 5", "CSS", "JavaScript", "Three.js"] },
  ],
  languages: [
    { language: { fr: "Français (natif)", en: "French (native)" }, fluency: { fr: "Langue maternelle", en: "Native language" } },
    { language: { fr: "Anglais (B2)", en: "English (B2)" }, fluency: "" }
  ],
  interests: [
    { name: { fr: "Qualités personnelles", en: "Personal qualities" }, keywords: [{ fr: "Calme", en: "Calm" }, { fr: "Travail d'équipe", en: "Teamwork" }, { fr: "Sérieux", en: "Conscientious" }] }
  ],
  meta: {
    canonical: "",
    version: "v1.0.0",
    lastModified: "2026-08-06"
  }
};

// ── Palette de couleurs du site (source des variables CSS) ────
// C'est ICI qu'on change les couleurs du site — modifier une valeur ci-dessous
// met à jour toutes les pages qui chargent data.js (les variables --bg, --accent...
// de src/style.css sont réécrites automatiquement au chargement, voir applyColors()
// plus bas). Les valeurs dans src/style.css ne servent que de secours si data.js
// ne se charge pas.
//
// Groupes ci-dessous, et ce que chacun modifie concrètement sur le site :
//
//   base     : fond du site (--bg/--bg2/--bg3), texte (--text/--muted/--white),
//              bordures (--border), noir/blanc purs (--black/--white/--offWhite).
//              → toutes les pages.
//
//   accent   : couleur principale du site (--accent = bleu nuit, --accent2 = bleu
//              ciel). Boutons, liens, hover, titres en surbrillance, glow du hero.
//              → toutes les pages.
//
//   tags     : couleur du point/badge associé à project.color ("blue"/"orange"/
//              "pink") sur une carte projet.
//              → accueil (cartes mises en avant), panneau détail (pages/projet.html).
//
//   surfaces : fonds "presque noirs" des zones média, miniatures sans image et
//              du panneau détail.
//              → pages/projet.html.
//
//   school   : couleur des cartes/badges par établissement sur la frise —
//              gobelins et iim (bordure de carte + badge école), perso (badge
//              "Prototype", pas encore lié à un project.color — page Jeux
//              supprimée, ce badge n'est plus affiché nulle part).
//              → pages/projet.html.
//
//   projet   : couleur liée à project.color ("blue"/"orange"/"pink") sur la frise
//              elle-même — carte, tag, panneau détail + panneau latéral.
//              → pages/projet.html.
//
//   timeline : couleur de la ligne centrale de la frise chronologique, une par
//              année dans l'ordre (year1 = 2022, year2 = 2023, ...).
//              → pages/projet.html.
// Couleurs de base réutilisées dans plusieurs groupes ci-dessous (ex: le bleu de
// "Gobelins" est le même que celui de project.color "blue"). Centralisées ici pour
// n'avoir qu'un seul endroit à modifier si l'une de ces teintes doit changer —
// chaque groupe référence SWATCHES.xxx au lieu de répéter le code hex.
const SWATCHES = {
  navy: "#24408f",         // Bleu nuit — accent principal du site
  sky: "#6ec6ff",          // Bleu ciel — accent2 / hover
  blue: "#3b82f6",         // Bleu — Gobelins / project.color "blue"
  bluePastel: "#a5c9ff",
  orange: "#f97316",       // Orange — IIM / Blocking / project.color "orange"
  orangePastel: "#ffc48c",
  green: "#74d674",        // Vert — Prototype / project.color "green"
  greenPastel: "#9ef0a0",
  pink: "#ec4899",         // Rose — Personnel / project.color "pink"
  pinkPastel: "#f9a8d4",
};

window.COLORS = {
  timeline: {
    year1: { value: "#24408f", usage: "1ère année de la frise" },
    year2: { value: "#6ec6ff", usage: "2e année de la frise" },
    year3: { value: "#3b82f6", usage: "3e année de la frise" },
    year4: { value: "#74d674", usage: "4e année de la frise" },
    year5: { value: "#f97316", usage: "5e année de la frise" }
  },
  base: {
    bg: { value: "#0f0f0f", usage: "Fond principal du site" },
    bg2: { value: "#161616", usage: "Fond des cartes, sections alternées" },
    bg3: { value: "#1e1e1e", usage: "Fond au survol (hover)" },
    border: { value: "rgba(255,255,255,0.08)", usage: "Bordures, séparateurs" },
    text: { value: "#f0f0f0", usage: "Texte principal" },
    muted: { value: "#888888", usage: "Texte secondaire, légendes" },
    white: { value: "#ffffff", usage: "Blanc pur — titres, icônes" },
    black: { value: "#000000", usage: "Noir pur — fonds vidéo/image, ombres" },
    offWhite: { value: "#f5f7fb", usage: "Blanc cassé — texte des diplômes (frise projet.html)" }
  },
  accent: {
    accent: { value: SWATCHES.navy, usage: "Bleu nuit — boutons, liens, points" },
    accent2: { value: SWATCHES.sky, usage: "Bleu ciel — hover, accents de titres" }
  },
  tags: {
    blue: { value: SWATCHES.blue, usage: "project.color: \"blue\"" },
    orange: { value: SWATCHES.orange, usage: "project.color: \"orange\"" },
    pink: { value: SWATCHES.pink, usage: "project.color: \"pink\"" }
  },
  surfaces: {
    mediaAlt: { value: "#0a0a0a", usage: "Fond alternatif des vignettes image (légèrement moins noir que --black)" },
    placeholder: { value: "#111111", usage: "Fond des cartes/miniatures sans image" },
    panel: { value: "#0d0d0d", usage: "Fond du panneau détail (pages/projet.html)" }
  },
  // gobelins/iim partagent SWATCHES.blue/orange avec tags.blue/tags.orange : une
  // seule couleur pour "Gobelins"/"IIM" (école) et project.color (projets).
  school: {
    gobelins: { value: SWATCHES.blue, text: SWATCHES.bluePastel, usage: "Gobelins — bordure de carte + badge (pages/projet.html)" },
    iim: { value: SWATCHES.orange, text: SWATCHES.orangePastel, usage: "IIM — bordure de carte + badge (pages/projet.html)" },
    perso: { value: SWATCHES.green, text: SWATCHES.greenPastel, usage: "Non utilisé actuellement (ancien badge \"Prototype\" de la page Jeux, supprimée)" }
  },
  // Couleur liée à project.color ("blue"/"orange"/"pink") sur la frise elle-même :
  // carte, tag, panneau détail + panneau latéral (pages/projet.html). Mêmes SWATCHES
  // que "tags" (utilisé à l'accueil), dans un groupe propre à la page.
  projet: {
    blue: { value: SWATCHES.blue, text: SWATCHES.bluePastel, usage: "project.color: \"blue\" — carte, tag, panneau détail (pages/projet.html)" },
    orange: { value: SWATCHES.orange, text: SWATCHES.orangePastel, usage: "project.color: \"orange\" — carte, tag, panneau détail (pages/projet.html)" },
    pink: { value: SWATCHES.pink, text: SWATCHES.pinkPastel, usage: "project.color: \"pink\" — carte, tag, panneau détail (pages/projet.html)" }
  }
  // Couleurs indépendantes des SWATCHES ci-dessus — modifiables librement sans
  // affecter les autres groupes (contrairement aux groupes plus haut qui
  // partagent volontairement les mêmes teintes entre eux).
};

// ── Application de window.COLORS aux variables CSS ────────────
// Écrase les variables :root définies dans src/style.css avec les valeurs
// ci-dessus, dès que ce fichier se charge — pas besoin de toucher au CSS.
// Génère aussi --accent-rgb / --accent2-rgb ("r,g,b") à partir des valeurs hex,
// utilisés partout où le site a besoin d'un accent semi-transparent (rgba(...)).
(function applyColors() {
  const c = window.COLORS;
  if (!c) return;
  const root = document.documentElement.style;
  const set = (cssVar, group, key) => {
    const entry = c[group] && c[group][key];
    if (entry) root.setProperty(cssVar, entry.value);
  };
  const hexToRgb = (hex) => {
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return m ? [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)].join(',') : null;
  };
  const setRgb = (cssVar, group, key) => {
    const entry = c[group] && c[group][key];
    const rgb = entry && hexToRgb(entry.value);
    if (rgb) root.setProperty(cssVar, rgb);
  };

  set('--bg', 'base', 'bg');
  set('--bg2', 'base', 'bg2');
  set('--bg3', 'base', 'bg3');
  set('--border', 'base', 'border');
  set('--text', 'base', 'text');
  set('--muted', 'base', 'muted');
  set('--white', 'base', 'white');
  set('--black', 'base', 'black');
  set('--off-white', 'base', 'offWhite');
  setRgb('--bg-rgb', 'base', 'bg');
  setRgb('--white-rgb', 'base', 'white');
  setRgb('--black-rgb', 'base', 'black');

  set('--accent', 'accent', 'accent');
  set('--accent2', 'accent', 'accent2');
  setRgb('--accent-rgb', 'accent', 'accent');
  setRgb('--accent2-rgb', 'accent', 'accent2');

  set('--surface-media-alt', 'surfaces', 'mediaAlt');
  set('--surface-placeholder', 'surfaces', 'placeholder');
  set('--surface-panel', 'surfaces', 'panel');
  setRgb('--surface-media-alt-rgb', 'surfaces', 'mediaAlt');

  // Groupes "school" et "projet" : chaque entrée a un "value" (couleur pleine)
  // ET un "text" (variante pastel), appliqués en variables CSS du même nom que
  // la clé.
  ["school", "projet"].forEach((group) => {
    Object.entries(c[group] || {}).forEach(([key, entry]) => {
      root.setProperty(`--${key}`, entry.value);
      root.setProperty(`--${key}-text`, entry.text);
      const rgb = hexToRgb(entry.value);
      if (rgb) root.setProperty(`--${key}-rgb`, rgb);
    });
  });
})();

