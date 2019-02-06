// REACT JS ES UNA LIBREA BASADA EN JAVASCRIPT
// PERMITE MANEJAR DE MANERA EFICIENTE LAS INTERFACES DE PAGINAS WEB
// CREADO POR FACEBOOK

// PUNTOS FUERTE REAC :
        // --SU GRAN ECOSISTEMA : //SE GENERARON MAS LBIREAS PARA AUMENTAR SUS CAPACIDADES
        // --SU ESTABILIDAD
        // --ALTA RETROCOMPATIBILIDAD : //EVOLUCIONA SIN TENER QUEIBRES DE COMPATIBILDIAD
        // --Y SU PERFORMANCE: //GENERA TIEMPOS DE CARGAS MUY BUENOS, POSEE UNA BUENA VELOCIDAD DE REDERIZACION
        //INTELIGENTE POR SU VIRTUAL DOM Y EL PROCESO DE RECONCILIATION
        // REPRESENTA LA V DE VISTA DEL mVc




///CÓMO DIGITAR HOLA MUNDO EN REACT JS

//En un archivo html definir un elemento con un ID
//<div id="root"></div>


//EN UN ARCHIVO JS ESCRIBIR
//ReactDOM.render(<h1>Hola mundo</h1>, document.getElementById("root"));
//                 Esto no es realmente
//                 html, es JSX, babel
//                 transpila lo que escribimos y 
//                  vuelve compatible con JS, a un pseudohtmlñ



//COMO INICIALIZAR UN APLICACIÓN CON REACT 
/**
 * Utilizar el prefijo npx create-react-app nombre-del-app
Así se creará nuestra app React

Para ejecutarla abrimos el shell ctrl+ñ (visual studio code)
entramos en la carpeta de nuestra app e
inicializamos el servidor con 
npm start
 */


 //REACT FUNCIONA CON COMPONENTES
 /**
  * PARA ELLO CREAMOS UNA CARPETA COMPONENTES
  * CON UN ARCHIVO JAVASCRIPT
  * 
  * EN DONDE IMPORTAREMOS
  * 
  * import React from 'react';
  * 
  * declaramos el nombre de Variable
  *                         Utilizamos HTML JSX
  * const MiApp = () => (<div>Hola</div>);
  * 
   export default MiApp;

   SE USA DEFAULT CUANDO SOLO SE ENVIA UN ELEMENTO
   NO UTILIZAR SI SE ULTIZA MÁS DE UNO
   La exportar nos permitirá usar esa linea de código que
   devolvemos en cualquier parte de nuestra app con React
   para ello entramos a nuestro elemento JS y escribimos

        import nombreConstADevolver from './ruta',
  *     Para utilizarlas creamos un contenedor div y escribimos
        Como si fue html, pero con la var que importamos
          */
        // <nombreConstADevolver></nombreConstADevelver>
   
     //PARA HACER DEBUG D EUNA APLICACIÓN UTILIZAMOS

     /**
      * console.log();
      * debugger;
      * 
      */

      //Para crear parametros 


        ///Js
      import React from 'react';

      const fuc = (props)=>{
              //Props.city hace referencia
              //al parametro creado, en el otro js
        return <div><h1>{props.city}</h1></div>
      }
      //Otro js
      import React from 'react';
      import fuc from './fuc';

      const miOtroJs = ()=>{
              <div>
                <fuc city={"Bogotá"}></fuc>
              </div>
      }
      


      //DESTRUCTURING
      //Ejmplo desctrucring complicado
      const obj = {MyName = 'Oscar', Mynick = 'os'}
      const {name : MyName, nick:Mynick} = obj;

      //Si coinciden, no hay que se hacer la comparación tan explicita
      const {name, nick } = obj;

      //Destructuring con Arrays
      const myArray = ['a', 'b'];
      const [x , y] = myArray;
      //Cuando se hace destructuring sobre un objeto,
        //no es necesario tomar todas sus propiedades, solo las que se necesitan

        const myObj = {
        x: 7, y: 3
        };
        const { x } = myObj;
        //Se pueden establecer valores por defecto a las propiedades
        const {x , y = 1} = {}

        //Destructring en array utilizando elision, así se pueden
        //saltear uno o más elementos

        const [, , x , y] = ['a', 'b', 'c', 'd'];
        console.log(x);

        //También se puede utilizar el 'rest operator ...' en conjunción con
        //Destructuring para extraer los elementos permanentes
        const [x, ...y] = ['a', 'b', 'c']
        console.log(y) = ['b', 'c'];
      /**
       * 
       * Cuando tenemos una propiedad con un nombre,
       * que luego se quiere asignar a una va ro const 
       * la podemos destructurar como
       */
      const fuc = (props)=>{
        //Props.city hace referencia
        //al parametro creado, en el otro js
        
        const {city} = props;

        return <div><h1>{city}</h1></div>
}
        //o por el contrario 
        const fuc = ({city})=>{
                return <div><h1>{city}</h1></div>
        }


        /***
         * 
         * INSTALACIÓN DE LIBRERIAS
         * Se entra al proyecto de React
         * abrimos el shell
         * 
         * npm i --save libreria
         * 
         * Una vez instalada quedará en e package-json
         * 
         * npm i prop-types
         * 
         * import PropTypes from 'prop-types'
         */


         //PROPTYPES
         /**
          * Nos ayudará a validar las propiedades
          * que le pasamos como parametros a los componentes
          * 
          * import PropTypes from 'prop-types';
          * 
          * Se busca el elemento a exportar
          * y se escribe con propTypes en minuscula
          * a modo de objeto
          * elementoAExportar.propTypes = {
          * Se llaman los parametros como propiedades, 
          * y como valor PropTypes.tipoDeDato
          * param1: PropTypes.number.isRequired,
          * //El requerido dicta que no puede ser nulo
          * param2: PropTypes.string.isRequired
          * }
          * 
          * Los errores aparecen en la consola
          * del navegador.
          * 
          * Para agilizar la manera de escribir 
          * hay que descargar la extension React js code snippets
          * 
          * Elemento.propTypes = {
          *   valorValidar = ptsr => PropTypes.string.isRequired,
          *   valorValidar2 = ptnr => PropTypes.number.isRequired,
          * }
          */


          //Para Ordenar todo se puede refactorizar por carpetas
          //Y llamar a la carpeta, al llamar a la carpeta por default
          //buscara un archivo que se llame index.js




          //AGREGAR CSS A REACT

          /***
           * Para agregar estilos a React se crea el archivo 
           * css dentro de nuestros componentes
           * 
           * y luego se importa en el archivo js de React 
           * con import './ruta'
           * 
           * Para hacer referencia a las clases en JSX
           * como si fuera html en vez de class="", colocaremos
           * className = ""; y editaremos en el css normalmente
           *
           * El css pasa por webpack dónde simplifica el peso 
           * el código, y lo pasa todo a un archivo llamado bundle.js
           * 
           * 
           */


           //DOBLE DESTRUCTURING

           /***
            * 
            * Para objetos complicados, de diferentes niveles se puede hace run doble destructurin
            *  const data {temperature : 20 , wind, 2000, height : 40}
            *  <Wheater temperature={temperature}></Wheater> 
            *
            *   const Wheater = ({data : {temperature, wind, height})=>{
            *     <WheaterOther temperature={temperature}></WheaterOther>
            *     <WheaterOtherOther wind={wind} height={height}></WheaterOtherOther>
            *   }
            */


            //COMPONENTES

            /**
             * REACT MANEJA DIFERENTE TIPOS DE COMPONENETES
             *    Componentes de clase: 
             *      *Importa react con {component}
             *      * Es una clase que extiende Component
             *      * Tiene el metodo render(), antes del return de los valores
             *        
             * 
             *  Componentes de función O Funcional
             *      * Sólo se define mediante una arrow function lo que
             *        se dibujará en pantalla
             *      * NO TIENE EL METODO RENDER
             *          Cómo pasar un funcional a un componente de clase:
             *            import React, {component} from 'react';
             * 
             *            class WeatherLocation extends Component{
             *                render(){
             *                    return (
             *                    <Location></Location>
             *                      ); 
             *                  }             
             *              }
             *    
             * 
             * AMBOS COMPONENTES EQUILVADRÍAN A LO MISMO, SI SE PASA DE UNO A OTRO
             * CORRECTAMENTE NO DEBERÍA GENERAR CAMBIOS
             * 
             * 
             *    Para realizar acciones y ejecutar funciones en un componenete
             *    de clase, necesitamos poner un constructor al componente, un super que herede la
             *    super clase constructor
             *    Para ayudar a que el componente se renderize
             *    ponemos this.state ={
             *     }
             *      que mostrará el estado actual de nuestro componente
             * 
             *    class WeatherLocations extends Component{
             *      constructor(){
             *        super(); 
              *        this.state = {
              *           city : 'bog',
              *           data: data, 
      
              *       };
                  Para actualizar un state, hay que utilizar setState()
                  Solo hay que necesidad de pasar los datos que se modifican
                  handleUpdate = ()=>{
                      this.setState(){
                        city : 'OTRAcity'
                        data: data2
                      }
                    }
             *       }
             *    }
             * 
             * 
             * CONSUMIR API'S REST EN REACT.JS
             * 
             * En este caso consumires la api de 
             * openweathermap
             * 
             * Primero que todo hay que crearse una
             * cuenta, y la pagina nos dará una key
             * única, la cual nos dará acceso a los
             * datos.
             * La pagina utiliza diferentes formas
             * de saber los datos
             * https://openweathermap.org
             * 
             * En este caso usaremos el de escribir
             * el nombre de la ciudad que queremos el 
             * clima, al igual que idApp que e sla key
             * que nos proporcionaron
             *
             *  KEY : 0cb9ddb1ffcf4270090d9a9f2cbb3738
             *  url para acceder a datos : http://api.openweathermap.org/data/2.5/weather?q=[location]&appid=[KEY]
             * 
             * 
             * 
             * 
             * 
             * 
             * 
             * 
             */
