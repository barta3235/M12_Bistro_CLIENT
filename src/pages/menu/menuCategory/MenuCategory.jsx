import { Link } from "react-router-dom";
import MenuItem from "../../../shared/menuItem/MenuItem";
import Cover from "../../../shared/navbar/cover/Cover";

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="mb-[20px] pt-8">
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="mb-[30px]">

            </div>
            <div className="mt-16 ">
                {items?.map((item) => <MenuItem key={item._id} item={item}></MenuItem>)}
            </div>
            <div className="flex justify-center">
                <Link to={`/order/${title}`}> <button className="btn btn-outline border-0 border-b-4 ">Order Now</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;