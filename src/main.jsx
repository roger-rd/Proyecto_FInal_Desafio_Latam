import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import UserContextProvider from "./context/UserContext"
import OperationsContextProvider from "./context/OperationsContext";
import PerfilProvider from './context/PerfilContext';

import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <PerfilProvider>
          <OperationsContextProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </OperationsContextProvider>
        </PerfilProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)

