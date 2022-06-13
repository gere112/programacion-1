//Crear array de forma global
let Cripto = ["Bitcoin", "Ethereum", "Tether", "BNB", "Cardano", "Dai", "Helium", "Shiba Inu", "Tron", "Cronos", "Solana"]


//Agregar al inicio del arreglo la criptomoneda ‘Stellar’
Cripto.unshift("Stellar")

//Como encontrar los indices de un elemento de un array según el nombre
let indice0 = Cripto.indexOf("Shiba Inu")

//Eliminar las criptomonedas Shiba Inu y Tron respectivamente

////ELIMINAR UN elemento segun su indice
//indice declarado como indice0 en el let
Cripto.splice(indice0, 2)


// Agregar la criptomoneda ‘Gate’ al final del arreglo.
Cripto.push("Gate")



const imprimir_parrafo = () => {

    //muestra la longitud del arreglo
    document.getElementById("longitud").textContent = (` 
        longitud del arreglo = ${Cripto.length}
        `)

    //muestra el ultimo elemento del arreglo
    document.getElementById("ultimo_elemento").textContent = (` 
        Ultimo elemento = ${Cripto[Cripto.length - 1]}
        `)
    //sacar indice de Hellium
    let indice1 = Cripto.indexOf("Helium")
    document.getElementById("indice_Helium").textContent = (`
        Indice de la cripto= ${indice1}
        `)


}
const boton_cripto = document.getElementById("btn_cripto")

boton_cripto.addEventListener("click", imprimir_parrafo)

let filas=[]
const imprimir_ListGroup=() =>{

        Cripto.forEach( (element) => {

                let fila = `
                                <li class="list-group-item">${element}</li>
                `

                filas.push(fila)
        
        });


        document.getElementById("list_group").innerHTML = filas.join('')

            
}


const boton_ListGroup = document.getElementById("btn_ListGroup")

boton_ListGroup.addEventListener("click", imprimir_ListGroup)