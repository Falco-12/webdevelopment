const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	valideerVoornaam();
	valideerAchternaam();
	valideerKinderen();
	valideerGeboorte();
	valideerEmail();

	if (isValidForm()) {
		window.alert("Proficiat");
	}
};

const isValidForm = () => {

	const invalidElements = document.getElementsByClassName('invalid');


	if (invalidElements.length > 0) {
		return false;
	} else {
		return true;
	}
}
const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam");
	let errVoornaam = document.getElementById("errVoornaam");
	let voornaam = txtVoornaam.value.trim();
	if (voornaam.length > 30) {
		txtVoornaam.className="invalid"; // invalid class instellen
		errVoornaam.innerHTML = "max. 30 karakters";
	} else {
		txtVoornaam.className=""; // alle classes verwijderen
		errVoornaam.innerHTML = "";
	}
};

const valideerAchternaam = () => {
	let txtAchternaam = document.getElementById("txtAchternaam");
	let errAchternaam = document.getElementById("errAchternaam");
	let achternaam = txtAchternaam.value.trim();
	if (achternaam !== "") {
		if (achternaam.length > 50) {
			txtAchternaam.className = "invalid"; // invalid class instellen
			errAchternaam.innerHTML = "max. 50 karakters";
		} else {
			txtAchternaam.className = ""; // alle classes verwijderen
			errAchternaam.innerHTML = "";
		}
	} else {
		txtAchternaam.className = "invalid"; // invalid class instellen
		errAchternaam.innerHTML = "verplicht veld";
	}
};

const valideerGeboorte = () => {
	let geboortedatumInput = document.getElementById("geboortedatum");
	let errGeboorteDatum = document.getElementById("errGeboorteDatum");
	let geboortedatum = geboortedatumInput.value.trim();

	if (geboortedatum === "") {
		geboortedatumInput.className = "invalid";
		errGeboorteDatum.innerHTML = "Verplicht veld";

	} else {

		let geboortedatumRegex = /^\d{4}-\d{2}-\d{2}$/;


		if (!geboortedatumRegex.test(geboortedatum)) {
			geboortedatumInput.className = "invalid";
			errGeboorteDatum.innerHTML = "formaat is niet jjjj-mm-dd";
		} else {
			let parts = geboortedatum.split("-");
			let year = parts[0];
			let month = parts[1];
			let day = parts[2];


			if (year.length === 4 && month.length === 2 && day.length === 2) {

				geboortedatumInput.className = "";
				errGeboorteDatum.innerHTML = "";
			} else {
				geboortedatumInput.className = "invalid";
				errGeboorteDatum.innerHTML = "formaat is niet jjjj-mm-dd";
			}
		}
	}
};

const valideerEmail = () => {
	let email = document.getElementById('email');
	let errorMessage = document.getElementById('errEmail');
	let mail = email.value.trim();


	let atCount = mail.split("@").length - 1;


	if (mail !== "") {

		if (atCount === 1 && mail.indexOf('@') > 0 && mail.indexOf('@') < mail.length - 1) {
			email.className = "";
			errorMessage.innerHTML = "";
		} else {
			email.className = "invalid";
			errorMessage.innerHTML = "Geen geldig email adres";
		}
	} else {
		email.className = "invalid";
		errorMessage.innerHTML = "Verplicht veld";
	}
};


const valideerKinderen=()=>{
	let aantalkinderen = document.getElementById("Aantalkinderen");
	let errKinderen = document.getElementById("errKinderen");
	let kinderen = parseInt(aantalkinderen.value);
	if (kinderen >= 0 && kinderen < 99) {
		aantalkinderen.className = "";
		errKinderen.innerHTML = "";
	} else if (kinderen >= 99) {
		aantalkinderen.className = "invalid";
		errKinderen.innerHTML = "Is te vruchtbaar";
	} else {
		aantalkinderen.className = "invalid";
		errKinderen.innerHTML = "Is geen positief getal";
	}
}


window.addEventListener("load", setup);