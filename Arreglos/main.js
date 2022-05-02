//Crear un array
//variable de tipo array
let helados = ["Cereza","Banana Split","Dulce de leche"]

//mostrar LONGITUD de un arreglo

console.log(` 
    Longitud = ${helados.length} //3
`)

//Acceso a un elemento de un arreglo mediante su indice/posicion
//Acceder al ultimo elemento 
let ultimo_elemento = helados [helados.length-1]
console.log(`
        Ultimo elemento: ${ultimo_elemento}
        `)

//recorrer un arreglo haciendo uso de foreach
                //argumento
helados.forEach( (element,index) => {

    console.log(`
        ${index} - ${element}
    `)

});

//como AGREGAR un elemento al FINAL de un arreglo
helados.push("Pistacho")
console.log(helados)

//como ELIMINAR el ULTIMO elemento de un arreglo
helados.pop()
console.log(helados)

//como AGREGAR un elemento al INICIO de un arreglo 
helados.unshift("Menta granizada")
console.log(helados)

//como ELIMINAR el PRIMER elemento de un arreglo
helados.shift()
console.log(helados)

//Como encontrar los indices de un elemento de un array
let indice=helados.indexOf("Banana Split")
console.log (`
        Posicion del elemento Banana Split= ${indice}
`)

////ELIMINAR un elemento segun su indice
//indice lo declare como let en el punto anterior
helados.splice(indice,1)
console.log(helados)

//ELIMINAR  varios elementos de un arreglo
helados.splice(0,2)
console.log(helados)


helados.push("Marroc")
//COPIAR un arreglo
//["MARROC"]
let copia= helados.slice()

//Copia=[MARROC,CHOCLATE]
copia.push("Chocolate")
console.log(copia)

//Helados=[MARROC]
console.log(helados)


