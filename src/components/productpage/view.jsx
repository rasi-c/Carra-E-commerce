import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./view.css"

export function View() {
  const { cardId } = useParams();
  const [singleData, setSingleData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${cardId}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleData(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [cardId]);

  return (
    <>
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="containerDetails">
          <div className="header1">{singleData?.title}</div>
          <img src={singleData?.image} alt="i" className="photo1" />
          <div className="details1">{singleData?.description}</div>
          <div className="count1">
            <div className="catogory1">Category : {singleData?.category}</div>
            <div className="rating1">Rating : {singleData?.rating?.rate}</div>
            <div className="sale1">Sold Count : {singleData?.rating?.count}</div>
          </div>
        </div>
      )}
    </>
  );
}

