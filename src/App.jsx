import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <Home/>
      </main>
    </>
  )
}
