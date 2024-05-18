import Banner from "./banner/Banner";
import Category from "./category/Category";
import Featured from "./featured/Featured";
import PopularMenu from "./popularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;