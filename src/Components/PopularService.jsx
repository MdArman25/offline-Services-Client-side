/* eslint-disable react/prop-types */
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const PopularService = ({service}) => {
    // console.log(service);
    // const [service_name,service_image,service_description,service_provider,service_area,service_price]=service;
    return (
        <div>

			
<div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
	{/* <div className="flex  items-center">
		<img alt="" src={service.service_provider.image} className="object-cover w-14 h-14 rounded-full shadow dark:bg-gray-500" />
		<div className="flex items-center justify-around  w-full ">
			<p  className="font-bold">{service.service_provider.name}</p>
			
		</div>
	</div> */}
	<div>

		<img src={service.service_image} alt=""className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
		<h2 className="mb-2 text-2xl font-bold">{service.service_name}</h2>
		{
                   service.service_description.length > 200
                        ? <p>{service.service_description.slice(0, 200)}...</p>
                        : <p>{service.service_description}</p>
                }
	</div>
	
<div className="flex  space-x-1">
		<img alt="" src={service.user_image} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
		<div className="flex flex-col space-y-1 w-fit">
			<a rel="noopener noreferrer"  className="text-sm font-semibold">{service.user_name}</a>
			<span className="text-xs dark:text-gray-400">{service.service_area}</span>
		</div>

		<p className="text-xl font-bold ml-10 pl-4 pr-10 ">
			{
				service.service_price
			}
		</p>
				<Button className="" outline gradientDuoTone="redToYellow">
			<Link className="  " to={`/service/${service._id}`}>
     View Details
	  </Link>
      </Button>

		
	</div>
	{/* <div className="flex flex-wrap justify-between">
		<p className="text-lg font-bold">Service Area: {service.service_area}</p>
        <p className="text-lg font-bold">{service.service_price}</p>
	</div> */}
	
</div>
        </div>
    );
};

export default PopularService;