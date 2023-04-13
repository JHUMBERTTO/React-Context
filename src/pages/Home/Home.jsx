import React from 'react'
import './home.css'
import SongList from '@/components/SongList'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='izquierdo'>
        <SongList />
      </div>
      <div className='derecho'>
        <h2>Lado  Derecho</h2>
      </div>
    </div>
  )
}

export default Home
