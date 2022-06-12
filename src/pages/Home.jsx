import { useEffect, useState } from "react";
import App from "../layout/App";
import About from "../containers/About";
import Collection from "../containers/Collection";
import Banner from "../containers/Banner";
import Demo from "../containers/Demo";
import Features from "../containers/Features";
import RestaurantRepository from "../helpers/api";

function Home() {
  const [restaurant, setRestaurant] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await RestaurantRepository.fetchRestaurant();
      setRestaurant(data);
    };
    fetchData();
  }, []);
  return (
    <App
      children={
        <>
          <Banner />
          <About />
          <Collection restaurant={restaurant} />
          <Features />
          <Demo />
        </>
      }
    />
  );
}

export default Home;
