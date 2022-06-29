import Cliente from "./cliente.js"; 

    //dentro de esta crear la instancia 
    function guardar() {

        let descripcion =document.getElementById("inp_descripcion").value
        let url_img= document.getElementById("inp_url_img").value
        let precio = document.getElementById("inp_precio").value
        let detalle = document.getElementById("inp_detalle")
        //instancia de la clase
        let cliente= new Cliente(descripcion,url_img,precio ,detalle)
        cliente.guardar_cliente()
    }

    document.getElementById("btn_guardar").addEventListener("click",guardar)

    function listar(){
        let cliente = new Cliente()
        cliente.obtener_clientes()
    }

    listar()

    function eliminar(){
        let indice =localStorage.getItem("indice")
        let cliente= new Cliente
        cliente.eliminar_cliente(indice)
        

    }

    document.getElementById("btn_eliminar").addEventListener("click", eliminar)

    function actualizar(){

        let index= localStorage.getItem("indice_update")
        let cliente= new Cliente()
        cliente.actualizar_cliente(index)
    }
    document.getElementById("btn_actualizar").addEventListener("click", actualizar)

    