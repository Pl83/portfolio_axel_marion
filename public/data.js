// ── Projets du portfolio ──────────────────────────────────────
// Chaque entrée du tableau est un projet. Modifier ce fichier met à jour
// toutes les pages qui l'utilisent (accueil, pages/projet.html, pages/jeux.html).
//
// Champs communs à tous les projets :
//   title    : titre du projet
//   type     : sous-titre affiché sous le titre (ex: "Jeux vidéo", "Illustrator")
//   tag      : école/contexte affiché sur la carte (ex: "Gobelins", "IIM", "Personnel")
//   color    : couleur de la carte — "blue", "orange" ou "pink"
//   year, month, date : year/month servent à trier les projets (month: 0 = janvier ... 11 = décembre)
//                        date est le texte affiché sur la carte (ex: "SEPT. 2022")
//   desc     : description courte, affichée sur la carte et en tête du panneau détail
//   duration : durée du projet, affichée dans le détail (ex: "2 semaines")
//   role     : liste des rôles tenus sur le projet
//   tools    : liste des outils/logiciels utilisés
//   link     : lien externe ("#" si aucun lien : masque le bouton "Voir le projet")
//
// Champs optionnels :
//   id            : identifiant utilisé pour ouvrir le détail depuis l'accueil (openProject) et pour les projets mis en avant
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
//
// Champs utilisés uniquement par la page Jeux (pages/jeux.html) :
//   jeux     : true pour faire apparaître le projet sur la page Jeux
//   mode     : "Solo" ou "Équipe" (déduit de "team" si absent)
//   category : catégorie utilisée pour les filtres de la page Jeux (ex: "Jeux", "Blocking", "Prototype")

window.PROJECTS = [
  {
    title: "Autoportrait",
    type: "Papier & Crayon",
    tag: "Gobelins", color: "blue",
    year: 2022, month: 8, date: "SEPT. 2022",
    img: "/realisation/autoportart.jpg",
    desc: "Réalisation d'un autoportrait où je devais me représenter par ce que j'aime",
    duration: "1 semaine",
    role: ["Dessinateur", "Concepteur de l'image", "Choix des éléments visuels"],
    learned: ["Croquis", "dessin", "composition visuelle"],
    tools: ["Crayon", "Papier"],
    link: "#"
  },
  {
    title: "Montre vectorisée",
    type: "Illustrator",
    tag: "Gobelins", color: "blue",
    year: 2022, month: 9, date: "OCT. 2022",
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
    title: "Vinyle",
    type: "Illustrator & Photoshop",
    tag: "Gobelins", color: "blue",
    year: 2022, month: 10, date: "NOV. 2022",
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
    title: "Carte de visite",
    type: "InDesign",
    tag: "Gobelins", color: "blue",
    year: 2023, month: 0, date: "JAV. 2023",
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
    title: "Revolte",
    type: "Jeu De Carte",
    platform: "Physique",
    engine: "Prototype papier",
    tag: "Gobelins", color: "blue",
    year: 2023, month: 1, date: "FEV. 2023",
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
      "Prototype interactif sur le portfolio"
    ],
    learned: ["Concevoir des niveaux immersifs et cohérents", "Travailler en équipe avec une bonne organisation", "Itérer grâce aux tests joueurs"],
    tools: ["InDesign", "Illustrator"],
    link: "#",
    jeux: true, mode: "Solo", category: "Jeux"
  },
  {
    title: "Decoration",
    type: "Decoupeuse laser",
    tag: "Personnel", color: "pink",
    year: 2023, month: 4, date: "MAI 2023",
    img: "/realisation/decoration.png",
    desc: "Création d'une décoration en bois avec gravure à la découpeuse laser",
    duration: "1 semaine",
    role: ["Designer"],
    learned: ["Découpeuse laser", "Illustrator"],
    tools: ["Illustrator", "Découpeuse laser"],
    link: "#"
  },
  {
    title: "Around The Rock",
    type: "création d'identité visuelle",
    tag: "Gobelins", color: "blue",
    year: 2023, month: 5, date: "JUIN 2023",
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
    title: "Enfain",
    type: "Application",
    tag: "Gobelins", color: "blue",
    year: 2023, month: 11, date: "DEC. 2023",
    img: "/realisation/enfain.jpg",
    desc: "Prototype d'une application en cas d'un manque de reapprovisionnement alimentaire dans Paris",
    duration: "1 Semaine",
    role: ["User Experience", "User Research", "Prototypage", "Design d'interface"],
    learned: ["Poser des questions", "Analyse des besoins", "UX", "UI"],
    tools: ["Figma"],
    link: "#"
  },
  {
    title: "After the Révolte",
    type: "Prototype",
    platform: "PandaSuite",
    engine: "PandaSuite",
    tag: "Gobelins", color: "blue",
    year: 2024, month: 1, date: "MARS 2024",
    team: "Solo",
    img: "/realisation/afterrevolt/moyen.png",
    desc: "Prototype narratif inspiré de Reigns, où le joueur avance par décisions successives et conséquences immédiates.",
    duration: "Projet court",
    role: ["Narration interactive", "UX", "Prototypage"],
    contributions: [
      "Structure de l'expérience interactive",
      "Création du système de décisions",
      "Écriture des situations",
      "Intégration sur PandaSuite"
    ],
    learned: ["Narration interactive", "UX", "Prototypage"],
    tools: ["PandaSuite"],
    link: "#",
    jeux: true, mode: "Solo", category: "Prototype"
  },
  {
    title: "Whellcome To Hell",
    type: "Vidéo IA",
    tag: "Gobelins", color: "blue",
    year: 2024, month: 2, date: "MARS. 2024",
    img: "/realisation/whellcome.png",
    video: "https://www.youtube.com/embed/mYO2WOaA8CU?si=jT7o28wQXJ149gHN",
    desc: "Vidéo humoristique sous forme d'une vidéo de presentation d'enterprise firctive, avec des images générées par l'IA",
    duration: "1 Semaine",
    role: ["Monteur", "Concepteur de l'image", "Choix des éléments visuels"],
    learned: ["Utiliser les outils d'IA pour créer du contenu visuel", "Storybord", "Montage vidéo"],
    tools: ["Intelligence Artificielle", "After Effects"],
    link: "#"
  },
  {
    title: "Animation 3D",
    type: "Vidéo",
    tag: "Gobelins", color: "blue",
    year: 2024, month: 3, date: "AVR. 2024",
    img: "/realisation/Pokeball.png",
    video: "https://www.youtube.com/embed/sAeUvNG19OA?si=KS0gEqwmWWne0eha",
    desc: "Animation 3D d'une pokeball et s'un combat de pokemon",
    duration: "1 Semaine",
    role: ["Animateur 3D", "Modélisateur", "Monteur"],
    learned: ["Blender", "Animation 3D"],
    tools: ["Blender", "After Effects"],
    link: "#"
  },
  {
    title: "Course de la mort",
    type: "Jeux vidéo",
    tag: "Gobelins", color: "blue",
    year: 2024, month: 4, date: "MAI 2024",
    img: "/realisation/construct.png",
    desc: "Prototype d'un jeu a deux joueurs, où un joueur conduit le vehicule et l'autre doit protéger la voiture des dangers en tirant dessus",
    duration: "1 Mois",
    role: ["Game Designer", "Level Designer", "Codeur"],
    learned: ["Gestion de projet", "Construct", "Arduino"],
    tools: ["Construct", "Arduino"],
    link: "#"
  },
  {
    id: "floatland",
    title: "FloatLand",
    type: "Jeux vidéo VR",
    platform: "VR / PC",
    tag: "Gobelins", color: "blue",
    year: 2024, month: 5, date: "JUIN. 2024",
    team: "3 personnes",
    engine: "Unity",
    jeux: true, mode: "Équipe", category: "Jeux",
    img: "/realisation/floatland/floatland.png",
    video: "https://www.youtube.com/watch?v=p1svvKTsktk",
    desc: "Jeux de relaxation en VR, où le joueur va sur une ile flottante avec une identitév visuelle propre avec un mini jeu dessus",
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
    year: 2024, month: 9, date: "OCT. 2024",
    team: "Solo",
    engine: "Three.js",
    jeux: true, mode: "Solo", category: "Jeux",
    img: "/realisation/infinitydot.png",
    desc: "Representé la fin de toute chose",
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
    year: 2024, month: 10, date: "NOV. 2024",
    team: "Solo",
    engine: "Vue.js",
    jeux: true, mode: "Solo", category: "Jeux",
    img: "/realisation/dotmusic.png",
    desc: "Representé l'effet du son sur les particules",
    duration: "1 semaine",
    role: ["Développeur", "Designer"],
    contributions: ["Visualisation audio réactive", "Lien entre son et animation", "Interface interactive"],
    learned: ["Améliorer un ancien concept", "Rendre une DA plus cohérente",],
    tools: ["Vue.js"],
    link: "/pages/dotmusic.html"
  },
  {
    title: "Mac's Story",
    type: "Vidéo",
    tag: "Gobelins", color: "blue",
    year: 2024, month: 11, date: "DEC. 2024",
    img: "/realisation/macstory.png",
    gallery: ["/realisation/macstory.png", "/realisation/macstory1.png"],
    video: "https://www.youtube.com/embed/jl-DCLoXv2w?si=Si-nQJpyGj4MTeXj",
    desc: "Vidéo de deux ordinateurs qui discutent sans interation directe",
    duration: "2 semaines",
    role: ["Monteur", "Animation", "Doublage", "Conception de l'image"],
    learned: ["Améliorer le ressenti des actions", "Créer des feedbacks lisibles", "Tester rapidement une mécanique"],
    tools: ["Chataigne", "After Effects", "Photoshop"],
    link: "#"
  },
  {
    title: "Memoir Level Design",
    type: "Memoir",
    tag: "Gobelins", color: "blue",
    year: 2025, month: 1, date: "JAV. 2025",
    img: "/realisation/memoir/abstract.png",
    desc: "Comment le joueur est guidé par le Level Design dans un jeu vidéo, plus particulièrement dans les jeux à la première personne ?",
    duration: "6 Mois",
    role: ["Rédaction", "Chercheur", "Analyste"],
    learned: ["Rédiger un texte en fonction d'analyse", "Rechercher sur un sujet"],
    tools: ["Google Docs"],
    link: "#"
  },
  {
    title: "Fragment",
    type: "Jeux vidéo",
    platform: "PC",
    engine: "Unity",
    tag: "Gobelins", color: "blue",
    year: 2025, month: 5, date: "JUIN 2025",
    team: "Solo",
    img: "/realisation/fragment/fragment.png",
    desc: "Exprimer des émotions par l'environnement et guider le joueur sans interface directe.",
    duration: "6 Mois",
    role: ["Développeur", "Level Designer", "Game Designer"],
    contributions: [
      "Création d'un gameplay expressif",
      "Expression des émotions par l'ambiance",
      "Réflexion sur le guidage joueur"
    ],
    learned: ["Améliorer le ressenti des actions", "Créer des feedbacks lisibles", "Tester rapidement une mécanique"],
    tools: ["Unity", "Blender"],
    link: "#",
    jeux: true, mode: "Solo", category: "Jeux"
  },
  {
    title: "Game Designer - So'Briquet",
    type: "Jeux vidéo",
    platform: "PC",
    engine: "Unity",
    tag: "IIM", color: "orange",
    year: 2025, month: 8, date: "SEPT. 2025",
    team: "Solo",
    img: "/realisation/sobriquet/sobriquet.png",
    desc: "Jeux de dexterité où le joueur doit faire brulé des lianes et de faire attention a toujours avoir du feu",
    duration: "1 Mois",
    role: ["Game Design"],
    contributions: [ "Conception du gameplay", "equilibrage", "tests"],
    learned: ["Améliorer le ressenti des actions", "Créer des feedbacks lisibles", "Tester rapidement une mécanique"],
    tools: ["Unity", "Blender"],
    link: "https://anatole13.itch.io/team-10-sobriquet#",
    jeux: true, mode: "Solo", category: "Jeux"
  },
  {
    title: "Level Design Portal 2",
    type: "Blocking",
    platform: "PC",
    engine: "Hammer Editor",
    tag: "IIM", color: "orange",
    year: 2025, month: 9, date: "OCT. 2025",
    team: "Solo",
    img: "/realisation/vinyle/macarron.png",
    desc: "Création d'un niveau Portal 2, axé sur une mecanique pour faire des puzzles.",
    duration: "1 Semaine",
    role: ["Level Design", "Blocking", "Puzzle Design"],
    contributions: [
      "Analyse d'une mécanique de Portal 2",
      "Blocking et itérations",
      "Étude des signes visuels de Portal 2",
    ],
    learned: ["Améliorer le ressenti des actions", "Créer des feedbacks lisibles", "Tester rapidement une mécanique"],
    tools: ["Portal 2 Editeur"],
    link: "#",
    jeux: true, mode: "Solo", category: "Blocking"
  },
  {
    title: "Modvember",
    type: "Jeux vidéo",
    tag: "Personnel", color: "pink",
    year: 2025, month: 10, date: "NOV. 2025",
    thumb: "/realisation/Trackmania.avif",
    videos: [
      "https://www.youtube.com/watch?v=0dp348jROX4",
      "https://www.youtube.com/watch?v=0V8YQs3msWo",
      "https://www.youtube.com/watch?v=kJqhrHaqJn8",
      "https://www.youtube.com/watch?v=VpzC4WX6iJA",
    ],
    desc: "Map trackmania sur différent type de course trackmania",
    duration: "1 Mois",
    role: ["Level Design"],
    learned: ["Level design de course"],
    tools: ["Trackmania Editeur"],
    link: "#"
  },
  {
    title: "Level Design Far Cry 5",
    type: "Blocking",
    platform: "PC",
    engine: "Far Cry Arcade",
    tag: "IIM", color: "orange",
    year: 2025, month: 11, date: "DEC. 2025",
    team: "Solo",
    img: "/realisation/vinyle/macarron.png",
    video: "https://www.youtube.com/watch?v=O8hXSBKPLLQ",
    desc: "Reproduction d'une zone de Far Cry 5 en blocking pour analyser les choix de level design du studio.",
    duration: "1 Mois",
    role: ["Level Design", "Blocking"],
    contributions: [ "Level design"],
    learned: ["Level design de FPS", "Blocking"],
    tools: ["Far Cry 5 editeur"],
    link: "#",
    jeux: true, mode: "Solo", category: "Blocking"
  },
  {
    id: "longnigth",
    title: "Long Night At Grandma's",
    type: "Jeux vidéo",
    platform: "Mobile",
    tag: "IIM", color: "orange",
    year: 2026, month: 1, date: "FEV. 2026",
    team: "Équipe",
    engine: "Unity",
    jeux: true, mode: "Équipe", category: "Jeux",
    img: "/realisation/longnigth/longnigth.png",
    gallery: [
      "/realisation/longnigth/ecrantitre.jpg",
      "/realisation/longnigth/ingame.jpg",
      { src: "https://docs.google.com/document/d/1fDn_6eyT4rtfno3CSW_KH2T5ynaEfMe871f1WIkwWqE/edit?usp=sharing", type: "doc", label: "GDD" },
    ],
    desc: "Jeu de reflexion sur mobile, où le joueur doit deffendre son manoir contre des vagues d'ennemis",
    duration: "1 Mois",
    role: ["Lead Game Designer"],
    contributions: ["Direction du game design", "Conception des mécaniques", "Itération et tests"],
    learned: ["Direction du game design","Conception des mécaniques de puzzle","Itérations et tests joueurs" ,"Documentation de game design"],
    tools: ["Unity", "Google Docs","Figma"],
    link: "#"
  },
  /* INCOMPLET — à compléter avant de publier
  {
    title: "Golf Unreal Engine",
    type: "Jeux vidéo",
    tag: "IIM", color: "orange",
    year: 2026, month: 3, date: "AVR. 2026",
    img: "/realisation/vinyle/macarron.png",
    desc: "Prototype orienté combat, feedback visuel et sensations de jeu.",
    duration: "1 Mois",
    role: ["Level Design", "Mécanique de jeu", "Tests de sensations", "Blueprint"],
    learned: ["Améliorer le ressenti des actions", "Créer des feedbacks lisibles", "Tester rapidement une mécanique"],
    tools: ["Unreal Engine"],
    link: "#"
  },
  */
  {
    title: "Level Design Plague Tale",
    type: "Blocking",
    platform: "PC",
    engine: "Unreal Engine",
    tag: "IIM", color: "orange",
    year: 2026, month: 4, date: "MAI 2026",
    team: "Solo",
    img: "/realisation/vinyle/macarron.png",
    desc: "Reproduction d'une zone de A Plague Tale Requiem pour analyser la direction artistique et le level design narratif.",
    duration: "1 Mois",
    role: ["Level Design", "Blocking", "Ambiance"],
    contributions: [
      "Analyse du level design de référence",
      "Blocking fidèle à la scène originale",
      "Étude de la narration environnementale",
      "Rapport d'analyse"
    ],
    learned: ["Améliorer le ressenti des actions", "Créer des feedbacks lisibles", "Tester rapidement une mécanique"],
    tools: ["Unreal Engine"],
    link: "#",
    jeux: true, mode: "Solo", category: "Blocking"
  },
  /* INCOMPLET — à compléter avant de publier
  {
    title: "Project Unreal Engine",
    type: "Jeux vidéo",
    tag: "IIM", color: "orange",
    year: 2026, month: 5, date: "JUIN 2026",
    img: "/realisation/vinyle/macarron.png",
    desc: "Prototype orienté combat, feedback visuel et sensations de jeu.",
    duration: "1 Mois",
    role: ["Combat Design", "Feedback visuel", "Tests de sensations"],
    learned: ["Améliorer le ressenti des actions", "Créer des feedbacks lisibles", "Tester rapidement une mécanique"],
    tools: ["Unreal Engine"],
    link: "#"
  },
  */
];

// ── Frise diplômes / alternance (page d'accueil) ─────────────
// Chaque entrée est une étape affichée sur la frise chronologique.
//   title    : titre court affiché en avant (ex: "DIPLÔME OBTENU")
//   subtitle : détail sous le titre, peut contenir "<br>" pour aller à la ligne
//   date     : texte affiché en dessous (ex: nom du diplôme, intitulé du poste...)
//   year, month : servent à trier/positionner l'étape sur la frise (month: 0 = janvier ... 11 = décembre)
window.DIPLOMAS = [
  {
    title: "Debut de formation",
    subtitle: "Coder sa créativité <br> DNMADe Mention Numerique",
    date: "Debut de formation",
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
    date: "DNMADe Mention Numerique",
    year: 2025, month: 5
  },
  {
    title: "Debut de formation",
    subtitle: "Game Design & Level Design <br> Bachelor IIM",
    date: "Debut de formation",
    year: 2025, month: 8
  },
];

// ── CV / Résumé — format JSON Resume (jsonresume.org) ────────
// Affiché dynamiquement sur pages/cv.html (le script y lit window.RESUME).
// Pour modifier le CV visible sur le site, éditer uniquement ce bloc.
//   basics.profiles : liens externes affichés en chips/cartes (LinkedIn, Itch.io, book InDesign...)
//   work, education  : listes affichées en frise, dans l'ordre où elles sont écrites ici
//     dates au format "AAAA-MM-JJ" (ou "AAAA-MM" si le jour n'est pas connu)
//     highlights : liste de points affichés sous chaque expérience
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
      name: "Collectif Scale",
      position: "Employé polyvalent",
      url: "",
      location: "Montereau-Fault-Yonne",
      startDate: "2023-11-27",
      endDate: "2025-07-31",
      summary: "",
      highlights: ["Création d'œuvres", "Entretien des œuvres", "Montage des œuvres"]
    },
    {
      name: "Scol'Art Rex",
      position: "Graphiste",
      url: "",
      location: "Avèze — stage en télétravail",
      startDate: "2023-05-09",
      endDate: "2023-07-07",
      summary: "",
      highlights: ["Conception d'atelier artistique", "Réalisation de vidéo", "Montage"]
    },
    {
      name: "Stokomani",
      position: "Employé polyvalent",
      url: "",
      location: "Saint-Ouen-l'Aumône",
      startDate: "2022-07-01",
      endDate: "2022-08-30",
      summary: "",
      highlights: ["Agent de caisse", "Gestion de rayon"]
    }
  ],
  education: [
    {
      institution: "Gobelins Paris",
      url: "",
      area: "Métiers d'art et du design",
      studyType: "Diplôme national des métiers d'art et du design (DN MADe)",
      startDate: "2022-09",
      endDate: "2025-07",
      score: "",
      courses: []
    },
    {
      institution: "Lycée Edmond Rostand",
      url: "",
      area: "Physique-chimie & SVT",
      studyType: "Baccalauréat général",
      startDate: "2019-09",
      endDate: "2021-07",
      score: "",
      courses: []
    }
  ],
  skills: [
    { name: "Design", level: "", keywords: ["Illustrator", "Photoshop", "InDesign", "Canva", "Premiere Pro", "After Effects", "Blender", "Unity"] },
    { name: "Programmation", level: "", keywords: ["HTML", "CSS", "JavaScript", "Three.js", "C#"] }
  ],
  languages: [
    { language: "Français", fluency: "Langue maternelle" },
    { language: "Anglais", fluency: "" }
  ],
  interests: [
    { name: "Qualités personnelles", keywords: ["Calme", "Attentionné", "Discret", "Patient", "Altruiste", "Travail d'équipe", "Sérieux"] }
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
//              "Prototype", pas encore lié à un project.color).
//              → pages/projet.html, pages/jeux.html.
//
//   jeux     : couleur des boutons de filtre et badges de type sur la page Jeux —
//              jeux (jeu/jeu de carte), prototype, blocking.
//              → pages/jeux.html.
//
//   projet   : couleur liée à project.color ("blue"/"orange"/"pink") sur la frise
//              elle-même — carte, tag, panneau détail + panneau latéral.
//              → pages/projet.html.
//
//   timeline : couleur de la ligne centrale de la frise chronologique, une par
//              année dans l'ordre (year1 = 2022, year2 = 2023, ...).
//              → pages/projet.html.
window.COLORS = {
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
    accent: { value: "#24408f", usage: "Bleu nuit — boutons, liens, points" },
    accent2: { value: "#6ec6ff", usage: "Bleu ciel — hover, accents de titres" }
  },
  tags: {
    blue: { value: "#3b82f6", usage: "project.color: \"blue\"" },
    orange: { value: "#f97316", usage: "project.color: \"orange\"" },
    pink: { value: "#ec4899", usage: "project.color: \"pink\"" }
  },
  surfaces: {
    mediaAlt: { value: "#0a0a0a", usage: "Fond alternatif des vignettes image (légèrement moins noir que --black)" },
    placeholder: { value: "#111111", usage: "Fond des cartes/miniatures sans image" },
    panel: { value: "#0d0d0d", usage: "Fond du panneau détail (pages/projet.html)" }
  },
  // "blue" et "orange" ont la même valeur que tags.blue/tags.orange : une seule couleur
  // pour "Gobelins"/"IIM" (école) et project.color "blue"/"orange" (projets).
  school: {
    gobelins: { value: "#3b82f6", text: "#a5c9ff", usage: "Gobelins — bordure de carte + badge (pages/projet.html)" },
    iim: { value: "#f97316", text: "#ffc48c", usage: "IIM — bordure de carte + badge (pages/projet.html, pages/jeux.html)" },
    perso: { value: "#74d674", text: "#9ef0a0", usage: "Badge \"Prototype\" (pages/jeux.html) — pas de project.color associé actuellement" }
  },
  // Filtres et badges de type sur pages/jeux.html (boutons "Jeux/Prototype/Blocking"
  // + badge de type sur chaque carte). "jeux" reprend la couleur de accent.accent.
  jeux: {
    jeux: { value: "#24408f", text: "#6ec6ff", usage: "Badge \"Jeux\" / \"Jeu de carte\" — bordure + badge (pages/jeux.html)" },
    prototype: { value: "#74d674", text: "#9ef0a0", usage: "Badge \"Prototype\" — bordure + badge (pages/jeux.html)" },
    blocking: { value: "#f97316", text: "#ffc48c", usage: "Badge \"Blocking\" — bordure + badge (pages/jeux.html)" }
  },
  // Couleur liée à project.color ("blue"/"orange"/"pink") sur la frise elle-même :
  // carte, tag, panneau détail + panneau latéral (pages/projet.html). Mêmes valeurs
  // que "tags" (utilisé à l'accueil), dupliquées ici pour un groupe propre à la page.
  projet: {
    blue: { value: "#3b82f6", text: "#a5c9ff", usage: "project.color: \"blue\" — carte, tag, panneau détail (pages/projet.html)" },
    orange: { value: "#f97316", text: "#ffc48c", usage: "project.color: \"orange\" — carte, tag, panneau détail (pages/projet.html)" },
    pink: { value: "#ec4899", text: "#f9a8d4", usage: "project.color: \"pink\" — carte, tag, panneau détail (pages/projet.html)" }
  },
  timeline: {
    year1: { value: "#24408f", usage: "1ère année de la frise — même couleur que accent.accent" },
    year2: { value: "#6ec6ff", usage: "2e année de la frise — même couleur que accent.accent2" },
    year3: { value: "#3b82f6", usage: "3e année de la frise — même couleur que school.gobelins" },
    year4: { value: "#74d674", usage: "4e année de la frise — même couleur que school.perso" },
    year5: { value: "#f97316", usage: "5e année de la frise — même couleur que school.iim" }
  }
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

  // Groupes "school", "jeux" et "projet" : chaque entrée a un "value" (couleur
  // pleine) ET un "text" (variante pastel), appliqués en variables CSS du même
  // nom que la clé.
  ["school", "jeux", "projet"].forEach((group) => {
    Object.entries(c[group] || {}).forEach(([key, entry]) => {
      root.setProperty(`--${key}`, entry.value);
      root.setProperty(`--${key}-text`, entry.text);
      const rgb = hexToRgb(entry.value);
      if (rgb) root.setProperty(`--${key}-rgb`, rgb);
    });
  });
})();

