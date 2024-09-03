import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { DATA_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

function Body() {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); /* Keeping a Copy of Restaurant List */ 
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // console.log("Body") Checking for Reconcialation Cycle

  async function fetchData() {
    const response = await fetch(DATA_URL);

    const json = await response.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants /* Keeping a Copy of Restaurant List */
    );
  }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (<h1>Looks like you are Offline</h1>
    )
  }

  const clickHandler = () => {
    const searchRestaurant = listOfRestaurants.filter((restaurant) => {
      return restaurant.info.avgRating > 4.2;
    });
    setFilteredRestaurant(searchRestaurant);
  };

  return (
    <div className="">
      <div className="m-2 p-2 ">
        <input
          type="text"
          className="border border-black border-solid px-1"
          placeholder="Search here..."
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />

        <button
          className="m-4 px-4 py-1 bg-gray-200 rounded-lg"
          onClick={() => {
            // console.log(searchValue);
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

        <button
          className="m-4 px-4 py-1 bg-gray-200 rounded-lg "
          onClick={clickHandler}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="flex flex-wrap">
        {listOfRestaurants.length === 0 ? (
          <Shimmer></Shimmer>
        ) : (
          filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default Body;
