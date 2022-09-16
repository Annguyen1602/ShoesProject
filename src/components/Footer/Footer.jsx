import React from "react";
import '../../assets/styles/footer.css'


export default function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="info-up">
          <div class="row align-items-start">
            <div class="col-12 col-md-6 col-xl-4 pb-sm-3 contact">
              <h2>GET HELP</h2>
              <a href="#">Contact us</a>
              <a href="#">Shopping</a>
              <a href="#">NikeiD</a>
              <a href="#">Nike+</a>
            </div>
            <div class="col-12 col-md-6 col-xl-4 pb-sm-3 contact">
              <h2>ORDERS</h2>
              <a href="#">Payment options</a>
              <a href="#">Shipping and delivery</a>
              <a href="#">Returns</a>
            </div>
            <div class="col-12 col-md-6 col-xl-4 contact">
              <h2>REGISTER</h2>
              <p>
                Create one account to manage everything you do with Nike, from
                your shopping preferences to your Nike+ activity
              </p>
              <a href="#" id="learn">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="info-down">
        <div class="container">
          <div class="row align-items-start">
            <div class="col-12 col-md-6 col-xl-4 branch">
              <h2>EMAIL SIGN UP</h2>
              <p>Be the first to know about new products and special offers</p>
              <a href="#">Sign up now</a>
            </div>
            <div class="col-12 col-md-6 col-xl-4 branch">
              <h2>GIFT CARDS</h2>
              <p>Give the gift that always fits</p>
              <a href="#">View cards</a>
            </div>
            <div class="col-12 col-md-6 col-xl-4 branch">
              <h2>STORE NEAR YOU</h2>
              <p>Locate a Nike retail store or authorized retailer</p>
              <a href="#">Search</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
