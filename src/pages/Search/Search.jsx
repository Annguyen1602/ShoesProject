import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Search() {
    const {arrProduct} = useSelector(state => state.productReducer)

    const [inputText,setInputText] = useState("")
    let inputHandler = (e) => {
        
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
      };

      const filteredData = arrProduct.filter((el) => {
        //if no input the return the original
        if (inputText === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(inputText)
        }
    })
  return (
    <div className='container'>
        <h2>Search</h2>
        <div className='search mb-5'>
            <input type="text" placeholder='Product name'onChange={inputHandler}/>
            <button>Search</button>

        </div>
        <div className='result'>
        <h1>Search Result</h1>
        {filteredData.map((prod,index)=>{
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
                      <NavLink to={`/detail/${prod.id}`} >Buy now</NavLink>
                      <p>{prod.price}</p>
                    </div>
                  </div>
                </div>
              );
        })}

        </div>

        
    </div>
  )
}
