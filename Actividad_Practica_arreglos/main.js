let lenguajes = ["Python", "JavaScript", "Csharp", "C++", "Java", "Php", "Ruby"]
console.log(lenguajes)


/*1. Crear una función que imprima en un párrafo lo siguiente:
a) La longitud del arreglo
b) El ultimo elemento del arreglo
c) El tercer elemento del arreglo*/
function op() {

    //la longitud del arreglo
    console.log(` 
    Longitud = ${lenguajes.length} //7
`)
    //el ultimo elemento del arreglo
        let ultimo_elemento = lenguajes[lenguajes.length - 1]
        console.log(`
            Ultimo elemento: ${ultimo_elemento}
             `)

    //El tercer elemento del arreglo
        const leng =lenguajes[2] // posicion 0,1,2 ||argumento 1,2,3
            console.log(leng)
}   

/*2. Crear una función que recorra el arreglo y lo imprima en un console.log(). Hacer uso de
forEach para dicho recorrido.*/
function mostrar_respuesta() { 


    lenguajes.forEach( (element,index) => {

        console.log(`
            ${index} - ${element}
        `)
    
        //template string ,desarrola mas plantillas de texto (alt Gr+corchete derecho (``)), su forma para poner variables adentro es ${valor}
       
      
        
    });
   
}

/*3. Agregar en lenguaje ‘Go’ al final del arreglo*/

//como AGREGAR un elemento al FINAL de un arreglo
lenguajes.push("GO")

        
/*4. Eliminar el primer lenguaje del arreglo*/
//como ELIMINAR el PRIMER elemento de un arreglo
lenguajes.shift()

/*5. Agregar al inicio del arreglo el lenguaje ‘Kotlin’ */
//como AGREGAR un elemento al INICIO de un arreglo 
lenguajes.unshift("Kotlin")

/*6. Eliminar el lenguaje Java y Php mediante el uso de splice(posición,elementos) */

//Como encontrar los indices de un elemento de un array
let indice0=lenguajes.indexOf("Java")
console.log (`
        Posicion del elemento Java= ${indice0}
`)

let indice=lenguajes.indexOf("Php")
console.log (`
        Posicion del elemento PHP= ${indice}
`)

//ELIMINAR  varios elementos de un arreglo
lenguajes.splice(indice0,2)
console.log(lenguajes)
