import React, { useContext } from 'react'
import { MyContext } from '../../App';

export function BillDivision() {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    const secondArray = useContext(MyContext);
    const listArray = secondArray.cart;
    const addressArray = secondArray.cart1;
    const totalAmount = listArray.reduce((total, item) => {
        return total + item.newPrice * item.quantity;
      }, 0);
      const normalSelectedOption = parseInt(secondArray.selectedOption, 10);
      const selectedAddress = addressArray.filter((item) => {
        return item.id === normalSelectedOption;
      });
      let siCount = 1;
  return (
    <div class="invoice">
    <div className="header">
      <div className="mainContent">
        <div className="BrandName">
          <img src="/assets/logo.png" alt="" />
        </div>
      </div>
      <div className="secondaryContent">
        <div className="shop-info">
          <h4 style={{fontSize:'clamp(10px, 1.3vw, 17px)'}}>CARA PRIVATE LIMITED</h4>
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
      <p style={{marginTop:'7px'}}><span>Total Amount : {(totalAmount - totalAmount / 10).toFixed(2)}</span></p>
    </div>
    <div className="Thanks">
      <div className="thanksText">Thank you for Choosing us </div>
      <div className="com">www.carafashion.com</div>
    </div>
  </div>
  )
}
