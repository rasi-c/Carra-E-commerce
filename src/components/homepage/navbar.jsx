import { NavLink } from "react-router-dom";
import "./navbar.css";

export function Navbar({ onClickTab = () => {} }) {
  return (
    <div className="navbar">
      <div className="mainname">
        <img src="/assets/storeYellow.png" alt="" />
      </div>
      <div className="switches">
        <div className="home">
          <NavLink exact to="/home">
            <button onClick={() => onClickTab("home")}  activeClassName="active">HOME</button>
          </NavLink>
        </div>
        <div className="products">
          <NavLink to="/product" >
            <button onClick={() => onClickTab("product")} activeClassName="active">PRODUCT</button>
          </NavLink>
        </div>
        <div className="services">
          <NavLink to="/cart" >
            <button onClick={() => onClickTab("cart")}activeClassName="active">CART</button>
          </NavLink>
        </div>
        <div className="about">
          <NavLink to="/about" >
            <button onClick={() => onClickTab("about")} activeClassName="active">ABOUT</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
