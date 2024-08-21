import RestaurantCard from "./RestaurantCard";
import resObj from "../Data";



    function Body({resData}) {
    return (
      <div className="body">
        <div className="search">
          <input type="text" placeholder="Search"></input>
        </div>
        <div className="res-container">
          <RestaurantCard resData = {resObj}/>
        </div>
      </div>
    );
}

export default Body;
