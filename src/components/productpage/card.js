import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../App';
import "./card.css";


export  function Card(props) {
  console.log("props is : ",props);
  const [isAddedTocart,setIsAddedTocart] = useState(false)
  const myArray = useContext(MyContext)
  console.log("my Array Is : ",myArray);
    const newTitle = props.item.title;
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
      const Trnct = truncateText(ogText,50)
      const price = props.item.price;
      const Image = props.item.image;
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
<div className="main">
<div className="card">
<div className="card2">
<svg className="glasses" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" xmlSpace="preserve">
    <image id="image0" width="100" height="100" x="0" y="0" href={Image}></image>
  </svg>
  <div className="heading">{slicedTitle}</div>
    <div className="details">{Trnct}</div>
    <div className="price">RS : {price}</div>
    <button type="button" className={`btn1 ${isAddedTocart?'added':'notAddded'} `} onClick={()=>AddCart(slicedTitle,Trnct,price,Image,Id,isAvailable,quantity)}>
  <span className="btn1__text ">{` ${isAddedTocart?'Remove Item':'Add Item'} `}</span>
  <span className={`btn1__icon ${isAddedTocart?'btnicon':'btniconnot'} `}><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke="currentColor" height="24" fill="none" className="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
</button>
  </div>
</div>
</div>
  )
}


