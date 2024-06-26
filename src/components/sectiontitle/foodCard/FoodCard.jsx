import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";


const FoodCard = ({ item }) => {
    const { user } = useAuth();
    const nav = useNavigate();
    const location = useLocation();
    const axiosSecure=useAxiosSecure();
    const [,refetch]=useCart();  //hooks

    const { name, image, price, recipe, _id } = item;

    const handleAddToCart = (food) => {
        if (user && user?.email) {
            //send the cart item to the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }

            axiosSecure.post('/carts',cartItem)
            .then(res=>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        title: `${name} added to the cart`,
                        timer:1500,
                    });
                    //refetch the cart to update cart items count
                    refetch();
                }
            })



        } else {
            Swal.fire({
                title: "You are not logged In",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    nav('/login', { state: { from: location } })
                }
            });

        }
    }

    return (
        <div>
            <div className="card bg-base-100 relative shadow-xl mx-[10px]">
                <figure><img className="w-full" src={image} alt="Shoes" /></figure>
                <p className="bg-black absolute right-0 mr-2 mt-2 px-2 text-white font-medium w-[50px]">${price}</p>
                <div className="card-body flex flex-col justify-center items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>


                    <div className="card-actions justify-end">
                        <button
                            onClick={() => handleAddToCart(item)}
                            className="btn btn-outline border-orange-400 border-0 bg-slate-100 border-b-4 mt-4">Add to Cart
                        </button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default FoodCard;