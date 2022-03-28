//()=argumentos llevan los parametros
//funcion clásica /invocando funcion  
function mostrar(){
    
    //forma 1
    // buscar por clases (".")
    //buscar por id ("#") 
    // const nombres= document.querySelector("#inp_nombres").value *

    //forma 2
    const nombres= document.getElementById("inp_nombres").value

    const DNI=document.getElementById("DNI").value

    // sin template string- 
        //concatenar= cadena de string + constante                
   // const mensaje ='Nombre y apellido: '+nombres+'DNI 40258963'
//----------------------------------------------------------------------
    //template string
    //concatenar con varias lineas
    const mensaje= `Nombre y apellido: ${nombres} DNI: ${DNI}`

    //nombre de la constante 
     alert(mensaje)
}

function mfuncion_con_retorno()
{
    const ejemplo ='Probando funcion con retorno'
    //Retorna una respuesta
    return ejemplo
}
 
function mostrar_respuesta()
{
    //acabo de ejecutar la funcion 
    const respuesta =mfuncion_con_retorno()
    alert(respuesta)
}


