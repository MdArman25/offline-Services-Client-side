/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
const ServiceCard = ({service,handleDelete}) => {

   

    console.log(service);
    //  const [service_name,service_image,service_description,service_provider,service_area,service_price]=service;
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true,   
        });
      }, []);
    return (
        <div>
           
<div  data-aos="fade-up" className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
    <a href="#">
        <img className="rounded-t-lg" src={service?.service_image} alt="" />
    </a>
    <div className="p-5">
       <div className="flex justify-between ">
       <p href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{service.service_name}</h5>
        </p>
        <p href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{service.service_price}</h5>
        </p>
       </div>
      
                {
                    service?.service_description.length > 100
                        ? <p>{service?.service_description.slice(0, 100)} <Link
                             className=" font-bold">...</Link></p>
                        : <p>{service?.service_description}</p>
                }

 <div className=" flex justify-between my-5 ">
 <Link to={`/UpdateProduct/${service?._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Update Service
            
        </Link>
        <Link  onClick={() => handleDelete(service._id)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Delete service            
        </Link>
 </div>
    </div>
</div>
 
        </div>
    );
};

export default ServiceCard;