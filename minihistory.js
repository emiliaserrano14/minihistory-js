
window.onload = function() {
    document.getElementById("boton").onclick = history
}

function history () { 
    let nom1 = document.getElementById("nom1").value;
    let nom2 = document.getElementById("nom2").value;
    let nom3 = document.getElementById("nom3").value;
    let nom4 = document.getElementById("nom4").value;

    document.write(`Esta es la historia de: ${nom1} , ${nom2} y sus amigos  
 <br> <br> <b>  El amor y la distancia </b><br> <br>
 ${nom1} y ${nom2} se conocieron en Rusia y se casaron en 1974, poco tiempo después tuvieron que viajar a europa debido a que su amigo ${nom3} perdió su visa y tuvo que salir de la Unión Soviética. ${nom4} es otro de los amigos de ${nom1} y ${nom2} el cual trató de entrar a Moscú después de 11 años, manteniendo su relación por medio de cartas y fotos, hasta que en 1986 tanto ${nom3} como ${nom4} aceptaron ir a Baltimore y reunirse con sus amigos (la pareja de esposo). ellos los recibieron con los brazos abiertos en el aeropuerto y estuvieron juntos desde entonces. 10 años de separación
`)
 

}





  