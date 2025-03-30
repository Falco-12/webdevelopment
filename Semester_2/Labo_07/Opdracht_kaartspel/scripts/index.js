



const setup = () => {
    for (let i = 0, len = global.AANTAL_KAARTEN; i < len; i++) {
        global.array_kaart.push("images/kaart" + (1+i) +".png");
        global.array_kaart.push("images/kaart" + (1+i) +".png");
    }
    voegKaartToe()
    voegEventsToe()

    global.array_kaart.sort(() => Math.random() - 0.5);
}
let global = {
    AANTAL_HORIZONTAAL:4,
    AANTAL_VERTICAAL:3,
    AANTAL_KAARTEN:6,
    array_kaart:[]

}
const voegKaartToe =() =>{
    for(let i = 0, len = global.AANTAL_KAARTEN*2; i < len; i++) {
        let div = document.createElement("div");
        div.classList.add("kaart");
        div.innerHTML = "<img src='images/achterkant.png' alt=kaart "+i+ "/>"
        let playField = document.getElementById("playField");
        playField.appendChild(div);
    }
}
const voegEventsToe = () => {
    let img = document.getElementsByClassName('kaart');
    for (let i = 0, len = img.length; i < len; i++) {
        img[i].addEventListener('click', draaiOm);
    }
}
const VerwijderEvents = () => {
    let img = document.getElementsByClassName('kaart');
    for (let i = 0, len = img.length; i < len; i++) {
        img[i].removeEventListener('click', draaiOm);
    }
}
const draaiOm = () => {

    if (!event.target.classList.contains('hidden') || event.target.getAttribute("src") !== "images/achterkant.png") {
        VerwijderEvents();
        let child = event.target;
        let position = child.getAttribute("alt")
        child.src = global.array_kaart[parseInt(position)];
        let geluid = new Audio("sound/kaartdraai.mp3");
        geluid.play();
        event.stopPropagation()
        controleerDubbels()
        voegEventsToe()
    }
}
const controleerDubbels = () => {
    let img = document.getElementsByTagName('img');
    let img1 = null;
    let img2 = null;
    for (let i = 0, len = img.length; i < len; i++) {
        if ((img[i].getAttribute("src") !== "images/achterkant.png") && !img[i].classList.contains('hidden')) {
            if (img1 === null) {
                img1 = img[i];
            } else {
                img2 = img[i];
            }
        }
    }
    if (img1 === null || img2 === null) {
    } else if (img1.getAttribute("src") === img2.getAttribute("src")) {

        img1.classList.add('gevonden');
        img2.classList.add('gevonden');
        let geluid = new Audio("sound/yay.mp3");
        geluid.play();
        setTimeout(function () {

            img1.classList.add('hidden');
            img2.classList.add('hidden');
        }, 500);
    } else {
        img1.classList.add('fout');
        img2.classList.add('fout');
        setTimeout(function () {

            img1.classList.remove('fout');
            img2.classList.remove('fout');
            img1.src = "images/achterkant.png";
            img2.src = "images/achterkant.png";
        }, 800);
    }

}
window.addEventListener("load", setup);