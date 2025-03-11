function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.left = (sidebar.style.left === "0px") ? "-250px" : "0px";
}

function closeMenu() {
    document.getElementById('sidebar').style.left = "-250px";
}

const suits = ['noir', 'blanc'];
    const values = {
        'Pion': "Pour etre joué dois etre avec un autre pion. Vous fait prendre une carte aleatoir d'un adversaire choisie.",
        'Tour': "Melange la pioche.",
        'Cavalier': "Prendre les deux premiere cartes de la pioche et en replacer une aleatoirement dans la pioche.",
        'Fou': "Prend les deux premiere carte de la pioche.",
        'Dame': "Fait joué 3 tour d'affilée a l'adversaire suivant.",
        'Roi': "Regarde les 3 premiere carte de la pioche.",
        "Oh non je ne l'avais pas vu": "Permet de ne pas appliquer l'effet de toute les cartes sauf la revolte ou le roque.",
        'Espion': "Force un adversaire choisi a vous donné une carte de son chois. Pour etre joué dois etre avec un pion.",
        'Berge': "Fait jouer 2 tours d'affilée à l'adversaire suivant.",
        'Sacrifice': "Déplacer une carte aléatoire de la pioche.",
        'Roque': "Protège contre une carte révolution.",
        "Regle":"",
        'Revolution': "Vous fait quitté la partie ou vous fait perdre une carte roque",
    };

    let deck = [];
    let drawnCards = { noir: [], blanc: []};

    function createDeck() {
        deck = [];
        for (let suit of suits) {
            for (let value in values) {
                deck.push({
                    value: value,
                    suit: suit,
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
        while (deck.length > 0) {
            drawCard();
        }
    }

    function drawCard() {
        if (deck.length > 0) {
            let card = deck.pop();
            drawnCards[card.suit].push(card);
            renderCards(card.suit, card);
        } else {
            alert("Le paquet est vide ! Réinitialisez-le.");
        }
    }

    function renderCards(suit, newCard) {
        const container = document.getElementById(suit);
        const renderCards = drawnCards[suit].sort((a, b) => {
            const keys = Object.keys(values);
            return keys.indexOf(a.value) - keys.indexOf(b.value);
        });
        
        container.innerHTML = "";
        
        renderCards.forEach(card => {
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("card");
            
            let img = document.createElement("img");
            img.src = card.img;
            img.alt = `${card.value} de ${card.suit}`;
            cardDiv.appendChild(img);
            cardDiv.onclick = () => openPopup(card);
            
            container.appendChild(cardDiv);
        });
    }
    function openPopup(card) {
        // Met à jour le contenu de la pop-up
        document.getElementById("popup-title").textContent = card.value;
        document.getElementById("popup-image").src = card.img;
        document.getElementById("popup-description").textContent = card.description;

        // Affiche la pop-up et l'overlay
        document.getElementById("popup").style.display = "block";
        document.getElementById("popup-overlay").style.display = "block";
    }

    function closePopup() {
        document.getElementById("popup").style.display = "none";
        document.getElementById("popup-overlay").style.display = "none";
    }

    function resetDeck() {
        createDeck();
        drawnCards = { noir: [], blanc: [] };
        suits.forEach(suit => {
            document.getElementById(suit).innerHTML = ""; // Laisse l'élément vide
        });
    }
    
    createDeck();

    function infinitydot() {
        windowObjectReference = window.open("pages/infinitydot.html");
    }

    function musicdot() {
        windowObjectReference = window.open("pages/dotmusic.html");
    }

    function pandasuit() {
        windowObjectReference = window.open("https://viewer.pandasuite.com/tUPSxsOH");
    }