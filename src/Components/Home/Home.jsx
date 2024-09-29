import React from 'react'
import Hero from './Hero/Hero'
import OurServices from './OurService/OurService'
import ExploreNow from './ExploreNow/ExploreNow'
import OurBestsellers from './OurBestsellers/OurBestsellers'
import ExploreEvent from './ExploreEvent/ExploreEvent'
import Blog from './Blog/Blog'

const Home = () => {
    return (
        <section>
            <Hero />
            <OurServices />
            <ExploreNow />
            <OurBestsellers />
            <ExploreEvent/>
            <Blog />
        </section>
    )
}

export default Home