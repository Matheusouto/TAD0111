import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-azul-escuro fixed-top">
                <a className="navbar-brand ml-4" href="#">TADS - UFRN</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-4">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/"}> Apresentação </Link>                        
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Ensino
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                <a className="dropdown-item" href="#">Currículos</a>
                                <a className="dropdown-item" href="#">Monografias</a>
                                <a className="dropdown-item" href="#">Artigos</a>
                                <a className="dropdown-item" href="#">Memoriais</a>
                                <a className="dropdown-item" href="#">Outros</a>
                                <a className="dropdown-item" href="#">Turmas</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/calendario"}> Calendário </Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/projeto"}> Projeto pedagógico do curso </Link>
                        </li>
                        <li className="nav-item">
                            < Link  className="nav-link" to={"/noticias"}>Notícias</Link>
                        </li>
                        <li className="nav-item">
                            < Link  className="nav-link" to={"/formularios"}>Formulários</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle azul-claro" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-globe"></i>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                    <a className="dropdown-item" href="#">Ingles</a>
                                    <a className="dropdown-item" href="#">Espanhol</a>
                                    <a className="dropdown-item" href="#">Frances</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
export default Navbar;