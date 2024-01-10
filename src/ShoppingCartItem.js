import React from "react";
import { useCart } from "./contexts/CartContext";

const ShoppingCartItem = ({ item }) => {
  const { cartState, dispatch } = useCart();
  // console.log(item);
  return (
    <tr
      className="w-full border-b border-gray-200 hover:bg-gray-100"
      key={item?.id}
    >
      <td className="px-5 py-1.5 bg-transparent text-inherit text-xs">
        {item?.title}
      </td>
      <td className="px-5 py-1.5 bg-transparent text-inherit text-xs">
        {item?.price}
      </td>
      <td className="px-5 py-1.5 bg-transparent text-inherit text-xs flex items-center gap-4">
        <button
          className="relative py-1 px-2 text-md  rounded-full outline-none overflow-hidden flex items-center justify-center text-white bg-green-500 hover:bg-green-400 focus:ring focus:ring-green-200"
          onClick={() => {
            if (
              cartState?.cartItems?.find((el) => el?.id === item?.id)
                ?.quantity > 1
            )
              dispatch({
                type: "DECREASE_QUANTITY",
                payload: item?.id,
              });
            else
              dispatch({
                type: "REMOVE_ITEM",
                payload: item?.id,
              });
          }}
        >
          -
        </button>
        <span>{item?.quantity}</span>
        <button
          className="relative py-1 px-2 text-mfd  rounded-full outline-none overflow-hidden flex items-center justify-center text-white bg-green-500 hover:bg-green-400 focus:ring focus:ring-green-200"
          onClick={() =>
            dispatch({
              type: "INCREASE_QUANTITY",
              payload: item?.id,
            })
          }
        >
          +
        </button>
      </td>
    </tr>
  );
};

export default ShoppingCartItem;
