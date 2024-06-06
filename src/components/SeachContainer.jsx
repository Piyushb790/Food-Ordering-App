import { filterData } from "./utils/helper";
import { useState } from "react";
const SearchContainer = ({ setFilterResList, allResList }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="flex items-center my-10">
      <div className="search-container  ml-2  ">
        <input
          type="text"
          placeholder="search"
          className="search-input border  p-2 rounded-md focus:bg-blue-50"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="search-btn ml-3 rounded-md bg-[#FF7F50] text-white p-2"
          onClick={() => {
            const data = filterData(searchInput, allResList);
            setFilterResList(data);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchContainer;
