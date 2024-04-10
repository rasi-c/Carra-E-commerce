import React from 'react'
import { useState, useEffect } from 'react';
import { Card } from './card';
import jsonData from '../productjson/item.json'
import './mainproduct.css'


export function Mainproduct() {
  const [loading, setLoading] = useState(true);
    const [product, setData] = useState();
    useEffect(() => {
      // Simulate asynchronous behavior with setTimeout
      const fetchData = () => {
        setTimeout(() => {
          setData(jsonData);
          setLoading(false);
        }, 1000); // Delay of 1 second to simulate fetching data
      };
  
      fetchData(); // Call the fetchData function
  
      // Cleanup function (not necessary in this case)
      return () => {
        // Any cleanup code here (if needed)
      };
    }, []); // Empty dependency array to run the effect only once
  
    if (loading) {
      return <div  className="spinner"></div>;
    }
  return (
    <>
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
      <div className="carasoulContainer" style={{color:'black'}}>
      <h1>buy 1 get <span style={{color:'red'}}>1 free</span></h1>
      <h6 style={{fontWeight:'300', fontSize:'1.2rem'}}>The best classic dress is on sale</h6>
      <img src="/assets/offer.png" alt="" />
      </div>
    </div>
    <div className="carousel-item">
    <div className="carasoulContainer" style={{color:'black'}}>
      <h6 style={{fontWeight:'300', fontSize:'1.2rem'}}>crazy deals</h6>
      <h1 style={{fontWeight:'400'}}>#stayhome</h1>
      <h6 style={{fontWeight:'300', fontSize:'1.2rem', textAlign:'center'}}>Save more with coupons & up to <span style={{color:'red'}}>70% off!</span></h6>
      </div>
    </div>
    <div className="carousel-item">
    <div className="carasoulContainer" style={{color:'black'}}>
    <h1>SEASONAL SALE</h1>
    <h6 style={{fontSize:'1.2rem'}}><span style={{color:'red', fontWeight:'300'}}>Winter Collection -50% OFF</span></h6>
    <img src="/assets/offer2.png" alt="" />
    </div>
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
        console.log("item is", item);
        return <Card item={item} key={index}/>;
      })
    }</div>
 
    </>
  )
}
