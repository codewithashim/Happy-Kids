import React from 'react'
import Image from 'next/image'
import { QuickBannerWhyChose } from '@/src/Assets'

export default function QuickTutorial() {
    return (
        <div className="relative my-10">
            <section className="bg-gradient-to-b from-blue-400 to-blue-600 py-16 px-4 text-center text-white min-h-[60vh] flex flex-col justify-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">QUICK TUTORIALS</h2>
                    <p className="mb-10 text-sm sm:text-base md:text-lg">
                        Lorem ipsum dolor sit amet consectetur. Quis fermentum eget pretium dignissim vulputate
                        consectetur. In enim mauris vulputate ultrices egestas nullam ultrices. Et amet blandit faucibus
                        porttitor elementum egestas. Interdum in massa eget ultrices purus.
                    </p>
                </div>
            </section>
            <div className="max-w-4xl mx-auto px-4 -mt-20 sm:-mt-24 md:-mt-32 relative z-10">
                <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl">
                    <div className="relative w-full aspect-[16/9]">
                        <Image
                            src={QuickBannerWhyChose}
                            alt="Quick Tutorial Illustration"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}