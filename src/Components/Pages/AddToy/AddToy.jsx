// import React from 'react';

import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`


    const onSubmit = data => {
        console.log(data);

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                
                console.log(imgURL);
                const {toyName,quantity,rating,sellerName,sellerEmail, price, category,description} = data;
                const newToy = {toyName,price: parseFloat(price),Quantity:parseFloat(quantity),Rating:parseFloat(rating),sellerName,sellerEmail,category,image:imgURL,description}
                console.log(newToy)

       
                axiosSecure.post('/bookingToys', newToy)
                .then(data => {
                    console.log('after posting new toy', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'toy added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
             console.log(imgResponse)
        }
        )

    };
     console.log(img_hosting_token);
    return (
        <div className="w-full px-10">
            <h1 className="text-4xl font-bold underline mt-4 mb-4">Add a Toy</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Toy Name*</span>
                    </label>
                    <input type="text" placeholder="toyName"
                        {...register("toyName", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
              
                    <div className="flex my-4">
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Quantity*</span>
                        </label>
                        <input type="number" {...register("quantity", { required: true })} placeholder="quantity" className="input input-bordered w-full " />
                    </div>
                    </div>
                    
                    <div className="flex my-4">
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Rating*</span>
                        </label>
                        <input type="number" {...register("rating", { required: true })} placeholder="Rating" className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">seller Name*</span>
                        </label>
                        <input type="text" {...register("sellerName", { required: true })} placeholder="sellerName" className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">seller Email*</span>
                        </label>
                        <input type="text" {...register("sellerEmail", { required: true })} placeholder="sellerEmail" className="input input-bordered w-full " />
                    </div>
                    
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">sub-Category*</span>
                        </label>
                        <input type="text" {...register("category", { required: true })} placeholder="category" className="input input-bordered w-full " />
                    </div> 
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea {...register("description", { required: true })} className="textarea textarea-bordered h-30" placeholder="category"></textarea>
                    
                    
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">toy Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
              
                <input className="btn btn-block mt-4 bg-primary mb-4" type="submit" value="Add a toy" />
            </form>
        </div>
    );
};

export default AddClass;


