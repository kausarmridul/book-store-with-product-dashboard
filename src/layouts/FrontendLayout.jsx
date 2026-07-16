import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const FrontendLayout = () => {
  return (
    <>
      <Helmet>
        <link rel="icon" href="/home-logo.png" />
      </Helmet>
      <div className="font-bona">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default FrontendLayout;
