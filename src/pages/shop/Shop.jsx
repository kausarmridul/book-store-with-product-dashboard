import { useState } from "react";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import { shopProducts } from "../../assets";
import { MdOutlineShoppingCart } from "react-icons/md";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProduct = shopProducts.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;

    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const categories = [
    "All",
    ...new Set(shopProducts.map((product) => product.category)),
  ];

  return (
    <div className="pt-20 pb-20 lg:pb-30">
      <Container>
        <Heading title={"Explore All Books Here"} color="text-col-1" />
        <div className="max-w-80 mx-auto mt-15">
          <input
            type="text"
            placeholder="Seach Books..."
            className="w-full border outline-none border-col-1 text-black px-3 py-2 rounded-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="lg:max-w-[80%] mx-auto flex flex-col md:flex-row md:items-center md:justify-between mt-15 gap-5">
          {categories.map((category) => (
            <button
              key={category}
              className="flex items-center gap-2"
              onClick={() => setSelectedCategory(category)}
            >
              <span
                className={`w-6 h-6 border-2  ${selectedCategory === category ? "border-col-1 bg-col-1" : "border-black bg-transparent"}`}
              />
              <span
                className={`font-bold text-lg md:text-2xl lg:text-[28px] leading-full tracking-sm ${selectedCategory === category ? "text-col-1" : "text-black"}`}
              >
                {category}
              </span>
            </button>
          ))}
        </div>
        <div className="mt-15 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {filteredProduct.length > 0 ? (
            filteredProduct.map((product) => (
              <div className="border rounded-lg px-6 py-3" key={product.id}>
                <img
                  src={product.img}
                  alt={product.name}
                  className="img-fluid w-full h-70 object-cover object-center"
                />
                <h3 className="text-xl leading-5.25 font-bold text-black mt-5">
                  {product.name}
                </h3>
                <p className="text-base leading-5.25 font-bold text-black mt-2">
                  {product.description}
                </p>
                <h4 className="text-sm leading-5.25 font-bold text-black mt-6">
                  {product.price}
                </h4>
                <h4 className="text-sm leading-5.25 font-normal text-black">
                  {product.available}
                </h4>
                <button className="flex items-center gap-2 justify-center w-full max-w-[80%] mx-auto border mt-3 rounded-lg py-1 border-col-1">
                  <MdOutlineShoppingCart size={20} className="text-black" />
                  <span className="text-sm font-normal text-black">
                    Add to Cart
                  </span>
                </button>
              </div>
            ))
          ) : (
            <h2 className="text-3xl">No Books Found...</h2>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Shop;
