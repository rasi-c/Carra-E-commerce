import React from 'react'
import './about.css'

export default function About() {
  return (
    <div style={{marginTop:'60px'}} className='aboutContainer'>
        <div className="KnowUs">
            <h1 style={{fontSize:'calc(1.375rem + 1.5vw)', fontWeight:'600'}}>#KnowUs</h1>
            <h6 style={{fontSize:'1.2rem', fontWeight:'300'}}>Modern Basics. Radical Transparency</h6>
        </div>
        <div className="weAreContainer">
          <div className="imageBox">
            <img src="https://www.noiise.com/wp-content/uploads/2023/11/definition-ecommerce.jpg.webp" alt="" />
          </div>
          <div className="textBox">
            <h1>Who We Are?</h1>
            <p>An e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.Create stunning images with as much or as little control as you like thanks to a choice of Basix and Creative modes.</p>
          </div>
        </div>
    </div>
  )
}
