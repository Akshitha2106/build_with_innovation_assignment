import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "./../Spinner";
import { InfoDisplay } from "../components/InfoDisplay.js";
import { useCart } from "../contexts/CartContext.js";
import Search from "../components/Search.js";

const Home = () => {
  const [shoppingItems, setShoppingItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const totalItems = shoppingItems?.length || 0;
  const [loading, setLoading] = useState(false);
  const { cartState, dispatch } = useCart();
  const [searchedItems, setSearchedItems] = useState([]);
  const [search, setSearch] = useState(false);
  const [price, setPrice] = useState(0);
  console.log(cartState);

  useEffect(function () {
    async function getToDos() {
      setLoading(true);
      try {
        const res = await fetch(`https://dummyjson.com/products?limit=20`);
        const data = await res.json();
        console.log(data);
        setShoppingItems(data?.products);
      } catch (err) {
        toast.error(`Data could not be loaded ${err.message}`, {
          id: "errorrrrr",
        });
      } finally {
        setLoading(false);
      }
    }

    getToDos();
  }, []);

  function handleAddToCart(id, data) {
    // console.log(id);
    // console.log(data);
    dispatch({ type: "ADD_ITEM", payload: data });
    // console.log(cartState);
  }

  useEffect(
    function () {
      const data = shoppingItems.filter((item) => item?.price >= price);
      setFilteredItems(data);
    },
    [price, shoppingItems]
  );

  // console.log(shoppingItems)

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="m-4">
      <div className="flex justify-center items-center">
        <div className="flex gap-[5px] items-center mt-4 mb-2">
          <h1 className="text-2xl font-bold ">All Items</h1>
          <InfoDisplay
            title="Add to cart"
            description="Add Products to the cart and edit them."
          >
            <p className="mb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </InfoDisplay>
          <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: "m-8",
              duration: 5000,
              style: {
                background: "#363636",
                color: "#fff",
              },

              // Default options for specific types
              success: {
                duration: 3000,
                theme: {
                  primary: "green",
                  secondary: "black",
                },
              },
            }}
          />
        </div>
      </div>

      <Search
        Items={filteredItems}
        price={price}
        searchedItems={searchedItems}
        setSearchedItems={setSearchedItems}
        setSearch={setSearch}
      />

      {search && searchedItems?.length === 0 && (
        <p className="mt-4 font-semibold flex flex-col items-center justify-center">
          <div className="mb-6">Item Not Found.</div>
          <button
            onClick={() => {
              setSearch(false);
              setSearchedItems([]);
            }}
            className="relative py-3 px-4 rounded-lg outline-none overflow-hidden flex items-center justify-center text-white bg-green-500 hover:bg-green-400 focus:ring focus:ring-green-200"
          >
            Reset Query
          </button>
        </p>
      )}
      {(searchedItems.length > 0 || !search) && (
        <p className="text-lg text-gray-600 flex justify-center mb-2">
          {`There are total ${totalItems} items in the shopping list.`}
        </p>
      )}

      <div className="flex items-center justify-end mr-8 gap-4">
        <label className="block text-gray-700 text-md font-bold">
          Filter By Price
        </label>
        <input
          className="border text-left bg-white outline-none border-[#C8CEE1] bg-transparent rounded-lg py-2 px-3 w-1/10 flex justify-center items-center"
          type="text"
          placeholder="Enter Price..."
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <table className="w-full">
        {(searchedItems.length > 0 || !search) && (
          <thead className="w-full text-gray-primary bg-gray-table">
            <tr className="w-full border-b border-gray-200 bg-white text-black">
              <th className="px-5 py-2 border-b-2  bg-gray-100 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Sr. No.
              </th>
              <th className="px-5 py-2 border-b-2  bg-gray-100 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Title
              </th>
              <th className="px-5 py-2 border-b-2  bg-gray-100 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Description
              </th>
              <th className="px-5 py-2 border-b-2  bg-gray-100 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Price/Unit
              </th>
              <th className="px-5 py-2 border-b-2  bg-gray-100 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Rating
              </th>

              <th className="min-w-[140px] px-5 py-2 border-b-2  bg-gray-100 text-left text-xs font-medium text-gray-700 uppercase tracking-wider items-center">
                Add to Cart
              </th>
            </tr>
          </thead>
        )}
        <tbody className="w-full">
          {!search &&
            filteredItems?.map((data, index) => {
              // console.log(data);
              return (
                <tr
                  className="w-full border-b border-gray-200 hover:bg-gray-100"
                  key={data?.id}
                >
                  <td className="px-5 py-1.5 bg-transparent text-inherit text-xs">
                    {index + 1}
                  </td>
                  <td className="px-5 py-1.5 bg-transparent text-inherit text-xs">
                    {data?.title}
                  </td>
                  <td className="px-5 py-1.5 bg-transparent text-inherit text-xs">
                    {data?.description}
                  </td>
                  <td className="px-5 py-1.5 bg-transparent text-inherit text-xs">
                    {data?.price}
                  </td>
                  <td className="px-5 py-1.5 bg-transparent text-inherit text-xs">
                    {data?.rating}
                  </td>

                  {!cartState?.cartItems?.find(
                    (item) => item?.id === data?.id
                  ) && (
                    <td className="px-5 py-1.5 bg-transparent text-inherit text-xs items-center">
                      <button
                        className="relative py-3 px-4 rounded-lg outline-none overflow-hidden flex items-center justify-center text-white bg-green-500 hover:bg-green-400 focus:ring focus:ring-green-200"
                        onClick={() => handleAddToCart(data?.id, data)}
                      >
                        Add to Cart
                      </button>
                    </td>
                  )}
                  {cartState?.cartItems?.find(
                    (item) => item?.id === data?.id
                  ) && (
                    <td className="min-w-[140px] px-5 py-1.5 bg-transparent text-inherit text-xs">
                      <div className="flex justify-center items-center gap-2 w-full -ml-3">
                        <button
                          className="relative py-1 px-2 text-md  rounded-full outline-none overflow-hidden flex items-center justify-center text-white bg-green-500 hover:bg-green-400 focus:ring focus:ring-green-200"
                          onClick={() => {
                            if (
                              cartState?.cartItems?.find(
                                (item) => item?.id === data?.id
                              )?.quantity > 1
                            )
                              dispatch({
                                type: "DECREASE_QUANTITY",
                                payload: data?.id,
                              });
                            else
                              dispatch({
                                type: "REMOVE_ITEM",
                                payload: data?.id,
                              });
                          }}
                        >
                          -
                        </button>
                        {
                          cartState?.cartItems?.find(
                            (item) => item?.id === data?.id
                          )?.quantity
                        }
                        <button
                          className="relative py-1 px-2 text-mfd  rounded-full outline-none overflow-hidden flex items-center justify-center text-white bg-green-500 hover:bg-green-400 focus:ring focus:ring-green-200"
                          onClick={() =>
                            dispatch({
                              type: "INCREASE_QUANTITY",
                              payload: data?.id,
                            })
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}
          {searchedItems?.length !== 0 &&
            searchedItems?.map((data, index) => {
              // console.log(data);
              return (
                <tr
                  className="w-full border-b border-gray-200 hover:bg-gray-100"
                  key={data?.id}
                >
                  <td className="px-5 py-1.5 bg-transparent text-inherit text-xs">
                    {index + 1}
                  </td>
                  <td className="px-5 py-1.5 bg-transparent text-inherit text-xs">
                    {data?.title}
                  </td>
                  <td className="px-5 py-1.5 bg-transparent text-inherit text-xs">
                    {data?.description}
                  </td>
                  <td className="px-5 py-1.5 bg-transparent text-inherit text-xs">
                    {data?.price}
                  </td>
                  <td className="px-5 py-1.5 bg-transparent text-inherit text-xs">
                    {data?.rating}
                  </td>

                  {!cartState?.cartItems?.find(
                    (item) => item?.id === data?.id
                  ) && (
                    <td className="px-5 py-1.5 bg-transparent text-inherit text-xs items-center">
                      <button
                        className="relative py-3 px-4 rounded-lg outline-none overflow-hidden flex items-center justify-center text-white bg-green-500 hover:bg-green-400 focus:ring focus:ring-green-200"
                        onClick={() => handleAddToCart(data?.id, data)}
                      >
                        Add to Cart
                      </button>
                    </td>
                  )}
                  {cartState?.cartItems?.find(
                    (item) => item?.id === data?.id
                  ) && (
                    <td className="min-w-[140px] px-5 py-1.5 bg-transparent text-inherit text-xs">
                      <div className="flex justify-center items-center gap-2 w-full -ml-3">
                        <button
                          className="relative py-1 px-2 text-md  rounded-full outline-none overflow-hidden flex items-center justify-center text-white bg-green-500 hover:bg-green-400 focus:ring focus:ring-green-200"
                          onClick={() => {
                            if (
                              cartState?.cartItems?.find(
                                (item) => item?.id === data?.id
                              )?.quantity > 1
                            )
                              dispatch({
                                type: "DECREASE_QUANTITY",
                                payload: data?.id,
                              });
                            else
                              dispatch({
                                type: "REMOVE_ITEM",
                                payload: data?.id,
                              });
                          }}
                        >
                          -
                        </button>
                        {
                          cartState?.cartItems?.find(
                            (item) => item?.id === data?.id
                          )?.quantity
                        }
                        <button
                          className="relative py-1 px-2 text-mfd  rounded-full outline-none overflow-hidden flex items-center justify-center text-white bg-green-500 hover:bg-green-400 focus:ring focus:ring-green-200"
                          onClick={() =>
                            dispatch({
                              type: "INCREASE_QUANTITY",
                              payload: data?.id,
                            })
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
