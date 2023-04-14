import './songlist.css'
import { useSongContext } from '@/context/SongContext'

const SongList = () => {
  const context = useSongContext()
  return (
    <div className='container'>
      {
        context.loading
          ? <h1>Cargando...</h1>
          : context.list.filter(song => {
            if (context.search === '') {
              return song // Si la busqueda es vacia, vamos a retornar todas las canciones
            } else if (song.title.toLowerCase().includes(context.search.toLowerCase())) {
              return song // Retorno la cancion que cumple con el criterio de busqueda
            }
            return null // Ninguna cancion
          }).map((song) => (
            <div
              className='row-song' key={song.id} onClick={() => {
                context.setSelectedSong(song)
              }}
            >
              <h4>{song.title}</h4>
              <p>{song.artist}</p>
            </div>
          ))
      }
    </div>
  )
}

export default SongList
