const setup = () => {
    loadCardsFromStorage()
    let btn = document.getElementById('btnGO');
    btn.addEventListener('click', doTheButtonThing);
}

function doTheButtonThing() {
    let fulltext = document.getElementById('TxtInput');
    let input = fulltext.value;
    let prefix = input.substring(0, 2).toLowerCase();
    let naam = input.substring(3);
    let text = naam.replaceAll(" ", "+");

    const { linkstart, klasse, provider, stop } = getLinkData(prefix);

    if (stop) {
        alert("ONBEKENDE PREFIX");
        return;
    }

    let link = linkstart + text;
    window.open(link);

    const cardData = { provider, naam, link, klasse, id: Date.now() }; // unique ID
    saveCardToStorage(cardData);
    createCard(cardData);

    fulltext.value = "";
}

function getLinkData(prefix) {
    switch (prefix) {
        case "/y":
            return { linkstart: "https://www.youtube.com/results?search_query=", klasse: "yt", provider: "Youtube", stop: false };
        case "/g":
            return { linkstart: "https://www.google.com/search?q=", klasse: "ggl", provider: "Google", stop: false };
        case "/x":
            return { linkstart: "https://x.com/hashtag/", klasse: "X", provider: "X", stop: false };
        case "/i":
            return { linkstart: "https://www.instagram.com/explore/search/keyword/?q=%23", klasse: "insta", provider: "Instagram", stop: false };
        default:
            return { stop: true };
    }
}

function createCard({ provider, naam, link, klasse, id }) {
    let h1 = document.createElement("h1");
    h1.innerText = provider;

    let p = document.createElement("p");
    p.innerText = naam;

    let card = document.createElement("div");
    card.classList.add("card", klasse, "col-3");
    card.setAttribute("data-id", id);
    card.append(h1, p);

    let goButton = createButton("Go!", () => window.open(link));
    let deleteButton = createButton("Delete", () => deleteCard(id, card));

    card.appendChild(goButton);
    card.appendChild(deleteButton);

    let row = document.getElementsByClassName("row");
    row[1].appendChild(card);
}

function createButton(label, onClick) {
    let buttonP = document.createElement("p");
    buttonP.innerText = label;

    let button = document.createElement("button");
    button.classList.add("button");
    button.append(buttonP);
    button.addEventListener("click", onClick);

    return button;
}


function saveCardToStorage(cardData) {
    let cards = JSON.parse(localStorage.getItem("cards")) || [];
    cards.push(cardData);
    localStorage.setItem("cards", JSON.stringify(cards));
}

function loadCardsFromStorage() {
    let cards = JSON.parse(localStorage.getItem("cards")) || [];
    cards.forEach(createCard);
}

function deleteCard(id, cardElement) {
    cardElement.remove();

    let cards = JSON.parse(localStorage.getItem("cards")) || [];
    let updatedCards = cards.filter(card => card.id !== id);
    localStorage.setItem("cards", JSON.stringify(updatedCards));
}
window.addEventListener("load", setup);