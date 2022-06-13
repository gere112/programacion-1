

const framework = {
    titulo: 'Framework utilizado en la actualidad',
    nombre: 'Angular',
    características: {
   lenguaje: 'TypeScript',
   patron: 'MVVM',
   spa: 'si'
    },
   }


   const objetos =() =>{
    

    const { titulo, nombre } = framework
   //propiedades del objeto
   console.log(titulo)
   console.log(nombre)

    //Destructuring Object
    const { lenguaje, patron, spa } =framework.características;

console.log(`

    caractericticas:

    lenguaje: ${lenguaje}
    patron: ${patron}
    spa: ${spa}
`)
}
const boton_objeto = document.getElementById("btn_objeto")

boton_objeto.addEventListener("click", objetos)
