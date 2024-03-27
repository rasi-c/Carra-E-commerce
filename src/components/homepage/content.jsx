import React from "react";
import "./content.css";
import { Link } from "react-router-dom";

export function Content({showProductPage}) {

  return (
    <div className="fullBody">
      <div className="leftBody">
        <h1 className="backFashion">FA SHI ON</h1>
        <img src="https://static.vecteezy.com/system/resources/previews/016/017/018/non_2x/ecommerce-icon-free-png.png" alt="leafimg" />
      </div>
      <div className="rightBody">
        <h1>WHAT IS E-COMMERCE</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil
          labore deleniti natus libero provident, beatae architecto illum
          laboriosam ex quibusdam assumenda praesentium cumque deserunt
          repudiandae temporibus neque facere repellat.
        </p>
        
        <Link to="/product"><button className="mainpgBtn" onClick={showProductPage} >SHOP NOW<svg fill="currentColor" viewBox="0 0 24 24" className="icon">
            <path
              clipRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              fillRule="evenodd"
            ></path>
          </svg>
        </button></Link>
          
      </div>
    </div>
  );
}
