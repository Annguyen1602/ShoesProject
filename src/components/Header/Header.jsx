import React from 'react'
import '../../assets/styles/header.css'

export default function Header() {
  return (
    <header class="header">
      <div class="sub-header">
        <div class="container">
          <div class="content d-flex justify-content-between">
            <div class="header-left">
              <a href="#" class="text-decoration-none">
                <img src="./img/image 3.png" alt="logo.png" />
              </a>
            </div>
            <div class="header-right d-flex">
              <div class="cover">
                <a href="#" class="d-flex text-decoration-none">
                  <i class="fa-solid fa-cart-shopping text-white"></i>
                  <p class="text-white">(1)</p>
                </a>
              </div>
              <a href="#" class="text-white text-decoration-none">Login</a>
              <a href="./register.html" class="text-white text-decoration-none">Register</a>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="menu d-flex">
          <span class="link"><a href="#">Home</a></span>
          <span class="link"><a href="#">Men</a></span>
          <span class="link"><a href="#">Woman</a></span>
          <span class="link"><a href="#">Kid</a></span>
          <span class="link"><a href="#">Sport</a></span>
        </div>
      </div>
    </header>
  )
}
