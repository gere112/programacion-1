function almacenar_indice(index){

    localStorage.setItem("indice",index)
}

function editar(index){
   let listado_cliente= JSON.parse(localStorage.getItem("listado_clientes"))
   document.getElementById("inp_nombre").value = listado_cliente[index].nombre
   document.getElementById("inp_apellido").value = listado_cliente[index].apellido  
   document.getElementById("inp_dni").value =listado_cliente[index].dni

   //guardamos en el storage el indice del cliente que queremos editar (actualizar)
   localStorage.setItem("indice_update",index)

   //Encendemos boton actualizar
   document.getElementById("btn_actualizar").style.display = "block"
   document.getElementById("btn_guardar").style.display = "none"
}