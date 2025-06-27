import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import api from "../../api/api"; // your base API

const PlantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${api}/plant/${id}`)
      .then((res) => {
        setPlant(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!plant) return <div className="text-center mt-10 text-red-500">Plant not found.</div>;

  const {
    name,
    image,
    description,
    careLevel,
    category,
    health,
    email,
    username,
    lastWateringDate,
    nextWateringDate,
    wateringFrequency,
  } = plant;

  return (
    <div className="flex justify-center items-center p-4 bg-base-200 min-h-screen">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <figure className="h-64 overflow-hidden">
          <img src={image} alt={name} className="object-cover w-full h-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title capitalize text-2xl text-green-700">
            {name}
          </h2>
          <p className="text-sm text-gray-700">{description}</p>

          <div className="mt-2 space-y-1 text-sm text-gray-700">
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Care Level:</strong> {careLevel}</p>
            <p><strong>Health:</strong>{" "}
              <span className="badge badge-outline">{health}</span>
            </p>
            <p><strong>Last Watering:</strong> {lastWateringDate}</p>
            <p><strong>Next Watering:</strong> {nextWateringDate}</p>
            <p><strong>Watering Frequency:</strong> {wateringFrequency} days</p>
          </div>

          <div className="text-xs text-gray-500 mt-3">
            Added by <span className="font-semibold">{username}</span> ({email})
          </div>

          <div className="card-actions justify-end mt-4">
            <button onClick={() => navigate(-1)} className="btn btn-sm btn-primary">
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetail;
