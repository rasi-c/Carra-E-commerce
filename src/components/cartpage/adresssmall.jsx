import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { MyContext } from "../../App";
import "./addresssmall.css";


export function AddressDetails(prop) {
  const addressArray = useContext(MyContext)
  console.log(addressArray);
  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    addressArray.setSelectedOption(e.target.value);
    console.log(e.target.value);
  };
  function AddressDeleted(id) {
    console.log("address array",addressArray.cart1);
    const updateArray = addressArray.cart1.filter((item)=>{
      return item.id !== id
    })
    addressArray.setSecArray(updateArray)
    if(id == addressArray.selectedOption){
      addressArray.setSelectedOption(null)
    }
  }
  function showBill(){
    console.log("selectedOption is",addressArray.selectedOption);
    if(addressArray.selectedOption === null){
      toast.warn("Please select a address...!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce
      });
    }else if(addressArray.cart.length === 0){
      toast.warn("Please add item to Cart...!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }else{
      navigate("invoice")
    }
  }
  return (
    <div className="addressMain">
      {addressArray.cart1.map((item,index) => (
        <div className="mainAddress" key={index}>
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
          <div className="noAddress">No Addresses , Please Create New</div>
        ) : (
          <button className="billButton" onClick={()=> showBill()}>Proceed to Bill</button> 
        )}
        <ToastContainer />
    </div>
  );
      }  
