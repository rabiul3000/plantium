import React from "react";
import { FaLeaf, FaTree, FaSeedling } from "react-icons/fa";

const About = () => {
  return (
    <div className='px-4 md:px-16 py-16 bg-base-100 text-base-content'>
      <div className='max-w-6xl mx-auto text-center'>
        <h1 className='text-4xl md:text-5xl font-bold mb-6 text-green-700'>
          About Plantium
        </h1>
        <p className='text-lg md:text-xl mb-12 leading-relaxed text-gray-600'>
          At <span className='font-semibold text-green-600'>Plantium</span>, we
          believe in nurturing a greener tomorrow. We are a thriving marketplace
          where plant enthusiasts can buy and sell plants — and a movement that
          fosters sustainability through real-world campaigns and community
          projects.
        </p>

        <div className='grid md:grid-cols-3 gap-8'>
          <div className='card bg-base-200 shadow-md hover:shadow-xl transition duration-300'>
            <div className='card-body items-center text-center'>
              <FaLeaf className='text-5xl text-green-500 mb-4' />
              <h2 className='card-title'>Buy & Sell Plants</h2>
              <p className='text-gray-600'>
                Discover unique plants from trusted growers, or sell your own.
                Support eco-friendly commerce in every transaction.
              </p>
            </div>
          </div>

          <div className='card bg-base-200 shadow-md hover:shadow-xl transition duration-300'>
            <div className='card-body items-center text-center'>
              <FaSeedling className='text-5xl text-green-500 mb-4' />
              <h2 className='card-title'>Green Campaigns</h2>
              <p className='text-gray-600'>
                We organize tree plantation drives, seed-sharing programs, and
                green education campaigns across communities.
              </p>
            </div>
          </div>

          <div className='card bg-base-200 shadow-md hover:shadow-xl transition duration-300'>
            <div className='card-body items-center text-center'>
              <FaTree className='text-5xl text-green-500 mb-4' />
              <h2 className='card-title'>Sustainable Projects</h2>
              <p className='text-gray-600'>
                Collaborating with schools, startups, and local groups to build
                long-term sustainability initiatives.
              </p>
            </div>
          </div>
        </div>

        <div className='mt-16'>
          <h3 className='text-2xl md:text-3xl font-semibold mb-4'>
            Join the Plantium Movement 🌍
          </h3>
          <p className='mb-6 text-gray-600 max-w-2xl mx-auto'>
            Whether you're a buyer, seller, or green warrior — there's a place
            for you at Plantium. Let’s build a cleaner, greener world together.
          </p>
          <button className='btn btn-primary btn-wide'>Get Involved</button>
        </div>
      </div>
    </div>
  );
};

export default About;
