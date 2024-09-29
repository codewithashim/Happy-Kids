import React from 'react';
import Slider from 'react-slick';
import { Heart, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ProductImage } from '@/src/Assets';

const ProductCard = ({ name, price, description, rating, reviews }) => (
  <div className="px-2 my-4">
    <div className="bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
      <div className="relative rounded-t-lg bg-gray-200">
        <Image
          src={ProductImage}
          alt={name}
          width={200}
          height={200}
          className="w-full h-full p-4 object-cover"
        />
        <button className="absolute top-2 right-2 bg-white rounded-full p-1 text-gray-600 hover:text-red-500 transition-colors duration-300">
          <Heart size={20} />
        </button>
      </div>
      <div className='p-4'>
        <h3 className="mt-3 text-lg font-semibold text-gray-800">{name}</h3>
        <p className="font-bold text-red-600 mt-1">₹ {price.toFixed(2)}</p>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{description}</p>
        <div className="flex items-center mt-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill={i < Math.floor(rating) ? "#FFC107" : "#E0E0E0"} stroke="none" />
          ))}
          <span className="ml-2 text-sm text-gray-600">({reviews})</span>
        </div>
      </div>
    </div>
  </div>
);

const OurBestsellers = () => {
  const products = [
    { name: "Blue Stripe Shoes", price: 675.00, description: "Comfortable blue shoes for boys with stylish black stripes", rating: 4.5, reviews: 121 },
    { name: "Red Canvas Sneakers", price: 599.00, description: "Trendy red canvas sneakers for casual wear", rating: 4.2, reviews: 89 },
    { name: "Green Sport Shoes", price: 799.00, description: "Durable green sport shoes perfect for outdoor activities", rating: 4.7, reviews: 156 },
    { name: "Pink Glitter Sandals", price: 450.00, description: "Adorable pink glitter sandals for little princesses", rating: 4.3, reviews: 72 },
    { name: "Black Formal Shoes", price: 899.00, description: "Elegant black formal shoes for special occasions", rating: 4.6, reviews: 103 },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
    prevArrow: <CustomArrow icon={<ChevronLeft size={36} />} direction="left" />,
    nextArrow: <CustomArrow icon={<ChevronRight size={36} />} direction="right" />
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-red-500 mb-8">Our Bestsellers</h2>
        <div className="relative">
          <Slider {...sliderSettings}>
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const CustomArrow = ({ className, style, onClick, icon, direction }) => (
  <div
    className={`${className} z-10 bg-white rounded-full shadow-md p-3 cursor-pointer absolute top-1/2 transform -translate-y-1/2 ${
      direction === 'left' ? 'left-0 -ml-5' : 'right-0 -mr-5'
    }`}
    style={{ ...style, display: "block" }}
    onClick={onClick}
  >
    <div className="text-black">
      {icon}
    </div>
  </div>
);

export default OurBestsellers;