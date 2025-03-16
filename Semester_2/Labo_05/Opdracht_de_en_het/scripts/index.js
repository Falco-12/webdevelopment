const setup = () => {
	replacing("Gisteren zat de jongen op de stoep en at de helft van de appel")
}
const replacing = (zin) =>{
    let nieuwezin="";
   let eersteletter = 0;
   let laatsteletter = zin.indexOf(" ");

    if (laatsteletter !== -1) {
        let eersteWoord = zin.substring(eersteletter, laatsteletter);
        if (eersteWoord === "De") {
            nieuwezin += "Het ";
        } else if (eersteWoord === "Het") {
            nieuwezin += "De ";
        } else {
            nieuwezin += eersteWoord + " ";
        }
        eersteletter = laatsteletter + 1;
        laatsteletter = zin.indexOf(" ", eersteletter);
    }

   while (laatsteletter !== -1) {
       if(zin.substring(eersteletter, laatsteletter) === "de") {
           nieuwezin += "het ";
       } else if(zin.substring(eersteletter, laatsteletter) === "het") {
           nieuwezin += "de ";
       } else {
           nieuwezin += zin.substring(eersteletter, laatsteletter)+" ";
       }
       eersteletter= 1+laatsteletter;
       laatsteletter = zin.indexOf(" ",eersteletter);
   }

    let laatstewoord = zin.substring(eersteletter); // Take everything after the last space
    if (laatstewoord === "de") {
        nieuwezin += "het";
    } else if (laatstewoord === "het") {
        nieuwezin += "de";
    } else {
        nieuwezin += laatstewoord;
    }


    console.log(nieuwezin);
}
window.addEventListener("load", setup);