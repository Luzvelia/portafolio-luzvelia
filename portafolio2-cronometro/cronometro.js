//Declaracion de variables

let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let comenzarCronometro = null;
let vueltasLista = [];

let spanMinutos = document.getElementById("minutos");
let spanSegundos = document.getElementById("segundos");
let spanMilisegundos = document.getElementById("milisegundos");
let listaDeVueltas = document.getElementById("listaDeVueltas");


let botonIniciar = document.getElementById("btnIniciar");
let botonPausar = document.getElementById("btnPausar");
let botonReiniciar = document.getElementById("btnReiniciar");
let botonVueltas = document.getElementById("btnVueltas");


botonIniciar.addEventListener("click", iniciar);
botonPausar.addEventListener("click", pausar);
botonReiniciar.addEventListener("click", reiniciar);
botonVueltas.addEventListener("click", vueltas);

//Funciones auxiliares para normalizar texto y para mostrar los tiempos desde el HTML
function normalizarTexto(texto){
    texto = "0" + texto;
    return texto.slice(-2);
}


function mostrarTiempos(){
    spanMinutos.innerHTML =  normalizarTexto(minutos);
    spanSegundos.innerHTML = normalizarTexto(segundos)
    spanMilisegundos.innerHTML = normalizarTexto(milisegundos)
}

// Funcion para Iniciar
function iniciar(){

    let incrementarMinutos = () => {
        if(minutos < 99) minutos++

        spanMinutos.innerHTML = normalizarTexto(minutos);
    }   

    let incrementarSegundos = ()  => {
        if(segundos === 59) {
            segundos =  0;
            incrementarMinutos();
        } else {
            segundos++;
        }  
        
        spanSegundos.innerHTML = normalizarTexto(segundos);
    }  

    let incrementarMilisegundos = () => {
        if(milisegundos === 99){
            milisegundos = 0;
            incrementarSegundos();
        } else{
            milisegundos++;
        }

        spanMilisegundos.innerHTML = normalizarTexto(milisegundos);
    } 

    comenzarCronometro = setInterval(incrementarMilisegundos, 10);
}

// Funcion para Pausar
function pausar(){
    clearInterval(comenzarCronometro);
}


// Funcion para reiniciar
function reiniciar(){
    clearInterval(comenzarCronometro);
    minutos = 0;
    segundos = 0;
    milisegundos = 0;

    vueltasLista = [];
    mostrarLista()
    mostrarTiempos();
}

// Funcion para vueltas
function vueltas(){
    let tiempoDeVuelta = {
        minuto: minutos,
        segundo: segundos,
        milisegundo: milisegundos,
    }

    vueltasLista.push(tiempoDeVuelta);
    mostrarLista()
}

//Funcion para mostrar la lista de las vueltas en el HTML
function mostrarLista(){
    listaDeVueltas.innerHTML = "";
    let i = 0;
    for (const vuelta of vueltasLista){
        i++
        listaDeVueltas.innerHTML = listaDeVueltas.innerHTML + `
        <li class="lista">${i}. vuelta: 
        ${normalizarTexto(vuelta.minuto)}
        :${normalizarTexto(vuelta.segundo)}
        :${normalizarTexto(vuelta.milisegundo)}</li>`
    } 
}

