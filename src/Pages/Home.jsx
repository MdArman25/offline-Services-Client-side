import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import { HiOutlineArrowRight } from "react-icons/hi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import PopularService from "../Components/PopularService";

import axios from "axios";
import PopularService from "../Components/PopularService";
import { Button } from "flowbite-react";
import { Helmet } from "react-helmet-async";
import OurTeam from "../Components/OurTeam";

import ContactFrom from "../Components/ContactFrom";

const Home = () => {
  const [services, setServices] = useState([]);
  // const [IsShow,setIsShow]=useState(false)

  useEffect(() => {
    axios.get("http://localhost:5000/services").then((res) => {
      const data = res.data;
      setServices(data);
    });
  }, []);
  return (
    <div>
      <Helmet>
        <title> Service Swap || HOME</title>
      </Helmet>
      <ToastContainer />
      <Banner></Banner>
      <p className="text-2xl font-extrabold text-center my-10 ">Our Service</p>
      <div className="grid md:grid-cols-2 mx-auto max-w-screen-xl ">
        {services.slice(0, 4).map((service) => (
          <PopularService key={service._id} service={service}></PopularService>
        ))}{" "}
      </div>
      <div className="w-full" id="ShowAll">
        <Link
          to={"/services"}
          className="  flex mx-auto w-fit  justify-center  my-10  "
        >
          <Button>
            Show All
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>

      <div className="grid gap-10">
        <OurTeam></OurTeam>

        <ContactFrom></ContactFrom>
      </div>
    </div>
  );
};

export default Home;
