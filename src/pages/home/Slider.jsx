import { slideItem } from "../../assets";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import { MdOutlineShoppingCart } from "react-icons/md";

const Slider = () => {
  return (
    <div className="lg:pt-26 py-20 lg:pb-45">
      <Container>
        <Heading title={"Our Best Picks"} color="text-black" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-14 mt-20">
          {slideItem.map((item) => (
            <div key={item.id} className="relative">
              <span className="absolute top-3 right-6 rounded-[5px] bg-col-1 px-2 py-1.5">
                <MdOutlineShoppingCart size={26} className="text-white" />
              </span>
              <img
                src={item.img}
                alt={item.title}
                className="w-full img-fluid"
              />
              <div className="px-3 mt-4">
                <h3 className="font-bold md:text-lg text-base lg:text-xl lg:leading-6.5 text-black">
                  {item.title}
                </h3>
                <p className="font-normal mt-1 md:text-base lg:text-lg lg:leading-6.5 text-black">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Slider;
