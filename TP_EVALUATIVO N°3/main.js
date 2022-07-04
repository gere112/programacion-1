import Producto from "./producto.js"; 

    //dentro de esta crear la instancia 
    function guardar() {

        let descripcion =document.getElementById("inp_descripcion").value
        let url_img= document.getElementById("inp_url_img").value
        let precio = document.getElementById("inp_precio").value
        let detalle = document.getElementById("inp_detalle")
        //instancia de la clase
        let producto= new Producto(descripcion,url_img,precio ,detalle)
        producto.guardar_producto()
    }

    document.getElementById("btn_guardar").addEventListener("click",guardar)

    function listar(){
        let producto = new Producto()
        producto.obtener_productos()
    }

    listar()

    function eliminar(){
        let indice =localStorage.getItem("indice")
        let producto= new Producto
        producto.eliminar_producto(indice)
        

    }

    document.getElementById("btn_eliminar").addEventListener("click", eliminar)

    function actualizar(){

        let index= localStorage.getItem("indice_update")
        let producto= new Producto()
        producto.actualizar_producto(index)
    }
    document.getElementById("btn_actualizar").addEventListener("click", actualizar)

    