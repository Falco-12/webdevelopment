const setup = () => {
    let colorDemos=document.getElementsByClassName("colorDemo");
	let Red = document.getElementsByClassName("Red");
    let Green = document.getElementsByClassName("Green");
    let Blue = document.getElementsByClassName("Blue");


    let redvalue = Red[0].value;
    let bluevalue= Blue[0].value;
    let greenvalue = Green[0].value;


    colorDemos[0].style.backgroundColor="rgb("+redvalue+","+greenvalue +","+bluevalue+")";

    const setred = () => {
        let rvalue = document.getElementById("red");
        let bvalue = document.getElementById("blue");
        let grvalue = document.getElementById("green");

        let Red = document.getElementsByClassName("Red");
        redvalue=Red[0].value;
        console.log("de waarde van de slider is momenteel : "+redvalue);


        let Blue = document.getElementsByClassName("Blue");
        bluevalue=Blue[0].value;
        console.log("de waarde van de slider is momenteel : "+bluevalue);


        let Green = document.getElementsByClassName("Green");
        greenvalue=Green[0].value;
        console.log("de waarde van de slider is momenteel : "+greenvalue);

        colorDemos[0].style.backgroundColor="rgb("+redvalue+","+greenvalue +","+bluevalue+")";

        rvalue.innerHTML= redvalue;
        grvalue.innerHTML= greenvalue;
        bvalue.innerHTML= bluevalue;
    }

    Red[0].addEventListener("change", setred);
    Blue[0].addEventListener("change", setred);
    Green[0].addEventListener("change", setred);






}

window.addEventListener("load", setup);