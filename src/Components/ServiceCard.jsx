/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
const ServiceCard = ({service}) => {
    const {id,music_img,name,music_details}=service
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true,   
        });
      }, []);
    return (
        <div>
           
<div  data-aos="fade-up" className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={music_img} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </a>
      
                {
                    music_details.length > 200
                        ? <p>{music_details.slice(0, 200)} <Link
                             className=" font-bold">...</Link></p>
                        : <p>{music_details}</p>
                }

        <Link to={`/details/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           About more Details
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
</div>
 
        </div>
    );
};

export default ServiceCard;