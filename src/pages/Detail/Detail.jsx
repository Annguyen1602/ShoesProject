import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetailApi } from "../../redux/reducers/productReducer";

export default function Detail() {
  const { productDetail } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const params = useParams();

  

  useEffect(() => {
    
    // call api
    let { id } = params;
    const action = getProductDetailApi(id);
    dispatch(action);
  }, [params.id]);

  return (
    <section className="product-detail">
      <div className="container">
        <div className="more-detail d-lg-flex">
          <div className="image col-xl-7">
            <img
              src={productDetail.image}
              alt="photo.png"
              className="w-75 h-75"
            />
          </div>
          <div className="part-info col-xl-5">
            <h2>{productDetail.name}</h2>
            <p>{productDetail.description}</p>
            <h3>Available size</h3>
            <div className="size">
              {productDetail.size?.map((size, index) => {
                return <span key={index}>{size}</span>;
              })}
            </div>
            <span id="price">{productDetail.price} $</span>
            <div className="number-of-product">
              <button id="plus">+</button>
              <span>1</span>
              <button id="minus">-</button>
            </div>
            <button>Add to cart</button>
          </div>
        </div>
        <div class="container">
        <div class="row" >
        {productDetail.relatedProducts?.map((item,index)=>{
          return <div className="item col-12 col-md-6 col-xl-4 " key={index}>
          <div className="cover">
            <div className="pro-image">
              <img src={item.image} className="w-100" alt="photo.png" />
            </div>
            <d className="pro-txt">
              <h2>{item.name}</h2>
              <span>{item.description}</span>
            </d>
            <div className="buy-click d-flex">
              <NavLink to={`/detail/${item.id}`} >Buy now</NavLink>
              <p>{item.price}</p>
            </div>
          </div>
        </div>
        })}
        </div>
      </div>
      </div>
    </section>
  );
}
