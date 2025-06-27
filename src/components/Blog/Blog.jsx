import React from 'react';

const blogs = [
  {
    id: 1,
    title: 'Why Indoor Plants Improve Your Well-being',
    image: 'https://i.ibb.co/Y45GQBxv/shadbush-5114574-1280.jpg',
    excerpt:
      'Discover how houseplants purify air, reduce stress, and improve productivity. A must-read for plant lovers!',
  },
  {
    id: 2,
    title: 'How to Start Selling Plants Online',
    image: 'https://i.ibb.co/ynvSBM8x/leaves-7076216-1280.jpg',
    excerpt:
      'Turn your passion into profit. Learn the basics of selling plants online including platforms, packaging, and customer care.',
  },
  {
    id: 3,
    title: 'The Green Movement: Why It Matters',
    image: 'https://i.ibb.co/GQSb81mz/nature-7171136-1280.jpg',
    excerpt:
      'Explore the importance of sustainability, eco-living, and how houseplants play a role in the global green movement.',
  },
  {
    id: 4,
    title: 'Top 5 Low-Maintenance Plants for Beginners',
    image: 'https://i.ibb.co/C3MfmHgn/leaves-7634894-1280.jpg',
    excerpt:
      'New to plants? Start with these easy-to-care-for varieties that thrive with minimal effort and still look great.',
  },
  {
    id: 5,
    title: 'How to Package Plants for Shipping Safely',
    image: 'https://i.ibb.co/tpPHhhcq/leaves-8115077-1280.jpg',
    excerpt:
      'Selling plants? Learn how to safely package them for shipping to keep them fresh and healthy upon delivery.',
  },
  {
    id: 6,
    title: 'Urban Gardening Tips for Small Spaces',
    image: 'https://i.ibb.co/zVXHBfDr/butterfly-7632646-1920.jpg',
    excerpt:
      'No backyard? No problem. These urban gardening tips will help you grow a green haven in your apartment or balcony.',
  },
];

const Blog = () => {
  return (
    <div className='p-8'>
      <h2 className='text-3xl font-bold text-center mb-8 text-green-700'>Latest Blog Posts</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {blogs.map((blog) => (
          <div key={blog.id} className='card bg-base-100 shadow-md hover:shadow-lg transition-all'>
            <figure className='h-48 overflow-hidden'>
              <img src={blog.image} alt={blog.title} className='w-full h-full object-cover' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title text-green-700'>{blog.title}</h2>
              <p className='text-sm text-gray-600'>{blog.excerpt}</p>
              <div className='card-actions justify-end'>
                <button className='btn btn-sm btn-primary btn-outline'>Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
