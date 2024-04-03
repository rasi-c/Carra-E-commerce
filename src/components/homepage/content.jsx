import React from "react";
import "./content.css";
import { Link } from "react-router-dom";

export function Content({ showProductPage }) {
  const imageArray = [
    "/assets/f1.jpg",
    "/assets/f2.jpg",
    "/assets/f3.jpg",
    "/assets/f4.jpg",
    "/assets/f5.jpg",
    "/assets/f6.jpg",
    "/assets/f8.jpg",
    "/assets/n5.jpg",
  ];
  const imageArraySecond = [
    "/assets/n1.jpg",
    "/assets/n2.jpg",
    "/assets/n3.jpg",
    "/assets/n4.jpg",
    "/assets/n5.jpg",
    "/assets/n8.jpg",
  ];
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
          {imageArray.map((item) => {
            return (
              <div className="item">
                <img src={item} alt="" />
                <div className="brandName">Adidas</div>
                <div className="modelName">Cartoon Astronaut T-Shirts</div>
                <div className="rateAndCart">
                  <div className="starAndPrice">
                    <div className="stars">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                      >
                        <path
                          fill="#FDD835"
                          d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
                        />
                        <path
                          fill="#FFFF8D"
                          d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
                        />
                        <path
                          fill="#F4B400"
                          d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                      >
                        <path
                          fill="#FDD835"
                          d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
                        />
                        <path
                          fill="#FFFF8D"
                          d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
                        />
                        <path
                          fill="#F4B400"
                          d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                      >
                        <path
                          fill="#FDD835"
                          d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
                        />
                        <path
                          fill="#FFFF8D"
                          d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
                        />
                        <path
                          fill="#F4B400"
                          d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                      >
                        <path
                          fill="#FDD835"
                          d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
                        />
                        <path
                          fill="#FFFF8D"
                          d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
                        />
                        <path
                          fill="#F4B400"
                          d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                      >
                        <path
                          fill="#FDD835"
                          d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
                        />
                        <path
                          fill="#FFFF8D"
                          d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
                        />
                        <path
                          fill="#F4B400"
                          d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
                        />
                      </svg>
                    </div>
                    <div className="itemPrice">490/-</div>
                  </div>
                  <button
                    type="button"
                    className="cartButton btn btn-outline-success"
                  >
                    <i className="bi bi-cart"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="thirdContainer">
        <div className="adBox">
          <h4>Repair Services</h4>
          <h2 style={{ textAlign: "center" }}>
            Up to <span>70% off </span>- all t-shirts & Accessories
          </h2>
          <Link to="/product"><button type="button" class="btn btn-light">
            Explore More
          </button></Link>
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
          {imageArraySecond.map((item) => {
            return (
              <div className="item">
                <img src={item} alt="" />
                <div className="brandName">Adidas</div>
                <div className="modelName">Cartoon Astronaut T-Shirts</div>
                <div className="rateAndCart">
                  <div className="starAndPrice">
                    <div className="stars">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                      >
                        <path
                          fill="#FDD835"
                          d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
                        />
                        <path
                          fill="#FFFF8D"
                          d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
                        />
                        <path
                          fill="#F4B400"
                          d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                      >
                        <path
                          fill="#FDD835"
                          d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
                        />
                        <path
                          fill="#FFFF8D"
                          d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
                        />
                        <path
                          fill="#F4B400"
                          d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                      >
                        <path
                          fill="#FDD835"
                          d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
                        />
                        <path
                          fill="#FFFF8D"
                          d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
                        />
                        <path
                          fill="#F4B400"
                          d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                      >
                        <path
                          fill="#FDD835"
                          d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
                        />
                        <path
                          fill="#FFFF8D"
                          d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
                        />
                        <path
                          fill="#F4B400"
                          d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 128 128"
                      >
                        <path
                          fill="#FDD835"
                          d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01z"
                        />
                        <path
                          fill="#FFFF8D"
                          d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13z"
                        />
                        <path
                          fill="#F4B400"
                          d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97z"
                        />
                      </svg>
                    </div>
                    <div className="itemPrice">490/-</div>
                  </div>
                  <button
                    type="button"
                    className="cartButton btn btn-outline-success"
                  >
                    <i className="bi bi-cart"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="forthContainer">
        <div className="firstAd">
          <h5 style={{fontWeight:'400'}}>spring / summer</h5>
          <h2>buy 1 get 1 free</h2>
          <h6 style={{fontWeight:'200'}}>The best classic dress is on sale</h6>
          <Link to="/product"><button type="button" style={{color:'white'}} class="btn btn-success" >Collection</button></Link>
        </div>
        <div className="secondAd">
          <h2 style={{color:'white'}}>SEASONAL SALE</h2>
          <h5 style={{color:'red',fontWeight:'300', fontSize:'1rem'}}>Winter Collection - 50% OFF</h5>
        </div>
      </div>
      <div className="fifthContainer">
        <div className="newsletter">
          <div style={{paddingLeft:'30px'}} className="newsText w-50 d-flex justify-content-center flex-column">
          <h2>SIgn up for Newsletters</h2>
          <h6 style={{fontWeight:'300'}}>Get E-mail updates about out latest shop and <span style={{color:'#ffbd27'}}>special offers</span></h6>
          </div>
          <div className="newsMail w-50 d-flex justify-content-center align-items-center ">
              <input type="text" placeholder="Your emial address" style={{borderRadius:'0px',height:'38px', width:'50%'}}/>
              <button type="button" style={{borderRadius:'0px'}} class="btn btn-success">SignUp</button>
          </div>
        </div>
        <div className="aboutSection">
          <div className="aboutLeft">
          <div className="section1">
            <div className="flipLogo"></div>
            <h5>Contact</h5>
            <h6><span>Address : </span> 80/A Sidheekhabadh, Kondotty, Malappuram.</h6>
            <h6><span>Phone : </span>0483 8698620</h6>
            <h6><span>Hours : </span>10 am To 6 pm</h6>
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
        <div className="copyRight w-100 d-flex justify-content-center align-items-center text-center">@2024, E-commerce Website - MyReact FirstApp</div>
      </div>
    </div>
  );
}
