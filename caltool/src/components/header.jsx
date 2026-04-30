import { Link } from 'react-router-dom';
import '../styles/header.css'

function Header () {
    return (
        <header>
            <Link to="/" className="headerButton">Inicio</Link>
                <div className="dropdown-btn-header">Calculadoras
                    <div className="dropdown-content">
                        <a href="/calculadora-parcial">Calculadora de Parciales</a>
                        <a href="/calculadora-final">Calculadora de Calificación Final</a>
                    </div>
                </div>
            <h1 className="header-title">CalTool</h1>
        </header>
    );
}

export default Header;