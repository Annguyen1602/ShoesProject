import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const { arrCart } = useSelector((state) => state.cartReducer);

  return (
    <div className="container">
      <h1>Cart</h1>
      <hr />
      <table className="table">
        <thead>
          <tr className="bg-light">
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
              <tr key={index}>
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
                <td>{itemOrder.quantity}</td>
                <td>{itemOrder.quantity * itemOrder.price} $</td>
                <td>
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="text-end" >
      <button className="btn btn-secondary">Submit order</button>
      </div>
    </div>
  );
}
