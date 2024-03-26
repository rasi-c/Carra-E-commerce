import React from 'react'
import { useState, useEffect } from 'react';
import { Card } from './card';
import './mainproduct.css'

export function Mainproduct() {
  const [loading, setLoading] = useState(true);
    const [product, setData] = useState([]);
    useEffect(() => {
      const apiUrl = "https://fakestoreapi.com/products?limit=30";
      fetch(apiUrl)
        .then((response) => response.json())
        .then((product) => {
          setData(product);
          setLoading(false); // Once data is fetched, set loading to false
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false); // If there's an error, also set loading to false
        });
    }, []);
  return (
    <>
    
    
    {loading ? (
        <div className="spinner"></div>
        // Display loading text if loading is true
      ) : (
    <div className='maincontainer'>{
      product.map((item,index) => {
        return <Card item={item} key={index}/>;
      })
    }</div>
    )}
    </>
  )
}
