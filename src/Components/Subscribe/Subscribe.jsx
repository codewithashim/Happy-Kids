import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the subscription logic
    console.log('Subscribing email:', email);
    // Reset the email input after submission
    setEmail('');
  };

  return (
    <div className="bg-red-400 py-8 px-6 rounded-lg shadow-md">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-white text-2xl font-bold mb-4 md:mb-0">Subscribe Newsletters</h2>
        <form onSubmit={handleSubmit} className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow px-4 py-2 rounded-l-md focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;