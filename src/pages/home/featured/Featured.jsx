import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import featuredImage from '../../../assets/home/featured.jpg' 
import './featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading={"Check It Out"} heading={"Featured Item"}></SectionTitle>
            <div className="md:flex items-center justify-center py-20 px-36 bg-slate-50 bg-opacity-40">
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className="md:ml-[10px]">
                    <p>Aug 2029</p>
                    <p className="uppercase">Where can I get to eat</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis quidem illum fugiat officia. Tempore, illum. Cupiditate reprehenderit qui expedita quidem quam maiores quos quae nobis ipsum iusto dolore, impedit commodi suscipit iure at aperiam veritatis modi dolor. Sequi quas ea dignissimos nobis, voluptatum id voluptate reiciendis culpa beatae laudantium eum!</p>
                    <button className="btn btn-outline border-0 border-b-4 ">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;