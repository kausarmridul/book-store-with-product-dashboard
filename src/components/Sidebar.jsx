import { assets } from "../assets";
import SearchBar from "./SearchBar";
import { IoMdHome } from "react-icons/io";
import { MdOutlineChevronLeft, MdOutlineReport } from "react-icons/md";
import { CiShoppingBasket } from "react-icons/ci";
import { CgExport } from "react-icons/cg";
import { AiFillProduct } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";

const Sidebar = ({ setOpenNav }) => {
  const adminNav = [
    {
      id: 1,
      name: "Home",
      url: "/",
      icons: <IoMdHome />,
    },
    {
      id: 2,
      name: "Product",
      url: "/admin/products",
      icons: <AiFillProduct />,
    },
    {
      id: 3,
      name: "Reports",
      url: "/",
      icons: <MdOutlineReport />,
    },
    {
      id: 4,
      name: "Deals",
      url: "/",
      icons: <CiShoppingBasket />,
    },
    {
      id: 5,
      name: "Export",
      url: "/",
      icons: <CgExport />,
    },
  ];
  return (
    <div className="flex flex-col justify-between h-full gap-20 relative">
      <button
        className="absolute z-10 w-6 h-6 bg-col-5 flex items-center justify-center rounded-sm -right-7.5 bottom-40 lg:hidden"
        onClick={() => setOpenNav(true)}
      >
        <MdOutlineChevronLeft />
      </button>
      <div>
        <div className="mb-7.5">
          <img src={assets.admin_logo} alt="Admin Logo" className="img-fluid" />
        </div>
        <SearchBar rounded="rounded-full" />
        <ul className="mt-7.5 flex flex-col gap-9">
          {adminNav.map((nav) => (
            <li key={nav.id}>
              <NavLink
                to={nav.url}
                className={({ isActive }) =>
                  `${isActive ? "text-col-1" : "text-black"} font-normal text-sm leading-full flex items-center gap-2`
                }
              >
                {nav.icons}
                <span>{nav.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="pb-6 grid gap-7">
        <div className="flex items-center gap-3">
          <div>
            <img
              src={assets.user}
              alt="User"
              className="w-8 h-8 rounded-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-medium text-sm leading-full text-black">
              Gustavo Xavier
            </h3>
            <span className="text-[10px] leading-4 bg-col-8 px-2 rounded-full w-fit">
              Admin
            </span>
          </div>
        </div>
        <ul className="flex flex-col gap-7">
          <li>
            <Link
              to={"#"}
              className="flex items-center gap-2 font-normal text-sm leading-full text-black"
            >
              <IoMdSettings />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link
              to={"#"}
              className="flex items-center gap-2 font-normal text-sm leading-full text-col-7"
            >
              <LuLogOut />
              <span>Log out</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
