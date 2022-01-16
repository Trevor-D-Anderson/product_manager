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

module.exports.getOneProduct = (req, res) => {
  Product.find({ _id: req.params.id })
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
};

module.exports.deleteOneProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((deleteConfirm) => res.json(deleteConfirm))
    .catch((err) => res.json(err));
};
