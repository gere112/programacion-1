
const mostrar = () => {
    //asignacion 
    const Grados = document.getElementById("Grados_Fahrenheit").value


    if (Grados >= 14 && Grados <= 32) {
        alert("Temperatura Baja")

    } else {
        if (Grados >= 32 && Grados <= 68) {
            alert("Temperatura Adecuada")

        } else {
            if (Grados >= 68 && Grados <= 96) {
                alert("Temperatura Alta")

            }else{
                alert("Temperatura Desconocida ")
            }
        }
    }




    //obtengo  el elemento boton
    const boton = document.getElementById("btn_mostrar")

    //indicamos elemento a escuchar (en este click)
    //entonces cuando se haga click se invocara a la funcion mostrar 
    boton.addEventListener("click", mostrar)