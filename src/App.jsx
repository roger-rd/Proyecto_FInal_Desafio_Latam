import './App.css'

import { Navigate, Route, Routes } from 'react-router-dom'
import { useLocalStorage } from 'react-use';

import Navbar from './components/Navbar'
import Footer from './components/Footer'


import DetalleMenu from './page/DetalleMenu';
import Registro from './page/Registro';
import Login from './page/Login';
import Menu from './page/Menu';

//rutas protegidas//
import Perfil from './view/Perfil';
import MisPedidos from './view/MisPedidos';
import Favoritos from './view/Favoritos';
import Car from './page/Car';
import ProtectedRoute from './components/ProtectedRoute';




function App() {
  const [user, setUser] = useLocalStorage('user');

  
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/menu" element={<Menu />} />
          <Route path="/detalleMenu/:id" element={<DetalleMenu />} />
          <Route path="/registrarse" element={<Registro />} />
          <Route path="/login" element={<Login />} />

          {/* Rutas protegidas */}
          <Route element={<ProtectedRoute canActivate={setUser}/>}>
          <Route path="/car" element={<Car/>} />
          <Route path="/perfil" element={<Perfil/>} />

          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/misPedidos" element={<MisPedidos />} />
          </Route>

        </Routes>
      </main>
      <Footer />
    </>
  );
}




export default App
