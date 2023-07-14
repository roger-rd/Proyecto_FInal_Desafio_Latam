import React, { useEffect, useContext,  } from "react";
import { UserContext } from "../context/UserContext";
import { perfilContext } from "../context/PerfilContext";

export default function Perfil() {
  const { setUsuario } = useContext(UserContext);
  const { setUsuarios} = useContext(perfilContext);

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
    </div><div class="container text-center">
        <div class="row">
        <div >
         {/* <Carousel/> */}
                <div className="perfil" >
                    {usuarios.map(item =>(
                        <div className="row-cols-1 row-cols-md-1 " key={item.id} >
                            <div className="col">
                                <div className="card h-100">                          
                                    <div className="card-body">
                                        <h5 className="card-title">{item.nombre}</h5>
                                    </div>
                                    <hr />
                                    <div className="card-footer" >
                                        <h5 className="text-muted">$ {item.correo}</h5>                              
                                    </div>
                                    <div className="buttonHome">
                                        <button className="btn btn-primary" onClick={() => {  
                                            navigate(`/Favoritos/${item.id}`);
                                        }}>Favoritos 👀</button>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    ))}
                </div>
            </div>
          <div class="col-6">Podrás incluir tus MyFood Favoritos, revisar tus ultimos pedidos y más. </div>
        </div>
      </div></>
  );
}
