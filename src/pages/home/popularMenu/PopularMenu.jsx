import { useEffect } from "react";
import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import { useState } from "react";
import MenuItem from "../../../shared/menuItem/MenuItem";

const PopularMenu = () => {
    
    const [menu,setMenu]= useState([]);


    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=> {
            const popularItems= data.filter(item=>item.category==='popular');
            setMenu(popularItems);
            console.log(popularItems)
        })
    },[])


    return (
        <div className="mb-12">
            <SectionTitle heading={"From Our Menu"} subHeading={"Popular Menu"}>
            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {menu.map((item)=><MenuItem key={item._id} item={item}></MenuItem>)}
            </div>
        </div>
    );
};

export default PopularMenu;