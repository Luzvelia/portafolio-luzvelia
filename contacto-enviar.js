let boton = document.getElementById("btn");
let botonCerrar = document.getElementById("btnCerrar");
let mensaje = document.getElementById("mensaje");
let contador;

boton.addEventListener("click", abrir, true)
botonCerrar.addEventListener("click", cerrar, false)

function abrir(){
    mensaje.classList.add("mostrarMensaje")
    contador = 0;
    if(contador == 0){
        boton.innerHTML = "Enviado"
    } 
}

function cerrar(){
    mensaje.classList.remove("mostrarMensaje")
    contador = 1;
    if(contador == 1){    
        boton.innerHTML = "Enviar"
    } 
}

