import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../productpage/card";
import jsonData from "../productjson/item.json";
import "./content.css";

export function Content({ showProductPage }) {
  return (
    <div className="fullBody">
      <div className="leftBody">
        {/* <h1 className="backFashion">FA SHI ON</h1> */}
        <img
          src="https://img.freepik.com/free-photo/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-glasses-isolated_158538-8561.jpg?w=900&t=st=1711610793~exp=1711611393~hmac=9185bfe685e05a68189382483cd4b28f6d334951fa7098705b715200da74cca2"
          alt="leafimg"
        />
      </div>
      <div className="rightBody">
        <h3>Trade-in-offer</h3>
        <h1>Super value Deals</h1>
        <h1 className="greenH1">On all products</h1>
        <p>Save more with coupons & up to 70% off!</p>

        <Link to="/product">
          <button className="mainpgBtn" onClick={showProductPage}>
            SHOP NOW
            <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
              <path
                clipRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
      <div className="secondContainer">
        <div className="secondHeader">
          <h2>Featured Products</h2>
          <h6 style={{ fontWeight: "400" }}>
            Summer Collection New Modern Design
          </h6>
        </div>
        <div className="itemContainer">
          {jsonData.map((item, index) => {
            if (item.catogory === "hoodie" || item.catogory === "T Shirt") {
              return <Card item={item} key={index} />;
            }
          })}
        </div>
      </div>
      <div className="thirdContainer">
        <div className="adBox">
          <h4>Repair Services</h4>
          <h2 style={{ textAlign: "center" }}>
            Up to <span>70% off </span>- all t-shirts & Accessories
          </h2>
          <Link to="/product">
            <button type="button" class="btn btn-light">
              Explore More
            </button>
          </Link>
        </div>
        <div
          style={{ padding: "50px 0px" }}
          className="w-100 d-flex align-items-center flex-column"
        >
          <h2>New Arrivals</h2>
          <h6 style={{ fontWeight: "400" }} className="text-center">
            Summer Collection New Modern Design
          </h6>
        </div>
        <div className="itemContainer">
          {jsonData.map((item, index) => {
            if (item.catogory === "Men Shirt") {
              return <Card item={item} key={index} />;
            }
          })}
        </div>
      </div>
      <div className="forthContainer">
        <div className="firstAd">
          <h5 style={{ fontWeight: "400" }}>spring / summer</h5>
          <h2>buy 1 get 1 free</h2>
          <h6 style={{ fontWeight: "200" }}>
            The best classic dress is on sale
          </h6>
          <Link to="/product">
            <button
              type="button"
              style={{ color: "white" }}
              class="btn btn-success"
            >
              Collection
            </button>
          </Link>
        </div>
        <div className="secondAd">
          <h2 style={{ color: "white" }}>SEASONAL SALE</h2>
          <h5 style={{ color: "red", fontWeight: "300", fontSize: "1rem" }}>
            Winter Collection - 50% OFF
          </h5>
        </div>
      </div>
      <div className="fifthContainer">
        <div className="newsletter">
          <div
            style={{ paddingLeft: "30px" }}
            className="newsText w-50 d-flex justify-content-center flex-column"
          >
            <h2>SIgn up for Newsletters</h2>
            <h6 style={{ fontWeight: "300" }}>
              Get E-mail updates about out latest shop and{" "}
              <span style={{ color: "#ffbd27" }}>special offers</span>
            </h6>
          </div>
          <div className="newsMail w-50 d-flex justify-content-center align-items-center ">
            <input
              type="text"
              placeholder="Your emial address"
              style={{ borderRadius: "0px", height: "38px", width: "50%" }}
            />
            <button
              type="button"
              style={{ borderRadius: "0px" }}
              class="btn btn-success"
            >
              SignUp
            </button>
          </div>
        </div>
        <div className="aboutSection">
          <div className="aboutLeft">
            <div className="section1">
              <a href="https://www.flipkart.com/samsung-galaxy-s24-5g-onyx-black-256-gb/p/itm0456c01739016?pid=MOBGX2F3ZUBMWBGP&lid=LSTMOBGX2F3ZUBMWBGPME7BYW&marketplace=FLIPKART&q=s24&store=search.flipkart.com&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=en_WSi0q3Yb9wW8gcrvjvob-MSGmjAJb7JSXl-0KF75asviZ96ZpITf02pfX37j2hd04QAh3R92l279wbkXR4c1e_UFjCTyOHoHZs-Z5_PS_w0%3D&ppt=sp&ppn=sp&qH=08eca8f85ffc96a4">
                <div className="flipLogo"></div>
              </a>
              <h5>Contact</h5>
              <h6>
                <span>Address : </span> 80/A Sidheekhabadh, Kondotty,
                Malappuram.
              </h6>
              <h6>
                <span>Phone : </span>0483 8698620
              </h6>
              <h6>
                <span>Hours : </span>10 am To 6 pm
              </h6>
            </div>
            <div className="section2">
              <h5>About</h5>
              <h6>Aboout us</h6>
              <h6>Delivery Information</h6>
              <h6>Privacy Policy</h6>
              <h6>Terms & Conditions</h6>
              <h6>Contact Us</h6>
            </div>
          </div>
          <div className="aboutRight">
            <div className="section3">
              <h5>My Account</h5>
              <h6>Sign in</h6>
              <h6>View Cart</h6>
              <h6>My Wishlist</h6>
              <h6>Track My Order</h6>
              <h6>Help</h6>
            </div>
            <div className="section4">
              <h5>Install App</h5>
              <h6>From Apple Store or Google Play</h6>
              <div className="appleGoogle">
                <div className="appleStore"></div>
                <div className="playStore"></div>
              </div>
              <h6>Secured Payment Gateways</h6>
              <div className="gateway"></div>
            </div>
          </div>
        </div>
        <div className="copyRight w-100 d-flex justify-content-center align-items-center text-center">
          @2024, E-commerce Website - MyReact FirstApp
        </div>
      </div>
    </div>
  );
}
