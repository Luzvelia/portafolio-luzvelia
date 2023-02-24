let listaTareas = [];
let descripcion;
let hora; 

function agregarTarea(){
    let descripcion = document.getElementById("descripcionTarea").value;
    let hora = document.getElementById("horaTarea").value;
    let fecha = document.getElementById("fechaTarea").value; 
    
    let lista = listaTareas.push("Tarea: " + descripcion + "   / Hora: "  + hora + "  / Fecha:  " + fecha) ;

    limpiarInterno()
    mostrarTarea()
}

function mostrarTarea(){
    let verTareas = document.getElementById("verTareas"); 
    
    let contador = 0;
    for(const tarea of listaTareas){
        verTareas.innerHTML += "<div class='caja_tareas'>" + "<input type='checkbox' class='check' value='"+ contador +"' >" + tarea + "</div>";
        contador++;
    }
}

function limpiarTarea(){
    const checks = document.getElementsByClassName("check");

    for(const elemento of checks){
        const checkClick = elemento.checked;
        if(checkClick === true){
            const valor = elemento.value
            listaTareas.splice(valor, 1);

        }
    }

    limpiarInterno();
    mostrarTarea();
}

function limpiarInterno(){
    let verTareas = document.getElementById("verTareas"); 
    verTareas.innerHTML = "";

}


// CALLBACKS
// function

function contador(str, fn) {
    let contadorLetras = 0;
    console.log(fn);
    for(let i = 0; i < str.length; i++) {
        const letra = str[i];
        if(fn(letra)) { // letraCompetente(letra)
            contadorLetras++;
        };
    }

    return contadorLetras;
};

function letraCompetente(letraRecibida) {
    return letraRecibida.toUpperCase() === "E";
}

const letrasE = contador("Hola estoy buscando cuantas letra 'e' existen en este texto", letraCompetente);
const letras = contador("Hola estoy buscando cuantas letra 'e' existen en este texto", function(letra) {
    return letra == "x";
});