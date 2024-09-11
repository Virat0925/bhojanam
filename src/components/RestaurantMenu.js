import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from './RestaurantCategory.js';
import { useState } from 'react';



const RestaurantMenu = () => {

  const [showIndex, setShowIndex] = useState(0);

  const { resId } = useParams()
  
  const menu = useRestaurantMenu(resId);
    
    if (menu === null) return <Shimmer></Shimmer>
    
  const { name, avgRating, costForTwoMessage, cuisines, } = menu?.data?.cards?.[2]?.card?.card?.info
  
  const item = menu?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  
  const categories =
    item.filter((c) => c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  
  // console.log(categories);
  
    return (
      <div className="flex flex-col text-center bg-gray-100">
        <div className="mb-4 p-8 shadow-xl rounded-3xl">
          <h1 className="font-bold text-3xl my-4 font-sans">{name}</h1>
          <h3 className="font-bold text-lg text-[#FE5005] underline">
            {cuisines.join(", ")}
          </h3>
          <p className="font-semibold text-lg">
            ⭐ {avgRating} ⭐• {costForTwoMessage}
          </p>
        </div>

        <h2 className="mt-4 font-semibold text-xl">MENU</h2>

        {categories.map((category, index) => (
          <RestaurantCategory /*Controlled Component  */
            key={category.card.card.title}
            data={category.card.card}
            showItemList={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    );
}

export default RestaurantMenu;