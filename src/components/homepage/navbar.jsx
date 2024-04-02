import "./navbar.css"
import { Link } from "react-router-dom"


export function Navbar({onClickTab=()=>{}}){
    
    return(
        <div className="navbar">
            <div className="mainname">
              <img src="/assets/storeYellow.png" alt="" style={{width:'130px', height:'40px'}}/>
            </div>
            <div className="switches">
                <div className="home"><Link to="/home"><button onClick={()=>onClickTab('home')}>HOME</button></Link></div>
                <div className="products"><Link to="/product"><button onClick={()=>onClickTab('product')}>PRODUCT</button></Link></div>
                <div className="services"><Link to="/cart"><button onClick={()=>onClickTab('cart')}>CART</button></Link></div>
                <div className="about"><Link to="/about"><button onClick={()=>onClickTab('about')}>ABOUT</button></Link></div>
            </div>
        </div>
    )
}