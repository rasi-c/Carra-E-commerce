import React from "react";
import "./content.css";
import { Link } from "react-router-dom";


export function Content({showProductPage}) {

  return (
    <div className="fullBody">
      <div className="leftBody">
        {/* <h1 className="backFashion">FA SHI ON</h1> */}
        <img src="https://img.freepik.com/free-photo/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-glasses-isolated_158538-8561.jpg?w=900&t=st=1711610793~exp=1711611393~hmac=9185bfe685e05a68189382483cd4b28f6d334951fa7098705b715200da74cca2" alt="leafimg" />
      </div>
      <div className="rightBody">
        <h3>Trade-in-offer</h3>
        <h1>Super value Deals</h1>
        <h1 className="greenH1">On all products</h1>
        <p>Save more with coupons & up to 70% off!</p>
        
        <Link to="/product"><button className="mainpgBtn" onClick={showProductPage} >SHOP NOW<svg fill="currentColor" viewBox="0 0 24 24" className="icon">
            <path
              clipRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              fillRule="evenodd"
            ></path>
          </svg>
        </button></Link>
          
      </div>
      <div className="secondContainer">
        <h2>Featured Products</h2>
        <h6>Summer Collection New Modern Design</h6>
        <div className="itemContainer">
          <div className="item"><img src="/assets/f1.jpg" alt="" /></div>
          <div className="item"><img src="/assets/f2.jpg" alt="" /></div>
          <div className="item"><img src="/assets/f3.jpg" alt="" /></div>
        </div>
      </div>
    </div>
  );
}
