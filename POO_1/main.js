import Triangulo from "./triangulo.js";

const mostrar_triangulo=()=>{


    const triangulo_a= document.getElementById("inp_triangulo_a").value
    const triangulo_b= document.getElementById("inp_triangulo_b")

    const calcular_triangulo= parseInt ( Math.pow(triangulo_a,2) + Math.pow(triangulo_b,2) )

    //crear instancia

    const triangulo_instancia= new Triangulo(calcular_triangulo)
    triangulo_instancia.mostrar_triangulo()

}