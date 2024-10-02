import React from 'react';
import { User, Calendar, MessageCircle, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';
import { BlogDetailsPageBanner } from '@/src/Assets';

const BlogDetails = () => {
    return (
        <section className="">
            <Image
                src={BlogDetailsPageBanner}
                alt="Three girls reading"
                className="w-full  object-cover rounded-lg mb-6"
            />
            <div className='container'>
                <div className="mb-6">
                    <span className="text-red-500 font-semibold">Tag</span>
                </div>
                <h1 className="text-3xl font-bold mb-4 text-gray-800">
                    Lorem ipsum dolor sit amet consectetur. Diam eget.
                </h1>
                <div className="flex items-center text-sm text-gray-600 mb-6">
                    <div className="flex items-center mr-4">
                        <Calendar size={16} className="mr-1" />
                        <span>01.01.2024</span>
                    </div>
                    <div className="flex items-center">
                        <MessageCircle size={16} className="mr-1" />
                        <span>0 Comments</span>
                    </div>
                </div>
                <div className="prose max-w-none mb-8">
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Nec ultrices dolor vitae morbi quis. Viverra lacus tristique nec feugiat eget. Nec ullamcorper ipsum bibendum quam lorem. Felis morbi ut tristique semper adipiscing fermentum. Imperdiet bibendum blandit penatibus curabitur eleifend in est risus in. Rhoncus nulla fames auctor mattis purus sagittis id tempus diam.
                    </p>
                    <blockquote className="border-l-4 border-red-500 pl-4 italic my-6">
                        " Lorem ipsum dolor sit amet consectetur. Nisi nisl eget morbi ut magna in "
                    </blockquote>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Nec ultrices dolor vitae morbi quis. Viverra lacus tristique nec feugiat eget. Nec ullamcorper ipsum bibendum quam lorem. Felis morbi ut tristique semper adipiscing fermentum. Imperdiet bibendum blandit penatibus curabitur eleifend in est risus in.
                    </p>
                </div>
                <div className="flex items-center justify-between border-t border-b border-gray-200 py-4 mb-8">
                    <div className="flex items-center">
                        <img
                            src="/api/placeholder/50/50"
                            alt="Author"
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                            <p className="font-semibold">By name name</p>
                            <p className="text-sm text-gray-600">Designation</p>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <Facebook size={20} className="text-gray-600 hover:text-blue-600 cursor-pointer" />
                        <Twitter size={20} className="text-gray-600 hover:text-blue-400 cursor-pointer" />
                        <Linkedin size={20} className="text-gray-600 hover:text-blue-700 cursor-pointer" />
                        <Instagram size={20} className="text-gray-600 hover:text-pink-600 cursor-pointer" />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default BlogDetails;