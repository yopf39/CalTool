import { Link } from 'react-router-dom';
import '../styles/header.css'

function Header () {
    return (
        <header>
            <Link to="/" className="headerButton">Inicio</Link>
                <div className="dropdown-btn-header">Calculadoras
                    <div className="dropdown-content">
                        <Link to="/calculadora-parcial">Calculadora de Parciales</Link>
                        <Link to="/calculadora-final">Calculadora de Calificación Final</Link>
                    </div>
                </div>
            <h1 className="header-title">CalTool</h1>
        </header>
    );
}

export default Header;
