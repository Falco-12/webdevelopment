const setup = () => {
    const familieLeden = ['Moeder', 'vader', 'zus', 'lief van zus', 'vissen']
    console.log(familieLeden.length)
    console.log(familieLeden[0])
    console.log(familieLeden[2])
    console.log(familieLeden[4])

    const voegNaamToe = () => {
        let nieuweNaam = window.prompt("Voeg extra naam toe", "onbekend");
        familieLeden.push(nieuweNaam);
    }
    voegNaamToe()
    console.log(familieLeden)
    console.log(familieLeden.toString())
}



window.addEventListener("load", setup);