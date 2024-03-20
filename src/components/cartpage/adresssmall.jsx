import React from 'react'
import './addresssmall.css'

export function AddressDetails(prop) {
    console.log("Adress props is : ", prop.item);
  return (
    <div className="main">
    <div>{prop.item.name}</div>
    <div>{prop.item.address}</div>
    <div>{prop.item.district}</div>
    <div>{prop.item.phoneNo}</div>
    <div>{prop.item.email}</div>
    </div>
  )
}
