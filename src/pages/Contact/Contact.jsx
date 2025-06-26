import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-base-100 text-base-content px-4 md:px-16 py-12 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
          Contact Us
        </h1>
        <p className="text-center text-lg mb-12">
          Got a question, feedback, or a partnership idea? We'd love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-xl text-green-600" />
              <span className="text-lg">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-xl text-green-600" />
              <span className="text-lg">support@plantium.com</span>
            </div>
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-xl text-green-600 mt-1" />
              <span className="text-lg">
                123 Green Street,<br />
                Eco City, Earth 10101
              </span>
            </div>
            <div className="mt-10">
              <h2 className="text-xl font-semibold mb-2">Follow our journey 🌱</h2>
              <p>Join our newsletter and campaigns to make Earth greener.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card bg-base-200 shadow-md">
            <div className="card-body space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
              />
              <textarea
                className="textarea textarea-bordered w-full h-32"
                placeholder="Your Message"
              ></textarea>
              <button className="btn btn-primary w-full self-start">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
