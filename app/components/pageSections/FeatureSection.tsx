import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faCode, faCloud } from '@fortawesome/free-solid-svg-icons';

const features = [
    {
        icon: faCode,
        title: 'Innovative Ideas',
        description: 'We bring innovative solutions to your business challenges.',
    },
    {
      icon: faDatabase,
      title: 'Fast Performance',
      description: 'Experience lightning-fast load times and optimal performance.',
    },
    {
      icon: faCloud,
      title: 'Customer Satisfaction',
      description: 'We prioritize our customers and their satisfaction above all.',
    },
  ];


const FeatureSection = ()=>{
    return(
        <section className="p-20 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
                <h2 className="text-4xl font-bold mb-12">Our Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {
                        features.map((feature, index) =>(
                            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300">
                                <div className="text-blue-500 mb-4">
                                <FontAwesomeIcon icon={feature.icon} className="w-20" />
                                </div>
                                <h3 className="text-2xl fon-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default FeatureSection;