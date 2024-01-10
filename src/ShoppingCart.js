import React, { useState } from "react";
import { useCart } from "./contexts/CartContext";
import ShoppingCartItem from "./ShoppingCartItem.js";
import { InfoDisplay } from "./components/InfoDisplay.js";
import Search from "./components/Search.js";

const ShoppingCart = () => {
  const { cartState, dispatch } = useCart();
  // console.log(cartState);
  const totalPrice = cartState.cartItems.reduce(
    (acc, item) => acc + (item?.price || 0) * (item?.quantity || 1),
    0
  );
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [searchedItems, setSearchedItems] = useState([]);
  console.log(cartState);
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   // console.log(query);
  //   const filteredItems = cartState.cartItems.filter((item) =>
  //     item?.title?.includes(query)
  //   );
  //   setSearchedItems(filteredItems);
  //   console.log(filteredItems);
  //   setQuery("");
  // }

  if (cartState?.cartItems?.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
        <div className="container mx-auto -mt-16">
          <div className="bg-white p-8 rounded shadow-xl m-8">
            <div className="flex justify-center items-center">
              <div className="flex gap-[5px] items-center m-6">
                <h1 className="text-2xl font-bold ">Your Cart</h1>
                <InfoDisplay
                  title="Your cart"
                  description="View the items of your cart here."
                >
                  <p className="mb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </InfoDisplay>
              </div>
            </div>
            <div className="px-4 py-3 flex justify-center items-center">
              <p className="mt-4 font-semibold">
                Your cart is still empty. Start adding some items :)
              </p>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <>
      <Search
        searchedItems={searchedItems}
        setSearchedItems={setSearchedItems}
        Items={cartState.cartItems}
        setSearch={setSearch}
      />

      <div className="min-h-screen flex justify-center bg-gray-100 ">
        <div className="container mx-auto">
          <div className="bg-white p-8 rounded shadow-xl m-8">
            <div className="flex justify-center items-center">
              <div className="flex gap-[5px] items-center m-6">
                <h1 className="text-2xl font-bold ">Your Cart</h1>
                <InfoDisplay
                  title="Your cart"
                  description="View the items of your cart here."
                >
                  <p className="mb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </InfoDisplay>
              </div>
            </div>

            {cartState?.cartItems?.length === 0 && (
              <div className="px-4 py-3 flex justify-center items-center">
                <p className="mt-4 font-semibold">
                  Your cart is still empty. Start adding some to do's :)
                </p>
              </div>
            )}
            {search && searchedItems?.length === 0 && (
              <p className="mt-4 font-semibold flex justify-center">
                Item Not Found.
              </p>
            )}

            {(searchedItems.length > 0 || !search) &&
              cartState?.cartItems?.length !== 0 && (
                <div className="container mx-auto">
                  <p className="text-lg text-gray-600 flex justify-center mb-2">
                    Total Quantity: {cartState?.quantity}
                  </p>
                  <p className="text-lg text-gray-600 flex justify-center mb-4">
                    Total Price: {totalPrice}
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    <table className="w-full">
                      <thead className="w-full text-gray-primary bg-gray-table">
                        <tr className="w-full border-b border-gray-200 bg-white text-black">
                          <th className="px-5 py-2 border-b-2  bg-gray-100 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                            Title
                          </th>

                          <th className="px-5 py-2 border-b-2  bg-gray-100 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                            Price/Unit
                          </th>
                          <th className="px-5 py-2 border-b-2  bg-gray-100 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                            Quantity
                          </th>
                        </tr>
                      </thead>
                      <tbody className="w-full">
                        {!search &&
                          cartState?.cartItems?.map((item) => (
                            <ShoppingCartItem key={item.id} item={item} />
                          ))}
                        {searchedItems?.length !== 0 &&
                          searchedItems?.map((item) => (
                            <ShoppingCartItem key={item.id} item={item} />
                          ))}
                      </tbody>
                    </table>
                  </div>
                  <button
                    className="relative py-3 px-5 rounded-lg outline-none overflow-hidden flex items-center justify-center text-white bg-green-500 hover:bg-green-400 focus:ring focus:ring-green-200 mt-6 ml-8"
                    onClick={() => dispatch({ type: "CLEAR_CART" })}
                  >
                    Clear Cart
                  </button>
                </div>
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
