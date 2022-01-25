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
      {products.map((product, index) => {
        return (
          <div
            key={index}
            className="odd:bg-white even:bg-slate-100 last:rounded-b-xl"
          >
            <p className="font-bold">{product.productName}</p>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <div className="flex flex-row pb-4 justify-center">
              <Link
                className="underline text-blue-600 pr-2"
                to={`/product/${product._id}`}
              >
                {product.productName} Page
              </Link>
              <Link
                className="underline text-blue-600"
                to={"/product/edit/" + product._id}
              >
                Edit {product.productName}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProductList;
