const setup = () => {
    let an = document.getElementById("an");
    let button1 = document.getElementById("button1");
    let button2 = document.getElementById("button2");
    let aantal = document.getElementById("aantal");

    const tellen1 = () => {
        let an1 = an.textContent;
        let anlower = an1.toLowerCase();
        let i2 = 0;
        let pos = 0;

        while (anlower.indexOf("an", pos) !== -1) {
            i2++;
            pos = anlower.indexOf("an", pos) + 1;
        }

        aantal.innerHTML = i2;
    }

    const tellen2 = () => {
        let an1 = an.textContent;
        let anlower = an1.toLowerCase();
        let i2 = 0;
        let pos = anlower.length;

        while ((pos = anlower.lastIndexOf("an", pos - 1)) !== -1) {
            i2++;
        }

        aantal.innerHTML = i2;
    }


    button1.addEventListener("click", tellen1)
    button2.addEventListener("click", tellen2)

}

window.addEventListener("load", setup);