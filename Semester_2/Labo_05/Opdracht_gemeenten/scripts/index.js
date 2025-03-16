const setup = () => {

    prompt();
}
const  prompt = () => {

    let gemeenten = window.prompt("Some enkele gemeenten op", " ").split(",");
    let dropdown = document.getElementById("arrayDropdown");
    gemeenten.sort(compare)

    for (let i = 0; i < gemeenten.length; i++) {
        let op = gemeenten[i].trim();
        console.log(op);


        let optionElement = document.createElement("option");
        optionElement.value = op;
        optionElement.id = i;
        optionElement.textContent = op;


        dropdown.appendChild(optionElement);
    }


}
const compare = (a, b) => {
    return a.localeCompare(b);
}
window.addEventListener("load", setup);