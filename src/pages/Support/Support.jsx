import React from 'react';
import { FaQuestionCircle, FaTools, FaRegSmileBeam } from 'react-icons/fa';

const Support = () => {
  return (
    <div className="bg-base-100 text-base-content px-4 md:px-16 py-12 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
          Help & Support
        </h1>
        <p className="text-center text-lg mb-12">
          Need help with your orders, account, or something else? We're here to support you!
        </p>

        {/* Support Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card bg-base-200 shadow-md p-6 text-center">
            <FaQuestionCircle className="text-4xl text-green-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">FAQs</h2>
            <p>Browse answers to the most common questions about Plantium and our services.</p>
            <button className="btn btn-link text-green-600 mt-2">View FAQs</button>
          </div>

          <div className="card bg-base-200 shadow-md p-6 text-center">
            <FaTools className="text-4xl text-green-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Technical Support</h2>
            <p>Facing issues with the site or your dashboard? Our tech team can help resolve it.</p>
            <button className="btn btn-link text-green-600 mt-2">Report an Issue</button>
          </div>

          <div className="card bg-base-200 shadow-md p-6 text-center">
            <FaRegSmileBeam className="text-4xl text-green-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Customer Care</h2>
            <p>Have a concern with a purchase or seller? Contact our friendly support team.</p>
            <button className="btn btn-link text-green-600 mt-2">Contact Us</button>
          </div>
        </div>

        {/* Contact Form for Support */}
        <div className="card bg-base-200 shadow-md max-w-2xl mx-auto">
          <div className="card-body space-y-4">
            <h2 className="text-2xl font-semibold text-center">Need Direct Help?</h2>
            <p className="text-center">
              Fill out the form below and our support team will get back to you within 24 hours.
            </p>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
            <textarea
              placeholder="Describe your issue"
              className="textarea textarea-bordered w-full h-32"
            ></textarea>
            <button className="btn btn-primary btn-wide self-center">Submit Request</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
