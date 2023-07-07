import './App.css'

import { Route, Routes } from 'react-router-dom'



import Navbar from './components/Navbar'
import Footer from './components/Footer'



import Home from './page/Home';
import Car from './page/Car';
import DetalleMenu from './page/DetalleMenu';
import Registro from './page/Registro';
import Login from './page/Login';
import Menu from './page/Menu';





function App() {
  // const [usuario, setUsuario] = useState(null)

  return (
    <>
        
          <Navbar />
          <main>
            <Routes>

              <Route path='/' element={<Home />} />
              <Route path='/menu' element={<Menu/>}/>
              <Route path='/DetalleMenu/:id' element={<DetalleMenu />} />
              <Route path='/Car/' element={<Car />} />
              <Route path='/registrarse' element={<Registro />} />
              <Route path='/login' element={<Login />} />
              

            </Routes>
          </main>
          <Footer />
          
    </>
  );
}
export default App
