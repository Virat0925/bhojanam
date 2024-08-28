import React, { useEffect } from 'react'
import { useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../utils/constants';


const RestaurantMenu = () => {

    const [menu, setMenu] = useState(null)

    const { resId } = useParams()
    
    useEffect(() => {
       fetchMenu();
    }, []);
    

     const fetchMenu = async () => {
       const response = await fetch(MENU_URL + resId);
         
         const data = await response.json()
         console.log(data)
         setMenu(data)
    };
   

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