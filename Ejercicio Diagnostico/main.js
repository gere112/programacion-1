let numeros = [1,2,3,4,5,6,7,8,9,10]


const mostrar=()=>{

    let pares = []
    
 numeros.forEach((element) => {
    if(element %2 == 0){
       
        pares.push(element)
    }
    


});
console.log(pares)
}

mostrar()

const muestra=()=>{
    let intervalo=[]

    for (const element of numeros) {
        if (element>2 && element<9) {
            intervalo.push(element)
        } 
    }
    console.log(intervalo)
}
muestra()