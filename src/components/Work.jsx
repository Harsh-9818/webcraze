import React from 'react';

function ContactForm() {
  return (
    <div
      className="relative text-white w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2023/02/13/16/14/ai-generated-7787717_1280.jpg")' }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Contact Form Container */}
      <div className="relative z-10 bg-black bg-opacity-30 backdrop-blur-lg p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-lg border border-gray-700">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-200">Contact Us</h2>

        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-lg mb-1 text-gray-300">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-lg mb-1 text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              required
            />
          </div>

          {/* Merchant Request Field */}
          <div>
            <label className="block text-lg mb-1 text-gray-300">Merchant Request</label>
            <textarea
              rows="4"
              placeholder="Describe your request..."
              className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
