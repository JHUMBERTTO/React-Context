// Context tiene que ver con el song manejo de estados globales en react
// Eso quiere decir que nosotros podemos compartir las misma informacion entre diferentes niveles de componentes

import { createContext, useState, useEffect, useContext } from 'react'
import canciones from '@/assets/listaCanciones'

// Para usar context, necesitamos seguir una serie de pasos.

// 1 Creacion del contexto vacio

const SongContext = createContext()

// 2 Creacion del componente proveedor del contexto es decir, maneja de donde se obtiene y como pasa la info.

function SongProvider (props) {
  const [list, setList] = useState([])// Lista de canciones
  const [loading, setLoading] = useState(true)// Ya se cargo la info (Loader)
  const [selectedSong, setSelectedSong] = useState({})
  const [search, setSearch] = useState('')

  // simulo llamada a la API de la lista canciones

  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  const value = {
    list,
    loading,
    selectedSong,
    setSelectedSong,
    search,
    setSearch
  }

  return (
    <SongContext.Provider value={value}>
      {props.children}
    </SongContext.Provider>
  )
}

// 3 Consumidor del contexto, brindara acceso a la data de los componentes

const useSongContext = () => {
  const context = useContext(SongContext)
  return context
}

// 4 Exportar las funciones del Provider y el Consumer para que pueden ser invocados en nuestros componentes

export {
  SongProvider,
  useSongContext
}

// Uso de contexto
// 5 Ahora debemos de ir a componente superior (por ejemplo Home) y envolver a los componentes que necesitan la informacion del contexto
