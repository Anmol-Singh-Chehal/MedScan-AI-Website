import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Detection from './pages/Detection'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import { Route, Routes } from 'react-router-dom'
import GoPageTopButton from './components/GoPageTopButton'
import SignUp from './pages/SignUp'

export default function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detection' element={<Detection/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>

        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>

      <Footer/>
      <GoPageTopButton/>
    </>
  )
}
