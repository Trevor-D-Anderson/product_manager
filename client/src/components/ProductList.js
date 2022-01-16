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
            <p>
              {products.productName}, ${products.price}, {products.description}
            </p>
            <Link
              className="underline text-blue-600"
              to={`/product/${products._id}`}
            >
              {products.productName} Page
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default ProductList;
