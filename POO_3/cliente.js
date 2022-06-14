export default class Cliente {

   constructor(nom, ape, dni) {
      this.nombre = nom
      this.apellido = ape
      this.dni = dni
   }

   //metodo
   guardar_cliente() {

      //Crear objeto
      let nuevo_cliente = {
         nombre: this.nombre,
         apellido: this.apellido,
         dni: this.dni
      }


      //preguntar si existe este sector /llave o item
      if ("listado_clientes" in localStorage) {
         /*obtener item || JSON.parse = convierte esto de json a un array de objetos,
          porque el json no se puede manipular en javascript ya que este es un formato de datos.*/
         let lista_clientes = JSON.parse(localStorage.getItem("listado_clientes"))
         lista_clientes.push(nuevo_cliente)
         localStorage.setItem("listado_clientes",JSON.stringify(lista_clientes))
         //si no 
      } else {

         //llenar el objeto "lista_cliente" con el contenido "nuevo_cliente"
         let lista_clientes = []
         lista_clientes.push(nuevo_cliente)
         //crear el sector de almacenamiento 
         localStorage.setItem("listado_clientes", JSON.stringify(lista_clientes))
      }
      //actualiza automaticamente los datos de la tabla
      //invocamos al metodo obtener clientes
      this.obtener_clientes()
   }

   obtener_clientes(){
     let  listado_clientes= JSON.parse(localStorage.getItem("listado_clientes"))

     let filas =[]
     listado_clientes.forEach((element, index) => {
        let fila = `

        <tr>
           <td>${element.nombre}</td>
           <td>${element.apellido}</td>
           <td>${element.dni}</td>
           <td>
              <button onclick="eliminar_cliente(${index})  class="btn btn-danger btn-sm"> <i class="fa fa-trash"></i> </button>
           </td>
        </tr>`
        filas.push(fila)
     });
     document.getElementById("tbody").innerHTML = filas.join("")
   }

   eliminar_cliente(index){
      let lista_cliente =JSON.parse(localStorage.getItem("listado_clientes"))

      //eliminamos clientes
      lista_cliente.splice(index,1)

      localStorage.setItem("listado_clientes",JSON.stringify(lista_cliente))

      this.obtener_clientes()
   }
}

