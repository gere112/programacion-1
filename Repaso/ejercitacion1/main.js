function convertir_temperatura(c){

const conversor= (c * 1.8)+32


return conversor
}

function mostrar(){
    const celcius=document.getElementById("inp_celcius").value//C
    
    const Resultado=convertir_temperatura(celcius)

    document.getElementById("Resultado_H1").textContent ='Resultado Temperatura ' + Resultado

   
}
const boton=document.getElementById("mostrar_resultado")

boton.addEventListener("click", mostrar)