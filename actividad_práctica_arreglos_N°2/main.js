let numeros = [5, 2, 88, 14, 22, 7, 6, 42, 47, 34]
//1. Crear una función que reciba dicho arreglo como parámetro y devuelva una copia del arreglo. 

function enviar() {

    crear_copia(numeros)
}

function crear_copia() {
    let copia = numeros.slice()

    console.log(copia)
}

//2. Crear una función que devuelva el promedio de dicho arreglo


function calcular_promedio() {

    let suma = 0;
    let longitud = numeros.length

    numeros.forEach(item => {

        suma += item;

    });


    let promedio = suma / longitud

    console.log(promedio)
}

function Promedio_especifico(){

let parteArreglo = numeros.slice(2,5);

console.log(parteArreglo)
}



