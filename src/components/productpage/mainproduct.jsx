import React from 'react'
import { useState, useEffect } from 'react';
import { Card } from './card';
import jsonData from '../productjson/item.json'
import './mainproduct.css'


export function Mainproduct() {
  const [loading, setLoading] = useState(true);
    const [product, setData] = useState();
    useEffect(() => {
      const fetchData = () => {
        setTimeout(() => {
          setData(jsonData);
          setLoading(false);
        }, 1000); 
      };
  
      fetchData(); 
  
      return () => {
      };
    }, []); 
  
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
      <div className="carasoulContainer" style={{color:'black', background:"url(https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?t=st=1712802749~exp=1712806349~hmac=1302417c87fda46d775e75771ed840cae677c67a2e969a6659780c6b168e7737&w=1380)", backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
      <h1>buy 1 get <span style={{color:'red'}}>1 free</span></h1>
      <h6 style={{fontWeight:'300', fontSize:'1.2rem'}}>The best classic dress is on sale</h6>
      <img src="/assets/offer.png" alt="" />
      </div>
    </div>
    <div className="carousel-item">
    <div className="carasoulContainer" style={{color:'black', background:"url(https://img.freepik.com/free-photo/excited-girl-scream-joy-making-fist-pump-holding-shopping-bag-rejoicing-standing-dress-ove_1258-120529.jpg?t=st=1712802309~exp=1712805909~hmac=ead0bbb9cf4d882e6bc5218e633759ab39e0fadf422ed6267d3d75d884120994&w=1380)", backgroundPosition:'top', backgroundSize:'cover'}}>
      <h6 style={{fontWeight:'300', fontSize:'1.2rem'}}>crazy deals</h6>
      <h1 style={{fontWeight:'400'}}>#stayhome</h1>
      <h6 style={{fontWeight:'300', fontSize:'1.2rem', textAlign:'center'}}>Save more with coupons & up to <span style={{color:'red'}}>70% off!</span></h6>
      <img src="/assets/offer2.png" alt="" />
      </div>
    </div>
    <div className="carousel-item">
    <div className="carasoulContainer" style={{color:'black', background:"url(https://img.freepik.com/free-photo/front-view-woman-with-shopping-bag-concept_23-2148674158.jpg?t=st=1712793690~exp=1712797290~hmac=0303aa102957c9aef495653ea70f42ee7cebbdb00be9f11d515955903632855a&w=1380)", backgroundPosition:'center', backgroundSize:'cover'}}>
    <h1>SEASONAL SALE</h1>
    <h6 style={{fontSize:'1.2rem'}}><span style={{color:'red', fontWeight:'300'}}>Winter Collection -50% OFF</span></h6>
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
