import "./navbar.css"
import { Link } from "react-router-dom"

export function Navbar({onClickTab=()=>{}}){
    
    return(
        <div className="navbar">
            <div className="mainname">
                <h3>EUROPIAN FASHION</h3>
            </div>
            <div className="switches">
                <div className="home"><button onClick={()=>onClickTab('home')}><Link to="/home">HOME</Link></button></div>
                <div className="products"><button onClick={()=>onClickTab('product')}><Link to="/product">PRODUCT</Link></button></div>
                <div className="services"><button onClick={()=>onClickTab('cart')}><Link to="/cart">CART</Link></button></div>
                <div className="about"><button onClick={()=>onClickTab('about')}><Link to="/about">ABOUT</Link></button></div>
            </div>
        </div>
    )
}