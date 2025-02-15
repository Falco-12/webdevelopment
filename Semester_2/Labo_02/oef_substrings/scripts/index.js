const setup = () => {
    let btnSub = document.getElementById("btnSub");
    const createSubString = () => {
        let txtInput=document.getElementById("txtInput");
        let txtOutput=document.getElementById("txtOutput");
        let txtLinks=document.getElementById("txtLinks");
        let txtRechts=document.getElementById("txtRechts");

        let g1=parseInt(txtLinks.value, 10);
        let g2=parseInt(txtRechts.value, 10);
        let resultaatTekst = txtInput.value.substring(g1, g2);


        txtOutput.innerHTML=resultaatTekst;
    }

    btnSub.addEventListener("click", createSubString)
}

window.addEventListener("load", setup);