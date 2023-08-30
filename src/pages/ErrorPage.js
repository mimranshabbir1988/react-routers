import React from 'react'
import { useNavigate } from 'react-router-dom'


const ErrorPage = () => {

    let navigate = useNavigate()

    const gotoHome = () =>{
        navigate("/")
    }

  return (
    <div>
        <h1 className='text-center text-danger fw-bold my-5 display-5'>Error Page - 404 </h1>
        <h2 className='text-center text-danger fw-bold display-3 mb-5'>Page not found, please try again</h2>
        <button onClick={gotoHome}
        className='btn btn-dark btn-lg'>Go Back to Home Page</button>
    </div>
  )
}

export default ErrorPage