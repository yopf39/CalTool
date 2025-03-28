// Copyright (c) 2025  Yerik Lozano
// Este código está bajo la Licencia MIT.
// Consulta el archivo LICENSE para más detalles.


document.addEventListener("DOMContentLoaded", () => {
    let botonReset = document.getElementById("botonReset");

    botonReset.addEventListener("click", () => {
        location.reload(); 
    });

    let botonAgregar = document.getElementById("agregarCriterio");
    botonAgregar.addEventListener("click", agregarCriterio);

    let botonEliminar = document.getElementById("eliminarCriterio");
    botonEliminar.addEventListener("click", eliminarCriterio);

});

function calcularparcial() {
    event.preventDefault();

    let mensaje1 = document.getElementById("mensaje");
    let calpar = document.getElementById("caltotal");
    let mensaje2 = document.getElementById("mensaje2");
    let nec = document.getElementById("nec");
    let crit = document.getElementById("crit");

    mensaje2.style.display = "none";
    nec.style.display = "none";
    crit.style.display = "none";

    let pcntg = [
        parseFloat(document.getElementById("portafolio").value) / 100,
        parseFloat(document.getElementById("actp").value) / 100,
        parseFloat(document.getElementById("exp").value) / 100

    ];
    
    let calif = [
        document.getElementById("portafolioc").value,
        document.getElementById("actc").value,
        document.getElementById("exc").value

    ];

    if (document.getElementById("actividades").style.display === "none") {
        pcntg = pcntg.map(valor => isNaN(valor) ? 0 : valor);
        if (isNaN(parseFloat(calif[1])) || calif[1] === "") {
            calif[1] = 0; 
        } else {
            calif[1] = parseFloat(calif[1]); 
        }
    }

    if (contadorCriterios === 4) {
        let porcentajeExtra = parseFloat(document.getElementById("critp4").value) / 100;
        let calificacionExtra = parseFloat(document.getElementById("critc4").value);

        pcntg.push(porcentajeExtra);
        calif.push(calificacionExtra);
    }

    console.log(pcntg)

    let totalPorcentaje = pcntg.reduce((total, porcentaje) => total + porcentaje, 0);
    totalPorcentaje = parseFloat(totalPorcentaje.toFixed(1));
    console.log(totalPorcentaje)

    if (totalPorcentaje !== 0.9) {
        alert("Los porcentajes deben sumar 90%");
        return; // Detenemos si no se cumple
    }

    let nocalto0 = calif.map(valor => {
        if (valor === "") {
            return null;

        } else {
            return parseFloat(valor);
        }
    });

    let tieneVacios = calif.some(valor => valor === "")

    if (tieneVacios) {
        mensaje = "Tu calificacion hasta ahora (con auto y coevaluación) es de:"
        mensaje2.style.display = "block";
        nec.style.display = "block";
    } else {
        mensaje = "Tu calificación (con auto y coevaluación) es de:"
    }

    let productos = pcntg.map((porcentaje, i) => porcentaje*nocalto0[i]);

    let calparcial = productos.reduce((acumulador, valor) => acumulador+valor, 0) +1;

    mensaje1.style.display = "block";
    calpar.style.display = "block";
    document.getElementById("caltotal").textContent = calparcial.toFixed(1);
    document.getElementById("mensaje").textContent = mensaje;
    document.getElementById("titulo").textContent = 'Resultados'
    document.getElementById("instrucciones").style.display = "none";
    document.getElementById("instrucciones1").style.display = "none";
    document.getElementById("instrucciones2").style.display = "none";
    document.getElementById("botonReset").style.display = "block";

    if  (calparcial < 7) {
        document.getElementById("caltotal").style.color="#8a0a0a"
    } else {
        document.getElementById("caltotal").style.color="#2aad09"
    }

    let calnec = 7 - calparcial;

    for (let i = 0; i < nocalto0.length; i++) {
        if (nocalto0[i] === null) {
            let valorFaltante = calnec / pcntg[i];
            nec.textContent = valorFaltante.toFixed(1);
            nec.style.display = "block";

            if (valorFaltante <10) {
                crit.textContent = `en el criterio faltante para panzar.`;
                crit.style.display = "block";
            } else {
                crit.innerHTML = `en el criterio faltante para aprobar. Por lo que es <b>IMPOSIBLE</b> poder pasar.`;
                crit.style.display = "block";
            }
            
        }
    }

}

let contadorCriterios = 3;

function agregarCriterio() {
    contadorCriterios++

    if (contadorCriterios > 4) {
        alert("¡Solo puedes tener hasta 4 criterios!");
        contadorCriterios = 4
        return;
    }
    let contenedor = document.getElementById("principal");

    let criterio4 = document.createElement("div");
    criterio4.classList.add("inner-container");

    let inputgrp = document.createElement("div");
    inputgrp.classList.add("input-group")
    let numerocriterios = inputgrp.children.length + 1;

    let nombre = document.createElement("h2");
    nombre.textContent = "Criterio extra";
    criterio4.appendChild(nombre);

    let inputpcntg = document.createElement("input");
    inputpcntg.type = "number";
    inputpcntg.id = `critp${contadorCriterios}`
    inputpcntg.name = "criterio4p"
    inputpcntg.min = "0"
    inputpcntg.max = "100"
    inputpcntg.placeholder = "Valor en porcentaje (%)"
    inputpcntg.classList.add("form-input");

    let inputcal = document.createElement("input");
    inputcal.type = "number";
    inputcal.id = `critc${contadorCriterios}`
    inputcal.min = "0"
    inputcal.max = "10"
    inputcal.placeholder = "Calificación"
    inputcal.classList.add("form-input");

    inputgrp.appendChild(inputpcntg);
    inputgrp.appendChild(inputcal);
    criterio4.appendChild(inputgrp);
    contenedor.appendChild(criterio4);
}

function eliminarCriterio() {
    contadorCriterios--

    if (contadorCriterios < 2) {
        alert("¡Necesitas 2 criterios mínimo!");
        contadorCriterios = 2
        return;
    } else {
        document.getElementById("actividades").style.display = "none"
    }
}
