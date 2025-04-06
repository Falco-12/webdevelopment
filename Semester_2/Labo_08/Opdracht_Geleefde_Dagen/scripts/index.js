const setup = () => {
	let vandaag= new Date();
    let geboorte = new Date(2006,2,25);
    let milliseconds = vandaag-geboorte;
    let days =Math.floor(milliseconds / (1000*60*60*24));
    console.log(days);
    setInterval(setred, 500);
}
const setred = () => {
    let e = document.getElementById("kleur");
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    e.style.color = "rgb(" + r + "," + g + "," + b + ")";
let body = document.querySelector('body');
    let r2 = Math.floor(Math.random() * 256);
    let g2 = Math.floor(Math.random() * 256);
    let b2 = Math.floor(Math.random() * 256);
    body.style.backgroundColor="rgb(" + r2 + "," + g2 + "," + b2 + ")";
}


window.addEventListener("load", setup);