const setup = () => {
	let btnResultaat = document.getElementById("resultaat");
    btnResultaat.addEventListener("click", printCheck)
}
const printCheck = () => {
    checkerRoker()
    moedertaalcheck()
    buurlandCheck()
    bestellingCheck()
}

const checkerRoker=() =>{
    let checker = document.getElementById('roker').checked
    if(checker === true){
        console.log("Is een roker")
    } else {
        console.log("Is geen roker")
    }
}

const moedertaalcheck=()=> {
    let moedertaalRadios = document.getElementsByClassName('moedertaal');
    for (let radio of moedertaalRadios) {
        if (radio.checked) {
            console.log("Moedertaal is", radio.value);
        }
    }
}

const buurlandCheck = () => {
    let geselecteerdBuurland = document.getElementById("favoriete_buurland").value;
    console.log("Favoriete buurland is", geselecteerdBuurland);
}

const bestellingCheck = () => {
    let geselecteerdeBestellingen = [];
    let bestellingSelect = document.getElementById("bestelling");

    for (let option of bestellingSelect.options) {
        if (option.selected) {
            geselecteerdeBestellingen.push(option.value);
        }
    }

    console.log("Bestelling bestaat uit", geselecteerdeBestellingen.join(", "));
}
window.addEventListener("load", setup);