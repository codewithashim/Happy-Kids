import { BlogImage1, BlogImage2, BlogImage3, BlogImage4 } from '@/src/Assets'
import Image from 'next/image'
import React from 'react'

export default function Blog() {
    const blogPosts = [
        {
            image: BlogImage1,
            title: "Lorem ipsum dolor sit amet consectetur.",
            date: "1st Jan 2024",
        },
        {
            image: BlogImage2,
            title: "Lorem ipsum dolor sit amet consectetur.",
            date: "1st Jan 2024",
        },
        {
            image: BlogImage3,
            title: "Lorem ipsum dolor sit amet consectetur.",
            date: "1st Jan 2024",
        },
        {
            image: BlogImage4,
            title: "Lorem ipsum dolor sit amet consectetur.",
            date: "1st Jan 2024",
        },
    ]

    return (
        <div className="container mx-auto px-4 py-6 sm:py-8 md:py-10">
            <div className='my-6 sm:my-8 md:my-10'>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-4 sm:mb-6 md:mb-8">Blogs</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden">
                            <div className="relative w-full h-40 sm:h-48">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="py-4">
                                <h2 className="text-base sm:text-lg text-red-500 font-semibold mb-2">{post.title}</h2>
                                <p className="text-xs sm:text-sm text-gray-500">{post.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center sm:justify-end mt-6 sm:mt-8'>
                    <button className="border rounded-full border-[#C35655] text-[#C35655] font-bold py-2 px-6 sm:px-8 hover:bg-red-600 hover:text-white transition duration-300">
                        View All
                    </button>
                </div>

                <div className="mt-8 sm:mt-10 md:mt-12 bg-[#C35655] text-white rounded-3xl p-6 sm:p-8 text-center">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Embark on a Journey Full of Discovery, Fun, and Learning</h2>
                    <button className="bg-white text-red-500 font-bold py-2 px-4 rounded-lg mt-4 hover:bg-red-100 transition duration-300 text-sm sm:text-base">
                        Join Us Now
                    </button>
                </div>
            </div>
        </div>
    )
}