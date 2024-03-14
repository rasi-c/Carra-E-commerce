import React, { useContext } from 'react'
import { MyContext } from '../../App'
import './bill.css'

export function Invoice() {
    const secondArray = useContext(MyContext)
    console.log('second array is : ',secondArray);
    const listArray = secondArray.cart;
    console.log('product list : ',listArray); 
    const totalAmount =listArray.reduce((total,item)=>{
      return total + (item.newPrice * item.quantity);
    },0)
  return (
    <div className='billContainer'>
        <div class="invoice">
  <div className="header">
    <div className="shop-info">
      <h1>EUROPIAN FASHION</h1>
      <p>Ueropeanfashion private limited</p>
      <p>Phone: +1234567890</p>
      <p>Invoice #INV-001</p>
      <p>Date: January 1, 2024</p>
    </div>
    <div className="customor-details">
    <h4>Customer Details:</h4>
    <p>Name: {secondArray.cart1.name}</p>
    <p>Address: {secondArray.cart1.address}</p>
    <p>Email: {secondArray.cart1.email}</p>
    <p>Phone: +91 {secondArray.cart1.phoneNO}</p>
    </div>
  </div>
  <table className="itemized-list">
    <thead>
      <tr>
        <th>SI NO</th>
        <th>PRODUCT</th>
        <th>QUANTITY</th>
        <th>UNIT PRICE</th>
        <th>TOTAL</th>
      </tr>
    </thead>
    <tbody>
    {listArray.map((item)=>{
      return <tr>
        <td> 1</td>
        <td>{item.newTitle}</td>
        <td>{item.quantity}</td>
        <td>{item.newPrice}</td>
        <td>{item.newPrice * item.quantity}</td>
      </tr>
    })}
    </tbody>
  </table>
  <div className="total">
    <p>Total Amount : {totalAmount}</p>
  </div>
</div>

    </div>
  )
}
