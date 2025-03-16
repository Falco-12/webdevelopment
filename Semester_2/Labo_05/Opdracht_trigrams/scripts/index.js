const setup = () => {
	makeTrigram("onoorbaar");
}
const makeTrigram = (woord) =>{
    let output = "";
    for(let i = 0; i < woord.length-2; i++){
            output += woord.substring(i, i + 3) + "\n";

    }
    console.log(output);
}

window.addEventListener("load", setup);