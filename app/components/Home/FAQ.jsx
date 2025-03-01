"use client";

import React, { useState } from "react";

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "What is your preferred tech stack?",
      answer:
        "I primarily work with JavaScript, React, Node.js, and TailwindCSS. I also have experience with TypeScript, MongoDB, and Firebase.",
    },
    {
      question: "Are you open to relocation?",
      answer:
        "Yes, I am open to relocation depending on the opportunity and the location.",
    },
    {
      question: "Do you work as a freelancer?",
      answer:
        "Yes, I take freelance projects from time to time. Feel free to reach out if you have a project in mind!",
    },
    {
      question: "How can I contact you for a project or job opportunity?",
      answer:
        "You can contact me directly through the contact form on my portfolio or by emailing me at example@email.com.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b-2 py-4">
            <button
              className="w-full text-left text-lg font-semibold text-gray-900"
              onClick={() => toggleQuestion(index)}
            >
              {faq.question}
            </button>
            {activeQuestion === index && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
