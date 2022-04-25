function calcular_precio() {
    const precio = document.getElementById("autos").value

    if (precio == 1950000) {
        ((precio / 100) * 5) - 1950000

    } else if (precio === 2500000) {
        ((precio / 100) * 10) - 2560000

    } else if (precio == 1750000) {
        ((precio / 100) * 15) - 1750000
    }

}



const respuesta = calcular_precio()

document.getElementById("Resultado_H1").textContent = ' Resultado porcentaje:    ' + respuesta

const boton = document.getElementById("mostrar_respuesta")


//indicamos elemento a escuchar (en este click)
//entonces cuando se haga click se invocara a la funcion mostrar 
boton.addEventListener("onclick", calcular_precio)
