//crear un objeto
const miobjeto={
    nombre:'Juan',
    apellido:'Perez',
    dni: 332588741,
    correos:{
        gmail:'jp@gmail.com',
        outlook: 'jp@outlook.com',
        yahoo:'jp@yahoo.com.ar'
    }
}

//propiedades del objeto
console.log(miobjeto.apellido)

//mostrar los correos
/*
const gmail = miobjeto.correos.gmail;
const outlook = miobjeto.correos.outlook;
const yahoo = miobjeto.correos.yahoo;
*/

//Destructuring Object
const { gmail, outlook, yahoo } =miobjeto.correos;

console.log(`
    Correos:

    Gmail: ${gmail}
    Outlook: ${outlook}
    Yahoo: ${yahoo}
`)