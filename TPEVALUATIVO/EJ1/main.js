function calcular_precio() {

    const precio = document.getElementById("autos").value

    var resultado_final = null

    if (precio == 1950000) {
       resultado_final =   1950000 - ((precio / 100) * 5) 
    } else{
        if (precio === 2500000) {
           resultado_final =   2560000 - ((precio / 100) * 10) 
        } else{
            if (precio == 1750000) {
                resultado_final =  1750000 - ((precio / 100) * 15) 
            }
        }
    } 
    
    document.getElementById("Resultado_H1").textContent = ' Resultado porcentaje:    ' + resultado_final
}



