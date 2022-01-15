import React, { useEffect, useState } from "react";
import axios from "axios";
const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/product", {
        productName,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    setProductName("");
    setPrice("");
    setDescription("");
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label>Product Name:</label>
        <br />
        <input
          className="border border-blue-400 rounded"
          type="text"
          onChange={(e) => setProductName(e.target.value)}
        />
      </p>
      <p>
        <label>Price:</label>
        <br />
        <input type="text" onChange={(e) => setPrice(e.target.value)} />
      </p>
      <p>
        <label>Description:</label>
        <br />
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
      </p>
      <input type="submit" />
    </form>
  );
};
export default ProductForm;
