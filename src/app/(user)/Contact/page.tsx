'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Topbar from '@/components/TopBar';

const faqs = [
  {
    question: "How can I inquire about a car?",
    answer: "Use the contact form above or call our support team to get details about available vehicles.",
  },
  {
    question: "Where is Selam Motors located?",
    answer: "Our main office is in Addis Ababa, with service centers in major cities across Ethiopia.",
  },
  {
    question: "Do I need to make a deposit to book a car?",
    answer: "No deposit is required before seeing the car. You can visit us and inspect the vehicle first.",
  },
  {
    question: "Do I need to pay before seeing the car?",
    answer: "No payment is required before visiting. You are welcome to come and inspect the car in person before making any decisions.",
  },
  
];

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Topbar />
      <Header />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gray-200  text- py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Selam Motors</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Have questions or want to see your dream car? Reach out to us!
          </p>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Send a Message</h2>
            <form
              action="https://formsubmit.co/favumail20@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_subject" value="New Contact Form Submission - Selam Motors" />
              <input type="hidden" name="_next" value="http://localhost:3000/" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="border rounded px-4 py-3 w-full focus:outline-none focus:ring focus:border-primary"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="border rounded px-4 py-3 w-full focus:outline-none focus:ring focus:border-primary"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="border rounded px-4 py-3 w-full focus:outline-none focus:ring focus:border-primary"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                className="border rounded px-4 py-3 w-full focus:outline-none focus:ring focus:border-primary"
              />
              <button
                type="submit"
                className="bg-blue-600  text-white px-6 py-3 rounded font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* FAQ Section with Toggle */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm"
                >
                  <button
                    className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-medium text-gray-700">{faq.question}</span>
                    <span className="text-xl text-gray-500">{openIndex === index ? '−' : '+'}</span>
                  </button>
                  {openIndex === index && (
                    <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
