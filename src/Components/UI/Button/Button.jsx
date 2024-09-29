import React from 'react';
import Link from 'next/link';

const Button = ({ onClick, children, variant = 'primary', disabled = false, className = '', href = null }) => {
    const baseClasses = 'px-5 py-2.5 rounded-md font-bold text-base transition-colors duration-300 focus:outline-none inline-block text-center';

    const variantClasses = {
        primary: 'bg-[#C35655] text-white hover:bg-[#A84545] disabled:bg-gray-400 disabled:cursor-not-allowed',
        secondary: 'bg-white text-[#C35655] border-2 border-[#C35655] hover:bg-[#FFF0F0] hover:border-[#A84545] hover:text-[#A84545] disabled:bg-gray-200 disabled:border-gray-400 disabled:text-gray-600 disabled:cursor-not-allowed',
    };

    const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

    const ButtonContent = () => (
        <>
            {children}
        </>
    );

    if (href) {
        return (
            <Link href={href} passHref className={buttonClasses} onClick={onClick}>
                <ButtonContent />
            </Link>
        );
    }

    return (
        <button
            onClick={onClick}
            className={buttonClasses}
            disabled={disabled}
        >
            <ButtonContent />
        </button>
    );
};

export default Button;