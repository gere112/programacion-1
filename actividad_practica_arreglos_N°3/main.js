
let array = [28,19,89,78,22]

 
let longitud=array.length
console.log(longitud)




function cambiar_pos(){

    const val1 = parseInt(document.getElementById("pos_1").value)
    const val2 = parseInt(document.getElementById("pos_2").value)

    const elemento_1= array[val1]
    const elemento_2 =array[val2]

    console.log(elemento_1,elemento_2)

        array[val1]= elemento_2
        array[val2]= elemento_1

        console.log(array)

}

