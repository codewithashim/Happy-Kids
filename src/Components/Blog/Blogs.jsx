import React, { useState } from 'react';
import { Share2, User } from 'lucide-react';
import { BlogBanner } from '@/src/Assets';
import Image from 'next/image';
import Link from 'next/link';
import Subscribe from '../Subscribe/Subscribe';

const BlogPost = ({ imageUrl, title, author, date, views, excerpt ,id}) => (
    <div className="bg-white overflow-hidden">
        <div>
            <Image src={imageUrl} alt={title} width={414} height={310} className="w-full h-full object-cover" />
        </div>
        <div className="py-2">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <div className="flex items-center  text-sm text-gray-600 mb-2">
                <User size={16} className="mr-1" />
                <span>{author}</span>
                <span className="mx-2">|</span>
                <span>{date}</span>
                <Share2 size={16} className="mr-1 ml-2" />
                <span>{views} views</span>
            </div>
            <p className="text-gray-700 text-sm mb-4">{excerpt}</p>
            <Link href={`/blogs/${id}`} className="text-sm font-semibold border-b border-black py-1">View Post</Link>
        </div>
    </div>
);

const Blogs = () => {
    const [visiblePosts, setVisiblePosts] = useState(6);

    const blogPosts = [
        {
            id: 1,
            imageUrl: BlogBanner,
            title: "Lorem ipsum dolor sit amet",
            author: "Joanna WhitKa",
            date: "June 21, 2023",
            views: 125,
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat a vel enim tincidunt fringilla."
        },
        {
            id: 2,
            imageUrl: BlogBanner,
            title: "Lorem ipsum dolor sit amet",
            author: "Joanna WhitKa",
            date: "June 21, 2023",
            views: 125,
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat a vel enim tincidunt fringilla."
        },
        {
            id: 3,
            imageUrl: BlogBanner,
            title: "Lorem ipsum dolor sit amet",
            author: "Joanna WhitKa",
            date: "June 21, 2023",
            views: 125,
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat a vel enim tincidunt fringilla."
        },
        {
            id: 4,
            imageUrl: BlogBanner,
            title: "Lorem ipsum dolor sit amet",
            author: "Joanna WhitKa",
            date: "June 21, 2023",
            views: 125,
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat a vel enim tincidunt fringilla."
        },
        {
            id: 5,
            imageUrl: BlogBanner,
            title: "Lorem ipsum dolor sit amet",
            author: "Joanna WhitKa",
            date: "June 21, 2023",
            views: 125,
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat a vel enim tincidunt fringilla."
        },
        {
            id: 6,
            imageUrl: BlogBanner,
            title: "Lorem ipsum dolor sit amet",
            author: "Joanna WhitKa",
            date: "June 21, 2023",
            views: 125,
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat a vel enim tincidunt fringilla."
        },
        {
            id: 7,
            imageUrl: BlogBanner,
            title: "Lorem ipsum dolor sit amet",
            author: "Joanna WhitKa",
            date: "June 21, 2023",
            views: 125,
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat a vel enim tincidunt fringilla."
        },
        {
            id: 8,
            imageUrl: BlogBanner,
            title: "Lorem ipsum dolor sit amet",
            author: "Joanna WhitKa",
            date: "June 21, 2023",
            views: 125,
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat a vel enim tincidunt fringilla."
        },
        {
            id: 9,
            imageUrl: BlogBanner,
            title: "Lorem ipsum dolor sit amet",
            author: "Joanna WhitKa",
            date: "June 21, 2023",
            views: 125,
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat a vel enim tincidunt fringilla."
        },
    ];

    const handleLoadMore = () => {
        setVisiblePosts(prevVisible => Math.min(prevVisible + 3, blogPosts.length));
    };

    return (
        <section className="container">
            <div className='mx-auto py-8'>
                <h1 className="text-3xl font-bold text-red-500 mb-8">Blogs</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.slice(0, visiblePosts).map((post, index) => (
                        <BlogPost key={index} {...post} />
                    ))}
                </div>
                {visiblePosts < blogPosts.length && (
                    <div className="text-center my-4">
                        <button 
                            className="border-red-500 border px-6 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-colors"
                            onClick={handleLoadMore}
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
            <div className='my-6'>
            <Subscribe />
            </div>

        </section>
    );
};

export default Blogs;