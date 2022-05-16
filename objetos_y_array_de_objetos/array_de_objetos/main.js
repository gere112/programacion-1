//crear un arreglo de objetos

let vehiculos =[
    {
        marca:'Ford',
        modelo:'Focus',
        anio:2014,
        origen: 'Mercosur',

    },

    {
        marca:'Volkswagen',
        modelo:'Golf 1.4 TSI',
        anio:2014,
        origen:'Mexico'

    }
]

//recorrer un array de objetos
//index pertenece al elemento por que es una propiedad propia de un arreglo
vehiculos.forEach( (element,index) => {
   console.log(index+'-'+element.modelo) 


});

//funciones asincronas - Concepto de Async y Await  

//declarar a la izquierda del argumento que es asincrona
const recorrer = async() => {

    /*esto realiza una solicitud o petición HTTP
    a traves del metodo GET */
    //await es espera a que se finalize esta misma para que se ejecute la siguiente linea 
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts')
    
    const publicaciones= await respuesta.json()

    publicaciones.forEach(element => {
        
        console.log(element.title)
    });
}

const boton =document.getElementById("btn_ejecutar")

boton.addEventListener("click",recorrer)    