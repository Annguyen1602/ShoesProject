import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Index() {
  const { arrProduct } = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();

  const getAllProductApi = () => {
    const actionThunk = getProductApi();
    dispatch(actionThunk);
  };

  useEffect(() => {
    getAllProductApi();
  }, []);

  const renderProduct = () => {
    return arrProduct.map((prod, index) => {
      return (
        <div className="item col-12 col-md-6 col-xl-4 " key={index}>
          <div className="cover">
            <div className="pro-image">
              <img src={prod.image} className="w-100" alt="photo.png" />
            </div>
            <d className="pro-txt">
              <h2>{prod.name}</h2>
              <span>{prod.description}</span>
            </d>
            <div className="buy-click d-flex">
              <a href="./detail.html?productid=${newProduct.id}">Buy now</a>
              <p>{prod.price}</p>
            </div>
          </div>
        </div>
      );
    });
  };

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
        {renderProduct()}
      </div>
    </section>
  );
}
