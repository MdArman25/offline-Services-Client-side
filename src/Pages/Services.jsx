import { useEffect, useState } from "react";

import axios from 'axios';
import PopularService from "../Components/PopularService";


const Services = () => {
const [services,setServices]=useState([])


    useEffect( ()=>{
        axios.get('http://localhost:5000/services',).then(res =>{
            const data =res.data;
            setServices(data)
        })
    },[])
    return (
        <div className="max-w-screen-xl mx-auto grid gap-10">
           {
            services.map(service=><PopularService key={service._id} service={service}></PopularService>)
           }
        </div>
    );
};

export default Services;