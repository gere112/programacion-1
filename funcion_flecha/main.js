
const mostrar= () => {
    //asignacion inp_dato = 10
        document.getElementById("inp_dato").value = 10
        document.getElementById("h_titulo").textContent ='probando funcion flecha'
    }
    
     //obtengo  el elemento boton
    const boton=document.getElementById("btn_mostrar")  
    
    //indicamos elemento a escuchar (en este click)
    //entonces cuando se haga click se invocara a la funcion mostrar 
    boton.addEventListener("click", mostrar)