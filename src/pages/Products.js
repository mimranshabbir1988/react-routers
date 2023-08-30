import React from "react";
import ProductsData from "../data/ProductsDb";
import {Link} from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <h1 className="my-5 text-primary text-center fw-bold display-3 text-uppercase">
        Products Detail Page
      </h1>
      <hr />

        <div className="buttons d-flex justify-content-center">
          <a className="btn btn-outline-dark">All</a>
          <a className="btn btn-outline-dark">Men</a>
          <a className="btn btn-outline-dark">Women</a>
          <a className="btn btn-outline-dark">Jewelry</a>
          <a className="btn btn-outline-dark">Electronics</a>
        </div>
      
        <div className="container">
        <div className="row mt-4">
          {ProductsData.map((product) => {
              const {id, title, price, description, image, rating} = product
            return (
              <div className="mt-4 col-lg-3 col-md-6 col-12">
                <div className="card" style={{ width: "18rem" }}>
                  <img height={300} src={image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{title.substring(0,15)}...</h5>
                    <p className="card-text">
                      {description.substring(0,30)}...
                    </p>
                    <p className="card-text lead fs-5 fw-bold">
                      PKR Rs. {price}/- RATING - {rating.rate}
                    </p>
                    <Link to={`/products/${id}`}                    
                     className="btn btn-primary">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
