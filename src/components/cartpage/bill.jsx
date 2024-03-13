import React, { useContext } from 'react'
import './bill.css'
import { MyContext } from '../../App'

export function Invoice() {
    const secondArray = useContext(MyContext)
    console.log('second array is : ',secondArray);
  return (
    <div className='billContainer'>
        <div class="invoice">
  <div class="header">
    <div class="shop-info">
      <h1>EUROPIAN FASHION</h1>
      <p>Ueropeanfashion private limited</p>
      <p>Phone: +1234567890</p>
    </div>
    <div class="invoice-details">
      <h2>Invoice #INV-001</h2>
      <p>Date: January 1, 2024</p>
    </div>
  </div>
  <div class="customer-details">
    <h4>Customer Details:</h4>
    <p>Customer Name: {secondArray.cart1[0].Name}</p>
    <p>Address: {secondArray.cart1[0].Address}</p>
    <p>Email: {secondArray.cart1[0].Email}</p>
    <p>Phone: +91 {secondArray.cart1[0].PhoneNo}</p>
  </div>
  <table class="itemized-list">
    <thead>
      <tr>
        <th>Item</th>
        <th>Description</th>
        <th>Quantity</th>
        <th>Unit Price</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Product 1</td>
        <td>Description of Product 1</td>
        <td>2</td>
        <td>$10.00</td>
        <td>$20.00</td>
      </tr>
      <tr>
        <td>Product 2</td>
        <td>Description of Product 2</td>
        <td>1</td>
        <td>$15.00</td>
        <td>$15.00</td>
      </tr>
    </tbody>
  </table>
  <div class="total">
    <p>Total: $35.00</p>
  </div>
</div>

    </div>
  )
}
