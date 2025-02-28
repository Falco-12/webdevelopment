const setup = () => {
	let praragrafen = document.getElementsByClassName('belangrijk');
    for (let i = 0; i < praragrafen.length; i++) {
        praragrafen[i].classList.add('opvallend')
    }

}

window.addEventListener("load", setup);