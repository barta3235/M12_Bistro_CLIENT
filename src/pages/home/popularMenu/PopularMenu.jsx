import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../../shared/menuItem/MenuItem";

const PopularMenu = () => {

    const [menu,setMenu]=useMenu(); //using hooks


    const popular= menu.filter((item)=>item.category==='popular');



    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setMenu(popularItems);
    //             console.log(popularItems)
    //         })
    // }, [])


    return (
        <div className="mb-12">
            <SectionTitle heading={"From Our Menu"} subHeading={"Popular Menu"}>
            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {popular.map((item) => <MenuItem key={item._id} item={item}></MenuItem>)}
            </div>
            <div className="flex justify-center items-center">
                <button className="btn btn-outline border-0 border-b-4"><h1>View Full menu</h1></button>
            </div>
        </div>
    );
};

export default PopularMenu;