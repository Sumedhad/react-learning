import React from "react";
import RestuarantCard from "../components/RestuarantCard";
import "../components/css/body.css";
import { useState, useEffect } from "react";
import Shimmar from "./Shimmer";

const Body = () => {
  const [restaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredListOfRestaurant] = useState([]);
  const [txtFilter, setTxtFilter] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restaurants?.length === 0 ? (
    <Shimmar />
  ) : (
    <div className="body">
      <div className="searchcontainer">
        <div className="search">
          Search -
          <input
            type="text"
            value={txtFilter}
            className="inputTxt"
            onChange={(e) => {
              setTxtFilter(e.target.value);
            }}
          ></input>
          <button
            className="btnSearch"
            onClick={() => {
              const filteredList = restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(txtFilter.toLowerCase())
              );
              setFilteredListOfRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>

        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = restaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredListOfRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restuarant) => (
          <RestuarantCard key={restuarant.info.id} resData={restuarant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
