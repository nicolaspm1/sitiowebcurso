
function test(){

    var destinos = ["Irlanda", " España", " Italia", " Reino Unido", " Alemania", " Austria"]

    var todoUnViajero = document.getElementById("resultado_test") //resultado de test

    var preguntaUno = prompt("Cúal de los siguientes destinos no tiene como moneda el euro?\n" + destinos)
                   

    if (preguntaUno == "Reino Unido" || preguntaUno == "reino unido"){

        alert("Correcto, siguiente pregunta..")
        var preguntaDos = prompt("Menciona la moneda que se maneja en ese destino:")
        
        if(preguntaDos == "Libras" || preguntaDos == "libras"){

            alert("Correcto, siguiente pregunta..")
            var preguntaTres = prompt("En qué otro de esos destinos, aparte de Alemania, se habla alemán?")

            if(preguntaTres == "Austria" || preguntaTres == "austria"){

                alert("Felicidades, aprobaste el test del viajero!!!")
                todoUnViajero.innerHTML = "Eres todo un Wanderlust😎👏.<br>LLevas la pasión de viajar en tu sangre!."
            
            } else{
                alert("Incorrecto!!")
                todoUnViajero.innerHTML = "Has respondido 2/3 preguntas.<br>Nada mal para un viajero👌.."
            }

        } else{
            alert("Incorrecto!!")
            todoUnViajero.innerHTML = "No te preocupes, es solo un Test.<br>Nada que no pueda solucionarse con un gran viaje😉."
        }

    } else{
        alert("Incorrecto!!")
        todoUnViajero.innerHTML = "No has avanzado de la primera ronda😢.<br> Nuestro diagnóstico: Necesitas un viaje😜!!!!"
    }

}
