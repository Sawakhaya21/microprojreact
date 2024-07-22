import Image from "next/image";
import React from "react";

const services = [
    {
      title: 'Web Development',
      content: 'We provide top-notch web development services to create stunning and responsive websites.',
      image: '/serv1.jpg',
      button: 'Learn More'
    },
    {
      title: 'Mobile Development',
      content: 'Our mobile development services ensure your app runs smoothly on all devices.',
      image: '/serv2.jpg',
      button: 'Learn More'
    },
    {
      title: 'Digital Marketing',
      content: 'Our digital marketing strategies will help you reach a wider audience and grow your business.',
      image: '/serv3.jpg',
      button: 'Learn More'
    },
    // {
    //   title: 'cyber security',
    //   content: 'Our digital marketing strategies will help you reach a wider audience and grow your business.',
    //   image: '/serv4.jpg',
    //   button: 'Learn More'
    // },
  ];
  

const ServiceSection = ()=>{
    return(
        <section className="p-20 bg-gray-100">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
                <h2 className="text-4xl font-bold mb-12">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        services.map((service, index)=>(
                            <div className="bg-white p-6 rounded-lg shadow-lg" key={index}>
                                <Image src={service.image} alt={service.title} width={300} height={100} className="object-cover rounded-t-lg" />
                                <h3 className="text-2xl font-semibold mt-4">{service.title}</h3>
                                <p className="text-gray-700 mt-2">{service.content}</p>
                                <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold hover:bg-blue-600">
                                    {service.button}
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ServiceSection;