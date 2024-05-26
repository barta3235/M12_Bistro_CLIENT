import { FaTrash } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((sum, item) => {
        return sum + item.price
    }, 0)
    return (
        <div>
            <div className="flex justify-evenly items-center mb-8">
                <h2>Total Items: {cart.length}</h2>
                <h2>Total Price: {totalPrice}</h2>
                <button className="btn btn-primary">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                               #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item,idx) => <tr key={item._id}>
                                <th>
                                    {idx+1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>$ {item.price}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs"><FaTrashAlt className="text-red-600"></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Cart;