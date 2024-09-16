import { CLOUBDINARY_URL } from "../utils/constants";
function RestaurantCard({ resData }) {
  return (
    <div className="w-90%">
      <div
        className="p-2 m-4 w-[245px] h-[425px] bg-gray-100 rounded-xl hover:bg-[#FE5005] hover:text-white cursor-pointer flex flex-col justify-between 
      transition duration-300 ease-in-out transform hover:scale-95"
      >
        <img
          className="aspect-square rounded-2xl"
          src={CLOUBDINARY_URL + resData.info.cloudinaryImageId}
          alt="restaurant-image"
        ></img>
        <h3 className="font-bold py-2 text-lg">{resData.info.name}</h3>
        <h4 className="font-semibold">
          ⭐{resData.info.avgRating} • {resData.info.sla.slaString}
        </h4>
        <h4 className="text-sm font-semibold">
          {resData.info.cuisines.join(", ")}
        </h4>
        <h4 className="text-sm font-semibold">{resData.info.costForTwo}</h4>
        {/* <h4 className="text-sm font-semibold">{resData.info.sla.slaString}</h4> */}
      </div>
    </div>
  );
}

export default RestaurantCard;
