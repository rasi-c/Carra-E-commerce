import React, { useContext, useState } from "react";
import { MyContext } from "../../App";
import "./cart.css";

export function Cart(props) {
  const myNewArray = useContext(MyContext);
  const [quantity, setQuantity] = useState(props.item.quantity);
  const currentId = props.item.newId;
  const paragraph = props.item.newDetails;
  const truncatedParagraph = truncateText(paragraph, 10);
  const totalAmount = myNewArray.cart.reduce((total, item) => {
    return total + (item.newPrice * item.quantity);
  }, 0);
  props.setkey(totalAmount)
  function dataDelete(data) {
    console.log("mynewarray cart is : ", myNewArray.cart);
    const newcart = myNewArray.cart.filter((item) => {
      return data !== item.newId;
    });
    myNewArray.arrkey(newcart);
    props.setkey(totalAmount)
  }

  function truncateText(text, maxLength) {
    const words = text.split(" ");
    if (words.length > maxLength) {
        return words.slice(0, maxLength).join(" ") + "...";
    } else {
        return text;
    }
} 

  return (
    <div className="card2Sec">
      <svg
        className="glasses1"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="100px"
        height="100px"
        viewBox="0 0 100 100"
        xmlSpace="preserve"
      >
        <image
          id="image0"
          width="100"
          height="100"
          x="0"
          y="0"
          href={props.item.newImage}
        ></image>
      </svg>
      <div className="headDetails">
        <div className="headingSec">{props.item.newTitle}</div>
        <div className="details4">{truncatedParagraph}</div>
      <div className="display">
        <div className="disButtons">
          <button className="countBtn"
            onClick={() => {
              if (quantity <= 1) {
                setQuantity(1);
              } else {
                let currentData = myNewArray.cart.find(item => item.newId === props.item.newId);

                if (currentData) {
                    currentData.quantity = (quantity - 1);
                }
                
                setQuantity(quantity - 1);
                props.setkey(totalAmount)
              }
            }}
          >
            -
          </button>
          <div className="quantity"> {quantity}</div>
          <button className="countBtn"
            onClick={() => {
              let currentData = myNewArray.cart.find(item => item.newId === props.item.newId);
              
              if (currentData) {
                  currentData.quantity = (quantity + 1);
              }
              
              setQuantity(quantity + 1)
              props.setkey(totalAmount)
            }}
          >
            +
          </button>
        </div>
        <button className="closebtn" onClick={() => dataDelete(currentId)}> Remove</button>
      </div>
      </div>
      <div className="rateRemove">
      
      <div className="priceSec">RS : {(props.item.newPrice * quantity).toFixed(2)}</div>
      </div>
    </div>
  );
}
