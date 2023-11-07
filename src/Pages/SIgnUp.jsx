import { AwesomeButton } from "react-awesome-button";
import { Link, useNavigate } from "react-router-dom";
import SignUpAnemition from '../../public/SignUp.json';

import toast from "react-hot-toast";
import { useState } from "react";
import { FaEyeSlash,FaEye } from 'react-icons/fa';
import Context from "../Hooks/useContext";
import Lottie from "lottie-react";

const Register = () => {
    const [ShowPassword,setShowPassword]=useState(false)
const {createUser,updeateProfile}=Context()
const navigate = useNavigate()
const Handleregister = (e)=>{
    e.preventDefault()
const emailvalue = e.target.email.value;
const namevalue = e.target.name.value;
const passwordvalue = e.target.password.value;
const photoUrlValue = e.target.photoUrl.value;

if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{6,}$/.test(passwordvalue)) {
    console.log("Valid password:", passwordvalue);
    createUser(emailvalue, passwordvalue)
      .then((result) => {
          toast.success( result.user,'You Have SuccessFully Create Account')
          updeateProfile(emailvalue,namevalue,photoUrlValue)
          .then((results) => {
              console.log(result);
            // console.log(results.user,'updateProfile successfully  ');
            navigate('/')
          }).catch((error) => {
        
            console.log(error.message);
          });
          

      })
      .catch(error => {
        
        toast.error(error.message);
      });
  } else {
   
    toast.error("Password must contain at least one letter and one number, and be at least 8 characters long.");
    
  }
 
  
console.log(emailvalue,passwordvalue);
}
    return (
    
          <div className=" py-4 max-w-screen-xl md:flex border-2   justify-around md:ml-10">
                
                <div className=" mt-10 shadow-xl border-2  w-full max-w-sm p-4 bg-white  border-gray-200 rounded-lg   sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 md:ml-52">
                    <form className="space-y-6" onSubmit={Handleregister}  >
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">Create Our Website</h5>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                            <input  name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your Name" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input   type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your PhotoUrl</label>
                            <input   type="url" name="PhotoUrl" id="photoUrl" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder=" PhotoUrl" required />
                        </div>
                        <div>
           <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type={ShowPassword ? 'text' : 'password'}
         name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
              <span className="relative text-xl  -top-8 left-60"    onClick={() => setShowPassword(!ShowPassword)} >
                       
                       {
                    ShowPassword ? <FaEye></FaEye>
                    : <FaEyeSlash></FaEyeSlash> 
                    }
        
                   </span>
                </div>
              
                        <button   type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create account</button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
                            You have Already registered? <Link to='/login'
                            className="text-blue-700 hover:underline dark:text-blue-500">Login Now</Link>
                        </div>
                    </form>
                </div>
        
                <div className=' mt-10    md:w-4/12  '>
        <Lottie className='w-4/5' animationData={SignUpAnemition}>
        
        </Lottie>
        </div>
                </div>
   
        
    );
};

export default Register;

