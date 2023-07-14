import React, { useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Perfil() {
  const { setUsuario } = useContext(UserContext);

  useEffect(() => {
    const usuarioLocalStorage = localStorage.getItem("usuario");
    if (usuarioLocalStorage) {
      // Si hay un usuario registrado en el localStorage, actualiza el contexto
      setUsuario(JSON.parse(usuarioLocalStorage));
    }
  }, []);

  return (
    <><div>
      <h1> <span className="badge bg-secondary">Bienvenid@</span></h1>
    </div><div className="container text-center">
        <div className="row">
          <div className="col-6">Nombre de usuario</div>
          <div className="col-6">Podrás incluir tus MyFood Favoritos, revisar tus ultimos pedidos y más. </div>
        </div>
      </div></>
  );
}
