import Container from "../../components/Container";
import Heading from "../../components/Heading";

const Hero = () => {
  return (
    <div className="bg-[url(/hero-bg.png)] bg-no-repeat bg-cover bg-bottom pt-15 pb-104 text-center">
      <Container>
        <Heading
          title={"The Book Lover's Dreamland Awaits!"}
          color={"radial-text-1"}
        />
        <p className="font-normal text-sm md:text-lg lg:text-xl leading-full tracking-sm text-white lg:px-35 mt-7.5">
          Welcome to the ultimate book lover's paradise! Join our community and
          contribute to the ever-evolving library of stories, where every book
          has a chance to inspire someone new.
        </p>
        <div className="mt-10.5 max-w-97 mx-auto flex items-center border border-col-1 p-2 justify-between rounded-[10px]">
          <input
            type="text"
            placeholder="Search a Book"
            className="font-normal text-[15px] placeholder:text-col-3 text-white px-2 md:px-4 outline-none"
          />
          <button className="text-white bg-col-2 px-4 py-1.5 md:px-10.75 md:py-1.75 rounded-[5px] font-normal lg:text-lg md:text-base text-sm">
            Search
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
