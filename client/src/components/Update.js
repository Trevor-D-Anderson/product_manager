import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
const Update = (props) => {
  const { id } = props; //this process is identical to the one we used with our Details.js component
  const [product, setProduct] = useState({});
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  // retrieve the current values for this Product so we can fill
  // in the form with what is in the db currently
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product/" + id)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data[0]);
        setProductName(res.data[0].productName);
        setPrice(res.data[0].price);
        setDescription(res.data[0].description);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateProduct = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/product/" + id, {
        productName,
        price,
        description,
      })
      .then((res) => console.log(res));
    navigate("/home");
  };
  return (
    <div className="flex w-96 flex-col text-center border-2 rounded-xl mt-2 border-green-200">
      <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-blue-500">
        Update {product.productName}
      </h1>
      <form className="pr-4 pl-4" onSubmit={updateProduct}>
        <p className="mt-2 flex flex-row justify-between">
          <label className="font-bold">Product Name:</label>
          <br />
          <input
            type="text"
            className="border border-blue-400 rounded"
            name="productName"
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
        </p>
        <p className="mt-2 flex flex-row justify-between">
          <label className="font-bold">Price:</label>
          <br />
          <input
            type="number"
            className="border border-blue-400 rounded"
            step="0.01"
            min="0"
            name="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </p>
        <p className="mt-2 flex flex-row justify-between">
          <label className="font-bold">Description:</label>
          <br />
          <input
            type="text"
            className="border border-blue-400 rounded"
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </p>
        <Link className="underline text-blue-600 pr-4" to="/home">
          Home
        </Link>
        <input
          className="border-2 border-green-300 bg-green-300 rounded shadow-lg w-20 self-center mt-4 mb-4 hover:bg-green-500 hover:border-green-500 font-bold"
          type="submit"
        />
      </form>
    </div>
  );
};
export default Update;
