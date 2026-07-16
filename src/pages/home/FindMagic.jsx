import { assets, magicItem } from "../../assets";
import Container from "../../components/Container";

const FindMagic = () => {
  return (
    <div className="bg-black pt-20 lg:pt-40 pb-20">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:items-center">
          <div className="lg:col-span-5">
            <img
              src={assets.find_magic_left}
              alt="Find Magic"
              className="w-full img-fluid"
            />
          </div>
          <div className="lg:col-span-7">
            <h2 className="lg:text-[40px] md:text-[32px] text-[28px] leading-13.5 text-white font-bold mb-5">
              Your favourite{" "}
              <span className="text-col-1">
                Reads <span className="lg:block">Are Here!</span>
              </span>
            </h2>
            <p className="font-normal text-base md:text-lg lg:text-xl lg:leading-5.5 text-white text-justify">
              Buy your favorite books online with ease! Enjoy exclusive offers
              and discounts on selected titles. Dive into our collection and
              find special deals that make reading more affordable. Shop now and
              unlock more savings with every purchase!
            </p>
            <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between mt-11">
              {magicItem.map((item) => (
                <div key={item.id}>
                  <h3 className="text-col-1 font-normal lg:leading-7.5 text-xl mb-2 md:text-2xl lg:text-3xl">
                    {item.num}
                  </h3>
                  <p className="text-col-1 font-normal lg:leading-7.5 text-sm md:text-base">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
            <button className="bg-transparent font-normal text-[15px] text-white border border-col-1 rounded-[10px] py-3 px-10 lg:px-12.5 mt-7.5">
              Explore More
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FindMagic;
