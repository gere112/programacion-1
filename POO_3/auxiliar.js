function almacenar_indice(index){

    localStorage.setItem("indice",index)
}

function editar(index){
   let listado_cliente= JSON.parse(localStorage.getItem("listado_clientes"))
   document.getElementById("inp_nombre").value = listado_cliente[index].nombre
   document.getElementById("inp_apellido").value = listado_cliente[index].apellido  
   document.getElementById("inp_dni").value =listado_cliente[index].dni

   localStorage.setItem("indice_update",index)
}