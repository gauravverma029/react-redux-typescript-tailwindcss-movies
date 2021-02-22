import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductsList from "../components/Product/ProductList";
import { setCategoryFilter, selectedProductCategory } from "../components/Product/productSlice";

type FilterStateProps = {
  filterValue: string;
};

const Home = () => {
  const dispatch = useDispatch();
  const category = useSelector(selectedProductCategory);
  const handleFilterStates = ({ filterValue }: FilterStateProps) => {
    dispatch(setCategoryFilter(filterValue));
  };

  return (
    <div className="shadow-xs py-6 lg:px-20">
      <div className="sm:flex py-4 w-full flex-grow flex w-auto mt-4">
        <div
          className="mt-3 sm:mx-2 sm:mt-0 hover:bg-blue-300 text-lg cursor-pointer	bg-blue-500 p-2 text-white rounded-lg"
          onClick={() => handleFilterStates({ filterValue: "All Collection" })}
        >
          All Collection
        </div>
        <div
          className="mt-3 sm:mx-2 sm:mt-0 hover:bg-blue-300 text-lg cursor-pointer	bg-blue-500 p-2 text-white rounded-lg"
          onClick={() => handleFilterStates({ filterValue: "electronics" })}
        >
          Electronics
        </div>
        <div
          className="mt-3 sm:mx-2 sm:mt-0 hover:bg-blue-300 text-lg cursor-pointer	bg-blue-500 p-2 text-white rounded-lg"
          onClick={() => handleFilterStates({ filterValue: "jewelery" })}
        >
          Jewelery
        </div>
        <div
          className="mt-3 sm:mx-2 sm:mt-0 hover:bg-blue-300 text-lg cursor-pointer	bg-blue-500 p-2 text-white rounded-lg"
          onClick={() => handleFilterStates({ filterValue: "men clothing" })}
        >
          Men Clothing
        </div>
        <div
          className="mt-3 sm:mx-2 sm:mt-0 hover:bg-blue-300 text-lg cursor-pointer	bg-blue-500 p-2 text-white rounded-lg"
          onClick={() => handleFilterStates({ filterValue: "women clothing" })}
        >
          Women Clothing
        </div>
      </div>
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

      <h1 className="text-center text-xl md:text-4xl px-6 py-8 bg-blue-50 mt-4 uppercase">{category}</h1>
      <div className="p-4 bg-white">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          <ProductsList />
        </div>
      </div>
    </div>
  );
};

export default Home;
