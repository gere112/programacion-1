const consumir_datos=async () =>{

    const dato_recibidos =await fetch('https://jsonplaceholder.typicode.com/users')

    const datos = await dato_recibidos.json()
    let lista_usuario =[]
    datos.forEach(usuario => {
        let fila =`

        <tr>
        <td>${usuario.name}</td>
        <td>${usuario.email}</td>      
        <td>${usuario.website}</td>                
        </tr>
        `
        lista_usuario.push(fila)
        
    });

    document.getElementById("tbl_body").innerHTML =lista_usuario.join('')

}
//invocar a la funcion flecha consumir datos 
consumir_datos()