// Für diese Übung brauchen wir ein Formular. Schaue dir die Vorschau an und erstelle ein Formular.
// Im Formular sollen zwei Zeichenketten eingegeben werden können.
// Die erste Zeichenkette soll an der Stelle in zwei Teile getrennt werden, wo die zweite Zeichenkette innerhalb der ersten gefunden wird. Die zweite Zeichenkette kann mehrere Zeichen enthalten.
// Über Radio-Buttons kann spezifiziert werden, ob die Trennung vor oder nach der Trennungs-Zeichenkette geschehen soll.
// Klingt kompliziert? Schau es dir in der Vorschau an!

const nancy = () => {
    let text1 = document.querySelector("#chain").value
    let text2 = document.querySelector("#letter").value
    let check1 = document.querySelector("#before").checked
    let check2 = document.querySelector("#behind").checked
    let out1 = document.querySelector("#outi1")
    let out2 = document.querySelector("#outi2")

    let atIndex = text1.indexOf(text2)

    let chain1 = text1.slice(0, atIndex)
    let chain2 = text1.slice(atIndex)
    let chain3 = text1.slice(0, atIndex +1)
    let chain4 = text1.slice(atIndex +1)

    switch(true) {
        case check1:
            out1.innerHTML = chain1
            out2.innerHTML = chain2
            break;
        case check2:
            out1.innerHTML = chain3
            out2.innerHTML = chain4
            break;
        default: out1.innerHTML = "test";
    }
}

nancy()