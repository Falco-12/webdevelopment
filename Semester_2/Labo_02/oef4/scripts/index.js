const setup = () => {
    let pElement=document.getElementById("txtOutput");

    let btnTextChange=document.getElementById("changer");

const textChange = () =>{
    pElement.innerHTML="Welkom!";
}

    btnTextChange.addEventListener("click", textChange);
}

window.addEventListener("load", setup);