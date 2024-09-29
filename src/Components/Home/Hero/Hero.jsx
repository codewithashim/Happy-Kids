import { HeroBanner } from '@/src/Assets';
import React from 'react';
import Button from '../../UI/Button/Button';

const Hero = () => {
    return (
        <div className="relative min-h-screen hero-section">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
                <h2 className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-widest mb-2 sm:mb-3 md:mb-4">
                    Welcome to Happy Kids
                </h2>
                <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4 sm:mb-6 md:mb-8">
                    "Your Child's Happy Place: Safe, Fun, and Full of Excitement!"
                </h1>
                {/* Divider */}
                <div className="w-[80%] max-w-4xl h-[1px] bg-white mb-4 sm:mb-6 md:mb-8"></div>

                <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl mb-6 sm:mb-8 md:mb-10">
                    At Happy Kids, we create a joyful and secure environment where children can explore, learn, and play to their heart's content. With engaging activities, exciting events, and endless opportunities for fun, your child's happiness and growth are our top priorities.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button
                        href="/services"
                        variant="primary"
                        className="rounded-full w-full sm:w-auto"
                    >
                        See Services
                    </Button>
                    <Button
                        href="/about"
                        variant="primary"
                        className="rounded-full w-full sm:w-auto"
                    >
                        About Us
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Hero;