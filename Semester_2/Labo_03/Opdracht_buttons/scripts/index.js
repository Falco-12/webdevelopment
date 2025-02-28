const setup = () => {
    let button1= document.getElementById("button1");
    let button2 = document.getElementById("button2");
    let button3 = document.getElementById("button3");
    const changecolor1 = () =>{
        let color = document.getElementsByClassName("button1");

        if (color[0].style.backgroundColor === "blue") {
            color[0].style.backgroundColor = "white";
        } else {
            color[0].style.backgroundColor = "blue";
        }
    }

    const changecolor2 = () =>{
        let color2 = document.getElementsByClassName("button2");

        if (color2[0].style.backgroundColor === "blue") {
            color2[0].style.backgroundColor = "white";
        } else {
            color2[0].style.backgroundColor = "blue";
        }
    }

    const changecolor3 = () =>{
        let color3 = document.getElementsByClassName("button3");

        if (color3[0].style.backgroundColor === "blue") {
            color3[0].style.backgroundColor = "white";
        } else {
            color3[0].style.backgroundColor = "blue";
        }
    }

    button1.addEventListener("click",changecolor1);
    button2.addEventListener("click",changecolor2);
    button3.addEventListener("click",changecolor3);
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
}

window.addEventListener("load", setup);