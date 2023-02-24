let reloj = document.getElementById("tiempo");
let fecha = document.getElementById("fecha");

setInterval(function(){
	let tiempo = new Date();

	let horas = tiempo.getHours();
	let minutos = tiempo.getMinutes();
	let segundos = tiempo.getSeconds();
    let diaNoche = "AM";

	if(horas >= 12){
        horas =  horas - 12;
        diaNoche = "PM"
    }
    
    if(horas == 0){
        horas =  12;
    }

    if(minutos < 10){
	    minutos = "0" + minutos;
    }

	if(segundos < 10)
		segundos = "0"+ segundos;

	reloj.innerHTML = horas+" : " +minutos+ " : "+segundos + " " + diaNoche;
},1000);

