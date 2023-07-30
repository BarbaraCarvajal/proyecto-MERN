import React from 'react'

import Hero from '../components/Hero'
import PromoSection from '../components/PromoSection'
import About from '../components/About'
import Servicios from '../components/Servicios/Servicios'
import Caracteristicas from '../components/Caracteristicas'

const Home = () => {
    return (
        <>
            <Hero/>
            <PromoSection/>
            <About/>
            <Servicios/>
            <Caracteristicas/>
        </>
    )
}

export default Home