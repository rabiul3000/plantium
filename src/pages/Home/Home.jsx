import React, { useContext } from "react";
import MyPlants from "../MyPlants/MyPlants";
import AuthContext from "../../contexts/AuthContext";
import LoadingPage from "../Loading/LoadingPage";
import CarouselSection from "../../components/CarouselSection/CarouselSection";
import Blog from "../../components/Blog/Blog";
import Newsletter from "../../components/NewsLatter/NewsLatter";
import Campaigns from "../../components/Campeign/Campaigns";

const Home = () => {
  const { user, authLoading } = useContext(AuthContext);

  return (
    <div className='flex flex-col'>
      <CarouselSection />

      <div className='py-12'>
        <h1 className='text-center text-green-700 py-12 text-5xl font-bold'>
          {" "}
          New Plants{" "}
        </h1>
        {authLoading ? (
          <LoadingPage />
        ) : !user ? (
          <p className='text-center'>Login To view</p>
        ) : (
          <>
            <MyPlants limit={true} />
            <Blog />
            <Campaigns />
            <Newsletter />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
