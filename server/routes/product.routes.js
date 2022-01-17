const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
  app.get("/api", ProductController.index);
  app.post("/api/product", ProductController.createProduct);
  app.get("/api/products", ProductController.getAllProducts);
  app.get("/api/product/:id", ProductController.getOneProduct);
  app.delete("/api/product/:id", ProductController.deleteOneProduct);
  app.put("/api/product/:id", ProductController.updateOneProduct);
};
