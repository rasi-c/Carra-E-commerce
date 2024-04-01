import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./view.css";

export function View() {
  const { cardId } = useParams();
  const [singleData, setSingleData] = useState({});
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("none");
  const [nextImg, setnextImg] = useState(0)

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${cardId}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleData(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [cardId]);

  const randomNumber = (Math.random() * (5.0 - 4.1) + 4.1).toFixed(1);

  function changeColor() {
    if (color === "none") {
      setColor("red");
    } else {
      setColor("none");
    }
  }
  function changenextImg(id){
    if(id=== 1){
      setnextImg(0)
    }else if(id===2){
      setnextImg(1)
    }else if(id===3){
      setnextImg(2)
    }else if(id===4){
      setnextImg(0)
    }else{
      setnextImg(0)
    }
  }

  return (
    <>
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="containerDetails">
          <div className="leftSide">
            <div className="catogory1">Category / <span>clothings</span></div>
            <div className="header1">{singleData?.title}</div>
            <div className="count1">
              <div className="rating1">Rating : {randomNumber}</div>
              <div className="sale1">
                Sold Count : {singleData?.price*2}
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
                  // stroke-linecap="round"
                  // stroke-linejoin="round"
                  d="m7 12.45l-5.52-5c-3-3 1.41-8.76 5.52-4.1c4.11-4.66 8.5 1.12 5.52 4.1Z"
                />
              </svg>
              Add to Whishlist
            </div>
          </div>
          <div className="rightSide">
            <img src={singleData?.images[nextImg]} alt="i" className="photo1" />
            <div className="rotatContainer">
              <div className="rightImg" onClick={()=> changenextImg(1)}><img src={singleData?.images[0]} alt="i" className="photos2" /></div>
              <div className="leftImg" onClick={()=> changenextImg(2)}><img src={singleData?.images[1]} alt="i" className="photos3" /></div>
              <div className="topImg" onClick={()=> changenextImg(3)}><img src={singleData?.images[2]} alt="i" className="photos4" /></div>
              <div className="bottomImg" onClick={()=> changenextImg(4)}><img src={singleData?.images[0]} alt="i" className="photos5" /></div>
            </div>
              <div className="shadow"></div>
          </div>
        </div>
      )}
    </>
  );
}
