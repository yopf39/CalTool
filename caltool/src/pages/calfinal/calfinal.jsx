import { useState } from "react";
import '../../styles/calfinal.css';
import '../../styles/calcs.css';
import './instresults'
import InstResults from './instresults';
import Input from './input';

function CalFinal() {
    const [p1, setP1] = useState("");
    const [p2, setP2] = useState("");
    const [p3, setP3] = useState("");
    
    const [showResults, setShowResults] = useState(false);

    const rawCalifs = [
        p1,
        p2,
        p3
    ];

    const califs = rawCalifs.map(value => {
        if(value === "") {
            return null;

        } else {
           return parseFloat(value); 
        }
    });

    const percentaged = califs.map((value, index) => {
        if(index === 0) {
            return value * 0.30;
        } else {
            return value * 0.35;
        }
    });

    const final = percentaged.reduce((acc, value) => acc + value, 0).toFixed(2);
    const necessary = 7 - final;
    let percentagedNecessary

    const emptyCalif = califs.filter(value => value === null).length;

    if(califs.indexOf(null) === 0 ){
        percentagedNecessary = (necessary / 0.30).toFixed(2);
    } else {
        percentagedNecessary = (necessary / 0.35).toFixed(2);
    }

    const calcular = () => {
        console.log("ahhhhh", final);
        console.log("ehhhhh", percentagedNecessary);
        console.log("uhhhhhhh", emptyCalif);
    };
    
    const calcularButtonHandler = () => {
        if ((p1 > 10 || p2 > 10 || p3 > 10) && showResults === false) {
            alert("Tus calificaciones no pueden ser mayores a 10!")
        } else {
            if((emptyCalif >= 2 && showResults === false)) {
                alert("No hay suficientes datos!!");
            } else {
                calcular(),
                setShowResults(true);
                }
        
        if (showResults === true) {
            setShowResults(false);
        }
    }};
    
    if ((emptyCalif >= 2 || p1 > 10 || p2 > 10 || p3 > 10) && showResults === true) {
        setShowResults(false);
    }

   return (
        <div className="cf-box">
            <InstResults 
            showResults={showResults}
            final={final}
            emptyCalif={emptyCalif}
            percentagedNecessary={percentagedNecessary}
            />
            <Input 
            onChangeP1={setP1} 
            onChangeP2={setP2} 
            onChangeP3={setP3} 
            showResults={showResults}
            calcularButton={() => {
                calcularButtonHandler();
            }}
            />
        </div>
    );
}

export default CalFinal;