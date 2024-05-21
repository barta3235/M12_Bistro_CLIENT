import MenuItem from "../../../shared/menuItem/MenuItem";
import Cover from "../../../shared/navbar/cover/Cover";

const MenuCategory = ({ items,title,coverImg }) => {
    return (
        <div className="mb-[20px] pt-8">
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="mb-[30px]">

            </div>
            <div className="mt-16 ">
                {items?.map((item) => <MenuItem key={item._id} item={item}></MenuItem>)}
            </div>
        </div>
    );
};

export default MenuCategory;