import React from "react";
import "../components/css/body.css";
import { CDN_URL } from "/utils/constants.js";
const RestuarantCard = (props) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    props?.resData.info;

  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <div>{cuisines.join(",")}</div>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestuarantCard;
