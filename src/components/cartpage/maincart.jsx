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
                {latestArray.cart.map((item1) => {
                    return <Cart item={item1} setkey={setrate}/>
                })}
                <div className="amountDisplay">
                <div className="totalamountShow">Total Amount :<div className='amount'> ₹ {rate}</div></div>
                <div className='buttons'> 
                <Link to="address"><button className='addAdress' >Add Address</button></Link>
                <button className='buynowBtn' onClick={checkArray}>Buy Now</button>
                </div>
                </div>
            </div>
    );
}


