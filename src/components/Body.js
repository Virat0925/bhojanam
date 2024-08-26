import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

import { useEffect, useState } from "react";

function Body() {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); /* Keeping a Copy of Restaurant List */ 
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // console.log("Body") Checking for Reconcialation Cycle

  async function fetchData() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await response.json();
    // console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const clickHandler = () => {
    const searchRestaurant = listOfRestaurants.filter((restaurant) => {
      return restaurant.info.avgRating > 4.4;
    });
    setListOfRestaurants(searchRestaurant);
  };

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            console.log(searchValue);
            const filteredRes = listOfRestaurants.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchValue.toLowerCase())
            );
            setFilteredRestaurant(filteredRes);
          }}
        >
          Search
        </button>

        <button className="filter-btn" onClick={clickHandler}>
          Top rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.length === 0 ? (
          <Shimmer></Shimmer>
        ) : (
          filteredRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        )}
      </div>
    </div>
  );
}

export default Body;
