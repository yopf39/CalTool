import { Link } from "react-router-dom";
import { useState } from "react";
import '../../styles/calcs.css';
import Input from './input'
import '../../styles/calparcial.css';
import InstResults from "./instresults";

function CalParcial() {
    const [criterios, setCriterios] = useState([
        { porcentaje: "", calificacion: ""},
        { porcentaje: "", calificacion: ""},
        { porcentaje: "", calificacion: ""},
    ]);

    const [showResults, setShowResults] = useState(false);
    
    // Boton de agregar y botón de quitar
    const agregarCriterio = () => {
        if (criterios.length < 4) {
        setCriterios( [...criterios, { porcentaje: "", calificacion: ""}
        ])
        } else {
            alert("¡Solo puedes tener hasta 4 criterios!");
        }
    };

    const agregarButtonHandler = () => {
        agregarCriterio()
    };

    const eliminarCriterio = () => {
        if (criterios.length > 2) {
            setCriterios( criterios.slice(0, -1))
        } else {
            alert("Necesitas como mínimo 2 criterios!")
        }
    };

    const eliminarButtonHandler = () => {
        eliminarCriterio()
    };

    const handleChange = (index, propiedad, valor) => {
        setCriterios(criterios.map((criterio, i) => {
            if (i === index) {
                return {...criterio, [propiedad]: valor };
            }
            return criterio;
            }
        ));
    }
    
    // Lógica del cálculo
    let calificacionFaltante = null;
    const calificacionVacia = criterios.findIndex(c => c.calificacion === "")
    const parsedCriterios = criterios.map(c => parseFloat(c.porcentaje) / 100 * parseFloat(c.calificacion === "" ? 0 : parseFloat(c.calificacion)))

    const suma = (parsedCriterios.reduce((acc, x) => acc + x, 0) + 1.).toFixed(2);

    if (calificacionVacia > -1) {
        calificacionFaltante = ((7 - suma) / (parseFloat(criterios[calificacionVacia].porcentaje) / 100)).toFixed(2);
    }

    const calcular = () => {
        console.log("ummmm", suma)
        console.log("emmmm", calificacionVacia)
        console.log("ammmm", calificacionFaltante)
    }

    const calcularButtonHandler = () => {
        if (showResults === true) {
            setShowResults(false);
            return;
        }

        if (criterios.some(c => parseFloat(c.calificacion) > 10) && showResults === false) {
            alert("Tus calificaciones no pueden ser mayores a 10!");
            return; 
        }
        
        if((criterios.filter(c => c.calificacion === "").length > 1 && showResults === false)) {
            alert("No hay suficientes datos!!");
            return; 
        }

        if((criterios.filter(c => c.porcentaje === "").length >= 1 && showResults === false)) {
            alert("No hay suficientes datos!!");
            return; 
        }

        if (criterios.reduce((acc, c) => acc + parseFloat(c.porcentaje), 0) > 100) {
            alert("Tus porcentajes suman más de 100%")
            return; 
        }
        
        calcular(),
        setShowResults(true);
   
    }

    if((criterios.filter(c => c.calificacion === "").length > 1 || criterios.filter(c => c.porcentaje === "").length > 1 || criterios.reduce((acc, c) => acc + parseFloat(c.porcentaje), 0) > 100 || criterios.some(c => parseFloat(c.calificacion) > 10)) && showResults === true) {
        setShowResults(false);
    }

    return (
    <>
        <div className="cp-box">
            <Input criterios={criterios}
            handleChange={handleChange}
            calcularButton={() => {
                calcularButtonHandler();
            }}
            showResults={showResults}

            />

            <InstResults
            showResults={showResults}
            suma={suma}
            calificacionFaltante={calificacionFaltante}
            calificacionVacia={calificacionVacia}
            agregarButton={() => {
                agregarButtonHandler();
            }}
            eliminarButton={() => {
                eliminarButtonHandler();
            }}
            />
        </div>
    </>
    );
}

export default CalParcial;