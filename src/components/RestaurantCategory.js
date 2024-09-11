// import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItemList, setShowIndex }) => {
  //   console.log(data);

  // const [showItemList, setShowItemList] = useState(false)

  const accordionHandler = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={accordionHandler}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.title.length})
          </span>
          <span className="text-2xl"> {showItemList ? "🔺" : "🔻"} </span>
        </div>

        <div>{showItemList && <ItemList items={data.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
