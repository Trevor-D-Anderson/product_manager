const { response } = require("express");
const Product = require("../models/product.model");

module.exports.index = (request, response) => {
  response.json({
    message: "Products",
  });
};

module.exports.createProduct = (request, response) => {
  Product.create(request.body)
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
};

module.exports.getAllProducts = (request, response) => {
  Product.find({})
    .then((products) => {
      console.log(products);
      response.json(products);
    })
    .catch((err) => {
      console.log(err);
    });
};
