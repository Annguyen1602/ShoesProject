import { Divider, Radio, Table } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quantityChangeMinus, quantityChangePlus } from '../../../redux/reducers/cartReducer';






export default function Demo() {
    let { arrCart } = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();
    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          
        },
        {
          title: 'Image',
          dataIndex: 'image',
          render: (imgSrc) => {
            
            return <img src={imgSrc} width={85} height={85} alt="..." />;
          },
        },
        {
          title: 'Name',
          dataIndex: 'name',
          
        },
        {
          title: 'Price',
          dataIndex: 'price',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            render :(text)=>{
                const { quantity, id } = text;
                console.log(text);
                return <div>
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
                        (item) => item.id === id
                      );

                      dispatch(quantityChangePlus(index));
                    }}
                  >
                    +
                  </button>
                  <span style={{ padding: "0 20px" }}>
                    {quantity}
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
                        (item) => item.id === id
                      );

                      dispatch(quantityChangeMinus(index));
                    }}
                  >
                    -
                  </button>

                </div>
            }
          },

        {
          title: 'Total',
          dataIndex: 'total',
          
        },
        {
            title: 'Action',
            dataIndex: 'Action',
          },
        
      ];
      const data = [] 
      for (let i = 0; i < arrCart.length; i++) {
        data.push({
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
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
          
          // Column configuration not to be checked
          name: record.name,
        }),
      };
      

    const [selectionType, setSelectionType] = useState('checkbox');
    return (
      <div className='container'>
        
  
        <Divider />
  
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
        />
      </div>
    )
}
