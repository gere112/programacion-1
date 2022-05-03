
const mostrar = (F) => {

    //Defino variable como nula para poder obtener el resultado
    let mensaje = null

    
    if (F >= 14 && F <= 32) {
        mensaje = 'Temperatura Baja'

    } else {
        if (F >= 33 && F <= 68) {
            mensaje = 'Temperatura Adecuada'

        } else {
            if (F >= 69 && F <= 96) {
                mensaje = 'Temperatura Alta'

            } else {
                mensaje = 'Temperatura Desconocida'
            }
        }
    }

    return mensaje
}
    //defino constante para enviar y recibir los datos a la funcion flecha mostrar
const Resultado = () => {
    const Fahrenheit = parseInt(document.getElementById("Fahrenheit").value)

    const respuesta = mostrar(Fahrenheit)
    
    //obtengo el elemento del boton
    document.getElementById("h_titulo").textContent = 'Conversion:' + respuesta
}
//obtengo boton desde el index
const boton = document.getElementById("btn_mostrar")


//indicamos elemento a escuchar (en este click)
//entonces cuando se haga click se invocara a la funcion mostrar 
boton.addEventListener("click", Resultado)

