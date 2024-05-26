import { useQuery } from "@tanstack/react-query";
import useAxiosSecure, { axiosSecure } from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
    const {user}=useAuth(); // hook
    const axiosSecure=useAxiosSecure();   //hook
    const {refetch,data:cart=[]}=useQuery({
        queryKey:['cart', user?.email],
        queryFn: async()=>{
            const res= await axiosSecure.get(`/carts?email=${user?.email}`);
            return res.data;
        }
    })

    return [cart,refetch];
};

export default useCart;