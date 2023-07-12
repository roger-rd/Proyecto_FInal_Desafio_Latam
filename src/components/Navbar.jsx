import "../assets/css/navbarFooter.css";
import { NavLink,Link, useNavigate} from "react-router-dom";

// import icon from '../assets/img/icon-pizza-2.png'
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
                {/* <div className="p-1 flex-grow-1 icon">
                    <img src={icon} alt="" width={70} />
                </div> */}
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
            </div> 
        </nav>
    );
}
