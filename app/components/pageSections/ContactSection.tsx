import React from "react";

const ContactSection = () => {
    return (
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-4xl font-bold mb-12">Contact Us</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-left font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-left font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-left font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-left font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600"
                >
                  Send Message
                </button>
              </div>
            </form>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <p className="text-gray-700">123 Main Street, City, Country</p>
              <p className="text-gray-700">Email: info@example.com</p>
              <p className="text-gray-700">Phone: (123) 456-7890</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  