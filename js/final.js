document.addEventListener("DOMContentLoaded", () => {
    let botonReset = document.getElementById("botonReset");

    botonReset.addEventListener("click", () => {
        location.reload(); 
    });
});

function calcularfinal() {
    let mensaje1 = document.getElementById("mensaje");
    let calpar = document.getElementById("caltotal");
    let mensaje2 = document.getElementById("mensaje2");
    let nec = document.getElementById("nec");
    let crit = document.getElementById("crit");

    mensaje2.style.display = "none";
    nec.style.display = "none";
    crit.style.display = "none";

    let calif = [
        document.getElementById("primerp").value,
        document.getElementById("segundop").value,
        document.getElementById("tercerp").value
    ];

    let calVacia = calif.map(valor => {
        if (valor === "") {
            return null;

        } else {
            return parseFloat(valor);
        }
    });

    let tieneVacios = calif.some(valor => valor === "")

    if (tieneVacios) {
        mensaje = "Tu calificacion final hasta ahora es de:"
        mensaje2.style.display = "block";
        nec.style.display = "block";
    } else {
        mensaje = "Tu calificación final es de:"
    }

    let productos = calif.map((califOrig, index) => {
        if (index === 0) {
            return califOrig * 0.30;
        } else {
            return califOrig * 0.35;
        }
    });
    let calFinal = productos.reduce((acc, valorActual) => acc + valorActual, 0);

    mensaje1.style.display = "block";
    calpar.style.display = "block";
    document.getElementById("caltotal").textContent = calFinal.toFixed(1);
    document.getElementById("mensaje").textContent = mensaje;
    document.getElementById("titulo").textContent = 'Resultados'
    document.getElementById("instrucciones").style.display = "none";
    document.getElementById("botonReset").style.display = "block";

    if  (calFinal <= 6.9) {
        document.getElementById("caltotal").style.color="#8a0a0a"
    } else {
        document.getElementById("caltotal").style.color="#2aad09"
    }

    let calnec = 7 - calFinal;

    for (let i = 0; i < calVacia.length; i++) {
        if (calVacia[i] === null) {
            let valorFaltante = calnec / 0.35;
            nec.textContent = valorFaltante.toFixed(1);
            nec.style.display = "block";

            if (valorFaltante <10) {
                crit.textContent = `en el parcial faltante para panzar.`;
                crit.style.display = "block";
            } else {
                crit.innerHTML = `en el parcial faltante para aprobar. Por lo que es <b>IMPOSIBLE</b> poder pasar.`;
                crit.style.display = "block";
            }
            
        }
    }
}