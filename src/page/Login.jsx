import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function RegistroForm() {
  const { setUsuario } = useContext(AuthContext);

  const navigate = useNavigate();
  const [usuario, setUsuarioLocal] = useState({
    email: "",
    password: ""
  });

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuarioLocal({ ...usuario, ...field });
  };

  const iniciarSesion = async () => {
    const { email, password } = usuario;
    try {
      if (!email || !password) return alert("Email y password obligatorias");
      setUsuario(usuario); 
      localStorage.setItem("usuario", JSON.stringify(usuario));
      navigate("/perfil");
      alert("Usuario identificado con éxito 😀");
    } catch (error) {
      alert("Email o Password incorrecto 🙁, intente nuevamente");
      console.log(error);
    }
  };

  return (
    <div className="col-10 col-sm-6 col-md-3 m-auto mt-5">
      <h1>Iniciar Sesión</h1>
      <hr />
      <form>
        <div className="form-group mt-1">
          <label>Email address</label>
          <input
            value={usuario.email}
            onChange={handleSetUsuario}
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            autoComplete="email"
          />
        </div>
        <div className="form-group mt-1">
          <label>Password</label>
          <input
            value={usuario.password}
            onChange={handleSetUsuario}
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            autoComplete="current-password"
          />
        </div>
        <button onClick={iniciarSesion} className="btn btn-light mt-3">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}
