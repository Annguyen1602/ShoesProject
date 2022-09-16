import React from "react";
import "../../assets/styles/index.css"

export default function Index() {
  return (
    <section className="carousel">
      <div className="container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item d-lg-flex justify-content-between align-items-center active">
              <div className="image-shoes col-7">
                <img
                  src="./img/image 4.png"
                  className="d-block"
                  alt="photo.png"
                />
              </div>
              <div className="content-right col-4">
                <h1>Product name</h1>
                <p>Product description ....</p>
                <a href="#">Buy now</a>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span>
              <img src="./img/Polygon 2.png" alt="photo.png" />
            </span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span>
              <img src="./img/Polygon 1.png" alt="photo.png" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
