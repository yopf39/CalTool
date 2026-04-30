import { Link } from 'react-router-dom';

function CalcSelection() {
    return (
        <>
        <div className="general-container">
                <div className="c-heading">
                    <h1>¡Bienvenido a CalTool!</h1><br></br>
                    <h2>Selecciona la calculadora que usarás hoy</h2>
                </div>

                <ol className="calculator-list">
                    <a className="calculator-link" href='/calculadora-parcial'>
                        <li className="calculator-item">
                            <div>
                            <h2>Calculadora de Parcial</h2>
                            <p>Calcula la calificación de una materia este parcial y la calificación necesaria para aprobar.</p>
                            </div>

                            <div className="calculator-image">
                                <img src='/img/parcial.png' />
                            </div>
                        </li>
                    </a>

                    <a className="calculator-link" href='/calculadora-final'>
                        <li className="calculator-item">
                            <div>
                                <h2>Calculadora de Final</h2>

                                <p>Calcula la calificacón final de una materia en el semestre y cuánto necesitas para salvarlo.</p>
                                </div>
        
                                <div className="calculator-image">
                                    <img src='/img/final.png' />
                            </div>
                        </li>
                    </a>
                </ol>
            </div>
        </>
    );
}

export default CalcSelection;