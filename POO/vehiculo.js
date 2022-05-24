//cracion de clases
//las clases SIEMPRE SON CON MAYUSCULA AL PRINCIPIO
//exportar clase a main para que este lo pueda importar
export default class Vehiculo{
    //aca van los metodos y atributos
        //ATRIBUTO ALAMACENAN CUALIDADES
        //atributo nulo sin valor ej: marca; sin llevar null, disponible globalmente en toda la clase
        //las variables se crean dentro de los metodos "IMPORTANTE"
    

            //primer metodo de la clase que son reservados de esta misma , es decir propios
            // se ejecuta cunado se crea la instancia ,es decir auto=new vehiculo
            //recibe parametros
            constructor(m,k){
                this.marca = m
                this.km = k
                
                
     }

            //Metodo creado por el programador, no lleva Function adelante, por que no es necesario.
            //METODO ES REALACIONADO A CLASS SIEMPRE
            mostrar_datos_vehiculos(){
                //llamar atributo
                console.log(` 
                Marca:${this.marca}
                Kilometraje:${this.km}
              
                `)
                

     }

}
