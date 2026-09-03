function validarAcceso(edad, tieneEntrada) {
    if (edad >= 18 && tieneEntrada) {
        return "Puede entrar";
    } else if (edad < 18) {
        return "No puede entrar: es menor de edad";
    } else {
        return "No puede entrar: no tiene entrada";
    }
}

let personasEvaluadas = 0;

console.log(validarAcceso(20, true));
personasEvaluadas++;

console.log(validarAcceso(16, true));
personasEvaluadas++;

console.log(validarAcceso(30, true));
personasEvaluadas++;

console.log("Total evaluadas:" + personasEvaluadas);