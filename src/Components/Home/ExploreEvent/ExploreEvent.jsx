import React from 'react'
import Button from '../../UI/Button/Button'
import { EventBannerImage } from '@/src/Assets'
import Image from 'next/image'

const ExploreEvent = () => {
    return (
        <div className=' bg-sky-100'>
            <div className="flex md:flex-row flex-col-reverse rounded-lg overflow-hidden">
                <div className="flex-1 p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-red-600 mb-4">Make Memories: Join the Fun at Our Events!</h2>
                    <p className="text-[#BA2A21] mb-6">
                        In our Events section, kids can dive into a world of exciting activities, from
                        interactive workshops to fun-filled virtual parties. Designed to inspire
                        creativity and foster connections, these events offer unique experiences
                        that keep young minds engaged and entertained, all within a safe and
                        supportive environment.
                    </p>
                    <Button variant='primary' className='w-fit' >
                        Register Now
                    </Button>
                </div>
                <div className="flex-1">
                    <Image
                        src={EventBannerImage}
                        alt="Children enjoying an event with balloons and decorations"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default ExploreEvent;