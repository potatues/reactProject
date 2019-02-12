                        //Palabras reservadas para promises
let promesa = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        
        //resolve("Éxito");
        reject("Error brah");
    }, 2000);
});

console.log("Inicia la función");
//Mensaje hace referencia a lo que devolverá
// resolve en este caso Exito
        promesa.then((mensaje)=>{
            console.log(mensaje);
        }).catch((error)=>{
            console.log(error);
        });


