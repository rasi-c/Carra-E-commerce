import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import "./address.css";
import { AddressDetails } from "./adresssmall";

export function Address() {
  const navigate = useNavigate()
  const secArray = useContext(MyContext)
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phoneNO, setPhoneNo] = useState('')
  const [district, setDistrict] = useState('')
  const [email, setEmail] = useState('')
   function Submit(event){
    event.preventDefault();
    secArray.setSecArray([
      ...secArray.cart1,
      {name: name,
      address: address,
      district: district,
      phoneNO: phoneNO,
      email: email}
    ])
    console.log("second",secArray.cart1);
    setName('')
    setAddress('')
    setEmail('')
    setPhoneNo('')
    // navigate("invoice");
   }
  return (
    <div className="addressContainer">
      <div className="formContainer">
      <div className="header3">Address</div>
      <form action="" onSubmit={Submit}>
        <label htmlFor="">Name :</label>
        <input value={name} type="text" required onChange={(event)=> setName(event.target.value)}/>
        <label htmlFor="" >Address :</label>
        <textarea value={address} name="" id="" cols="30" rows="10" onChange={(event)=> setAddress(event.target.value)} required></textarea>
        <label htmlFor="">District :</label>
        <select name="" id="" onChange={(event)=> setDistrict(event.target.value)} required>
        <option value="Thiruvananthapuram">Thiruvananthapuram</option>
        <option value="Kollam">Kollam</option>
        <option value="Pathanamthitta">Pathanamthitta</option>
        <option value="Alappuzha">Alappuzha</option>
        <option value="Kottayam">Kottayam</option>
        <option value="Idukki">Idukki</option>
        <option value="Ernakulam">Ernakulam</option>
        <option value="Thrissur">Thrissur</option>
        <option value="Palakkad">Palakkad</option>
        <option value="Malappuram">Malappuram</option>
        <option value="Kozhikode">Kozhikode</option>
        <option value="Wayanad">Wayanad</option>
        <option value="Kannur">Kannur</option>
        <option value="Kasaragod">Kasaragod</option>
        </select>
       
        <label htmlFor="">Phone No :</label>
        <input value={phoneNO} type="tel" onChange={(event)=> setPhoneNo(event.target.value)} required/>
        <label htmlFor="">Email :</label>
        <input value={email} type="email" onChange={(event)=> setEmail(event.target.value)} required/>
        <button type="submit" className="subBtn" >Add Address</button>
      </form>
      </div>
      <div className="secContainer">
        <div className="addressMain">
          {secArray.cart1.map((item)=> {
            return <AddressDetails item={item}/>
          })}
        </div>
      </div>
    </div>
  );
}
