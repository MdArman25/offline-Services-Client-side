import { Helmet } from "react-helmet-async";
import ContactFrom from "../Components/ContactFrom";
import GoogleMap from "../Components/GoogleMap";


const Contact = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Helmet>
        <title> Service Swap || ABOUT</title>
      </Helmet>
        
            <ContactFrom></ContactFrom>
            <div className='w-full'>
    <GoogleMap></GoogleMap>
</div>
 </div>
    );
};

export default Contact;