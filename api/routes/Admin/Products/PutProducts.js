const express = require("express");
const putProduct = express.Router();
const Products = require("../../../models/Product");
const Categories = require("../../../models/Category");

// Ruta para modificar un producto
putProduct.put("/", async (req, res) => {
  try {
    const { idProduct, form } = req.body;
    console.log(idProduct);
    const {
      category,
      description,
      isDeleted,
      name,
      news,
      price,
      promotion,
      image,
    } = form;

    const categoryDB = await Categories.findOne({ category });

    const product = await Products.findOne({ _id: idProduct });
    if (!product) return res.status(404).send("Producto no encontrado.");

    const imgProduct = product.image;

    const updatedProduct = await Products.findByIdAndUpdate(
      idProduct,
      {
        category: categoryDB._id,
        description,
        image: image || imgProduct,
        isDeleted,
        name,
        news,
        price,
        promotion,
      },
      { new: true }
    );
    
    res.status(200).send(updatedProduct);

  } catch (error) {
    console.log(error);
    res.status(500).send("Error interno del servidor.");
  }
});

module.exports = putProduct;
