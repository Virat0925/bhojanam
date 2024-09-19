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
    <div>
      <div className="flex bg-[#d3c4dd] rounded-xl  font-bold w-40 justify-between px-3 mt-2 py-2 shadow-lg  text-white">
        <button className="text-center" onClick={removeItemHandler}>
          ➖
        </button>

        <h1 className="text-center text-xl text-[#674293]"> {itemCount}</h1>

        <button className="text-center " onClick={() => addItemHandler()}>
          ➕
        </button>
      </div>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default CounterItem;
