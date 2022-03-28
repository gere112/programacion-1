function calcular_potencia()
{
    //lograr extraer de cada inpiut los valores tipiados
    const tension =document.getElementById("inp_tension").value
    const corriente =document.getElementById("inp_corriente").value

    const potencia=  tension * corriente 
    return potencia
}

function mostrar_respuesta()
{
    const respuesta=calcular_potencia()
    alert(respuesta)
}