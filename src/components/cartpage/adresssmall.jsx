import React, { useContext, useState } from "react";
import "./addresssmall.css";
import { MyContext } from "../../App";

export function AddressDetails(prop) {
  const addressArray = useContext(MyContext)
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
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
  return (
    <div className="mainAddress">
      <div className="radioButton"><input
          type="radio"
          id={`option${prop.item.id}`}
          name="options"
          value="option1"
          checked={selectedOption === `option${prop.item.id}`}
          onChange={() => handleOptionChange(`option${prop.item.id}`)}
        /></div>
      <div className="leftAddress">
        <div className="userName">{prop.item.name.toUpperCase()}</div>
        <div className="userAddress">{prop.item.address}</div>
        <div className="userDistrict">District : {prop.item.district}</div>
        <div className="userPhoneNo">Contact : +91 {prop.item.phoneNO}</div>
      </div>
      <div className="rightDelete">
        <div
          className="addressDelete"
          onClick={() => AddressDeleted(prop.item.id)}
        >
          Delete
        </div>
      </div>
    </div>
  );
}
