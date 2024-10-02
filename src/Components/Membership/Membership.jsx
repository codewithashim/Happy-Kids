import React from 'react';
import { Check } from 'lucide-react';

const PricingPlan = ({ price, title, features }) => (
    <div className="bg-opacity-90 rounded-lg p-4 sm:p-6 flex flex-col h-full transition-transform hover:scale-105">
        <h3 className="text-2xl sm:text-3xl font-bold text-red-500 mb-2">Rs.{price}<span className="text-sm text-gray-500">/month</span></h3>
        <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">{title}</h4>
        <p className="text-sm sm:text-base text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur. Interdum ut in.</p>
        <ul className="flex-grow mb-4 sm:mb-6">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center mb-2">
                    <Check className="text-white bg-blue-500 rounded-full p-1 mr-2 flex-shrink-0" size={20} />
                    <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                </li>
            ))}
        </ul>
        <button className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition-colors text-sm sm:text-base">
            Choose plan
        </button>
    </div>
);

const Membership = () => {
    const plans = [
        {
            price: 19,
            title: 'Basic',
            features: ['Lorem ipsum dolor sit', 'Lorem ipsum', 'Lorem ipsum dolor sit']
        },
        {
            price: 54,
            title: 'Premium',
            features: ['Lorem ipsum dolor sit', 'Lorem ipsum', 'Lorem ipsum dolor', 'Lorem ipsum']
        },
        {
            price: 89,
            title: 'Premium +',
            features: ['Lorem ipsum dolor sit', 'Lorem ipsum', 'Lorem ipsum dolor', 'Lorem ipsum']
        }
    ];

    return (
        <section className='container '>
            <div className="bg-gradient-to-b from-blue-500 to-blue-300 p-4 sm:p-8 my-4 sm:my-8 rounded-xl">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">Plans & Pricing</h1>
                    <p className="text-sm sm:text-base text-white mb-4 sm:mb-8">Lorem ipsum dolor sit amet consectetur. Arcu lectus non tempus pulvinar eu id. Nisi rhoncus facilisis semper felis a.</p>
                    <div className="bg-blue-100 bg-opacity-30 rounded-xl p-4 sm:p-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                            {plans?.map((plan, index) => (
                                <PricingPlan key={index} {...plan} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Membership;