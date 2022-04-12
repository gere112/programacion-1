const calcular =(d1,d2) => {
    // Math.pow (elevacion de num)
const Resultado = Math.pow(d1,d2)

//retorna el valor  a respuesta 
return Resultado

}

const  mostrar = () => {
const dato1= document.getElementById("inp_dato1").value
const dato2= document.getElementById("inp_dato2").value

// envia y devuelve el valor de calcular 
   const respuesta= calcular(dato1,dato2)

   alert (respuesta)

}

// boton 
const boton= document.getElementById("btn_calcular")
boton.addEventListener("click",mostrar)