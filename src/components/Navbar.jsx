import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import { assets, homeNav } from "../assets";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav className="bg-[url(/nav-bg.png)] bg-no-repeat bg-cover bg-center py-3">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <Link to={"/"} className="flex items-center gap-1">
              <img src={assets.home_logo} alt="Logo" className="w-20" />
              <span className="uppercase text-col-1 font-bold text-[28px] leading-full tracking-sm md:block hidden">
                neth <br /> bookpoint
              </span>
            </Link>
          </div>
          <div className="flex items-center lg:gap-5 xl:gap-10">
            <ul className="hidden lg:flex items-center lg:gap-5 xl:gap-10">
              {homeNav.map((nav) => (
                <li key={nav.id}>
                  <NavLink
                    to={nav.url}
                    className={({ isActive }) =>
                      `${isActive ? "text-col-1" : "text-white"} font-normal text-xl leading-full tracking-sm`
                    }
                  >
                    {nav.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex gap-2 lg:gap-5 items-center">
              <div>
                <IoIosNotifications
                  className="text-white/45 cursor-pointer"
                  size={35}
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src={assets.user}
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
                <h3 className="text-white font-normal text-[11px] leading-full tracking-sm">
                  abc123@gmailcom
                </h3>
              </div>
            </div>
            <button
              className="lg:hidden ml-2 lg:ml-5"
              onClick={() => setOpenNav(true)}
            >
              <AiOutlineMenu
                className="text-white hover:opacity-90 transition-all duration-300"
                size={24}
              />
            </button>
          </div>
        </div>
      </Container>
      <div className="overflow-hidden">
        <div
          className={`fixed inset-0 lg:hidden transform transition-all duration-500 z-49 bg-black opacity-70 w-full h-screen ${openNav ? "translate-x-0" : "translate-x-full"}`}
          onClick={() => setOpenNav(false)}
        />
        <div
          className={`lg:hidden fixed h-full z-50 bg-black shadow-md transition-all duration-500 delay-300 top-0 right-0 w-[60%] md:w-[40%] ${openNav ? "translate-x-0" : "translate-x-full"}`}
        >
          <ul className="flex flex-col gap-5 items-center justify-center h-full">
            {homeNav.map((nav) => (
              <li key={nav.id}>
                <NavLink
                  onClick={() => setOpenNav(false)}
                  to={nav.url}
                  className={({ isActive }) =>
                    `${isActive ? "text-col-1" : "text-white"} hover:text-col-1 transition-all duration-300 font-normal text-xl leading-full tracking-sm`
                  }
                >
                  {nav.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            className="absolute right-4 top-4 z-51"
            onClick={() => setOpenNav(false)}
          >
            <IoClose
              size={24}
              className="text-white hover:opacity-90 transition-all duration-300"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
