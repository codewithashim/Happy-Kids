import React from 'react'

const LearningZoneCounter = () => {
    const counterData = [
        { count: '50+', label: 'Courses' },
        { count: '20+', label: 'Tutors' },
        { count: '100+', label: 'Students' },
    ]

    return (
        <div className="bg-[#BA2A21] py-8  px-4 text-white">
            <div className='container mx-auto'>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
                    {counterData.map((item, index) => (
                        <div key={index} className="text-center">
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">{item.count}</h3>
                            <p className="text-sm sm:text-base">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LearningZoneCounter;