import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./view.css";

export function View() {
  const { cardId } = useParams();
  const [singleData, setSingleData] = useState({});
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("none");
  const [rotate, setRotate] = useState()

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${cardId}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleData(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [cardId]);

  function changeColor() {
    if (color === "none") {
      setColor("red");
    } else {
      setColor("none");
    }
  }
  function changeRotate(id){
    if(id=== 1){
      setRotate(0)
    }else if(id===2){
      setRotate(90)
    }else if(id===3){
      setRotate(180)
    }else if(id===4){
      setRotate(270)
    }else{
      setRotate(0)
    }
  }

  return (
    <>
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="containerDetails">
          <div className="leftSide">
            <div className="catogory1">Category / {singleData?.title}</div>
            <div className="header1">{singleData?.title}</div>
            <div className="count1">
              <div className="rating1">Rating : {singleData?.price}</div>
              <div className="sale1">
                Sold Count : {singleData?.price}
              </div>
            </div>
            <div className="details1">{singleData?.description}</div>
            <div className="colorBtn">
              <button className="addCartBtn">Add to Cart</button>
              <div className="radioBtn">
                <button type="button" className="radio1"></button>
                <button type="button" className="radio2"></button>
                <button type="button" className="radio3"></button>
                <button type="button" className="radio4"></button>
              </div>
            </div>
            <div className="justText">
              Free 3-5 days shpping &#9642; Tool-free assemble &#9642; 30-day
              trial
            </div>
            <div className="whishList">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                onClick={changeColor}
              >
                <path
                  fill={color}
                  stroke="red"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m7 12.45l-5.52-5c-3-3 1.41-8.76 5.52-4.1c4.11-4.66 8.5 1.12 5.52 4.1Z"
                />
              </svg>
              Add to Whishlist
            </div>
          </div>
          <div className="rightSide">
            <img src={singleData?.images} alt="i" className="photo1" style={{transform: `rotate(${rotate}deg)`, transition: 'transform 0.5s ease'}} />
            <div className="rotatContainer">
              <div className="rightImg" onClick={()=> changeRotate(1)}><img src={singleData?.image} alt="i" className="photos2" /></div>
              <div className="leftImg" onClick={()=> changeRotate(2)}><img src={singleData?.image} alt="i" className="photos3" /></div>
              <div className="topImg" onClick={()=> changeRotate(3)}><img src={singleData?.image} alt="i" className="photos4" /></div>
              <div className="bottomImg" onClick={()=> changeRotate(4)}><img src={singleData?.image} alt="i" className="photos5" /></div>
            </div>
              <div className="shadow"></div>
          </div>
        </div>
      )}
    </>
  );
}
