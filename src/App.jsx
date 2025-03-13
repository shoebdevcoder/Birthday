import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Main from './pages/Main'
import Video from './pages/Video'
import Note from './pages/Note'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/happyBirthday' element={<Main/>}/>
        <Route path='/rockets' element={<Video/>}/>
        <Route path='/note' element={<Note/>}/>
      </Routes>
    </div>
  )
}

export default App
