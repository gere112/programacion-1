import Cliente from "./cliente.js"; 

    //dentro de esta crear la instancia 
    function guardar() {

        let nombre =document.getElementById("inp_nombre").value
        let apellido= document.getElementById("inp_apellido").value
        let dni = document.getElementById("inp_dni").value
        //instancia de la clase
        let cliente= new Cliente(nombre,apellido,dni)
        cliente.guardar_cliente()
    }

    document.getElementById("btn_guardar").addEventListener("click",guardar)

    function listar(){
        let cliente = new Cliente()
        cliente.obtener_clientes()
    }

    listar()