import React, { useContext } from "react";
import MyPlants from "../MyPlants/MyPlants";
import AuthContext from "../../contexts/AuthContext";
import LoadingPage from "../Loading/LoadingPage";
import CarouselSection from "../../components/CarouselSection/CarouselSection";

const Home = () => {
  const { user, authLoading } = useContext(AuthContext);

  return (
    <div className='flex flex-col'>
      <CarouselSection />

      <div className='py-24'>
        <h1 className='text-center text-green-700 py-12 text-5xl font-bold'>
          {" "}
          New Plants{" "}
        </h1>
        {authLoading ? (
          <LoadingPage />
        ) : !user ? (
          <p className='text-center'>Login To view</p>
        ) : (
          <MyPlants limit={true} />
        )}
      </div>
    </div>
  );
};

export default Home;
