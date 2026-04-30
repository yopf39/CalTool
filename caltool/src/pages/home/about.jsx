import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="aboutme-container">
        <div className="general-container">
          <div className="about">
            <h1>¿Qué es CalTool?</h1>
            <p className="p-content">
              CalTool es una herramienta diseñada para calcular de forma rápida y
              sencilla las calificaciones de la UAEH. Permite calcular tanto la
              calificación parcial como la final de cualquier materia, brindándote
              los resultados necesarios para aprobar. Finalmente se quedaron atrás
              los días de hacer los tediosos procesos en la calculadora.
            </p>
            <p>
              Puedes encontrar el código fuente en el{" "}
              <Link to="https://github.com/yopf39/CalTool">Github.</Link>
            </p>
          </div>
        </div>

        <div className="general-container">
            <h1>¿Quién creo tal bendición?</h1>
          
          <div>
            <img className="me" src="img/me.jpg" />
            <p className="p-content">
              Hola, soy Ye/Yerik/Yoyo, lo que sea. Programador novato, músico,
              atleta, diseñador gráfico, YouTuber, animador y estudiante de
              Prepa 4.
            </p>
            <p className="p-content">
              Creé CalTool por la necesidad de tener que calcular calificaciones
              cada mes o tener que despejar la calificación que necesitas en un
              examen para no reprobar. Estos son procesos tediosos y a veces
              lentos que me estaban empezando a desesperar, así que a falta de
              una forma rápida y facíl de hacerlo decidí crearla yo mismo, de
              nada.
            </p>
            <p className="p-content">
              Cualquier sugerencia, comentario o reporte de bugs a mi Instagram:{" "}
              <Link to="https://www.instagram.com/yerik.lozano/">@yerik.lozano</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
