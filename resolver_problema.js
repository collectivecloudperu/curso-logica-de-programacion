// Problema: Dado un número, decir si es par o impar

// 1. Entender — ¿qué me piden exactamente? ¿qué entra y qué debe salir?

// 2. Planear — escribir los pasos en español (pseudocódigo), sin código todavía
/* 
1. Recibir un número
2. Si el residuo de dividr entre 2 es 0 -> es par
3. Si no -> es impar
*/

/* 3. Codificar — recién aquí traduces el plan a JavaScript
function esParoImpar(numero) {
    if (numero % 2 == 0) {
        return "par";
    } else {
        return "impar";
    }
}
*/

// 4. correr el código con varios casos, incluyendo los "raros" (casos límite)
/* ¿funcina con 4?
/* ¿funciona con 7?
/* ¿funciona con 0?
/* ¿funciona con un número negativo como -3?
*/

/*
function aproboEstudiante(nota) {
    if (nota > 60) {
        return true;
    }
    return false;
}*/

function promedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i];
    }
    return suma / notas.length;
}

console.log(promedio([]));
