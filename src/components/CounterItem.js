import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CounterItem = ({item}) => {
  const dispatch = useDispatch();

  const [itemCount, setItemCount] = useState(0);

  const removeItemHandler = () => {
    if (itemCount > 0) {
        setItemCount(itemCount - 1);

        dispatch(removeItem(item.id))

      toast.info("Item Removed", { position: "bottom-center" });
    } else {
      toast.warning("Cannot go below Zero", {
        position: "bottom-center",
      });
    }
  };

  const addItemHandler = () => {
    if (itemCount < 5) {
        setItemCount(itemCount + 1);
        
        dispatch(addItem(item));
        
      toast.success("Item Added!", {
        position: "bottom-center",
      });
    } else {
      toast.error("Cannot Add more than 5", { position: "bottom-center" });
    }
  };

  return (
    <div className="flex items-center p-4">
      <button
        className="bg-green-500 text-white px-4 py-2 rounded "
        onClick={removeItemHandler}
      >
        -
      </button>

      <h1 className="text-2xl font-bold mb-4 "> {itemCount}</h1>

      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => addItemHandler()}
      >
        +
      </button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default CounterItem;
