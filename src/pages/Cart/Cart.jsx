import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import {
  quantityChange,
  quantityChangeMinus,
  quantityChangePlus,
  submitActionApi,
} from "../../redux/reducers/cartReducer";
import {
  ACCESS_TOKEN,
  getStore,
  getStoreJson,
  USER_LOGIN,
} from "../../utils/tool";

export default function Cart() {
  let { arrCart } = useSelector((state) => state.cartReducer);
  //   const [quantityCart,setQuantityCart] = useState()
  const dispatch = useDispatch();

  // let orderItem = {
  //   orderDetail: [],
  // };
  let orderDetail = arrCart.map((item) => ({
    productId: item.id.toString(),
    quantity: item.quantity,
  }));
  let { email } = getStoreJson(USER_LOGIN);
  let dataOrder = {
    orderDetail: orderDetail,
    email: email,
  };
  console.log(dataOrder);

  if (!getStore(ACCESS_TOKEN)) {
    //Nếu chưa đăng nhập => Chuyển hướng trang
    alert("Đăng nhập để vào trang này !");
    return <Navigate to="/login" />;
  }

  return (
    <div className="container">
      <h1>Carts</h1>
      <hr />
      <table className="table">
        <thead>
          <tr className="bg-light text-center">
            <th>
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="flexCheckDefault"
              />
            </th>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {arrCart.map((itemOrder, index) => {
            return (
              <tr key={index} className="text-center">
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckDefault"
                  />
                </td>

                <td>{itemOrder.id}</td>
                <td>
                  {" "}
                  <img src={itemOrder.image} alt={itemOrder.name} height={50} />
                </td>
                <td><NavLink to={`/detail/${itemOrder.id}`} className='text-decoration-none text-dark'>{itemOrder.name}</NavLink></td>
                <td>{itemOrder.price} $</td>
                <td>
                  <button
                    style={{
                      background: "#6200EE",
                      boxShadow:
                        "0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)",
                      width: "40px",
                      height: "30px",
                      borderRadius: "4px",
                    }}
                    className="text-white border-0"
                    onClick={() => {
                      let arrCartMore = [...arrCart];
                      let index = arrCartMore.findIndex(
                        (item) => item.id === itemOrder.id
                      );

                      dispatch(quantityChangePlus(index));
                    }}
                  >
                    +
                  </button>
                  <span style={{ padding: "0 20px" }}>
                    {itemOrder.quantity}
                  </span>
                  <button
                    style={{
                      background: "#6200EE",
                      boxShadow:
                        "0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)",
                      width: "40px",
                      height: "30px",
                      borderRadius: "4px",
                    }}
                    className="text-white border-0"
                    onClick={() => {
                      let arrCartMore = [...arrCart];
                      let index = arrCartMore.findIndex(
                        (item) => item.id === itemOrder.id
                      );

                      dispatch(quantityChangeMinus(index));
                    }}
                  >
                    -
                  </button>
                </td>
                <td>{itemOrder.quantity * itemOrder.price} $</td>
                <td>
                  <button
                    className="btn text-white me-4"
                    style={{
                      background: "#6200EE",
                      boxShadow:
                        "0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)",
                      width: "80px",
                      height: "36px",
                      borderRadius: "4px",
                    }}
                  >
                    EDIT
                  </button>
                  <button
                    className="btn text-white"
                    style={{
                      background: "#EB5757",
                      boxShadow:
                        "0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)",
                      width: "100px",
                      height: "36px",
                      borderRadius: "4px",
                    }}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="text-end">
        <button
          className="btn text-white"
          style={{
            background: "#F2994A",
            boxShadow:
              "0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)",
            width: "152px",
            height: "36px",
            borderRadius: "4px",
          }}
          onClick={() => {
            dispatch(submitActionApi(dataOrder));
          }}
        >
          SUBMIT ORDER
        </button>
      </div>
    </div>
  );
}
