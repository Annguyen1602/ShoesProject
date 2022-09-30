import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  quantityChange,
  quantityChangeMinus,
  quantityChangePlus,
} from "../../redux/reducers/cartReducer";

export default function Cart() {
  let { arrCart } = useSelector((state) => state.cartReducer);
  //   const [quantityCart,setQuantityCart] = useState()
  const dispatch = useDispatch();

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
                <td>{itemOrder.name}</td>
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
        >
          SUBMIT ORDER
        </button>
      </div>
    </div>
  );
}
