import React, { useEffect } from 'react'
import Shimmer from './Shimmer';
import { useState } from 'react';


const RestaurantMenu = () => {

    const [menu, setMenu] = useState(null)

     const fetchMenu = async () => {
       const response = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.73390&lng=76.78890&restaurantId=718482&catalog_qa=undefined&submitAction=ENTER"
         );
         
         const data = await response.json()
         console.log(data)
         setMenu(data)
    };
    useEffect(() => {
    fetchMenu();
    }, [])

    if (menu === null) return <Shimmer></Shimmer>
    
    const { name, avgRating, costForTwoMessage, cuisines, } = menu?.data?.cards[2]?.card?.card?.info
    const { itemCards } = menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
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
            <li key={resItem.card.info.id}>{resItem.card.info.name}</li>
          ))}
        </ul>
      </div>
    );
}

export default RestaurantMenu