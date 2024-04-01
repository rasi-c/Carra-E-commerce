import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
import "./card.css";

export function Card(props) {
  const [isAddedTocart, setIsAddedTocart] = useState(false);
  const myArray = useContext(MyContext);
  const newTitle = props.item.title;
  const newTitleArray = newTitle.split(" ");
  const slicedTitle = newTitleArray.splice(0, 3).join(" ");

  const ogText = props.item.description;
  const Trnct = ogText;
  const price = props.item.price;
  const Image = props.item.images;
  const Id = props.item.id;
  let isAvailable = false;
  let quantity = 1;
  const AddCart = (title, details, price, image, Id) => {
    let newTitle = title;
    let newDetails = details;
    let newPrice = price;
    let newImage = image;
    let newId = Id;
    // let newisAvailable = isAvailable
    myArray.cart.forEach((element) => {
      if (element.newId === newId) {
        isAvailable = true;
      }
    });
    if (isAvailable) {
      setIsAddedTocart(false);
      let newCart = myArray.cart.filter((item) => {
        return newId !== item.newId;
      });
      myArray.arrkey(newCart);
      console.log("id is available");
    } else {
      setIsAddedTocart(true);
      let myobj = {
        newTitle,
        newDetails,
        newPrice,
        newImage,
        newId,
        isAvailable,
        quantity,
      };
      myArray.cart.push(myobj);
      console.log("my obj", myobj);
    }
  };

  useEffect(() => {
    myArray.cart.forEach((element) => {
      if (element.newId === Id) {
        isAvailable = true;
      }
    });
    if (isAvailable) {
      setIsAddedTocart(true);
    } else {
      setIsAddedTocart(false);
    }
  }, []);

  return (
    <div className="card2">
      <Link to={`/view/${props.item.id}`}>
        <img src={props.item.images[0]} alt="" />
      </Link>
      <div className="brandName">Adidas</div>
      <div className="heading">{slicedTitle}</div>
      <div className="rateAndButton">
        <div className="starAndRate">
          <div className="stars">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path
                fill="#FDD835"
                d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
              />
              <path
                fill="#FFFF8D"
                d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
              />
              <path
                fill="#F4B400"
                d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path
                fill="#FDD835"
                d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
              />
              <path
                fill="#FFFF8D"
                d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
              />
              <path
                fill="#F4B400"
                d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path
                fill="#FDD835"
                d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
              />
              <path
                fill="#FFFF8D"
                d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
              />
              <path
                fill="#F4B400"
                d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path
                fill="#FDD835"
                d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
              />
              <path
                fill="#FFFF8D"
                d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
              />
              <path
                fill="#F4B400"
                d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
              <path
                fill="#FDD835"
                d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
              />
              <path
                fill="#FFFF8D"
                d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
              />
              <path
                fill="#F4B400"
                d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
              />
            </svg>
          </div>
          <div className="price">{price}0/-</div>
        </div>
        <div className="buttonOnly">
          <button
            type="button"
            className={`btn1 ${
              isAddedTocart
                ? "added btn btn-outline-danger"
                : "notAddded btn btn-outline-success"
            } `}
            onClick={() =>
              AddCart(
                slicedTitle,
                Trnct,
                price,
                Image,
                Id,
                isAvailable,
                quantity
              )
            }
          >
            <span className="btn1__text ">
              {isAddedTocart ? (
                <i class="bi bi-cart-x"></i>
              ) : (
                <i class="bi bi-cart"></i>
              )}{" "}
            </span>
            {/* <span className={`btn1__icon ${isAddedTocart?'btnicon':'btniconnot'} `}><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke="currentColor" height="24" fill="none" className="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span> */}
          </button>
        </div>
      </div>
    </div>
  );
}
