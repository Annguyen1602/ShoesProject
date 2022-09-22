import React from 'react'
import { NavLink } from 'react-router-dom'
import image from '../../assets/img/image 3.png'

export default function Header() {
  return (
    <div>
  <header className="header">
    <div className="sub-header">
      <div className="container">
        <div className="content d-flex justify-content-between">
          <div className="header-left">
            <NavLink to="" className="text-decoration-none">
              <img src={image} alt="logo.png" />
            </NavLink>
          </div>
          <div className="header-right d-flex">
            <div className="cover">
              <a href="#" className="d-flex text-decoration-none">
                <i className="fa-solid fa-cart-shopping text-white" />
                <p className="text-white">(1)</p>
              </a>
            </div>
            <NavLink to="#" className="text-white text-decoration-none">Login</NavLink>
            <NavLink to="/register" className="text-white text-decoration-none">Register</NavLink>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="menu d-flex">
        <span className="link"><NavLink to="">Home</NavLink></span>
        <span className="link"><a href="#">Men</a></span>
        <span className="link"><a href="#">Woman</a></span>
        <span className="link"><a href="#">Kid</a></span>
        <span className="link"><a href="#">Sport</a></span>
      </div>
    </div>
  </header>
  
</div>
  )

}
