import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then((result) => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const navOptions = <>
        <li className="flex items-center justify-center"><Link to='/'>Home</Link></li>
        <li className="flex items-center justify-center"><Link to='/menu'>Our Menu</Link></li>
        <li className="flex items-center justify-center"><Link to='/order/salad'>Order Food</Link></li>
        <li>
            <Link>
                <button className="btn">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">0</div>
                </button>
            </Link>
        </li>
        {
            user ? <>
                <li className="border-2 flex items-center justify-center md:mr-4">{user?.displayName}</li>
                <button onClick={handleLogOut} className="">Log Out</button>
            </> : <li><Link to='/login'>Login</Link></li>
        }

    </>
    return (
        <div className="navbar z-10 fixed max-w-screen-xl bg-black text-white bg-opacity-30">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-black bg-opacity-50 font-medium text-2xl shadow rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;