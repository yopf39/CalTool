import TsukasaSleep from "../../assets/img/TsukasaSleep.png"
import TsukasaSad from "../../assets/img/TsukasaSad.png"

function InstResults({ showResults, agregarButton, eliminarButton, suma, calificacionFaltante, calificacionVacia }) {
    // Sí, árbol genealógico de ifs...
    if (showResults === true) {
        if (suma >= 9) {
            return(
                <div className="results-container">
                    <div className="c-heading">
                        <h2>Resultados (⌒ω⌒)</h2>
                        <p>Tu calificación final (sin auto y co) es de:</p>
                        <p className="passed">{suma}</p>
                        <img src={TsukasaSleep} alt="Tsukasa sleeping" className="tsukasa"/>
                    </div>
                </div>
            );
        }

        if (calificacionVacia > -1) {
            if (calificacionFaltante > 10) {
                return(
                    <div className="results-container">
                        <div className="c-heading">
                            <h2>Ummm...</h2>
                            <p>Tu calificación <b>hasta ahora</b> es de:</p>
                            <p className="failed">{suma}</p>
                            <p>y necesitas</p>
                            <p className="necessary">{calificacionFaltante}</p>
                            <p>para poder pasar... (sin auto y co)</p>
                        </div>
                    </div>
                )
            }

            if (calificacionFaltante >= 8) {
                return(
                    <div className="results-container">
                        <div className="c-heading">
                            <h2>Resultados (￣ω￣;)</h2>
                            <p>Tu calificación <b>hasta ahora</b> es de:</p>
                            <p className="failed">{suma}</p>
                            <p>y necesitas</p>
                            <p className="necessary">{calificacionFaltante}</p>
                            <p>para poder pasar (sin auto y co). Tal vez quieras intentar un poco más la proxima vez.</p>
                        </div>
                    </div>
                )
            } else {
                return(
                    <div className="results-container">
                        <div className="c-heading">
                            <h2>Resultados (￣ω￣)</h2>
                            <p>Tu calificación <b>hasta ahora</b> es de:</p>
                            <p className="failed">{suma}</p>
                            <p>y necesitas</p>
                            <p className="necessary">{calificacionFaltante}</p>
                            <p>para poder pasar (sin auto y co). No deberías tener mayor problema.</p>
                        </div>
                    </div>
                )
            } 

        } else {
            if (suma >= 7) {
            return(
                <div className="results-container">
                    <div className="c-heading">
                        <h2>Resultados ( = ⩊ = )</h2>
                        <p>Tu calificación final (sin auto y co) es de:</p>
                        <p className="passed">{suma}</p>
                    </div>
                </div>
            );
        } else {
            if (suma <= 5) {
                return(
                    <div className="results-container">
                        <div className="c-heading">
                            <h2>Ummm...</h2>
                            <p>Tu calificación final (sin auto y co) es de:</p>
                            <p className="failed">{suma}</p>
                            <img src={TsukasaSad} alt="Tsukasa crying" className="tsukasa"/>
                        </div>
                    </div>
                )
            } else {
                return(
                    <div className="results-container">
                        <div className="c-heading">
                            <h2>Ummm...</h2>
                            <p>Tu calificación final (sin auto y co) es de:</p>
                            <p className="failed">{suma}</p>
                        </div>
                    </div>
                )
            }
        }
        }
        
    } 
    return (
        <>
           <div className="results-container">
                <div className="c-heading">
                    <h2>Calculadora de Parcial</h2>
                </div>

                <p>Ingresa <b>tu calificación</b> en cada parcial para obtener tu calificación final.</p>
                <p>Si necesitas salvar el semestre, <b>puedes dejar el tercer parcial vacío</b> para saber cuanto necesitarás para poder panzar.</p>
        
                <div className="c-heading">
                    <h2>¿Falta un criterio de evaluación?</h2>
                </div>

                <p>Algunas materias evaluan con 4 aspectos, para <b>agregar uno extra</b> haz clic en el botón.</p>
                <button className="adddel-button" onClick={agregarButton}>Agregar</button>
                
                <div className="c-heading">
                    <h2>¿Sobra un criterio de evaluación?</h2>
                </div>

                <p>Algunas materias solo usan 2 aspectos! para <b>quitar uno</b> o eliminar el extra, haz clic en el botón.</p>
                <button className="adddel-button" onClick={eliminarButton}>Eliminar</button>
            </div> 
        </>
    );
}

export default InstResults;