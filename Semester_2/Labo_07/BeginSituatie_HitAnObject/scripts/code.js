const setup = () => {
let btn = document.getElementById('start');
let img = document.getElementById('img');
btn.addEventListener("click", start)
img.addEventListener("click", spel)
};

let global = {
    IMAGE_COUNT: 4, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

const start =()=>{
    let btn = document.getElementById('start');
    setInterval(veranderimg, 1000);

    btn.style.display = 'none';
}



const spel=()=> {

    let img = document.getElementById('img');
    let speelveld = document.getElementById('playField');
    let score = document.getElementById('score');

    let maxLeft = speelveld.clientWidth - img.offsetWidth;
    let maxHeight = speelveld.clientHeight - img.offsetHeight;


    let left = Math.floor(Math.random() * maxLeft);
    let top = Math.floor(Math.random() * maxHeight);
    img.style.marginLeft = left + "px";
    img.style.marginTop = top + "px";
    let img2 = img.src.slice(-5)
    if (img2.includes("0")) {
        window.alert("jammer je bent verloren.")
        global.score = 0
        start();
    } else {
        global.score++;
        score.innerText = "score: " + global.score;
    }

}






const veranderimg = () =>{
    let img = document.getElementById('img');
    let nieuwimg = Math.round(Math.random()*(global.IMAGE_COUNT));
    img.src=global.IMAGE_PATH_PREFIX+ nieuwimg + global.IMAGE_PATH_SUFFIX
}





window.addEventListener("load", setup);


