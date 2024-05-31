import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({children}) => {

    const {user,loading}=useAuth();
    const [isAdmin,isAdminLoading]=useAdmin();

    if(loading || isAdminLoading){
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if(user && isAdmin){
        return children
    }

    return <Navigate state={{from:location}} to='/login' replace></Navigate>

    
};

export default AdminRoute;