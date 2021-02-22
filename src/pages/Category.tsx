import React from "react";
import ProductsList from "../components/Product/ProductList";

const Category = () => {
  return (
    <div className="container shadow-xs py-6 lg:px-20">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img
            src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80"
            alt=""
            className="rounded"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1590244443259-0961bbb42e91?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80"
            alt=""
            className="rounded"
          />
        </div>
      </div>

      <h1 className="text-center text-xl md:text-4xl px-6 py-8 bg-blue-50 mt-4">Our Collections</h1>
      <div className="p-4 bg-white">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          <ProductsList />
        </div>
      </div>
    </div>
  );
};

export default Category;
