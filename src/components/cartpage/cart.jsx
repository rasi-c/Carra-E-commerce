import React, { useContext, useState } from "react";
import { MyContext } from "../../App";
import "./cart.css";

export function Cart(props) {
  const myNewArray = useContext(MyContext);
  // const [value, setValue] = useState(1);
  const [quantity, setQuantity] = useState(props.item.quantity);
  const currentId = props.item.newId;
  console.log("props is : ", props);
  console.log("cart id : ", currentId);
  // const  newKey = 'quantity';
  // const newValue = quantity;
  // props.item.newKey = newValue;
  console.log("latest props quantity ",quantity);
  const totalAmount = myNewArray.cart.reduce((total, item) => {
    return total + (item.newPrice * item.quantity);
  }, 0);
  
  console.log("total amount is:", totalAmount);
  
  function dataDelete(data) {
    console.log("mynewarray cart is : ", myNewArray.cart);
    const newcart = myNewArray.cart.filter((item) => {
      return data !== item.newId;
    });
    myNewArray.arrkey(newcart);
    console.log(myNewArray.cart);
  }

  return (
    <div className="card2Sec">
      <svg
        className="glasses"
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
        <div className="detailsSec">{props.item.newDetails}</div>
      </div>
      <div className="display">
        <div className="quantity">Quantity : {quantity}</div>
        <div className="disButtons">
          <button
            onClick={() => {
              if (quantity <= 1) {
                setQuantity(1);
              } else {
                let currentData = myNewArray.cart.find(item => item.newId === props.item.newId);

                if (currentData) {
                    currentData.quantity = (quantity - 1);
                }
                
                setQuantity(quantity - 1);
              }
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              let currentData = myNewArray.cart.find(item => item.newId === props.item.newId);

              if (currentData) {
                  currentData.quantity = (quantity + 1);
              }
              
              setQuantity(quantity + 1)
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="priceSec">RS : {props.item.newPrice * quantity}</div>
      <button className="closebtn" onClick={() => dataDelete(currentId)}>
        <span className="X"></span>
        <span className="Y"></span>
        <div className="close">Close</div>
      </button>
    </div>
  );
}
