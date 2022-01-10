const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    productName: { type: String },
    price: { type: Number },
    description: { type: String },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", ProductSchema);
