const calcular_area=() => {

     const area=  ((parseInt( document.getElementById("base_mayor").value )+ parseInt(document.getElementById("base_menor").value  ))* document.getElementById("altura").value  )/2

    document.getElementById("Resultado_H1").textContent = 'Resultado Area: '+ area 


}

const boton=document.getElementById("mostrar_respuesta") 

    
    //indicamos elemento a escuchar (en este click)
    //entonces cuando se haga click se invocara a la funcion mostrar 
    boton.addEventListener("click", calcular_area )