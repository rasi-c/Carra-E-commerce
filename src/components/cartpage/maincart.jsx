import React, { useContext } from 'react';
import { MyContext } from '../../App';
import { Cart } from './cart';
import "./maincart.css"

export function Maincart() {
    const latestArray = useContext(MyContext)
    console.log("hello page 3");
    const totalAmount = latestArray.cart.reduce((total, item) => {
        return total + (item.newPrice * item.quantity);
      }, 0);
      
      console.log("total amount is:", totalAmount);
    return (
            <div className='maincartContainer'>
                {latestArray.cart.map((item1) => {
                    return <Cart item={item1}/>
                })}
                <div className="totalamountShow">Total Amount : {totalAmount}</div>
                <button className='buynowBtn'>Buy Now</button>
            </div>
    );
}


