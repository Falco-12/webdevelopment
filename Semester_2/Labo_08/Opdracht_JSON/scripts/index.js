const setup = () => {
    let student = {
        voornaam: "Jan",
        familienaam: "Janssens",
        geboorteDatum: new Date("1993-12-31")
    }
    let json = JSON.stringify(student);
    console.log(json);
    let student2 = JSON.parse(json);
    console.log("voornaam van student2 is " + student2.voornaam);
}
window.addEventListener("load", setup);