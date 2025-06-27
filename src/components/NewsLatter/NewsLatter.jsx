import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      // Normally you'd send the email to your backend or a mailing service
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className='bg-base-200 py-12 px-4 sm:px-8 lg:px-24'>
      <div className='max-w-3xl mx-auto text-center'>
        <h2 className='text-3xl font-bold text-green-700 mb-4'>
          Join Our Plant Lovers Newsletter 🌿
        </h2>
        <p className='text-sm text-gray-600 mb-6'>
          Stay updated on the latest plant care tips, green movement news, and exclusive offers from our shop.
        </p>

        {!subscribed ? (
          <form onSubmit={handleSubscribe} className='flex flex-col sm:flex-row gap-4 justify-center'>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email address'
              className='input input-bordered w-full sm:w-80'
              required
            />
            <button className='btn btn-primary' type='submit'>
              Subscribe
            </button>
          </form>
        ) : (
          <div className='alert alert-success shadow-lg mt-4'>
            <span>Thanks for subscribing! 🌱</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
