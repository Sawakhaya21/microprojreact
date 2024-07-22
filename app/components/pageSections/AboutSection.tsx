import Image from "next/image";
import React from "react";

const AboutSection = () => {
    return (
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/bg1.jpg"
                alt="About Us"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-4xl font-bold mb-4">About Us</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our company has been at the forefront of innovation, providing top-notch solutions to our clients. With a team of dedicated professionals, we ensure that every project is executed with excellence. Our mission is to deliver high-quality services that exceed our clients' expectations.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                We specialize in various fields and continually strive to improve our expertise. Our commitment to customer satisfaction drives us to achieve remarkable results. Join us on our journey to make a significant impact in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  