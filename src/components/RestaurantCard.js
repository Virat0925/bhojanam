import { CLOUBDINARY_URl } from "../utils/constants";
function RestaurantCard({ resData }) {
  return (
    <div className="p-2 m-4 w-[220px] h-[440px] bg-orange-200 rounded-lg hover:bg-[#FE5005] hover:text-white cursor-pointer flex flex-col justify-between">
      <img
        className="aspect-square rounded-lg"
        src={CLOUBDINARY_URl + resData.info.cloudinaryImageId}
        alt=""
      ></img>
      <h3 className="font-bold py-2 text-lg">{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.sla.slaString}</h4>
    </div>
  );
}

export default RestaurantCard;
