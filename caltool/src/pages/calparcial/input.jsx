function Input({ criterios, handleChange, calcularButton, showResults }) {
    return (
        <>
           <div className="input-container">
        {criterios.map((criterio, index) => (
                <div className="general-container" key={index}>
                    <div className="c-heading">
                        <h2>Criterio {index +1}</h2>
                    </div>
                
                    <div className="input-group">
                        <input className="input"
                        type="number" 
                        id="pctg1" 
                        min="0" 
                        max="100" 
                        placeholder="Valor en porcentaje (%)"
                        onChange={(e) => handleChange(index, "porcentaje", e.target.value)}
                        />


                        <input className="input"
                        type="number" 
                        id="cal1" 
                        min="0" 
                        max="10" 
                        placeholder="Calificación"
                        onChange={(e) => handleChange(index, "calificacion", e.target.value)}
                        />
                    </div>
                </div>
                ))}
                <button className="calculate-button" onClick={calcularButton}>
                    {showResults ? "Reiniciar" : "Calcular!"}
                </button>
            </div> 
        </>
    );
}

export default Input;