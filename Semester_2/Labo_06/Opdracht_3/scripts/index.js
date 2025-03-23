const setup = () => {
	let btn = document.getElementById('btn');
    btn.addEventListener('click', createP)
}

const createP=()=>{
    let DIV = document.getElementById("myDIV")
    let p = document.createElement('p');
    let text = document.createTextNode("text in a DIV")
    p.appendChild(text);
    DIV.appendChild(p);
}

window.addEventListener("load", setup);