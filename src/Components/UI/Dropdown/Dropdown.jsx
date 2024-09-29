import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Dropdown = ({
    label,
    items,
    onSelect,
    className = '',
    buttonClassName = '',
    menuClassName = '',
    itemClassName = ''
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (item) => {
        onSelect(item);
        setIsOpen(false);
    };

    const renderItem = (item, index) => {
        const itemContent = (
            <div
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer ${itemClassName}`}
                role="menuitem"
                onClick={() => handleSelect(item)}
            >
                {item.label}
            </div>
        );

        if (item.href) {
            return (
                <Link key={index} href={item.href} passHref>
                    {itemContent}
                </Link>
            );
        }

        return <div key={index}>{itemContent}</div>;
    };

    return (
        <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
            <div>
                <button
                    type="button"
                    className={`inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 ${buttonClassName}`}
                    onClick={toggleDropdown}
                >
                    {label}
                    <FaChevronDown className="ml-2 h-4 w-4" />
                </button>
            </div>

            {isOpen && (
                <div className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${menuClassName}`}>
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {items.map((item, index) => renderItem(item, index))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;