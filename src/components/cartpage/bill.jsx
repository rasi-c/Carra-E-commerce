import React, { useContext } from "react";
import { MyContext } from "../../App";
import "./bill.css";

export function Invoice() {
  const currentDate = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);
  // console.log(" date is ", formattedDate);
  const secondArray = useContext(MyContext);
  console.log("second array is : ", secondArray);
  const listArray = secondArray.cart;
  const addressArray = secondArray.cart1;
  console.log("product list : ", listArray);
  const totalAmount = listArray.reduce((total, item) => {
    return total + item.newPrice * item.quantity;
  }, 0);
  const normalSelectedOption = parseInt(secondArray.selectedOption, 10);
  console.log("normal", normalSelectedOption);
  const selectedAddress = addressArray.filter((item) => {
    return item.id === normalSelectedOption;
  });
  console.log("last address ", selectedAddress);
  let siCount = 1;
  return (
    <div className="billContainer">
      <div class="invoice">
        <div className="header">
          <div className="mainContent">
          <div className="BrandName">
            <img src="/assets/storeYellow2.png" alt="" />
          </div>
          </div>
          <div className="secondaryContent">
          <div className="shop-info">
            <h4 style={{fontSize:'10px'}}>UEROPIANFASHION PRIVATE LIMITED</h4>
            <p>Phone: +1234567890</p>
            <p>Invoice #INV-001</p>
            <p>{formattedDate}</p>
          </div>
          <div className="customor-details">
            <h4>CUSTOMOR DETAILS : </h4>
            <p>Name: {selectedAddress[0].name}</p>
            {/* <p>Address: {selectedAddress[0].address}</p> */}
            <p>Email: {selectedAddress[0].email}</p>
            <p>Phone: +91 {selectedAddress[0].phoneNO}</p>
          </div>
          </div>
        </div>
        <table className="itemized-list">
          <thead style={{textAlign:'center'}}>
            <tr>
              <th>SI NO</th>
              <th>PRODUCT</th>
              <th>QUANTITY</th>
              <th>UNIT PRICE</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {listArray.map((item) => {
              return (
                <tr>
                  <td>{siCount++}</td>
                  <td>{item.newTitle}</td>
                  <td>{item.quantity}</td>
                  <td>{item.newPrice}</td>
                  <td>{item.newPrice * item.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="total">
          <p>Price : {(totalAmount).toFixed(2)}</p>
          <p>Discount : {(totalAmount/10).toFixed(2)}</p>
          <p><span>Total Amount : {(totalAmount - totalAmount / 10).toFixed(2)}</span></p>
        </div>
        <div className="Thanks">
          <div className="thanksText">Thank you for Choosing us </div>
          <div className="com">Www.europianfashion.com</div>
        </div>
      </div>
    </div>
  );
}
