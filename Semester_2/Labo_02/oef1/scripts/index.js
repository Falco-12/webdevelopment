const setup = () => {
	const  alert = () => {
        window.alert("Dit is een mededeling");
    }
    const  confirm = () => {
        window.confirm("Weet u het zeker?");
    }
    const  prompt = () => {
        window.prompt("Wat is uw naam", "onbekend");
    }
    alert();
    console.log(confirm());
    console.log(prompt());
}

window.addEventListener("load", setup);