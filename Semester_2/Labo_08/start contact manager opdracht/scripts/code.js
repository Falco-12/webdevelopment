
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    
    personen.forEach((persoon, index) => {
        let option = document.createElement("option");
        option.text = persoon.voornaam +" "+ persoon.familienaam;
        option.id = index;
        lstPersonen.appendChild(option);
    });

    lstPersonen.addEventListener("change", function () {
        geselecteerdeIndex = parseInt(lstPersonen.options[lstPersonen.selectedIndex].id);
        let persoon = personen[geselecteerdeIndex];
        document.getElementById('txtVoornaam').value = persoon.voornaam;
        document.getElementById('txtFamilienaam').value = persoon.familienaam;
        document.getElementById('txtGeboorteDatum').value = persoon.geboorteDatum.toISOString().split("T")[0];
        document.getElementById('txtEmail').value = persoon.email;
        document.getElementById('txtAantalKinderen').value = persoon.aantalKinderen;
        clearAllErrors();
    });
};
let personen = [
    {
        voornaam: 'Jan',
        familienaam: 'Janssens',
        geboorteDatum: new Date('2010-10-10'),
        email: 'jan@example.com',
        aantalKinderen: 0
    },
    {
        voornaam: 'Mieke',
        familienaam: 'Mickelsen',
        geboorteDatum: new Date('1980-01-01'),
        email: 'mieke@example.com',
        aantalKinderen: 1
    },
    {
        voornaam: 'Piet',
        familienaam: 'Pieters',
        geboorteDatum: new Date('1970-12-31'),
        email: 'piet@example.com',
        aantalKinderen: 2
    }
];

let geselecteerdeIndex = -1;

const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    valideer();


    let voornaam = document.getElementById('txtVoornaam').value.trim();
    let familienaam = document.getElementById('txtFamilienaam').value.trim();
    let geboorteDatum = new Date(document.getElementById('txtGeboorteDatum').value);
    let email = document.getElementById('txtEmail').value.trim();
    let aantalKinderen = parseInt(document.getElementById('txtAantalKinderen').value.trim());

    if (geselecteerdeIndex === -1) {
        let nieuwPersoon = {
            voornaam,
            familienaam,
            geboorteDatum,
            email,
            aantalKinderen
        };
        personen.push(nieuwPersoon);
    } else {
        let p = personen[geselecteerdeIndex];
        p.voornaam = voornaam;
        p.familienaam = familienaam;
        p.geboorteDatum = geboorteDatum;
        p.email = email;
        p.aantalKinderen = aantalKinderen;
    }

    let lst = document.getElementById("lstPersonen");
    lst.innerHTML = "";
    personen.forEach((persoon, index) => {
        let option = document.createElement("option");
        option.text = `${persoon.voornaam} ${persoon.familienaam}`;
        option.id = index;
        lst.appendChild(option);
    });
};

const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    document.getElementById('txtVoornaam').value = "";
    document.getElementById('txtFamilienaam').value = "";
    document.getElementById('txtGeboorteDatum').value = "";
    document.getElementById('txtEmail').value = "";
    document.getElementById('txtAantalKinderen').value = "";
    clearAllErrors();
    geselecteerdeIndex = -1;
};


window.addEventListener("load", setup);