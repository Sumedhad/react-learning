import React from "react";
import RestuarantCard from "../components/RestuarantCard";
import "../components/css/body.css";
import resList from "/utils/mockdata.js";
import { useState } from "react";

const Body = () => {
  const [restaurants, setListOfRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurants.map((restuarant) => (
          <RestuarantCard key={restuarant.info.id} resData={restuarant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
