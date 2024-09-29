import React from 'react'
import LearningZoneHero from './LearningZoneHero/LearningZoneHero'
import LearningZoneCounter from './LearningZoneCounter/LearningZoneCounter'
import WhyChooseUs from './WhyChoseUs/WhyChoseUs'

const LearningZone = () => {
   return (
      <section>
         <LearningZoneHero />
         <LearningZoneCounter />
         <WhyChooseUs />
      </section>
   )
}

export default LearningZone