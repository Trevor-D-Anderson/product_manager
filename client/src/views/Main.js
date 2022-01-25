import React, { useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Main = () => {
  const [products, setProducts] = useState([]);

  return (
    <div className="flex w-96 flex-col text-center border-2 rounded-xl mt-2 border-green-200">
      <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-blue-500">
        Create a New Product
      </h1>
      <ProductForm products={products} setProducts={setProducts} />
      <hr />
      <ProductList products={products} setProducts={setProducts} />
    </div>
  );
};
export default Main;
