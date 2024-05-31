import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
    const {
        register,
        handleSubmit,
        watch,
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <Helmet>
                <title>Admin | Add Item</title>
            </Helmet>
            <div>
                <SectionTitle heading='Add an Item' subHeading="whats new?"></SectionTitle>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>


                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input {...register("name",{required:true})} type="text" placeholder="Recipe Name" className="input input-bordered w-full" />
                    </div>

                    <div className="flex justify-between gap-5 items-center">

                        {/* category */}

                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select  {...register("category",{required:true})} className="select select-bordered w-full">
                                <option disabled selected>Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>

                        </div>

                        {/* price */}

                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input {...register("price",{required:true})} type="number" placeholder="Price in dollars" className="input input-bordered w-full" />
                        </div>

                    </div>

                    <div>
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Recipe Details</span>
                            </div>
                            <textarea {...register('recipe',{required:true})}  className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                        </label>
                    </div>

                    <div className="my-6">
                        <input {...register('image',{required:true})} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn flex justify-center items-center gap-2">Add Item <FaUtensils></FaUtensils></button>
                </form>
            </div>

        </div>
    );
};

export default AddItems;