import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jsonData from "../productjson/item.json";
import "./view.css";

export function View() {
  const { cardId } = useParams();
  const [singleProduct, setSingleProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("none");
  const [nextImg, setNextImg] = useState(0);

  useEffect(() => {
    const foundProduct = jsonData.find((item) => item.id === parseInt(cardId));
    setSingleProduct(foundProduct);
    setLoading(false);
  }, [cardId]);

  function changeColor() {
    setColor(color === "none" ? "red" : "none");
  }

  function changeNextImg(id) {
    if (id === 1) {
      setNextImg(0);
    } else if (id === 2) {
      setNextImg(1);
    } else if (id === 3) {
      setNextImg(2);
    } else if (id === 4) {
      setNextImg(3);
    } else {
      setNextImg(0);
    }
  }

  return (
    <>
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="containerDetails">
          <div className="leftSide">
            <div className="catogory1">
              Category / <span>{singleProduct?.catogory}</span>
            </div>
            <div className="header1">{singleProduct?.product_name}</div>
            <div className="count1">
              <div className="rating1">Rating : {singleProduct?.rating}</div>
              <div className="sale1">
                Sold Count : {singleProduct?.price * 2}
              </div>
            </div>
            <div className="details1">{singleProduct?.description}</div>
            <div className="colorBtn">
              <button className="addCartBtn">Add to Cart</button>
              <div className="radioBtn">
                {singleProduct?.colors?.map((color, index) => (
                  <button
                    key={index}
                    style={{ backgroundColor: color }}
                  ></button>
                ))}
              </div>
            </div>
            <div className="justText">
              Free 3-5 days shipping &#9642; Tool-free assembly &#9642; 30-day
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
                  d="m7 12.45l-5.52-5c-3-3 1.41-8.76 5.52-4.1c4.11-4.66 8.5 1.12 5.52 4.1Z"
                />
              </svg>
              Add to Wishlist
            </div>
          </div>
          <div className="rightSide">
            <img
              src={singleProduct?.images[nextImg]}
              alt="i"
              className="photo1"
            />
            <div className="rotatContainer">
              {singleProduct?.images.map((img, index) => (
                <div key={index} onClick={() => changeNextImg(index + 1)}>
                  <img src={img} alt="i" className={`photos${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="shadow"></div>
          </div>
        </div>
      )}
    </>
  );
}
