// import { useEffect, useState } from "react";
// import { axiosSecure } from "./useAxiosSecure";



// const useServices = (search) => {
//     console.log(search);
//     const [services, setServices] = useState([]);
//     useEffect(() => {
//         // fetch('https://car-doctor-server-topaz-one.vercel.app/services')
//         //     .then(res => res.json())
//         //     .then(data => setServices(data))

//         axiosSecure(`http://localhost:5000/services?search=${search}`)
//             .then(res => setServices(res.data))
//     }, [search])

//     return services;
// };

// export default useServices;