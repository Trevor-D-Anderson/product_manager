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
      <p className="mt-2 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-blue-500">
        {product.productName}
      </p>
      <p className="font-bold mt-2">Price: ${product.price}</p>
      <p className="font-bold mt-2">Description: {product.description}</p>
      <div className="flex flex-row pb-4 justify-center ">
        <button
          className="underline text-blue-600 pr-2"
          onClick={() => deleteProduct(product._id)}
        >
          Delete
        </button>
        <Link className="underline text-blue-600 pr-2" to="/home">
          Home
        </Link>
        <Link
          className="underline text-blue-600 pr-2"
          to={"/product/edit/" + product._id}
        >
          Edit {product.productName}
        </Link>
      </div>
    </div>
  );
};

export default ViewProduct;
