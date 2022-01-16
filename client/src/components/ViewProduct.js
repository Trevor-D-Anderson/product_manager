import { Link, navigate } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";

const ViewProduct = (props) => {
  const [product, setProduct] = useState({});
  const { id } = props;
  // const removeFromDom = (productId) => {
  //   setProduct(product.filter((product) => product._id != productId));
  // };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product/" + id)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteProduct = (id) => {
    axios
      .delete("http://localhost:8000/api/product/" + id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    navigate("/home");
  };

  return (
    <div className="flex w-96 flex-col text-center border-2 rounded-xl mt-2 border-green-200">
      <p className="font-bold mt-2">Product: {product.productName}</p>
      <p className="font-bold mt-2">Price: ${product.price}</p>
      <p className="font-bold mt-2">Description: {product.description}</p>
      <button onClick={() => deleteProduct(product._id)}>Delete</button>
      <Link className="underline text-blue-600 pb-4" to="/home">
        Home
      </Link>
    </div>
  );
};

export default ViewProduct;
