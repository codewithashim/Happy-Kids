import React from 'react';
import Image from 'next/image';
import { ExploreBanner } from '@/src/Assets';

const ExploreNow = () => {
    return (
        <div className="container mx-auto p-4">
            <div className='my-14'>
                <div className="flex flex-col md:flex-row bg-white overflow-hidden" style={{ borderRadius: '16px 16px 100px 16px' }}>
                    <div className="md:w-1/2 relative h-64 md:h-auto">
                        <Image
                            src={ExploreBanner}
                            alt="Happy children"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="md:w-1/2 bg-blue-600 p-6 md:p-8 text-white relative">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Empowering Young Minds Through Fun and Learning
                        </h2>
                        <p className="mb-6 text-sm md:text-base">
                            At Happy Kids, we create a vibrant and safe online environment where
                            children can explore, learn, and grow. Our platform offers a wide
                            range of interactive experiences designed to nurture creativity, inspire
                            curiosity, and foster personal development. From engaging activities
                            and expert guidance to exclusive content and community
                            connections, we provide everything kids need to thrive in a fun and
                            supportive space.
                        </p>
                        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md text-sm">
                            Explore Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreNow;