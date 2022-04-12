//Crear un array
//variable de tipo array
let marca = ["Ford","Renault","Volkswagen","Seat","Peugeot","Chevrolet","Fiat","Toyota","Chery"]

console.log(` 
    Longitud = ${marca.length} //9
`)


let ultimo_elemento = marca [marca.length-1]
console.log(`
        Ultimo elemento: ${ultimo_elemento}
`)


marca.forEach( (element,index) => {

    console.log(`
        ${index} - ${element}
    `)

});

marca.push("lamborghini")
console.log(marca)

marca.pop()
console.log(marca)

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


