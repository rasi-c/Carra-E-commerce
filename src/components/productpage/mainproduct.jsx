import React from 'react'
import { useState, useEffect } from 'react';
import { Card } from './card';
import './mainproduct.css'

export function Mainproduct() {
    const [product, setData] = useState([]);
    useEffect(() => {
        const apiUrl = "https://fakestoreapi.com/products?limit=30";
        fetch(apiUrl)
          .then((response) => response.json())
          .then((product) => setData(product))
          .catch((error) => console.error("Error fetching data:", error));
      }, []);
  return (
    <div className='maincontainer'>{
        product.map((item) => {
            return <Card item={item} />;
          })
    }</div>
  )
}
