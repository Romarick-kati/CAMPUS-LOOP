import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Client from '../Components/Client/Client'
import Reward from '../Components/Reward/Reward'
import Footer from '../Components/Footer/Footer'

const Home = () => {
    return (
        <div>
           <Hero/>
           <Popular/>
           <Client/>
           <Reward/>
           <Footer/>
        </div>
    )
}
export default Home