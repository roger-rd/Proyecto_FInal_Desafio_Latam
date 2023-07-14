import { createContext, useState,useEffect} from "react"

export const perfilContext = createContext()

export default function perfilProvider({ children }) {
    const [usuarios, setUsuarios] = useState(null);
    const [error, setError] = useState()
  

    const getData = async () => {
        try {
            const response = await fetch("/usuarios.json")
            if (!response.ok) throw "NO SE PUEDE DESPLEGAR LA INFORMACIÓN"
            const data = await response.json()
            setUsuarios(data)
            
        } catch (error) {
            setError(error)
        }
    }
    


    useEffect(() => {                    //llamada a fx getData() para renderizar 1 vez el sitio
        getData();
    }, [])

    return (
        <perfilContext.Provider value={{usuarios,setUsuarios,error, setError }}>
            {children}
        </perfilContext.Provider>
    )
}

