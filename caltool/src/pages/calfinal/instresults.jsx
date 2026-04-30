import KagamiExp from "../../assets/img/KagamiExp.png"
import KagamiNice from "../../assets/img/KagamiNice.png"
import KagamiStudy from "../../assets/img/KagamiStudy.png"
import KagamiSad from "../../assets/img/KagamiSad.png"
import KagamiCarefree from "../../assets/img/KagamiCarefree.png"
import KagamiShock from "../../assets/img/KagamiShock.png"
import KagamiOop from "../../assets/img/KagamiOop.png"

function InstResults({ showResults, final, emptyCalif, percentagedNecessary }){
    // No pregunten por el árbol genealógico de ifs...
    if(showResults === true){
        if(final > 9){
            return(
                <div className="results-container">
                    <div className="c-heading">
                        <h2>Resultados (⌒ω⌒)</h2>
                        <p>Tu calificación final es de:</p>
                        <p className="passed">{final}</p>
                        <img src={KagamiNice} alt="Kagami relaxing" className="kagami"/>
                    </div>
                </div>
            );
        };

        if(final >= 7){
            return(
                <div className="results-container">
                    <div className="c-heading">
                        <h2>Resultados ( = ⩊ = )</h2>
                        <p>Tu calificación final es de:</p>
                        <p className="passed">{final}</p>
                    </div>
                </div>
            );
        } else{
            if (emptyCalif === 0 && final <= 5) {
                return(
                    <div className="results-container">
                        <div className="c-heading">
                            <h2>Ummm...</h2>
                            <p>Tu calificación final es de:</p>
                            <p className="failed">{final}</p>
                            <img src={KagamiSad} alt="Kagami crying" className="kagami"/>
                        </div>
                    </div>
                )
            }

            if (emptyCalif === 0) {
                return(
                    <div className="results-container">
                        <div className="c-heading">
                            <h2>Ummm...</h2>
                            <p>Tu calificación final es de:</p>
                            <p className="failed">{final}</p>
                        </div>
                    </div>
                )
            } else{
                if (percentagedNecessary >= 10) {
                    return(
                        <div className="results-container">
                            <div className="c-heading">
                                <h2>Resultados ( ╥ω╥ )</h2>
                                <p>Tu calificación <b>hasta ahora</b> es de:</p>
                                <p className="failed">{final}</p>
                                <p>Y necesitas</p>
                                <p className="necessary">{percentagedNecessary}</p>
                                <p>para poder pasar...</p>
                            </div>
                        </div>
                    )
                } else {
                    if (percentagedNecessary <= 7) {
                        return(
                            <div className="results-container">
                                <div className="c-heading">
                                    <h2>Resultados (￣ω￣)</h2>
                                    <p>Tu calificación <b>hasta ahora</b> es de:</p>
                                    <p className="failed">{final}</p>
                                    <p>Y necesitas</p>
                                    <p className="necessary">{percentagedNecessary}</p>
                                    <p>para poder pasar. No deberías tener mayor problema</p>
                                </div>
                             </div>
                    )   
                    } else {
                        return(
                            <div className="results-container">
                                <div className="c-heading">
                                    <h2>Resultados (￣ω￣;)</h2>
                                    <p>Tu calificación <b>hasta ahora</b> es de:</p>
                                    <p className="failed">{final}</p>
                                    <p>Y necesitas</p>
                                    <p className="necessary">{percentagedNecessary}</p>
                                    <p>para poder pasar. Tal vez quieras intentar un poco más la próxima vez...</p>
                                </div>
                             </div>
                        )   
                    }
                }
            }
        };
    };

   return (
        <div className="results-container">
            <div className="c-heading">
                <h2>Calculadora de Calificación Final</h2>
            </div>

            <p>Ingresa <b>tu calificación</b> en cada parcial para obtener tu calificación final.</p>
            <p>Si necesitas salvar el semestre,<b> puedes dejar el tercer parcial vacio</b> para saber cuanto necesitas para poder panzar.</p>
            <img src={KagamiExp} alt="Kagami explaining" className="kagami"/>
        </div>
    );
}

export default InstResults;