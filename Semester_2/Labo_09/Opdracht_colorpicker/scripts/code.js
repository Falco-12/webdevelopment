let global = {
	colors: []
};

const initialize = () => {
	let sliders = document.getElementsByClassName("slider");
	let btn = document.getElementById("btnSave");

	
	let savedRed = localStorage.getItem("sldRed");
	let savedGreen = localStorage.getItem("sldGreen");
	let savedBlue = localStorage.getItem("sldBlue");

	if (savedRed !== null) document.getElementById("sldRed").value = savedRed;
	if (savedGreen !== null) document.getElementById("sldGreen").value = savedGreen;
	if (savedBlue !== null) document.getElementById("sldBlue").value = savedBlue;


	let savedColors = localStorage.getItem("colors");
	if (savedColors) {
		global.colors = JSON.parse(savedColors);
		global.colors.forEach(color => {
			createSavedSwatch(color);
		});
	}

	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}

	btn.addEventListener("click", saveSwatch);

	update();
};

const update = () => {
	let red = document.getElementById("sldRed").value;
	let green = document.getElementById("sldGreen").value;
	let blue = document.getElementById("sldBlue").value;

	document.getElementById("lblRed").innerHTML = red;
	document.getElementById("lblGreen").innerHTML = green;
	document.getElementById("lblBlue").innerHTML = blue;

	let swatch = document.getElementById("swatch");
	swatch.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";


	localStorage.setItem("sldRed", red);
	localStorage.setItem("sldGreen", green);
	localStorage.setItem("sldBlue", blue);
};

const saveSwatch = () => {
	let red = document.getElementById("sldRed").value;
	let green = document.getElementById("sldGreen").value;
	let blue = document.getElementById("sldBlue").value;
	let color = "rgb(" + red + "," + green + "," + blue + ")";

	global.colors.push(color);
	localStorage.setItem("colors", JSON.stringify(global.colors));

	createSavedSwatch(color);
};

const createSavedSwatch = (color) => {
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


		global.colors = global.colors.filter(c => c !== color);
		localStorage.setItem("colors", JSON.stringify(global.colors));
	});

	swatch.appendChild(deleteBtn);
	swatchContainer.appendChild(swatch);
};

const applySwatch = (color) => {
	document.getElementById("swatch").style.backgroundColor = color;


	let rgb = color.match(/\d+/g);
	document.getElementById("sldRed").value = rgb[0];
	document.getElementById("sldGreen").value = rgb[1];
	document.getElementById("sldBlue").value = rgb[2];
	update();
};

window.addEventListener("load", initialize);