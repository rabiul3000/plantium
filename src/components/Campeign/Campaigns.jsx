import React from 'react';

const campaigns = [
  {
    id: 1,
    title: "Plant a Tree, Plant a Future",
    date: "July 10, 2025",
    location: "City Central Park",
    image: "https://i.ibb.co/ynvSBM8x/leaves-7076216-1280.jpg",
    description:
      "Join us for a city-wide tree-planting drive! Together, we can make our neighborhoods greener and cleaner.",
  },
  {
    id: 2,
    title: "Green Education Day",
    date: "August 5, 2025",
    location: "Greenwood School Campus",
    image: "https://i.ibb.co/zVXHBfDr/butterfly-7632646-1920.jpg",
    description:
      "A day of workshops and fun activities to teach kids the importance of plants and sustainability.",
  },
  {
    id: 3,
    title: "Donate Your Plant Campaign",
    date: "September 1-15, 2025",
    location: "All Community Centers",
    image: "https://i.ibb.co/C3MfmHgn/leaves-7634894-1280.jpg",
    description:
      "Give your unused or extra plants a new home! We’re collecting and redistributing plants to schools and old-age homes.",
  },
];

const Campaigns = () => {
  return (
    <div className="py-12 px-6 lg:px-20 bg-base-200">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
        🌿 Upcoming Campaigns & Events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map(({ id, title, date, location, image, description }) => (
          <div key={id} className="card bg-base-100 shadow-xl border">
            <figure>
              <img src={image} alt={title} className="h-52 w-full object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-green-700">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
              <div className="text-xs mt-4 text-gray-500 space-y-1">
                <p>📅 {date}</p>
                <p>📍 {location}</p>
              </div>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-sm btn-primary btn-outline">Join</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
