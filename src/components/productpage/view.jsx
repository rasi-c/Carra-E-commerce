import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./view.css"

export function View() {
  const data = useParams();
  //   console.log("data is ",data);
  const [singleData, setsingleData] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${data.cardId}`)
      .then((res) => res.json())
      .then((singleData) => setsingleData(singleData));
  }, []);
  return (
    <div className="containerDetails">
      <div className="header1">{singleData?.title}</div>
      <img src={singleData?.image} alt="i" className="photo1" />
      <div className="details1">{singleData?.description}</div>
      <div className="count1">
        <div className="catogory1">Catogory : {singleData?.category}</div>
        <div className="rating1">Rating : {singleData?.rating?.rate}</div>
        <div className="sale1">Solded Count : {singleData?.rating?.count}</div>
      </div>
    </div>
  );
}
