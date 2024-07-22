import React from 'react';


const FooterSection = () => {
    return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              {/* <img src="/path/to/your/logo.png" alt="Company Logo" className="h-10 w-auto" /> */}
              <h1 className='text-white font-bold text-3xl'>Comp.</h1>
            </div>
            <div className="flex space-x-6">
              <a href="#home" className="text-gray-300 hover:text-white">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-white">
                About
              </a>
              <a href="#services" className="text-gray-300 hover:text-white">
                Services
              </a>
              <a href="#blog" className="text-gray-300 hover:text-white">
                Blog
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </div>
            <div className="flex space-x-4 mt-6 md:mt-0">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8H6v4h3v12h5V12h3.5l.5-4H14V5.5c0-.825.675-1.5 1.5-1.5h2.5V0h-3C11.475 0 9 2.475 9 5.5V8z" />
                </svg>
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557a9.883 9.883 0 01-2.828.775A4.932 4.932 0 0023.337 3.2a9.86 9.86 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.48A13.957 13.957 0 011.67 3.149a4.92 4.92 0 001.523 6.573 4.903 4.903 0 01-2.229-.616v.06a4.92 4.92 0 003.946 4.827 4.908 4.908 0 01-2.224.085 4.924 4.924 0 004.598 3.419A9.867 9.867 0 010 21.539a13.93 13.93 0 007.548 2.212c9.057 0 14.01-7.506 14.01-14.01 0-.213-.005-.425-.014-.637A10.025 10.025 0 0024 4.557z" />
                </svg>
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.225 0H1.771C.79 0 0 .782 0 1.747v20.505C0 23.217.792 24 1.77 24h20.451c.98 0 1.779-.782 1.779-1.748V1.748C24 .782 23.205 0 22.225 0zM7.124 20.451H3.56V9.083h3.563v11.368zM5.344 7.527a2.07 2.07 0 01-2.066-2.072 2.07 2.07 0 112.066 2.072zm13.852 12.924h-3.564v-5.586c0-1.332-.027-3.047-1.856-3.047-1.858 0-2.142 1.45-2.142 2.952v5.681H8.065V9.083h3.415v1.551h.049c.476-.9 1.635-1.852 3.366-1.852 3.598 0 4.263 2.366 4.263 5.447v6.222z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 text-gray-400">
            &copy; 2021 - {new Date().getFullYear()} Company Name. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default FooterSection;
  