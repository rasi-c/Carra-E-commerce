import React, { useContext, useState } from 'react';
import { MyContext } from '../../App';
import { Cart } from './cart';
import "./maincart.css"
import { Link, useNavigate } from 'react-router-dom';

export function Maincart() {
    const navigate = useNavigate()
    const latestArray = useContext(MyContext)
      const [rate, setrate] = useState(0)
      console.log(latestArray);
      function checkArray(){
        if(latestArray.cart1.length === 0){
            navigate("address")
        }else{
            navigate("bill")
        }
      }
    return (
            <div className='maincartContainer'>
                <div className="left">
                <div className="cartCount">Cart <span className='countGrey'>{latestArray.cart.length} items</span></div>
                {latestArray.cart.map((item1) => {
                    return <Cart item={item1} setkey={setrate}/>
                })}
                </div>
                <div className="right">
                <div className="amountDisplay">
                <div className="summary">Order Summary</div>
                <div className="totalprice"><div>Price </div><div> ₹ {rate.toFixed(2)}</div></div>
                <div className="discount"><div>Discount </div><div>{(rate/10).toFixed(2)}</div></div>
                <div className="shipping"><div>Shipping </div><div className='free'>free</div></div>
                <div className="coupen"><div>Coupen Applied </div><div>none</div></div>
                <hr style={{width: "100%"}}/>
                <div className="totalamountShow"><div>Total Amount </div><div className='amount'> ₹ {(rate-rate/10).toFixed(2)}</div></div>
                <div className="deliverydate"><div>Estimated Deivery by</div><div>01 MAY 2024</div></div>
                <div className='buttons'> 
                <Link to="address"><button className='addAdress' >Add Address</button></Link>
                <button className='buynowBtn' onClick={checkArray}>Buy Now</button>
                </div>
                </div>
                </div>
            </div>
    );
}


