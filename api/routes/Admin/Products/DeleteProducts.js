const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Joi = require("joi");
const Products = require("../../../models/Product.js");


router.put("/:id", async (req, res) => {
  const { idProduct } = req.body;

  const { error } = Joi.object({
    idProduct: Joi.string().required(),
  }).validate(req.body);

  const session = await mongoose.startSession();
  try {
    if (error) {
      return res
        .status(400)
        .json({ message: "Los datos ingresados no son válidos" });
    }

    await session.withTransaction(async (session) => {
      const product = await Products.findById(idProduct).session(session);
      if (!product) {
        return res.status(404).send("Producto no encontrado.");
      }

      product.isDeleted = !product.isDeleted;
      await product.save();
      res.send("Producto Fuera de Inventario");
    });
  } catch (error) {
    res.status(500).send("Error interno del servidor.");
  } finally {
    await session.endSession();
  }
});

module.exports = router;

