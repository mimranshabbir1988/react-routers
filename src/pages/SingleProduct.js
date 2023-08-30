import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ProductsData from '../data/ProductsDb';



const SingleProduct = () => {

    const [count, setCount] = useState(0)

    const {id} = useParams();
    const navigate = useNavigate();

    let filterData = ProductsData.find(x=>x.id === Number(id))
    console.log(filterData)

    
  return (
    <div>
        <div className='my-5 text-center btn-lg'>
            <a onClick={() =>{navigate('/products')}} className='btn btn-warning'>Go Back to Product Page</a>
        </div>
        <h1 className='text-primary text-center my-5 display-5 fw-bold'>Single Product Detail Page</h1>
        <div className='container'>
            <div className='row'>
                {/* left side */}
                <div className='col-md-6'>
                    <img src={filterData.image} height={400} width={400} />
                    <p>{filterData.description}</p>
                </div>
                {/* right side  */}
                <div className='col-md-6'>
                    <h1 className='text-uppercase black-700'>Category: {filterData.category}</h1>
                    <hr />
                    <h3 className='fs-3 text-start'>Name: {filterData.title}</h3>
                    <p className='text-start lead display-5 fw-bold'>PKR Rs. {filterData.price}/- </p>
                    <hr />
                    <h4 className='text-start fs-1 fw-bolder'>Ratings {filterData.rating && filterData.rating.rate}</h4>
                    <div>
                        <button onClick={()=>setCount(count+1)}
                        className='btn btn-dark'>+</button>
                        {count}
                        <button className='btn btn-success'>-</button>
                    </div>

                    <button className='btn btn-outline-dark btn-lg'>Add to Cart</button>
                    <button className='btn btn-dark btn-lg ms-2' >Go to Cart</button>
                    
                    <h1>Total Price: {count*filterData.price}</h1>

                </div>
            </div>
        </div>
            

    </div>
  )
}

export default SingleProduct