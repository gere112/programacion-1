const calcular =(d1,d2) => {
    // Math.pow (elevacion de num)
const Resultado = Math.pow(d1,d2)
return Resultado

}

const  mostrar = () => {
const dato1= document.getElementById("inp_dato1").value
const dato2= document.getElementById("inp_dato2").value


   const respuesta= calcular(dato1,dato2)

   alert (respuesta)

}

const boton= document.getElementById("btn_calcular")
boton.addEventListener("click",mostrar)