const path = require("path");
const products = require("../models/product.model");
exports.getProduct = (req, res) => {
  // res.send("ok");
  res.sendFile(path.join(__dirname, "/../views/product.html"));
};

exports.saveProduct = (req, res) => {
  const name = req.body.name;
  const price = req.body.price;

  // res.send(price);
  const product = {
    name,
    price,
  };

  products.push(product);
  res.status(200).json({
    success: true,
    products,
  });
};
