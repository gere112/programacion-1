const calcular_raices=(ra,rb) => {

    const a = math.pow(ra,2)
    const b= math.pow(rb,2)
    const c= math.sqrt(parseInt(a+b))

    return 'c'
}
function mostrar() {
    const ra = parseInt(document.getElementById("raiz_a").value) //a
    const rb = parseInt(document.getElementById("raiz_b").value) //b


    const respuesta = calcular_raices(ra, rb)

    document.getElementById("Resultado_H1").textContent = ' Resultado Raiz:    ' + respuesta
}
const boton=document.getElementById("mostrar_respuesta") 

   
   //indicamos elemento a escuchar (en este click)
   //entonces cuando se haga click se invocara a la funcion mostrar 
   boton.addEventListener("click", mostrar)