import { Link, useRouteError } from 'react-router-dom';
import errorPage from '../../public/404page.json';
import Lottie from 'lottie-react'

const ErrorPage = () => {
    const error =useRouteError()
    console.log(error);
    return (
        <div className='grid  justify-center items-center mx-auto md:grid-cols-2'>
          <div>
          <h2 className="text-center text-2xl font-bold ">Opps !!!!</h2>
            <p className="text-center text-2xl font-bold ">{error.statusText || error.message} </p>
            
            {
                error.status = 404 && 
                <div>
                    <h1 className="text-center text-2xl font-bold ">Page Not Found </h1>
                    
                </div>
            }
             <Link  className='' to={'/'}> <button className="btn btn-outline btn-warning text-center mx-10 w-full mt-20">Go Back</button></Link>
          </div>
            <Lottie animationData={errorPage}></Lottie>
           
        </div>
    )
};

export default ErrorPage;