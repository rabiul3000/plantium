import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import api from "../../api/api";
import LoadingPage from "../Loading/LoadingPage";

const AllPlants = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${api}/plants`)
      .then((res) => {
        setResult(res?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, []);

  const sortByWateringDate = () => {
    setResult((prev) =>
      [...prev].sort(
        (a, b) => new Date(b.lastWateringDate) - new Date(a.lastWateringDate)
      )
    );
  };

  const sortByCareLevel = () => {
    const careLevelOrder = { easy: 0, moderate: 1, difficult: 2 };
    setResult((prev) =>
      [...prev].sort(
        (a, b) => careLevelOrder[a.careLevel] - careLevelOrder[b.careLevel]
      )
    );
  };

  return (
    <div className='flex flex-col items-center px-4 py-8'>
      <div className='text-center mb-6'>
        <h1 className='text-2xl font-bold mb-2'>Sort by</h1>
        <div className='flex flex-wrap gap-4 justify-center'>
          <button className='btn btn-outline btn-primary' onClick={sortByWateringDate}>
            Next Watering Date
          </button>
          <button className='btn btn-outline btn-primary' onClick={sortByCareLevel}>
            Care Level
          </button>
        </div>
      </div>

      {loading ? (
        <LoadingPage />
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl'>
          {result?.map((plant) => (
            <div key={plant._id} className='card bg-base-100 shadow-xl'>
              <figure className='h-48 overflow-hidden'>
                <img src={plant.image} alt={plant.name} className='object-cover w-full h-full' />
              </figure>
              <div className='card-body'>
                <h2 className='card-title capitalize'>{plant.name}</h2>
                <p className='text-gray-500 capitalize'>{plant.category}</p>
                <div className='card-actions justify-start mt-4'>
                  <button
                    className='btn btn-sm btn-primary'
                    onClick={() => navigate(`/plant/${plant._id}`)}
                  >
                    See More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllPlants;
