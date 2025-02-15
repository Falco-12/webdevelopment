const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    let pElement=document.getElementById("txtOutput");

    const kopieer = () => {
        let txtInput = document.getElementById("txtInput");
        let tekst = txtInput.value;
        pElement.innerHTML= tekst;
    }
    btnKopieer.addEventListener("click", kopieer)
}

window.addEventListener("load", setup);