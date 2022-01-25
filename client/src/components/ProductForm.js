import React, { useState } from "react";
import axios from "axios";
const ProductForm = (props) => {
  const { products, setProducts } = props;
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
        setProducts([...products, res.data]);
        setProductName("");
        setPrice("");
        setDescription("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <form className="flex flex-col pl-6 pr-6" onSubmit={onSubmitHandler}>
      <div className="flex flex-row justify-between mt-2">
        <label className="font-bold">Product Name:&nbsp;</label>
        <br />
        <input
          className="border border-blue-400 rounded"
          value={productName}
          type="text"
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div className="flex flex-row justify-between mt-2">
        <label className=" font-bold">Price:&nbsp;</label>
        <br />
        <input
          className="border border-blue-400 rounded"
          value={price}
          type="text"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="flex flex-row justify-between mt-2">
        <label className=" font-bold">Description:&nbsp;</label>
        <br />
        <input
          className="border border-blue-400 rounded"
          value={description}
          type="text"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <input
        className="border-2 border-green-300 bg-green-300 rounded shadow-lg w-20 self-center mt-2 mb-2 hover:bg-green-500 hover:border-green-500 font-bold"
        type="submit"
      />
    </form>
  );
};
export default ProductForm;
