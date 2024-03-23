import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import "./addresssmall.css";

export function AddressDetails(prop) {
  const addressArray = useContext(MyContext)
  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    addressArray.setSelectedOption(e.target.value);
    console.log(e.target.value);
  };
  // console.log("Adress props is : ", prop.item);
  function AddressDeleted(id) {
    console.log("address array",addressArray.cart1);
    const updateArray = addressArray.cart1.filter((item)=>{
      return item.id !== id
    })
    addressArray.setSecArray(updateArray)
    console.log("updated array is ", addressArray.cart1);
  }
  function showBill(){
    navigate("invoice")
  }
  return (
    <div className="addressMain">
      {addressArray.cart1.map((item) => (
        <div className="mainAddress" key={item.id}>
          <div className="radioButton">
            <input
              type="radio"
              name="options"
              value={item.id}
              checked={addressArray.selectedOption == item.id}
              onChange={handleOptionChange}
            />
          </div>
          <div className="leftAddress">
            <div className="userName">{item.name.toUpperCase()}</div>
            <div className="userAddress">{item.address}</div>
            <div className="userDistrict">District: {item.district}</div>
            <div className="userPhoneNo">Contact: +91 {item.phoneNO}</div>
          </div>
          <div className="rightDelete">
            <div className="addressDelete" onClick={() => AddressDeleted(item.id)}>
              Delete
            </div>
          </div>
        </div>
      ))}
      {addressArray.cart1.length <= 0 ? (
          <div className="noAddress">No valid Address , Please Create New</div>
        ) : (
          <button className="billButton" onClick={()=> showBill()}>Proceed to Bill</button>
        )}
    </div>
  );
      }  
