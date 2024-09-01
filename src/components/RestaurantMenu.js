import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from "../utils/useRestaurantMenu.js";



const RestaurantMenu = () => {
  const { resId } = useParams()
  
  const menu = useRestaurantMenu(resId);
    
    if (menu === null) return <Shimmer></Shimmer>
    
    const { name, avgRating, costForTwoMessage, cuisines, } = menu?.data?.cards?.[2]?.card?.card?.info
    const { itemCards } = menu?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    console.log(itemCards)
    return (
      <div>
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <p>Rating {avgRating}</p>
        <p>{costForTwoMessage}</p>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((resItem) => (
            <li key={resItem?.card?.info?.id}>{resItem?.card?.info?.name}</li>
          ))}
        </ul>
      </div>
    );
}

export default RestaurantMenu;