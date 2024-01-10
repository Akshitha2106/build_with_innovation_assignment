import { useState } from "react";

function Search({ Items, searchedItems, setSearchedItems, setSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(query);
    const filteredItems = Items.filter((item) => item?.title?.includes(query));
    setSearchedItems(filteredItems);
    console.log(filteredItems);
    setQuery("");
    setSearch(true);
  }
  return (
    <form className="flex justify-center mt-4 mb-6" onSubmit={handleSubmit}>
      <input
        className="border text-left bg-white outline-none border-[#C8CEE1] bg-transparent rounded-lg py-2 px-3 w-3/5 mt-4 flex justify-center items-center"
        type="text"
        placeholder="Search items..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="relative py-3 px-5 rounded-lg outline-none overflow-hidden flex items-center justify-center text-white bg-green-500 hover:bg-green-400 focus:ring focus:ring-green-200 mt-6 ml-8"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
export default Search;
