import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Services from '../pages/Services'
import SignUp from '../pages/SignUp'
import Contact from '../pages/Contact'
import Error from '../pages/Error'
import Developer from '../pages/Developer'
import DevelopersDetails from '../pages/DevelopersDetails'


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/services" element={<Services />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="Developer" element={<Developer />} />
      <Route path="/developer/:id" element={<DevelopersDetails />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  )
}

export default Routers