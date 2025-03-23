const setup = () => {
	let change = document.querySelectorAll("p");
    change[0].innerHTML = "Good job!"
}

window.addEventListener("load", setup);