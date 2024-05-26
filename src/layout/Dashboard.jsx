import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* sidebar */}
            <div className="w-64 min-h-screen bg-orange-400">
                  <ul className="menu">
                       <li><NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                  </ul>

                  <ul className="menu">
                       <li><NavLink to='/dashboard/userHome'><FaHome className="text-white"></FaHome>User Home</NavLink></li>
                  </ul>

                  <ul className="menu">
                       <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar>Reservation</NavLink></li>
                  </ul>

                  <ul className="menu">
                       <li><NavLink to='/dashboard/review'><MdOutlineRateReview></MdOutlineRateReview>Add Review</NavLink></li>
                  </ul>

                  <ul className="menu">
                       <li><NavLink to='/dashboard/bookings'><MdOutlineRateReview></MdOutlineRateReview>My Bookings</NavLink></li>
                  </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;