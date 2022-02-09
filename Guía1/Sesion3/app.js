const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");
const inputDay = document.getElementById("day");
const button = document.getElementById("button");
const respuesta = document.getElementById("respuesta");

button.addEventListener("click", Fecha);


function Fecha(e) {
    if (inputMonth.value == 1) {
        if (inputDay.value <= 20) {
            respuesta.innerHTML="Capricornio";
            alert ("Genial eres Capricornio");
        } else {
            alert ("Genial eres Acuario");
        }
    };
    if (inputMonth.value == 2) {
        if (inputDay.value <= 18) {
            alert ("Genial eres Acuario");
        } else {
            alert ("Genial eres piscis");
        }
    };
    if (inputMonth.value == 3) {
        if (inputDay.value <= 20) {
            alert ("Genial eres Piscis");
        } else {
            alert ("Genial eres Aries");
        }
    };
    if (inputMonth.value == 4) {
        if (inputDay.value <= 20) {
            alert ("Genial eres Piscis");
        } else {
            alert ("Genial eres Tauro");
        }
    };
    if (inputMonth.value == 5) {
        if (inputDay.value <= 21) {
            alert ("Genial eres Tauro");
        } else {
            alert ("Genial eres Geminis");
        }
    };
    if (inputMonth.value == 6) {
        if (inputDay.value <= 22) {
            alert ("Genial eres Geminis");
        } else {
            alert ("Genial eres Cancer");
        }
    };
    if (inputMonth.value == 7) {
        if (inputDay.value <= 22) {
            alert ("Genial eres Cancer");
        } else {
            alert ("Genial eres Leo");
        }
    };
    if (inputMonth.value == 8) {
        if (inputDay.value <= 22) {
            alert ("Genial eres Leo");
        } else {
            alert ("Genial eres Virgo");
        }
    };
    if (inputMonth.value == 9) {
        if (inputDay.value <= 22) {
            alert ("Genial eres Virgo");
        } else {
            alert ("Genial eres Libra");
        }
    };
    if (inputMonth.value == 10) {
        if (inputDay.value <= 22) {
            alert ("Genial eres Libra");
        } else {
            alert ("Genial eres Escorpio");
        }
    };
    if (inputMonth.value == 11) {
        if (inputDay.value <= 22) {
            alert ("Genial eres Escorpio");
        } else {
            alert ("Genial eres Sagitario");
        }
    };
    if (inputMonth.value == 12) {
        if (inputDay.value <= 21) {
            alert ("Genial eres Sagitario");
        } else {
            alert ("Genial eres Capricornio");
        };
    };

    };

