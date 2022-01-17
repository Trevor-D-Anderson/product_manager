import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const ProductList = (props) => {
  const { products, setProducts } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {products.map((products, index) => {
        return (
          <div
            key={index}
            className="odd:bg-white even:bg-slate-100 last:rounded-b-xl"
          >
            <p className="font-bold">{products.productName}</p>
            <p>Price: ${products.price}</p>
            <p>{products.description}</p>
            <div className="flex flex-row pb-4 justify-center">
              <Link
                className="underline text-blue-600 pr-2"
                to={`/product/${products._id}`}
              >
                {products.productName} Page
              </Link>
              <Link
                className="underline text-blue-600"
                to={"/product/edit/" + products._id}
              >
                Edit {products.productName}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProductList;
