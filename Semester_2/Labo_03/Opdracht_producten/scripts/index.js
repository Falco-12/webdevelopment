const setup = () => {
    let prijs1 = document.getElementById('prijs1');
    let prijs2 = document.getElementById('prijs2');
    let prijs3 = document.getElementById('prijs3');

    let bereken = document.getElementById('bereken');

    let aantal1 = document.getElementById('aantal1');
    let aantal2 = document.getElementById('aantal2');
    let aantal3 = document.getElementById('aantal3');

    let BTW1 = document.getElementById('BTW1');
    let BTW2 = document.getElementById('BTW2');
    let BTW3 = document.getElementById('BTW3');

    let sub1 = document.getElementById('sub1');
    let sub2 = document.getElementById('sub2');
    let sub3 = document.getElementById('sub3');
    let totaal = document.getElementById('total');



    const totalen = () => {

        let BTW1tekst = BTW1.textContent;
        let btwNaarGetal1 = parseFloat(BTW1tekst);


        let prijsTekst1 = prijs1.textContent;
        let prijsNaarGetal1 = parseFloat(prijsTekst1);

        let aantal1= document.getElementById('aantal1');
        let a1 = aantal1.value;
        let ag1 = parseFloat(a1)



        let tussen1 = (prijsNaarGetal1 * btwNaarGetal1) / 100 + prijsNaarGetal1 * ag1;

        sub1.innerHTML = tussen1.toFixed(2) + " EUR";
        console.log(sub1);

        let BTW2tekst = BTW2.textContent;
        let btwNaarGetal2 = parseFloat(BTW2tekst);


        let prijsTekst2 = prijs2.textContent;
        let prijsNaarGetal2 = parseFloat(prijsTekst2);

        let aantal2= document.getElementById('aantal2');
        let a2 = aantal2.value;
        let ag2 = parseFloat(a2)

        let tussen2 = (prijsNaarGetal2 * btwNaarGetal2) / 100 + prijsNaarGetal2 * ag2;

        sub2.innerHTML = tussen2.toFixed(2) + " EUR";

        let BTW3tekst = BTW3.textContent;
        let btwNaarGetal3 = parseFloat(BTW3tekst);


        let prijsTekst3 = prijs3.textContent;
        let prijsNaarGetal3 = parseFloat(prijsTekst3);

        let aantal3= document.getElementById('aantal3');
        let a3 = aantal3.value;
        let ag3 = parseFloat(a3)

        let tussen3 = (prijsNaarGetal3 * btwNaarGetal3) / 100 + prijsNaarGetal3 * ag3;

        sub3.innerHTML = tussen3.toFixed(2) + "EUR";

        total.innerHTML = (tussen1+tussen2+tussen3).toFixed(2) + "EUR";


    }

    bereken.addEventListener("click",totalen);
}
window.addEventListener("load", setup);