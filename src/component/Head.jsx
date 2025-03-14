import React, { useEffect, useState } from "react";
import { menuButton, YOUTUBE_SEARCH_API } from "../utils/constants";
import { youtubeLogo } from "../utils/constants";
import { userLogo } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import store from "../utils/Store";
import { cacheResults } from "../utils/searchSlice";
function Head() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  console.log(searchQuery);
  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
      getSearchSuggestions();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const response = await data.json();

    setSuggestions(response[1]);

    dispatch(
      cacheResults({
        [searchQuery]: response[1],
      })
    );
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 mx-2  cursor-pointer"
          alt="menu"
          src={menuButton}
          onClick={toggleMenuHandler}
        />
        <img className="h-8 mx-2" src={youtubeLogo} alt="youtube-logo" />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className=" px-5 w-1/2 border bg-gray-400 p-2 rounded-l-full"
            type="text"
            placeholder="search"
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="  bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100 ">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img className="h-8" src={userLogo} alt="user" />
      </div>
    </div>
  );
}

export default Head;
