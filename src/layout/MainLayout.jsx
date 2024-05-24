import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/navbar/Navbar";

const MainLayout = () => {

    const location= useLocation();
    console.log(location.pathname);
    const noHeaderFooter= location.pathname.includes('/login');

    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;