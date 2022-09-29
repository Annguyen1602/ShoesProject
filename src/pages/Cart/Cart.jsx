import React from 'react'

export default function Cart() {
  return (
    <div className='container'>
        <h1>Cart</h1>
        <hr />
        <table className='table'>
            <thead>
                <tr className='bg-light'>
                    <th></th>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
            </thead>
        </table>
        
    </div>
  )
}
