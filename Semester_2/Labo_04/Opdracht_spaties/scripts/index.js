const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    let input = document.getElementById("input");
    let button = document.getElementById("button");
let resultaat = document.getElementById("result");



    const spaties = () =>{
        let splitinput = Array.from(input.value);
        let result = " ";
        let i = 0;
        while (i < splitinput.length){
            if (splitinput[i] === " "){
                result += splitinput[i].trim();
            } else {
                result += splitinput[i]+" ";
            }
            i++
        }
        console.log(result);
        resultaat.innerHTML = result;
    }
    button.addEventListener("click", spaties)
}

window.addEventListener("load", setup);