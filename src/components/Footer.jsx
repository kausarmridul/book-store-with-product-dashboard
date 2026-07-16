import Container from "./Container";
import { assets } from "./../assets";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <Container>
        <div>
          <img
            src={assets.home_footer_logo}
            alt="Footer Logo"
            className="img-fluid"
          />
        </div>
        <hr className="w-full text-white h-px my-7" />
        <div className="flex items-center justify-between lg:flex-row flex-col gap-5">
          <h3 className="text-xs font-normal leading-full text-white">
            &copy; {new Date().getFullYear()} | Neth BookPoint
          </h3>
          <p className="font-normal text-sm text-col-1 leading-full text-center">
            Visit our branches in Galle, Kurunegala, Kandy, and Colombo, and
            register for our online platform to enjoy maximum benefits!
          </p>
          <ul className="flex items-center gap-3">
            <li>
              <FaFacebook className="text-white/70" size={30} />
            </li>
            <li>
              <FaLinkedinIn className="text-white/70" size={30} />
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
