//Declarar la variable-inicializamos
var numero= 6;
//condicion-pregunta
if (numero >6) {
    console.log('Estas aprobado')
    //condicon si no 
}else{
console.log('Nos vemos en diciembre')
}
//otra forma de expresare una condicion 
// (':')= else
var respuesta =(numero <= 4) ? 'Nos vemos en Marzo':'Nos veremos en diciembre'
console.log(respuesta)

/*Diferencias entre LET y VAR*/

//USO DE VAR, General
var x = 44;
if(x==44){
    var x = 74 //Misma variable
    console.log(x) //74
}
console.log(x) //74

//USO DE LET ,LOCAL 
let y =11;
if (y==11){
    let y =22; //22
    console.log(y)
} 
console.log(y) //11