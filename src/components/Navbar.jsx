import "../assets/css/navbarFooter.css";
import { NavLink,Link, useNavigate} from "react-router-dom";

import icon from '../assets/img/icon-pizza-2.png'
import { useOperationsContext } from "../context/OperationsContext";




export default function Navbar() {

    const activeLink = ({ isActive }) => (isActive ? 'active' : 'undefined')
    const navigate = useNavigate();
    const {FormatCoin, total} = useOperationsContext ()
    // const { usuario, setUsuario } = useContext(Context);
    // const logout = () => {
    // setUsuario(null);
    // localStorage.removeItem("token");
    // navigate("/");
    //};
    
    return (

        <nav>
            <div className=" d-flex ">
                <div className="p-1 flex-grow-1 icon">
                    <img src={icon} alt="pizza" width={70} />
                </div>
                <div className="p-1 navHom">
                    <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} end to="/" >🍕🍝🍔 My Food</NavLink>
                </div>
                <div className="p-1 navHom car">
                    <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} end to="/menu" >Menu</NavLink>
                </div>
                <div className="p-1 navHom car">
                    <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} end to="/registrarse" >Registrarse</NavLink>
                </div>
                <div className="p-1 navHom car">
                    <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} end to="/login" >Iniciar Sesión</NavLink>
                </div>
                <div className="p-1 navHom car">
                    <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} end to="/Car" >🛒{FormatCoin(total)}</NavLink>
                </div>
                
                
                {/* //esto es nuevo del desafio soft///////
                <span className="me-3">
            
            
            
            
            <Link to="/">
                        Inicio
                        <i className="fa-solid fa-house ms-2"></i>
                    </Link>
                </span>

                {!usuario ? (
                    <div>
                        <Link to="/registrarse">
                            <button className="btn m-1 register-btn">Registrarse</button>
                        </Link>

                        <Link to="/login">
                            <button className="btn login-btn">Iniciar Sesión</button>
                        </Link>
                    </div>
                ) : (
                    <div>
                        <Link to="/perfil">
                            <button className="btn  m-1 btn-light">Mi Perfil</button>
                        </Link>
                        <button onClick={logout} className="btn btn-danger">
                            Salir
                        </button>
                    </div>
                )}
            
            
            
            */}
            </div> 

            

        </nav>
    );
}
