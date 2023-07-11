import { createContext, useContext, useEffect, useState } from "react"

export const UserContext = createContext()

export default function UserContextProvider({ children }) {

    const [platos, setPlatos] = useState([])
    const [error, setError] = useState()

    const getData = async () => {
        try {
            const response = await fetch("/platos.json")
            if (!response.ok) throw "NO SE PUEDE DESPLEGAR LA INFORMACIÓN"
            const data = await response.json()
            setPlatos(data)
        } catch (error) {
            setError(error)
        }
    }
    

    useEffect(() => {                    //llamada a fx getData() para renderizar 1 vez el sitio
        getData();
    }, [])

    return (
        <UserContext.Provider value={{ platos, setPlatos, error, setError }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);