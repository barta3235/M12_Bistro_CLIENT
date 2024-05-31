import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import { Helmet } from "react-helmet-async";

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
                    <input placeholder="Recipe Name" className="border" {...register("name")} />
                    <select  {...register("category")} className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Select a category</option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="dessert">Dessert</option>
                        <option value="drinks">Drinks</option>
                    </select>

                    <input type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddItems;