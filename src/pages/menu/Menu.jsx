import { Helmet } from "react-helmet-async";
import menubg from '../../assets/menu/banner3.jpg'
import PopularMenu from "../home/popularMenu/PopularMenu";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/sectiontitle/SectionTitle";
import MenuCategory from "./menuCategory/MenuCategory";
import DesertImage from '../../assets/menu/dessert-bg.jpeg'
import PizzaImage from '../../assets/menu/pizza-bg.jpg'
import SalatImage from '../../assets/menu/salad-bg.jpg'
import SoupImage from '../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu,setMenu]=useMenu(); //using custom Hook
    const deserts=menu.filter((item)=> item.category==='dessert');
    const soup=menu.filter((item)=> item.category==='soup');
    const salad=menu.filter((item)=> item.category==='salad');
    const pizza=menu.filter((item)=> item.category==='pizza');
    const offered=menu.filter((item)=> item.category==='offered');


    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            

             {/* todays Offered */}
            <SectionTitle heading="Todays Offer" subHeading="Don't Miss"></SectionTitle>
            <MenuCategory items={offered} coverImg={menubg}></MenuCategory>


            {/* Desert menu items */}
            <MenuCategory items={deserts} title="Deserts" coverImg={DesertImage}></MenuCategory>

          
            {/* Pizza menu items */}
            <MenuCategory items={pizza} title="Pizza" coverImg={PizzaImage}></MenuCategory>
            
            {/* Salad menu items */}
            <MenuCategory items={salad} title="Salat" coverImg={SalatImage}></MenuCategory>

             {/* Soup menu items */}
             <MenuCategory items={soup} title="Soup" coverImg={SoupImage}></MenuCategory>
        </div>
    );
};

export default Menu;