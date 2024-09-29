import React from 'react'
import Image from 'next/image'
import { WhyChoseBanner_1, WhyChoseBanner_2, WhyChoseBanner_3 } from '@/src/Assets'

const reasons = [
    {
        title: "Interactive and Hands-On Learning",
        description: "Lorem ipsum dolor sit amet consectetur. Nulla elementum malesuada ullamcorper tellus dolor. Est facilisis vitae et nisl cras erat. Quam nulla mauris id amet dui vel. Cursus integer pulvinar dictum eros morbi dolor feugiat. Nulla senectus ultricies venenatis.",
        image: WhyChoseBanner_1
    },
    {
        title: "Regularly Updated Content",
        description: "Lorem ipsum dolor sit amet consectetur. Nulla elementum malesuada ullamcorper tellus dolor. Est facilisis vitae et nisl cras erat. Quam nulla mauris id amet dui vel. Cursus integer pulvinar dictum eros morbi dolor feugiat. Nulla senectus ultricies venenatis.",
        image: WhyChoseBanner_2
    },
    {
        title: "Encouraging Creativity and Imagination",
        description: "Lorem ipsum dolor sit amet consectetur. Nulla elementum malesuada ullamcorper tellus dolor. Est facilisis vitae et nisl cras erat. Quam nulla mauris id amet dui vel. Cursus integer pulvinar dictum eros morbi dolor feugiat. Nulla senectus ultricies venenatis.",
        image: WhyChoseBanner_3
    }
]

export default function WhyChooseUs() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className='py-8 sm:py-12 md:py-16'>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Why Choose Us?</h2>
                <div className="space-y-12 sm:space-y-16 md:space-y-20">
                    {reasons.map((reason, index) => (
                        <div key={index} className={`flex justify-between flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center  gap-8 `}>
                            <div className="">
                                <Image
                                    src={reason.image}
                                    alt={reason.title}
                                    width={400}
                                    height={400}
                                    layout="responsive"
                                    objectFit="cover"
                                    className='w-[400px] h-[400px]'
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{reason.title}</h3>
                                <p className="text-sm sm:text-base text-gray-600">{reason.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}