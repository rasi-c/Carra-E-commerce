import "./navbar.css"
import { Link } from "react-router-dom"

export function Navbar({onClickTab=()=>{}}){
    
    return(
        <div className="navbar">
            <div className="mainname">
                <h3><svg className='logosvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill="none" stroke="currentColor" d="M19.996 10.621V19a2 2 0 0 1-2 2H6.004a2 2 0 0 1-1.999-2v-8.379M7.502 8.75l.5-5.75m-.5 5.75c0 2.902 4.498 2.902 4.498 0m-4.498 0c0 3.176-5.155 2.52-4.433-.248l1.045-4.007A2 2 0 0 1 6.048 3h11.904a2 2 0 0 1 1.934 1.495l1.045 4.007c.722 2.769-4.433 3.424-4.433.248M12 8.75V3m0 5.75c0 2.902 4.498 2.902 4.498 0m0 0l-.5-5.75"/>
</svg>EUROPIAN FASHION</h3>
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