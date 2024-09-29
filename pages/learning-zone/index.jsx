import LearningZone from '@/src/Components/LearningZone/LearningZone'
import RootLayout from '@/src/Layout/RootLayout'
import React from 'react'

const LearningZonePage = () => {
    return (
        <RootLayout>
            <section>
                <LearningZone />
            </section>
        </RootLayout>
    )
}

export default LearningZonePage