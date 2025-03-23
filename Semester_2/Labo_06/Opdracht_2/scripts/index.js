const setup = () => {
	let li = document.querySelectorAll('li');
let zdz = document.getElementById("hometown")
    let img = document.createElement('img');

    li.forEach(li => {
        li.className = "listitem";
    })
    img.src = "images/foto1.jpg";
    img.alt = "foto van mezelf";
    document.body.appendChild(img);
zdz.addEventListener("click", E);
}

const E = () =>{
    let li = document.querySelectorAll('li');
    li.forEach(li => {
        li.className = "";
    })
}


window.addEventListener("load", setup);