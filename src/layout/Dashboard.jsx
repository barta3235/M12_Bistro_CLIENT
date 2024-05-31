import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaEnvelope, FaList, FaSearch, FaUsers, FaUtensils } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {

    const [cart] = useCart()

    //TODO: get isAdmin value from the database
    // const isAdmin = true;
    const [isAdmin]=useAdmin();

    return (
        <div className="flex gap-5">
            {/* sidebar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <p className="font-medium mt-[10px] text-[20px] mb-[20px]">Hello Admin</p>
                            <li><NavLink to='/dashboard/manageItems'><FaList></FaList>Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/adminHome'><FaHome className="text-white"></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/addItems'><FaUtensils></FaUtensils>Add Items</NavLink></li>
                            <li><NavLink to='/dashboard/bookings'><FaBook></FaBook>Manage Bookings</NavLink></li>
                            <li><NavLink to='/dashboard/users'><FaUsers></FaUsers>All Users</NavLink></li>
                        </> : <>
                            <p className="font-medium mt-[10px] text-[20px] mb-[20px]">Welcome User</p>
                        </>
                    }

                    <div className="divider"></div>

                    {/* shared nav links */}
                    <li><NavLink to='/'><FaHome className="text-white"></FaHome>Home</NavLink></li>
                    <li><NavLink to='/order/salad'><FaSearch></FaSearch>Menu</NavLink></li>
                    <li><NavLink to='/contacts'><FaEnvelope></FaEnvelope>Contact</NavLink></li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;