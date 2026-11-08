// Abréviations de mois pour l'affichage des dates de projet (calculées à
// partir de year/month, jamais stockées en dur — voir window.formatProjectDate).
const MONTH_ABBR = ["JANV.", "FÉV.", "MARS", "AVR.", "MAI", "JUIN", "JUIL.", "AOÛT", "SEPT.", "OCT.", "NOV.", "DÉC."];
window.formatProjectDate = function (year, month) {
  return `${MONTH_ABBR[month]} ${year}`;
};

// Plage d'années affichée par la frise radiale (pages/projet.html) : une
// branche par année, de start à end inclus. À modifier ici uniquement
// quand de nouvelles années de projets s'ajoutent.
window.FRISE_YEARS = { start: 2022, end: 2026 };

// ── Projets du portfolio ──────────────────────────────────────
// Chaque entrée du tableau est un projet. Modifier ce fichier met à jour
// toutes les pages qui l'utilisent (accueil, pages/projet.html).
//
// Champs communs à tous les projets :
//   title    : titre du projet
//   type     : sous-titre affiché sous le titre (ex: "Jeux vidéo", "Illustrator")
//   tag      : école/contexte affiché sur la carte (ex: "Gobelins", "IIM", "Personnel")
//   color    : couleur de la carte — "blue", "orange" ou "pink"
//   year, month : servent à trier les projets ET à générer la date affichée sur la carte
//                 (month: 0 = janvier ... 11 = décembre) via window.formatProjectDate(year, month)
//   desc     : description courte, affichée sur la carte et en tête du panneau détail
//   duration : durée du projet, affichée dans le détail (ex: "2 semaines")
//   role     : liste des rôles tenus sur le projet
//   tools    : liste des outils/logiciels utilisés
//   link     : lien externe ("#" si aucun lien : masque le bouton "Voir le projet")
//
// Champs optionnels :
//   id            : identifiant utilisé pour les liens profonds (?p=id) et pour retrouver la bonne carte
//   contributions : liste détaillée des contributions ; remplace "role" dans le panneau détail si présent
//   learned       : liste de ce qui a été appris, affichée dans "Ce que j'ai appris" (pages/projet.html)
//   team          : composition de l'équipe (ex: "Solo", "3 personnes", "Équipe")
//   engine        : moteur/outil principal (ex: "Unity", "Unreal Engine")
//   platform      : plateforme (ex: "PC", "VR / PC", "Mobile")
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

// Trois learned/contributions revenant sur plusieurs projets Blocking/Prototype —
// définis une fois pour garder un texte cohérent partout où ils apparaissent.
const FEEL_FEEDBACK_TEST = [
  "Améliorer le ressenti des actions",
  "Créer des feedbacks lisibles",
  "Tester rapidement une mécanique",
];
const COMBAT_PROTOTYPE_DESC = "Prototype orienté combat, feedback visuel et sensations de jeu.";

window.PROJECTS = [
  {
    id: "autoportrait",
    title: "Autoportrait",
    type: "Papier & Crayon",
    tag: "Gobelins", color: "blue",
    year: 2022, month: 8,
    img: "/realisation/autoportart.jpg",
    desc: "Réalisation d'un autoportrait où je devais me représenter par ce que j'aime",
    duration: "1 semaine",
    role: [
      "Dessinateur",
      "Concepteur de l'image",
      "Choix des éléments visuels",
    ],
    learned: [
      "Croquis",
      "dessin",
      "composition visuelle",
    ],
    tools: ["Crayon", "Papier"],
    link: "#"
  },
  {
    id: "montre-vectorisee",
    title: "Montre vectorisée",
    type: "Illustrator",
    tag: "Gobelins", color: "blue",
    year: 2022, month: 9,
    img: "/realisation/montre/montre-realise.png",
    gallery: ["/realisation/montre/montre-realise.png", "/realisation/montre/montre-de-base.png"],
    desc: "Vectorisation d'une montre à partir d'une image de référence",
    duration: "3 semaines",
    role: ["Vectoriseur"],
    learned: ["Illustrator"],
    tools: ["Illustrator"],
    link: "#"
  },
  {
    id: "vinyle",
    title: "Vinyle",
    type: "Illustrator & Photoshop",
    tag: "Gobelins", color: "blue",
    year: 2022, month: 10,
    img: "/realisation/vinyle/recto.png",
    gallery: ["/realisation/vinyle/recto.png", "/realisation/vinyle/macarron.png", "/realisation/vinyle/verso.png", "/realisation/vinyle/macarron-2.png"],
    desc: "Création d'un visuel de pochette de vinyle, avec recto et verso, avec les macarons, puis de l'imprimer pour un vrai vinyle",
    duration: "2 semaines",
    role: ["Illustrateur", "Imprimeur"],
    learned: ["Mise en page pour impression", "Photoshop", "Illustrator", "InDesign"],
    tools: ["Illustrator", "Photoshop", "InDesign"],
    link: "#"
  },
  {
    id: "carte-de-visite",
    title: "Carte de visite",
    type: "InDesign",
    tag: "Gobelins", color: "blue",
    year: 2023, month: 0,
    img: "/realisation/cartedevisite/logo.png",
    gallery: ["/realisation/cartedevisite/logo.png", "/realisation/cartedevisite/texte.png"],
    desc: "Création d'une carte de visite avec notre identité visuelle.",
    duration: "1 Mois",
    role: ["Designer", "Mise en page", "Création de logo"],
    learned: ["InDesign", "typographie", "composition visuelle"],
    tools: ["InDesign"],
    link: "#"
  },
  {
    id: "revolte",
    title: "Revolte",
    type: "Jeu De Carte",
    platform: "Physique",
    engine: "Prototype papier",
    tag: "Gobelins", color: "blue",
    year: 2023, month: 1,
    team: "Solo",
    img: "/realisation/carte/dos.png",
    gallery: ["/realisation/carte/dos.png", "/realisation/carte/blanc/onjn.png", "/realisation/carte/blanc/revolution.png", "/realisation/carte/jeuechec.png"],
    desc: "Un jeu de carte sur les visuels des échecs et sur les règles du jeu Exploding Kittens",
    duration: "2 Mois",
    role: ["Game Designer", "Level Designer", "Illustrateur", "Équilibrage", "Imprimeur", "Testeur"],
    contributions: [
      "Création des règles de jeu",
      "Conception des cartes et de leurs effets",
      "Direction graphique du jeu",
      "Prototype interactif sur le portfolio",
    ],
    learned: [
      "Concevoir des niveaux immersifs et cohérents",
      "Travailler en équipe avec une bonne organisation",
      "Itérer grâce aux tests joueurs",
    ],
    tools: ["InDesign", "Illustrator"],
    link: "#"
  },
  {
    id: "decoration",
    title: "Décoration",
    type: "Découpeuse laser",
    tag: "Personnel", color: "pink",
    year: 2023, month: 4,
    img: "/realisation/decoration.png",
    desc: "Création d'une décoration en bois avec gravure à la découpeuse laser",
    duration: "1 semaine",
    role: ["Designer"],
    learned: ["Découpeuse laser", "Illustrator"],
    tools: ["Illustrator", "Découpeuse laser"],
    link: "#"
  },
  {
    id: "around-the-rock",
    title: "Around The Rock",
    type: "Création d'identité visuelle",
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
    desc: "Création d'un festival de musique avec une identité visuelle cohérente",
    duration: "2 mois",
    role: ["Designer", "Créateur d'identité visuelle", "Concepteur de l'expérience globale"],
    learned: ["Travail d'équipe", "gestion de projet", "création d'une identité visuelle"],
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
    desc: "Prototype narratif inspiré de Reigns, où le joueur avance par décisions successives et conséquences immédiates.",
    duration: "Projet court",
    role: ["Narration interactive", "UX", "Prototypage"],
    contributions: [
      "Structure de l'expérience interactive",
      "Création du système de décisions",
      "Écriture des situations",
      "Intégration sur PandaSuite",
    ],
    learned: ["Narration interactive", "UX", "Prototypage"],
    tools: ["PandaSuite"],
    link: "#"
  },
  {
    id: "whellcome-to-hell",
    title: "Whellcome To Hell",
    type: "Vidéo IA",
    tag: "Gobelins", color: "blue",
    year: 2024, month: 2,
    img: "/realisation/whellcome.png",
    video: "https://www.youtube.com/embed/mYO2WOaA8CU?si=jT7o28wQXJ149gHN",
    desc: "Vidéo humoristique sous forme d'une vidéo de présentation d'entreprise fictive, avec des images générées par l'IA",
    duration: "1 Semaine",
    role: ["Monteur", "Concepteur de l'image", "Choix des éléments visuels"],
    learned: ["Utiliser les outils d'IA pour créer du contenu visuel", "Storybord", "Montage vidéo"],
    tools: ["Intelligence Artificielle", "After Effects"],
    link: "#"
  },
  {
    id: "animation-3d",
    title: "Animation 3D",
    type: "Vidéo",
    tag: "Gobelins", color: "blue",
    year: 2024, month: 3,
    img: "/realisation/Pokeball.png",
    video: "https://www.youtube.com/embed/sAeUvNG19OA?si=KS0gEqwmWWne0eha",
    desc: "Animation 3D d'une pokeball et d'un combat de pokemon",
    duration: "1 Semaine",
    role: ["Animateur 3D", "Modélisateur", "Monteur"],
    learned: ["Blender", "Animation 3D"],
    tools: ["Blender", "After Effects"],
    link: "#"
  },
  {
    id: "floatland",
    title: "FloatLand",
    type: "Jeux vidéo VR",
    platform: "VR / PC",
    tag: "Gobelins", color: "blue",
    year: 2024, month: 5,
    team: "3 personnes",
    engine: "Unity",
    img: "/realisation/floatland/floatland.png",
    video: "https://www.youtube.com/watch?v=p1svvKTsktk",
    desc: "Jeu de relaxation en VR, où le joueur va sur une île flottante avec une identité visuelle propre avec un mini jeu dessus",
    duration: "Projet fin d'année",
    role: ["Game Designer", "Level Designer", "Développeur"],
    contributions: ["Conception du level design", "Mécaniques de gameplay", "Développement Unity"],
    learned: ["Développement Unity VR", "Level Design", "Game Design"],
    tools: ["Unity", "Blender"],
    link: "#"
  },
  {
    id: "infinitydot",
    title: "Infinity Dot",
    type: "Site Three.js",
    platform: "Web",
    tag: "Gobelins", color: "blue",
    year: 2024, month: 9,
    team: "Solo",
    engine: "Three.js",
    img: "/realisation/infinitydot.png",
    desc: "Représenter la fin de toute chose",
    duration: "1 semaine",
    role: ["Développeur", "Designer"],
    contributions: ["Création de la scène Three.js", "Animation des particules", "Design et intégration"],
    learned: ["Améliorer un ancien concept", "Rendre une DA plus cohérente", "Clarifier l'expérience joueur"],
    tools: ["Three.js"],
    link: "/pages/infinitydot.html"
  },
  {
    id: "dotmusic",
    title: "Dot Music",
    type: "Site Vue.js",
    platform: "Web",
    tag: "Gobelins", color: "blue",
    year: 2024, month: 10,
    team: "Solo",
    engine: "Vue.js",
    img: "/realisation/dotmusic.png",
    desc: "Représenter l'effet du son sur les particules",
    duration: "1 semaine",
    role: ["Développeur", "Designer"],
    contributions: ["Visualisation audio réactive", "Lien entre son et animation", "Interface interactive"],
    learned: ["Améliorer un ancien concept", "Rendre une DA plus cohérente"],
    tools: ["Vue.js"],
    link: "/pages/dotmusic.html"
  },
  {
    id: "mac-s-story",
    title: "Mac's Story",
    type: "Vidéo",
    tag: "Gobelins", color: "blue",
    year: 2024, month: 11,
    img: "/realisation/macstory.png",
    gallery: ["/realisation/macstory.png", "/realisation/macstory1.png"],
    video: "https://www.youtube.com/embed/jl-DCLoXv2w?si=Si-nQJpyGj4MTeXj",
    desc: "Vidéo de deux ordinateurs qui discutent sans interaction directe",
    duration: "2 semaines",
    role: ["Monteur", "Animation", "Doublage", "Conception de l'image"],
    learned: FEEL_FEEDBACK_TEST,
    tools: ["Chataigne", "After Effects", "Photoshop"],
    link: "#"
  },
  {
    id: "memoir-level-design",
    title: "Memoir Level Design",
    type: "Mémoire",
    tag: "Gobelins", color: "blue",
    year: 2025, month: 1,
    img: "/realisation/memoir/abstract.png",
    desc: "Comment le joueur est guidé par le Level Design dans un jeu vidéo, plus particulièrement dans les jeux à la première personne ?",
    duration: "6 Mois",
    role: ["Rédaction", "Chercheur", "Analyste"],
    learned: ["Rédiger un texte en fonction d'analyse", "Rechercher sur un sujet"],
    tools: ["Google Docs"],
    link: "/realisation/memoir/memoir-level-design.pdf"
  },
  {
    id: "fragment",
    title: "Fragment",
    type: "Jeux vidéo",
    platform: "PC",
    engine: "Unity",
    tag: "Gobelins", color: "blue",
    year: 2025, month: 5,
    team: "Solo",
    img: "/realisation/fragment/fragment.png",
    desc: "Exprimer des émotions par l'environnement et guider le joueur sans interface directe.",
    duration: "6 Mois",
    role: ["Développeur", "Level Designer", "Game Designer"],
    contributions: [
      "Création d'un gameplay expressif",
      "Expression des émotions par l'ambiance",
      "Réflexion sur le guidage joueur",
    ],
    learned: FEEL_FEEDBACK_TEST,
    tools: ["Unity", "Blender"],
    link: "#"
  },
  {
    id: "game-designer-so-briquet",
    title: "Game Designer - So'Briquet",
    type: "Jeux vidéo",
    platform: "PC",
    engine: "Unity",
    tag: "IIM", color: "orange",
    year: 2025, month: 8,
    team: "Solo",
    img: "/realisation/sobriquet/sobriquet.png",
    desc: "Jeu de dextérité où le joueur doit faire brûler des lianes et faire attention à toujours avoir du feu",
    duration: "1 Mois",
    role: ["Game Design"],
    contributions: ["Conception du gameplay", "équilibrage", "tests"],
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
    desc: "Création d'un niveau Portal 2, axé sur une mécanique pour faire des puzzles.",
    duration: "1 Semaine",
    role: ["Level Design", "Blocking", "Puzzle Design"],
    contributions: [
      "Analyse d'une mécanique de Portal 2",
      "Blocking et itérations",
      "Étude des signes visuels de Portal 2",
    ],
    learned: FEEL_FEEDBACK_TEST,
    tools: ["Portal 2 Éditeur"],
    link: "#"
  },
  {
    id: "modvember",
    title: "Modvember",
    type: "Jeux vidéo",
    tag: "Personnel", color: "pink",
    year: 2025, month: 10,
    thumb: "/realisation/Trackmania.avif",
    videos: [
      "https://www.youtube.com/watch?v=0dp348jROX4",
      "https://www.youtube.com/watch?v=0V8YQs3msWo",
      "https://www.youtube.com/watch?v=kJqhrHaqJn8",
      "https://www.youtube.com/watch?v=VpzC4WX6iJA",
    ],
    desc: "Map trackmania sur différents types de course trackmania",
    duration: "1 Mois",
    role: ["Level Design"],
    learned: ["Level design de course"],
    tools: ["Trackmania Éditeur"],
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
    desc: "Reproduction d'une zone de Far Cry 5 en blocking pour analyser les choix de level design du studio.",
    duration: "1 Mois",
    role: ["Level Design", "Blocking"],
    contributions: [ "Level design"],
    learned: ["Level design de FPS", "Blocking"],
    tools: ["Far Cry 5 Éditeur"],
    link: "/realisation/farcry/niveaufarcry.pdf"
  },
  {
    id: "longnigth",
    title: "Long Night At Grandma's",
    type: "Jeux vidéo",
    platform: "Mobile",
    tag: "IIM", color: "orange",
    year: 2026, month: 1,
    team: "Équipe",
    engine: "Unity",
    thumb: "/realisation/longnigth/longnigth.png",
    gallery: [
      "/realisation/longnigth/ecrantitre.jpg",
      "/realisation/longnigth/ingame.jpg",
      { src: "https://docs.google.com/document/d/1fDn_6eyT4rtfno3CSW_KH2T5ynaEfMe871f1WIkwWqE/edit?usp=sharing", type: "doc", label: "GDD" },
    ],
    desc: "Jeu de réflexion sur mobile, où le joueur doit défendre son manoir contre des vagues d'ennemis",
    duration: "1 Mois",
    role: ["Lead Game Designer"],
    contributions: [
      "Direction du game design",
      "Conception des mécaniques",
      "Itération et tests",
    ],
    learned: [
      "Direction du game design",
      "Conception des mécaniques de puzzle",
      "Itérations et tests joueurs",
      "Documentation de game design",
    ],
    tools: ["Unity", "Google Docs", "Figma"],
    link: "https://play.google.com/store/apps/details?id=com.IIMaxeJV.LongNightAtGrandmas&hl=fr"
  },
  {
    id: "golf-unreal-engine",
    title: "Golf Unreal Engine",
    type: "Jeux vidéo",
    tag: "IIM", color: "orange",
    year: 2026, month: 3,
    thumb: "/realisation/UE5logo.jpg",
    desc: COMBAT_PROTOTYPE_DESC,
    duration: "1 Mois",
    role: ["Level Design", "Mécanique de jeu", "Tests de sensations", "Blueprint"],
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
    desc: "Reproduction d'une zone de A Plague Tale Requiem pour analyser la direction artistique et le level design narratif.",
    duration: "1 Mois",
    role: ["Level Design", "Blocking", "Ambiance"],
    contributions: [
      "Analyse du level design de référence",
      "Blocking fidèle à la scène originale",
      "Étude de la narration environnementale",
      "Rapport d'analyse",
    ],
    learned: FEEL_FEEDBACK_TEST,
    tools: ["Unreal Engine"],
    link: "#"
  },
  {
    id: "zeropaws",
    title: "ZeroPaws",
    type: "Jeux vidéo",
    tag: "IIM", color: "orange",
    year: 2026, month: 5,
    thumb: "/realisation/zeropaws/zeropawslogo.png",
    video: "https://www.youtube.com/watch?v=1cxjRNqCTfA",
    desc: COMBAT_PROTOTYPE_DESC,
    duration: "1 Mois",
    role: ["Feedback visuel", "Tests de sensations", "Level Design", "Blueprint", "technic art"],
    learned: FEEL_FEEDBACK_TEST,
    tools: ["Unreal Engine"],
    link: "https://blueprint-trifi.itch.io/zero-paws"
  },
  {
    id: "t-y-l-try-your-luck",
    title: "T.Y.L. Try Your Luck",
    type: "Jeux vidéo",
    tag: "IIM", color: "orange",
    year: 2026, month: 8,
    thumb: "/realisation/TYL/TYLLogo.png",
    desc: COMBAT_PROTOTYPE_DESC,
    duration: "1 Semaine",
    role: ["Game Design"],
    learned: ["Travail d'équipe"],
    tools: ["Unreal Engine"],
    link: "https://arcdragons.itch.io/13event-tyl"
  },
];

// ── Frise diplômes / alternance (pages/projet.html) ──────────
// Chaque entrée est une étape affichée sur la frise chronologique.
//   title    : titre court affiché en avant (ex: "DIPLÔME OBTENU")
//   subtitle : détail sous le titre, peut contenir "<br>" pour aller à la ligne
//   date     : texte affiché en dessous (ex: nom du diplôme, intitulé du poste...)
//   year, month : servent à trier/positionner l'étape sur la frise (month: 0 = janvier ... 11 = décembre)
const START_OF_STUDIES = "Début de formation";

window.DIPLOMAS = [
  {
    title: START_OF_STUDIES,
    subtitle: "Coder sa créativité <br> DN MADe Mention Numérique",
    date: START_OF_STUDIES,
    year: 2022, month: 8
  },
  {
    title: "Alternance",
    subtitle: "Alternance chez Scale",
    date: "Technicien du spectacle",
    year: 2023, month: 11
  },
  {
    title: "DIPLÔME OBTENU",
    subtitle: "Coder sa créativité",
    date: "DN MADe Mention Numérique",
    year: 2025, month: 5
  },
  {
    title: START_OF_STUDIES,
    subtitle: "Game Design & Level Design <br> Bachelor IIM",
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
    label: "Game Designer — Design Web & Dev",
    image: "",
    email: "axelmarion6@gmail.com",
    phone: "+33 7 83 63 35 88",
    url: "",
    summary: "Diplômé DN MADe (Gobelins), polyvalent entre web design, UI/UX, game design, level design et développement. À la recherche d'une alternance, d'un stage ou d'un premier poste dans un studio de taille moyenne.",
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
      position: "Employé polyvalent",
      url: "",
      location: "IIM Paris",
      startDate: "2026-10",
      endDate: "2026-12",
      summary: "",
      highlights: ["Level Design", "Game Design", "Equilibrage", "Documentation"],
      hardSkills: ["Level Design", "Game Design", "Équilibrage", "Documentation"],
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
      softSkills: ["Travail en équipe"],
      accomplishments: []
    },
    {
      name: "Collectif Scale",
      position: "Employé polyvalent",
      url: "",
      location: "Montereau-Fault-Yonne",
      startDate: "2023-11",
      endDate: "2025-07",
      summary: "",
      highlights: ["Création d'œuvres", "Entretien des œuvres", "Montage des œuvres"],
      hardSkills: [],
      softSkills: [],
      accomplishments: [
        "Création d'œuvres",
        "Entretien des œuvres",
        "Montage des œuvres",
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
                   "Game feel", "Escape game", "Blocking",
                   "Narrative design", "Mission design",
                   "Gameplay", "Game jam", "Prototypage rapide",
                   "Mise en scène", "Schématisation design"],
      softSkills: ["Travail d'équipe"],
      accomplishments: []
    },
    {
      institution: "Gobelins Paris",
      url: "",
      area: "Coder sa créativité",
      studyType: "Diplôme national des métiers d'art et du design (DN MADe)",
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
    { name: "Compétences", level: "", keywords: ["Créative", "Canva", "Unreal Engine", "Unity", "Blender", "HTML 5", "CSS", "JavaScript", "Three.js"] },
  ],
  languages: [
    { language: "Français (natif)", fluency: "Langue maternelle" },
    { language: "Anglais (B2)", fluency: "" }
  ],
  interests: [
    { name: "Qualités personnelles", keywords: ["Calme", "Travail d'équipe", "Sérieux"] }
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

