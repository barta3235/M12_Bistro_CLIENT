import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";

const Dashboard = () => {
    return (
        <div className="flex gap-5">
            {/* sidebar */}
            <div className="w-64 min-h-screen bg-orange-400">
                  <ul className="menu">
                       <li><NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                       <li><NavLink to='/dashboard/userHome'><FaHome className="text-white"></FaHome>User Home</NavLink></li>
                       <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar>Reservation</NavLink></li>
                       <li><NavLink to='/dashboard/review'><MdOutlineRateReview></MdOutlineRateReview>Add Review</NavLink></li>
                       <li><NavLink to='/dashboard/bookings'><MdOutlineRateReview></MdOutlineRateReview>My Bookings</NavLink></li>
                       <div className="divider"></div>
                       <li><NavLink to='/'><FaHome className="text-white"></FaHome>Home</NavLink></li>
                       <li><NavLink to='/order/salad'><FaSearch></FaSearch>Menu</NavLink></li>
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