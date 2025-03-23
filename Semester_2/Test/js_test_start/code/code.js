const setup = () => {
    let ei = document.getElementById("Dropdown");
let tekst = document.getElementById("letter");
    ei.addEventListener("change",changeei )
    tekst.addEventListener("input",tekstzoeker)

}
const changeei = () =>{
    let statusei = document.getElementById("Dropdown");
    let image = document.getElementById("img");
    let note = document.getElementById("note");
    if(statusei.value === "Met een ei"){
        image.className ="img.with-egg"
        note.innerHTML = "Een kip " + statusei.value.toLowerCase();
    } else if(statusei.value === "Zonder een ei"){
        image.className = "img"
        note.innerHTML = "Een kip " + statusei.value.toLowerCase();

    }
}

const tekstzoeker=()=>{
    let tekst = document.getElementById("letter");
    let note = document.getElementById("note");
    let note1 = note.textContent
        let tekst1 = tekst.textContent;
        let tekstlower = tekst1.toLowerCase();
        let i2 = 0;
        let pos = 0;

        while (note1.indexOf(tekstlower, pos) !== -1) {
            i2++;
            pos = note1.indexOf(tekstlower, pos) + 1;
        }

        note.innerHTML += "Letter "+tekst1+" komt "+i2+" keer voor in bovenstaande zin.";

}
window.addEventListener("load", setup);