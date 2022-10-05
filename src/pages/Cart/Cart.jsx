import { Divider, Radio, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  quantityChangeMinus,
  quantityChangePlus,
  submitActionApi,
} from "../../redux/reducers/cartReducer";
import { ACCESS_TOKEN, getStore, getStoreJson, USER_LOGIN } from "../../utils/tool";

export default function Demo() {
  const [selectionType, setSelectionType] = useState("checkbox");
  const { arrCart } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  let orderDetail = arrCart.map((item) => ({
    productId: item.id.toString(),
    quantity: item.quantity,
  }));
  if (!getStore(ACCESS_TOKEN)) {
    //Nếu chưa đăng nhập => Chuyển hướng trang
    alert("Đăng nhập để vào trang này !");
    return <Navigate to="/login" />;
  }
  let { email } = getStoreJson(USER_LOGIN);
  let dataOrder = {
    orderDetail: orderDetail,
    email: email,
  };
  
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (imgSrc) => {
        return <img src={imgSrc} width={85} height={85} alt="..." />;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      render: (text) => {
        const { quantity, id } = text;
        return (
          <>
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
                let index = arrCartMore.findIndex((item) => item.id === id);

                dispatch(quantityChangePlus(index));
              }}
            >
              +
            </button>
            <span style={{ padding: "0 20px" }}>{quantity}</span>
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
                let index = arrCartMore.findIndex((item) => item.id === id);

                dispatch(quantityChangeMinus(index));
              }}
            >
              -
            </button>
          </>
        );
      },
    },
    {
      title: "Total",
      dataIndex: "total",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => {
        return (
          <>
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
          </>
        );
      },
    },
  ];
  const dataArr = [];
  for (let i = 0; i < arrCart.length; i++) {
    dataArr.push({
      key: i,
      id: arrCart[i].id,
      image: arrCart[i].image,
      name: arrCart[i].name,
      price: `${arrCart[i].price}$`,
      total: `${(arrCart[i].price * arrCart[i].quantity).toLocaleString()}$`,
      quantity: { quantity: arrCart[i].quantity, id: arrCart[i].id },
      action: arrCart[i].id,
    });
  }
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };
  return (
    <div className="container">
      <Divider />

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={dataArr}
      />

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
