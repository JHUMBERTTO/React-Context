import React from 'react'
import './home.css'
import SongList from '@/components/SongList'
import SongDetails from '@/components/SongDetails'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='izquierdo'>
        <SongList />
      </div>
      <div className='derecho'>
        <SongDetails />
      </div>
    </div>
  )
}

export default Home
