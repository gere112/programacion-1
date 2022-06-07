

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
       //propiedades del objeto
    console.log(framework.titulo)
    console.log(framework.nombre)


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
