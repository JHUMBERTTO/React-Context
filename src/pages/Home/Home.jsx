import React from 'react'
import './home.css'
import SongList from '@/components/SongList'
import SongDetails from '@/components/SongDetails'
import { SongProvider } from '@/context/SongContext'

const Home = () => {
  return (
    <div className='home-container'>
      <SongProvider>
        <div className='izquierdo'>
          <SongList />
        </div>
        <div className='derecho'>
          <SongDetails />
        </div>
      </SongProvider>
    </div>
  )
}

export default Home
