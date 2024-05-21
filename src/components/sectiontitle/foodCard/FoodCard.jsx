
const FoodCard = ({item}) => {

    const {name,image,price,recipe}=item;  

    return (
        <div>
            <div className="card bg-base-100 relative shadow-xl mx-[10px]">
                <figure><img className="w-full" src={image} alt="Shoes" /></figure>
                <p className="bg-black absolute right-0 mr-2 mt-2 px-2 text-white font-medium w-[50px]">${price}</p>
                <div className="card-body flex flex-col justify-center items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline border-orange-400 border-0 bg-slate-100 border-b-4 mt-4">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;