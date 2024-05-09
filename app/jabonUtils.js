"use strict";


function calcularIngredientes() {
    var cantidadJabon = parseFloat(document.getElementById("cantidadJabon").value);
    let porcentaje = parseFloat(document.getElementById("porcentaje").value);


    // Fórmulas para calcular los ingredientes (estas son ficticias, debes reemplazarlas con las reales)
    var sosaCáusticaVol = cantidadJabon * 0.086;
    var sosaCáusticaGramos = 2.13 * sosaCáusticaVol;
    var agua = cantidadJabon * 0.457;
    var aceiteCoco = cantidadJabon * 0.457;

    let PPGSOSA = 0.19
    let PPGCOCO = 0.148
    let CostoSosaCaustica = PPGSOSA * sosaCáusticaGramos;
    let CostoAceiteCoco = PPGCOCO * aceiteCoco;
    let CostoTotal = CostoAceiteCoco + CostoSosaCaustica;
    let DineroGanado = CostoTotal * porcentaje;
    let Ganancia = CostoTotal + DineroGanado;
    // Mostrar los resultados
    document.getElementById("cantidadMostrada").textContent = cantidadJabon.toFixed(2);
    document.getElementById("sosaCáustica").textContent = sosaCáusticaGramos.toFixed(2);
    document.getElementById("agua").textContent = agua.toFixed(2);
    document.getElementById("aceiteCoco").textContent = aceiteCoco.toFixed(2);
    document.getElementById("costoJabon").textContent = CostoTotal.toFixed(2);
    document.getElementById("VentaTotal").textContent = Ganancia.toFixed(3);
    document.getElementById("Ganancia").textContent = DineroGanado.toFixed(3);

    // Mostrar la sección de resultados
    document.getElementById("resultados").style.display = "block";
}


function calcularAceite(){
    let cantidadAceite = parseFloat(document.getElementById("cantidadAceite").value);
    let porcentaje = parseFloat(document.getElementById("porcentaje").value);


    let cantidadJabon = cantidadAceite/0.457

    var sosaCáusticaVol = cantidadJabon * 0.086;
    var sosaCáusticaGramos = 2.13 * sosaCáusticaVol;
    var agua = cantidadJabon * 0.457;
    var aceiteCoco = cantidadJabon * 0.457;

    let PPGSOSA = 0.19
    let PPGCOCO = 0.148
    let CostoSosaCaustica = PPGSOSA * sosaCáusticaGramos;
    let CostoAceiteCoco = PPGCOCO * aceiteCoco;
    let CostoTotal = CostoAceiteCoco + CostoSosaCaustica;
    let DineroGanado = CostoTotal * porcentaje;
    let Ganancia = CostoTotal + DineroGanado;
    // Mostrar los resultados
    document.getElementById("cantidadMostrada").textContent = cantidadJabon.toFixed(2);
    document.getElementById("sosaCáustica").textContent = sosaCáusticaGramos.toFixed(2);
    document.getElementById("agua").textContent = agua.toFixed(2);
    document.getElementById("aceiteCoco").textContent = aceiteCoco.toFixed(2);
    document.getElementById("costoJabon").textContent = CostoTotal.toFixed(2);
    document.getElementById("VentaTotal").textContent = Ganancia.toFixed(3);
    document.getElementById("Ganancia").textContent = DineroGanado.toFixed(3);

    // Mostrar la sección de resultados
    document.getElementById("resultados").style.display = "block";
}

function calcularSosa(){
    let cantidadSosa = parseFloat(document.getElementById("cantidadSosa").value);
    let volSosa = cantidadSosa/2.13
    let porcentaje = parseFloat(document.getElementById("porcentaje").value);


    let cantidadJabon = volSosa/0.086

    var sosaCáusticaGramos = cantidadSosa;
    var agua = cantidadJabon * 0.457;
    var aceiteCoco = cantidadJabon * 0.457;

    let PPGSOSA = 0.19
    let PPGCOCO = 0.148
    let CostoSosaCaustica = PPGSOSA * sosaCáusticaGramos;
    let CostoAceiteCoco = PPGCOCO * aceiteCoco;
    let CostoTotal = CostoAceiteCoco + CostoSosaCaustica;
    let DineroGanado = CostoTotal * porcentaje;
    let Ganancia = CostoTotal + DineroGanado;
    // Mostrar los resultados
    document.getElementById("cantidadMostrada").textContent = cantidadJabon.toFixed(2);
    document.getElementById("sosaCáustica").textContent = sosaCáusticaGramos.toFixed(2);
    document.getElementById("agua").textContent = agua.toFixed(2);
    document.getElementById("aceiteCoco").textContent = aceiteCoco.toFixed(2);
    document.getElementById("costoJabon").textContent = CostoTotal.toFixed(2);
    document.getElementById("VentaTotal").textContent = Ganancia.toFixed(3);
    document.getElementById("Ganancia").textContent = DineroGanado.toFixed(3);

    // Mostrar la sección de resultados
    document.getElementById("resultados").style.display = "block";

}
