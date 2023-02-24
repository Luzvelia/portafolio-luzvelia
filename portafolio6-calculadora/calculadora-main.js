// //Uno - Actividad de Calculadora con Do While, If/Else, Switch y funciones 


// let resultado;
// let operadorResultado


// do{
//     let opcionMenu = parseInt(prompt("Bienvenid@ a mi Calculadora, por favor ingresa la opción de la operación que deseas realizar: 1. Suma 2.Resta 3. Multiplicación 4. División"));
//     if((opcionMenu === 1) || (opcionMenu === 2) || (opcionMenu === 3) || (opcionMenu === 4)){

//     let numeroUno  = parseInt(prompt("Ingresa el primer número"));
//     let numeroDos  = parseInt(prompt("Ingresa el segundo número"));

//     switch(opcionMenu){
//         case 1: resultado = numeroUno + numeroDos
//         break;
//         case 2: resultado = numeroUno - numeroDos
//         break;
//         case 3: resultado = numeroUno * numeroDos
//         break;
//         case 4: resultado = numeroUno / numeroDos
//         break;
//     }
//     alert(`El resultado es ${resultado}`);

//         } else{
//             alert("No es una opción valida");
//         }

//         operadorResultado = prompt("¿Quieres realizar otra operación? 1. Sí 2.No")

//     } while (operadorResultado == 1)


// contiene la operacion o resultado parcial

let parcial = "";
let operRealizada = document.getElementById("operacionRealizada");
let textoResult = document.getElementById("textoResultado");
let operadorSeleccionado = "";
let numero = "";
let ultimoDigitoPresionado = "";


function operador(num){
    numero = numero + num;
    parcial = parcial + num;
    operRealizada.innerHTML = parcial;

    //controla la division por 0
    if(numero=='0' && operadorSeleccionado=='/'){
        limpiar();
        textoResult.innerHTML = "Indefinido";
        return;
    }

    //guardar cel tipo de tecla presionada por ultima vez
    if(ultimoDigitoPresionado=='operacion'){
        ultimoDigitoPresionado ='numero'
    }
}

//Detecta cuando se presiona una operacion
function operacion(oper){
    operadorSeleccionado = oper;
    ultimoDigitoPresionado = "operacion";
    parcial = parcial + oper;
    numero = 0;
    operRealizada.innerHTML = parcial;
}

function calculo(){
    // con eval, evaluo la formula matematica que esta en formato string
    parcial = eval(parcial);
    textoResult.innerHTML = parcial;

    // vuelvo a convertir en string por si continua con la formula
    parcial = parcial.toString();
    numero = "";

    operRealizada.innerHTML = parcial;


}
function limpiar(){
    operadorSeleccionado = "";
    parcial = "";
    textoResult.innerHTML = "";
    numero = "";
    operRealizada.innerHTML = 0;
}









