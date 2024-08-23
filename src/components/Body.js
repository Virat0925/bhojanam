import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";

function Body() {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  // const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    console.log(json);
    setListOfRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  const clickHandler = () => {
    const filteredRestaurant = listOfRestaurants.filter((restaurant) => {
      return restaurant.info.avgRating > 4.2; 
    });
    setListOfRestaurants(filteredRestaurant);
  
  };

  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search"></input>
        <button className = "filter-btn" onClick={clickHandler}>Top rated Restaurants</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
}

export default Body;
