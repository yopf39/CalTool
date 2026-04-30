function Input({ onChangeP1, onChangeP2, onChangeP3, calcularButton, showResults }) {
    return (
        <div className="input-container results-pop">
            <div className="general-container">
                <div className="c-heading">
                    <h2>Primer parcial</h2>
                </div>

                <div className="input-container">
                    <input 
                    type="number" 
                    min="0"
                    max="10" 
                    onChange={(e) => onChangeP1(e.target.value)} 
                    placeholder="Calificación"/>
                </div>
            </div>

            <div className="general-container">
                <div className="c-heading">
                    <h2>Segundo Parcial</h2>
                </div>

                <div className="input-container">
                    <input 
                    type="number" 
                    id="p2" 
                    min="0" 
                    max="10" 
                    onChange={(e) => onChangeP2(e.target.value)} 
                    placeholder="Calificación"/>
                </div>
            </div>

            <div className="general-container">
                <div className="c-heading">
                    <h2>Tercer Parcial</h2>
                </div>

                <div className="input-container">
                    <input 
                    type="number" 
                    id="p3" 
                    min="0" 
                    max="10" 
                    onChange={(e) => onChangeP3(e.target.value)} 
                    placeholder="Calificación"/>
                    </div>
                </div>

            <button className="calculate-button" onClick={calcularButton}>
                {showResults ? "Reiniciar" : "Calcular!"}
            </button> 
        </div> 
    );
}

export default Input;