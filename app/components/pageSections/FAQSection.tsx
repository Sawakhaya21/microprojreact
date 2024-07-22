"use client";

import React from 'react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What is your return policy?',
    answer: 'Our return policy allows you to return products within 30 days of purchase.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we offer international shipping to most countries. Shipping fees apply.',
  },
  {
    question: 'How can I track my order?',
    answer: 'You can track your order using the tracking number provided in your confirmation email.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and other secure payment methods.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="faq" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-4xl font-bold mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <button
                className="w-full text-left bg-white p-4 rounded-lg shadow-lg flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-xl font-semibold">{faq.question}</span>
                <span className={`transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}>
                  ▼
                </span>
              </button>
              {activeIndex === index && (
                <div className="bg-white mt-2 p-4 rounded-lg shadow-lg">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
