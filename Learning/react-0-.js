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
             *  Traer datos del servidor con la instruccion :
             *      Fetch : trae los datos del server y lo podremos utilizar
             *      dentro del navegador para las cosas que se necesiten
             *      es una instruccion nativa(no se necesitan libreria),
             *      relativa solo para navegadores modernos,
             *      también para navegadores viejos se puede utilizar
             *      Axios
             * 
             * 
             *      Creamos algunas constantes para mejorar la
             *      reuzabilidad
             *      Para consumir la api, necesitamos
             *      //URL BASE                                       LOCACIÓN          KEYUSUARIO                  
             *      http://api.openweathermap.org/data/2.5/weather?q=[location]&appid=[KEY]
             * 
       
             */
                  const name_city = 'Bogota, CO'
                  const key_weather = '0cb9ddb1ffcf4270090d9a9f2cbb3738';
                  const url_api_weather = ' http://api.openweathermap.org/data/2.5/weather';
                   //Uniendo todo
                      //q hace referencia a query
                  const api_weather = `${url_api_weather}?q=${name_city}$appid=${key_weather}`;
                    //PARA QUE NOS PASE LA TEMPERATURA EN GRADOS C°, SE AGREGA
                    //AL FINAL DE LIMK LA PROPIEDAD &units=imperial
                  //UTILIZAMOS FETCH para consumir
                    //Nos devolverá un JSON con los datos del API
                    fetch(api_weather);
                      //Para leer los datos utilizaremos las promises
                      //o promesas

                      /**
                       * Una promesa es un objeto que es utilizado
                       * para peticiones asincronas y representa
                       * un valor que puede estar disponible en el
                       * momento (ahora), en un futuro o nunca, debido
                       * algun tipo de fallo
                       * 
                       * 
                       * Puede encontrarse en algun estado:
                       *  pending (pendiente) : Ni cumplida, ni rechazada
                       *  fulfill (cumplida) : Esta acción se completa satisfactoriamente
                       *  Rejected (fallida) : La operación fallo
                       *    
                       */

                        //Cómo definir una promise
                        //Se crea una variable y se crea un
                        //nuevo objeto de tipo promesa
                        //con dos parametrs, resolve y reject, cuando haya o no ido bien
                        let promesa = new Promise((resolve, reject) =>{
                            //Cuerpo funcion
                              //Ejemplo de un peticion que tardara dos segundos en llegar
                              //y llamar a resolve con el msj exito total
                            setTimeout(() =>{
                              //Opcion con then  resolve("Exito total!");
                              //Opcion con catch reject("error tota");
                              resolve("Exito total")
                             }, 2000);
                        }); 

                        console.log("Ahora comienza");
                        //Ejecutar promesa con la la palabra reservada then
                       // si se ejcuta correctamente, en caso de que se ulticé resolve
                        ///mensaje hace referencia a lo que devuelve resolve,
                        //si se utilizara reject no pasaria por .then
                          promesa.then((mensaje) =>{
                                console.log(mensaje);
                            }).catch((error)=>{
                               //Para atrapar un reject se utiliza el catch
                                 console.log(error); 
                             });

                          /***
                           * 
                           * fetch(url) devuelve una promise pero aún no devuelve el resultado que
                           * se espera
                           * 
                           * como fetch devuelve una promise hay que manejarlo
                           * con then y catch; debugger nos permitirá
                           * poner un breakpoint;            
                           * Con esto nos devolvera los headers, más
                           * no nos dará datos referentes al clima,
                           * para acceder a ellos daremos 
                           * un return resolve.json()
                           * lo que nos devolverá una nueva promise,
                           * para ellos concatamos otro then para obtener
                           * el resultado de la promise
                
                           */
                           fetch(url).then((resolve)=>{
                                console.log(resolve);
                                
                                 return resolve.json()
                             }).then((result)=>{
                                //Recibimos un JSON con todos los datos del clima
                                console.log(result);
                                  debugger;
                           });
                           //TRANFORMACIÓN DE LOS DATOS QUE RECIBIMOS
                            /***
                             * 
                             * Crear función
                             * 
                             * getWeatherState = weatherData => {
                             *  return SUN;
                             * }
                             * 
                             * getData =  weather_data =>{
                             *  const { humidity, temp, } = weather_data.main;
                             *  const {speed} = wheaher_data.wind;
                             *  const {weatherState} =  this.getWeatherState(weather_data);
                             *   const data = {
                             *    humidity,
                             *    temperature: temp,
                             *    weatherState,
                             *    wind: `${speed}m/s`
                             *    }
                             * return data;
                             * }
                             * 
                             * 
                             */



                                //PATRÓN DE DISEÑO SOLID

                                /**
                                 * 
                                 * SOLID
                                 * 
                                 * 1. S = Single responsability => Cada una de las clases
                                 * tiene que tener una unica responsabilidad para poder tener
                                 * el meno rnivel de acomplamiento, para que después pueda
                                 * ser transformada.
                                 * 
                                 * Separar todas los métodos anexos a JSX, para hacer
                                 * un mejor acoplamiento.
                                 * 
                                 * 
                                 */


                                 //EVENTOS DE CICLO DE VITA DE COMPONENTE REACT

                                 /***
                                  * 
                                  * Ciclo de vida inicializacion:
                                  * 
                                  *     - Constructor 
                                  *     -unsafe componentWillMount()
                                  *     - render()
                                  *     - componentDidMount()
                                  * 
                                  * Ciclo de vida actualización :
                                  * 
                                  *     -unsafe componentWillUpdate()
                                  *     -render
                                  *     -componentDidUpdate()
                                  * 
                                  * 
                                  * 
                                  *   shortcut cdm = 
                                  *   componentDidMount(){
                                  *     //Ejecutar funciona o generar información
                                  *     después que se renderize la pagina
                                  *   }
                                  * 
                                  *   shortcut cdup = 
                                  *   componentDidUpdate(prevProps, prevState){
                                  *     //Ejecutar funciona o generar información
                                  *     después que se ejecute una actualización
                                  *   }
                                  * 
                                  *   shortcut cwm= no usar
                                  *   componentWillMount(){
                                  *   
                                  *   }
                                  *   
                                  *   shortcut cwup = no usar
                                  *   componentWillUpdate(prevProps, prevState){
                                  *     
                                  *   }
                                  */


                                  /***
                                   * 
                                   * MATERIAL UI.com (Librería gráfica)
                                   * Para funcionar correctamente
                                   * hay que importar la fuente 
                                   * <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
                                   * 
                                   * npm i @material-ui/core
                                   * 
                                   * 
                                   * ESLint extension: Es una herramienta para checkear el codigo estatico
                                   * código correcto en forma, 
                                   * 
                                   * 
                                   * Cuando se generan varios componentes
                                   * con la msima estructura, aparecerá un 
                                   * error en consola, especificando que 
                                   * los componentes no tienes keys
                                   * prestablecidas.
                                   * 
                                   * Para solicionar el el loop que crea los
                                   * componentes , y especificamente en el componente
                                   * se pone l propiedad key, recomendable dejar a, sí this.state = {
                                     un nombre único
                                   };
                                   * 
                                   * cities.map((a) => <Component key={a} atribu= {a} />)
                                   */
                                      //COMUNICACIÓN ENTRE COMPONENTES
                                      /****
                                       * 
                                       * Burbujeo de acciones : Renderiza segun la accion realizada,
                                       *  a otro lado comprendiendo el estado actual donde se ha ejecutado
                                       * la acción
                                       * 
                                       * 
                                       * 
                                       */


                                  //FLEXBOX CON REACT

                                  /***
                                   * 
                                   * Se pueden utilizar diferentes librerias para crear el flexbox,
                                   * o por el contrario utilizar el flebox de css
                                   * 
                                   * npm i react-flexbox-grid
                                   * 
                                   * import {Grid, Row, Col} from 'react-flexbox-grid';
                                   * 
                                   * Utiliza la mecanica basica de Bootstrap divide en 12 cols
                                   * 
                                   *  <Grid fluid> //Fluid = para que tenga padding en los laterales
                                   *    <Row>
                                   *      <Col xs={12} sm={6} md={4} lg={2} >
                                   * 
                                   *      </Col>
                                   *      <Col xs={12} sm={6} md={4} lg={2} >
                                   * 
                                   *      </Col>
                                   *    </Row>
                                   *  </Grid>
                                   * 
                                   *   <Grid fluid> 
                                   *    <Row>
                                   *      <Col xs> Dejar que se ajusten automaticamente, siempre ocuparan una sola linea
                                   *      </Col>
                                   *      <Col xs >
                                   *      </Col>
                                   *    </Row>
                                   *  </Grid>
                                   * 
                                   *   <Grid fluid> 
                                   *    <Row>
                                          * Se utiliza para comenzar a dibujar despues de las
                                          *  columnas que especificamos, en este caso 3.
                                   *      <Col xsOffset={3}> xs </Col>
                                   *      <Col xs >
                                   *      </Col>
                                   *    </Row>
                                   *  </Grid>
                                   * 
                                   *    <Grid fluid> 
                                   *    <Row start='xs'>
                                         
                                   *    Ya que no completan las 12 columnas
                                        podemos utilizar un alimiento, para donde
                                        queramos que se alineen.
                                        Con : start, center o end.

                                        También podrías hace runa distribución de espacio a pesar
                                        de no tener las 12 cols, con : around='xs', 

                                        Para no dejar espacios equivalente a los lados con : between='xs'

                                   *      <Col xs={2}></Col>
                                   *      <Col xs={2} >
                                   *      </Col>
                                   *    </Row>
                                   *  </Grid>
                                   * 
                                   * 
                                   * 
                                   * 
                                   * 
                                   */