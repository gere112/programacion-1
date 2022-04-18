//Crear un array
//variable de tipo array
let marca = ["Ford","Renault","Volkswagen","Seat","Peugeot","Chevrolet","Fiat","Toyota","Chery"]

//mostrar longitud de un arreglo
console.log(` 
    Longitud = ${marca.length} //9
`)


//Acceso a un elemento de un arreglo mediante su indice/posicion
//Acceder al ultimo elemento
let ultimo_elemento = marca [marca.length-1]
console.log(`
        Ultimo elemento: ${ultimo_elemento}
`)

//recorrer un arreglo haciendo uso de foreach
                //argumento
marca.forEach( (element,index) => {

    console.log(`
        ${index} - ${element}
    `)

});

//como AGREGAR un elemento al FINAL de un arreglo
marca.push("lamborghini")
console.log(marca)

//como ELIMINAR el ULTIMO elemento de un arreglo
marca.pop()
console.log(marca)
//como AGREGAR un elemento al INICIO de un arreglo 
marca.unshift("bugatti")
console.log(marca)

//como ELIMINAR el PRIMER elemento de un arreglo
marca.shift()
console.log(marca)

//Como encontrar los indices de un elemento de un array
let indice=marca.indexOf("Ford")
console.log (`
        Posicion del elemento Ford= ${indice}
`)

////ELIMINAR un elemento segun su indice
//indice lo declare como let en el punto anterior
marca.splice(indice,1)
console.log(marca)

//ELIMINAR  varios elementos de un arreglo
marca.splice(0,9)
console.log(marca)


marca.push("BMW")
//COPIAR un arreglo

let copia_marcas= marca.slice()

//Copia=[MARROC,CHOCLATE]
copia_marcas.push("Mercedes_Benz")
console.log(copia_marcas)


console.log(marca)


