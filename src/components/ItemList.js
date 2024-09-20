
import { CLOUBDINARY_URL } from "../utils/constants";

import CounterItem from "./CounterItem";

const ItemList = ({ items }) => {

  

  

  console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="py-4 w-9/12 font-bold text-gray-600">
            <span>{item.card.info.name}</span>
            <br></br>
            <span>
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>

            <p className="mt-12 text-sm font-thin pr-2">
              {item.card.info.description}
            </p>
          </div>

          <div className="w-3/12">
            <img
              src={CLOUBDINARY_URL + item.card.info.imageId}
              alt="item-image"
              className="w-40 rounded-md"
            ></img>
            <CounterItem item={item} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
