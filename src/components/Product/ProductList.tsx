import React, { useEffect, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts, allProductsStatus, allProducts } from "./productSlice";
import Spinner from "../Spinner";

const LazyImage = React.lazy(() => import("../LazyImage"));

type ListProps = {
  content: {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    description: string;
  };
};

const List: React.FC<ListProps> = ({ content: { title, image, category, price } }) => {
  return (
    <div className="max-w-full md:max-w-md">
      <div className="rounded-lg border-1 border-gray-100 shadow">
        <div className="bg-gray-700">
          <Suspense fallback={<div className="min-h-200 max-h-200 bg-gray-700">...</div>}>
            <LazyImage src={image} />
          </Suspense>
        </div>
        <div className="p-3">
          <div className="flex justify-between space-x-2">
            <div className="w-7/12">
              <div className="text-base leading-6 font-semibold min-h-6 max-h-6 overflow-ellipsis overflow-hidden">{title}</div>
            </div>
            <div className="text-xs	bg-gray-500 rounded-md text-gray-50 text-center uppercase p-1 italic max-h-10">{category}</div>
          </div>
          <div>
            <div className="text-xl font-extrabold text-pink-700">{price} €</div>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="p-3">
            <div className="grid grid-cols-2 gap-1">
              <div className="grid grid-rows-1">
                <button className="p-1 rounded-md font-semibold bg-pink-600 text-white hover:bg-pink-300">Buy Now</button>
              </div>
              <div className="grid grid-rows-1">
                <button className="p-1 rounded-md font-semibold bg-pink-600 text-white hover:bg-pink-300">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductsList: React.FC = () => {
  const dispatch = useDispatch();
  const productStatus = useSelector(allProductsStatus);
  const products = useSelector(allProducts);
  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  if (productStatus === "pending") {
    return (
      <React.Fragment>
        <Spinner />
        <Spinner />
        <Spinner />
        <Spinner />
      </React.Fragment>
    );
  }

  if (productStatus === "succeeded") {
    return (
      <React.Fragment>
        {products &&
          products.length > 0 &&
          products.map((content, index) => {
            return <List content={content} key={index}></List>;
          })}
      </React.Fragment>
    );
  }
  return null;
};

export default ProductsList;
