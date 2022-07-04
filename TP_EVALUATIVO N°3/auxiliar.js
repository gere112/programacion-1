function almacenar_indice(index) {

    localStorage.setItem("indice", index)
}

function editar(index) {
    let listado_producto = JSON.parse(localStorage.getItem("listado_productos"))
    descripcion = document.getElementById("inp_descripcion").value = listado_producto[index].descripcion
    img = document.getElementById("inp_url_img").value = listado_producto[index].url_img
    precio = document.getElementById("inp_precio").value = listado_producto[index].precio
    detalle = document.getElementById("inp_detalle").value = listado_producto[index].detalle

    //guardamos en el storage el indice del cliente que queremos editar (actualizar)
    localStorage.setItem("indice_update", index)

    //Encendemos boton actualizar
    document.getElementById("btn_actualizar").style.display = "block"
    document.getElementById("btn_guardar").style.display = "none"
}
