import Client from "../Components/Client";


import { Helmet } from "react-helmet-async";
import OurTeam from "../Components/OurTeam";


const About = () => {
    return (
        <div>
            <Helmet>
        <title> Service Swap || ABOUT</title>
      </Helmet>
        <div>
      <OurTeam></OurTeam>

 <Client></Client> 
        </div>
        </div>
    );
};

export default About;