import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { axiosSecure } from "./useAxiosSecure";

const useAdmin = () => {
    const {user,loading}=useAuth();
    
    const {data:isAdmin,isPending:isAdminLoading}=useQuery({
       queryKey:[user?.email,'isAdmin'],
       enabled:!loading,
       queryFn: async()=>{
         console.log('checking before calling admin API',user);
          const res= await axiosSecure(`/users/admin/${user?.email}`);
          return res?.data?.admin
       }
    })
    
    return [isAdmin,isAdminLoading];

};

export default useAdmin;