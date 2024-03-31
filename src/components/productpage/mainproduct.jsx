import React from 'react'
import { useState, useEffect } from 'react';
import { Card } from './card';
import './mainproduct.css'
import img2 from '../images/image2.png'


export function Mainproduct() {
  const [loading, setLoading] = useState(true);
    const [product, setData] = useState([]);
    useEffect(() => {
      const apiUrl = "https://api.escuelajs.co/api/v1/products?offset=0&limit=30";
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
    <div className='maincontainer'>
     <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

      { product.map((item,index) => {
        return <Card item={item} key={index}/>;
      })
    }</div>
    )}
    </>
  )
}
