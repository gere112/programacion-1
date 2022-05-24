//importar clase vehiculos que esta en vehiculo.js
import Vehiculo from "./vehiculo.js";


const mostrar=() =>
{
    const marca= document.getElementById("inp_marca").value
    const km= document.getElementById("inp_km").value
   


    //instancia creada de la clase vehiculo
    const auto= new Vehiculo(marca,km)
    auto.mostrar_datos_vehiculos()

}
//encuentro el boton y enseguida le digo que lo escuche con el addEventListener
document.getElementById("btn_mostrar").addEventListener("click",mostrar)
