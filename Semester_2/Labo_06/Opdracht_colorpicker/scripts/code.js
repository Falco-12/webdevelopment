const initialize = () => {
	let sliders = document.getElementsByClassName("slider");
	let btn=document.getElementById("btnSave")
	for (let i = 0; i < sliders.length; i++) {

		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}

	btn.addEventListener("click", saveSwatch);

	update();
};

const update = () => {
	let red=document.getElementById("sldRed").value;
	let green=document.getElementById("sldGreen").value;
	let blue=document.getElementById("sldBlue").value;
	document.getElementById("lblRed").innerHTML=red;
	document.getElementById("lblGreen").innerHTML=green;
	document.getElementById("lblBlue").innerHTML=blue;
	let swatch=document.getElementById("swatch");
	swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
};
const saveSwatch = () => {
	let red = document.getElementById("sldRed").value;
	let green = document.getElementById("sldGreen").value;
	let blue = document.getElementById("sldBlue").value;
	let color = "rgb("+red+","+green+","+blue+")";

	let swatchContainer = document.getElementById("savedSwatches");

	let swatch = document.createElement("div");
	swatch.classList.add("savedSwatch");
	swatch.style.backgroundColor = color;
	swatch.addEventListener("click", () => applySwatch(color));

	let deleteBtn = document.createElement("button");
	deleteBtn.innerHTML = "X";
	deleteBtn.classList.add("deleteSwatch");
	deleteBtn.addEventListener("click", (e) => {
		e.stopPropagation();
		swatchContainer.removeChild(swatch);
	});

	swatch.appendChild(deleteBtn);
	swatchContainer.appendChild(swatch);
};

const applySwatch = (color) => {
	document.getElementById("swatch").style.backgroundColor = color;
};

window.addEventListener("load", initialize);