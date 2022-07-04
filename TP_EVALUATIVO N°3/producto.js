export default class Producto {

   constructor(des, url, pre ,det) {
      this.descripcion = des
      this.url_img = url
      this.precio = pre
      this.detalle =det
   }

   

   //metodo
   guardar_producto() {

      
      //Crear objeto    
      let nuevo_producto = {
         descripcion: this.descripcion,
         url_img: this.url_img,
         precio: this.precio,
         detalle:this.detalle

      }


      //preguntar si existe este sector /llave o item
      if ("listado_productos" in localStorage) {
         /*obtener item || JSON.parse = convierte esto de json a un array de objetos,
          porque el json no se puede manipular en javascript ya que este es un formato de datos.*/
         let lista_productos = JSON.parse(localStorage.getItem("listado_productos"))
         lista_productos.push(nuevo_producto)
         localStorage.setItem("listado_productos", JSON.stringify(lista_productos))
         //si no 
      } else {

         //llenar el objeto "lista_producto" con el contenido "nuevo_producto"
         let lista_productos = []
         lista_productos.push(nuevo_producto)
         //crear el sector de almacenamiento 
         localStorage.setItem("listado_productos", JSON.stringify(lista_productos))
      }
      //actualiza automaticamente los datos de la tabla
      //invocamos al metodo obtener productos
      this.obtener_productos()
      this.vaciar_formulario()
   }

   obtener_productos() {
      let listado_productos = JSON.parse(localStorage.getItem("listado_productos"))

      let filas = []
      listado_productos.forEach((element, index) => {
         let fila = `

        <tr>
            <td>${index + 1}
            <td><img class="img-thumbnail" style="width:3rem" src="${element.url_img}"</td>
           <td>${element.descripcion}</td>
           <td>$${element.precio}</td>
            <td>${element.detalle}</td>
           <td>
               <button onclick="editar(${index})" class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></button>
               <button onclick="almacenar_indice(${index})" data-bs-toggle="modal" data-bs-target="#mymodal"  class="btn btn-danger btn-sm"> <i class="fa fa-trash"></i> </button>
           </td>
        </tr>`
         filas.push(fila)
      });
      document.getElementById("tbody").innerHTML = filas.join("")
   } lle

   eliminar_producto(index) {
      let lista_producto = JSON.parse(localStorage.getItem("listado_productos"))

      //eliminamos productos
      lista_producto.splice(index, 1)

      localStorage.setItem("listado_productos", JSON.stringify(lista_producto))

      this.obtener_productos()
   }

   actualizar_producto(index) {
      //fui a buscar el listado de productos al storage
      let listado_productos = JSON.parse(localStorage.getItem("listado_productos"))

      listado_productos[index].descripcion = document.getElementById("inp_descripcion").value
      listado_productos[index].url_img = document.getElementById("inp_url_img").value
      listado_productos[index].precio = document.getElementById("inp_precio").value
      listado_productos[index].detalle = document.getElementById("inp_detalle").value

      localStorage.setItem("listado_productos", JSON.stringify(listado_productos))
      //volvemos a reconstruir la tabla 
      this.obtener_productos()


      //borra el formulario de actualizar ,desactivando el boton actualizar tambien y activa el boton guardar
      document.getElementById("btn_guardar").style.display = "block"
      document.getElementById("btn_actualizar").style.display = "none"

      this.vaciar_formulario()


   }


   vaciar_formulario() {

      document.getElementById("form_producto").reset()
   }
}


//JSON.parse para convertirlo de json a otro metodo
//JSON.stringify para convertirlo a json
