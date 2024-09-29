import React from 'react'
import Hero from './Hero/Hero'
import OurServices from './OurService/OurService'
import ExploreNow from './ExploreNow/ExploreNow'
import OurBestsellers from './OurBestsellers/OurBestsellers'

const Home = () => {
    return (
        <section>
            <Hero />
            <OurServices />
            <ExploreNow />
            <OurBestsellers />
        </section>
    )
}

export default Home