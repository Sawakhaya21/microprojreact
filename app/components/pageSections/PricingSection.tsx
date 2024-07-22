import React from 'react';

const plans = [
    {
      title: 'Basic Plan',
      price: '$19.99',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
      ],
      button: 'Get Started',
    },
    {
      title: 'Standard Plan',
      price: '$49.99',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Feature 4',
      ],
      button: 'Get Started',
    },
    {
      title: 'Premium Plan',
      price: '$99.99',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Feature 4',
        'Feature 5',
      ],
      button: 'Get Started',
    },
  ];
  
  const PricingSection = () => {
    return (
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {plans.map((plan, index) => (
              <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
                <p className="text-4xl font-bold mb-4">{plan.price}</p>
                <ul className="text-left mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-700 mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600">
                  {plan.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default PricingSection;
  