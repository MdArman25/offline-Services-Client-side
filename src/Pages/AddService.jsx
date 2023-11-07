/* eslint-disable no-mixed-spaces-and-tabs */
import Swal from "sweetalert2";
import Context from "../Hooks/useContext";

const AddService = () => {
	const {user}=Context()
const provider_email = user.email;
	const handleAddProduct = (event) => {
		event.preventDefault();
	
		const form = event.target;
	
		const name = form.name.value;
		const Service_img = form.Service_img.value;
		const service_price = form.service_price.value;
		// const Type = form.product.value;

		
		const Description = form.Description.value;
		const area = form.area.value;
	
		const NewProduct = {
			service_name: name,
			service_image: Service_img,
			service_price,
		provider_email ,
		  service_description:  Description,
		  service_area: area,

		};
	
		console.log(NewProduct);
	
		// send data to the server
		fetch(
		  "http://localhost:5000/AddService",
		  {
			method: "POST",
			headers: {
			 "content-type": "application/json",
			},
			body: JSON.stringify(NewProduct),
		  }
		)
		  .then((res) => res.json())
		  .then((data) => {
			console.log(data);
			if (data.insertedId) {
			  Swal.fire({
				title: "Success!",
				text: "Product Added Successfully",
				icon: "success",
				confirmButtonText: "Done",
			  });
			}
		  });
	  };
	// console.log(user);
    return (
        <div>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-50 max-w-screen-xl mx-auto">
	<form action="" onSubmit={handleAddProduct} className="container flex flex-col mx-auto space-y-4 shadow-xl shadow-zinc-400">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-extrabold text-xl text-center">Add Service Information</p>
				<p className="text-xs"></p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Service Name</label>
					<input id="firstname" type="text" placeholder="Service Name" className="w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900" />
				</div>
			
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">Service Image</label>
					<input id="lastname" type="url" 
					name="Service_img"
					placeholder="Service Image" className="w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Service Price</label>
					<input id="firstname"
					name="service_price" type="number" placeholder="Service Price" className="w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900" />
				</div>
				<br />
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">Service Area</label>
					<input id="lastname" type="text"
					name="area" placeholder="Service Area"
					className="w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900" />
				</div>
				
				<div className="col-span-full">
					<label  className="text-sm">Description</label>
					<input id="Description" type="text" placeholder="" className="w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900" />
				</div>
				
			
			</div>
		</fieldset>
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1 ">
				<p className="text-xl text-center font-bold m-5">Profile</p>
				<img className="w-4/5 m-auto rounded-md object-cover" src={user?.photoURL} alt="" />
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Your Name</label>
					<input id="Name" type="text" 
					defaultValue={user?.displayName} placeholder="Name" className="w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Your Email</label>
					<input id="" type="email"
					 placeholder=""
					defaultValue={user?.email} className="w-full rounded-md  focus:ri focus:ri dark:border-gray-700 text-lg font-medium dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3 ">
					
					<input id="" type="submit" value={'Add Service'} className="btn btn-warning btn-outline w-full ml-32 mt-10" />
				</div>

			</div>
		</fieldset>
	</form>
</section>
        </div>
    );
};

export default AddService;