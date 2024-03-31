import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
import "./card.css";

export  function Card(props) {
  const [isAddedTocart,setIsAddedTocart] = useState(false)
  const myArray = useContext(MyContext)
    const newTitle = props.item.title.toUpperCase();
    const newTitleArray = newTitle.split(" ");
    const slicedTitle = newTitleArray.splice(0,2);

    function truncateText(text, maxLength) {
        if (text.length <= maxLength) {
          return text;
        } else {
          return text.slice(0, maxLength) + '...';
        }
      }
      const ogText = props.item.description;
      const Trnct = ogText;
      const price = props.item.price;
      const Image = props.item.images;
      const Id = props.item.id;
      let isAvailable = false
      let quantity = 1;
      const AddCart = (title, details, price,image,Id) => {
        let newTitle = title;
        let newDetails = details;
        let newPrice = price;
        let newImage = image;
        let newId = Id;
        // let newisAvailable = isAvailable
        myArray.cart.forEach(element => {
          if(element.newId === newId){
            isAvailable = true
          }
        });
        if(isAvailable){
          setIsAddedTocart(false)
          let newCart = myArray.cart.filter((item) => {
            
            return newId !== item.newId;
          });
          myArray.arrkey(newCart)
          console.log("id is available");
        }else{
          setIsAddedTocart(true)
          let myobj = {
            newTitle,
            newDetails,
            newPrice,
            newImage,
            newId,
            isAvailable,
            quantity
          };
          myArray.cart.push(myobj);
          console.log("my obj",myobj);
        }
      };

      useEffect(
        ()=>{
          myArray.cart.forEach(element => {
            if(element.newId === Id){
              isAvailable = true;
            }
          });
          if(isAvailable){
            setIsAddedTocart(true)
          }else{
            setIsAddedTocart(false)
          }
        },[]
      )
      
  return (
<div className="card2">
<Link to={`/view/${props.item.id}`}><img src={props.item.images} alt="" /></Link>
  <div className="heading">{slicedTitle}</div>
    <div className="price"><div  className='price2'></div><div>RS : {price}</div></div>
    <button type="button" className={`btn1 ${isAddedTocart?'added btn btn-outline-danger':'notAddded btn btn-outline-success'} `} onClick={()=>AddCart(slicedTitle,Trnct,price,Image,Id,isAvailable,quantity)}>
  <span className="btn1__text ">{isAddedTocart?<i class="bi bi-cart-x"></i>:<i class="bi bi-cart"></i>} </span>
  {/* <span className={`btn1__icon ${isAddedTocart?'btnicon':'btniconnot'} `}><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke="currentColor" height="24" fill="none" className="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span> */}
</button>
  </div>
  )
}


