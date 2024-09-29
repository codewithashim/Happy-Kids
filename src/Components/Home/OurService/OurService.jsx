import { BlogServiceBanner, EventServiceBanner, FunLearningServiceBanner, ShopServiceBanner } from '@/src/Assets';
import Image from 'next/image';
import React from 'react';

const ServiceItem = ({ imageSrc, title }) => (
    <div className="flex flex-col items-center mb-6 sm:mb-0">
        <div className=" rounded-full overflow-hidden mb-2">
            <Image src={imageSrc} alt={title} width={250} height={250} className="w-full h-full object-cover" />
        </div>
        <p className="text-red-600 text-[1.5rem] my-2 font-semibold text-center">{title}</p>
    </div>
);

const OurServices = () => {
    const services = [
        { title: 'Shop', imageSrc: ShopServiceBanner },
        { title: 'Fun Learning', imageSrc: FunLearningServiceBanner },
        { title: 'Events', imageSrc: EventServiceBanner },
        { title: 'Blogs', imageSrc: BlogServiceBanner },
    ];

    return (
        <div class Name="container ">
            <div className='my-10'>
                <h2 className="text-2xl font-bold text-red-600 text-center my-6">Our Services</h2>
                <div className="flex justify-center items-center space-x-10 gap-2 sm:gap-6">
                    {services.map((service, index) => (
                        <ServiceItem key={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurServices;