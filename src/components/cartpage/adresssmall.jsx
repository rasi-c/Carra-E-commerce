import React from "react";
import "./addresssmall.css";

export function AddressDetails(prop) {
  console.log("Adress props is : ", prop.item);
  return (
    <div className="mainAddress">
      <div className="leftAddress">
        <div className="userName">{prop.item.name.toUpperCase()}</div>
        <div className="userAddress">{prop.item.address}</div>
        <div className="userDistrict">District : {prop.item.district}</div>
        <div className="userPhoneNo">Contact : +91 {prop.item.phoneNO}</div>
      </div>
      <div className="rightDelete">
        <div className="addressDelete">Delete</div>
      </div>
    </div>
  );
}
