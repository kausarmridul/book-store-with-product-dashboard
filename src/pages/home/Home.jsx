import { Helmet } from "react-helmet-async";
import Hero from "./Hero";
import Slider from "./Slider";
import FindMagic from "./FindMagic";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Neth Bookpoint</title>
      </Helmet>
      <Hero />
      <Slider />
      <FindMagic />
    </>
  );
};

export default Home;
