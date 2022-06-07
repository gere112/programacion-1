let consolas = ["Play Station","Xbox","Nintendo Game Cube","Sega Dreamcast","Game Boy Advanced","Pokemon Mini"]

//Agregar la consola "Nintendo 64" al final del arreglo
consolas.push("Nintendo 64")


let indice=consolas.indexOf("Game Boy Advanced")
console.log (`
        Posicion de la consola= ${indice}
`)

consolas.splice(indice,2)

console.log(consolas)


//imprimir solo en H4 ,no sirve en console.log
const info_array= () =>{

    //muestra la longitud del arreglo
    document.getElementById("longitud").textContent= (` 
    longitud del arreglo = ${consolas.length}
    `)

//muestra el ultimo elemento del arreglo
        document.getElementById("ultimo_elemento").textContent= (` 
    Ultimo elemento = ${consolas[consolas.length-1]}
    `)

       //El cuarto elemento del arreglo
       document.getElementById("elemento_pos4").textContent= (`
       Cuarto_elemento = ${consolas[3]} 
               `)

}

const boton =document.getElementById("btn_ejecutar")

boton.addEventListener("click",info_array)   


//5  recorrer el array y mostrar elementos en una tabla
let filas = []
const tabla_array=() =>{

        consolas.forEach( (element,index) => {

                let fila = `
                        <tr>
                                <td>${index}</td>
                                <td>${element}</td>
                        </tr>
                `

                filas.push(fila)
        
        });


        document.getElementById("tbl_body").innerHTML = filas.join('')

            
}

//boton para mostrar la tabla

const boton1 =document.getElementById("ejecutar_tabla")

boton1.addEventListener("click",tabla_array)   





 
//las API son interfaces compuestas por reglas y llamados en lenguaje computacional
//, que sirven para programar el funcionamiento de una aplicación determinada dentro
 //de un software