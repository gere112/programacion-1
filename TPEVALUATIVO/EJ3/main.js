function calcular_raices() {

    const raiz_a = parseInt(document.getElementById("raiz_a").value) //a
    const raiz_b = parseInt(document.getElementById("raiz_b").value) //b

    const respuesta_a = parseFloat(Math.pow(raiz_a, 2))
    const respuesta_b = parseFloat(Math.pow(raiz_b, 2))
    const resultado = parseFloat(Math.sqrt(parseInt(respuesta_a + respuesta_b)))

    return resultado
}


function mostrar_respuesta() {
    const respuesta = calcular_raices()

    document.getElementById("h4").textContent =  respuesta
}
