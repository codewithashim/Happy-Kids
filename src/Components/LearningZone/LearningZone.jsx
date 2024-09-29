import React from 'react'
import LearningZoneHero from './LearningZoneHero/LearningZoneHero'
import LearningZoneCounter from './LearningZoneCounter/LearningZoneCounter'
import WhyChooseUs from './WhyChoseUs/WhyChoseUs'
import QuickTutorial from './QuickTutorial/QuickTutorial'

const LearningZone = () => {
   return (
      <section>
         <LearningZoneHero />
         <LearningZoneCounter />
         <WhyChooseUs />
         <QuickTutorial />
      </section>
   )
}

export default LearningZone