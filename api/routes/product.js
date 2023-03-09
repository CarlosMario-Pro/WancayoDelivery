const express = require("express");
const product = express.Router();
const Product = require("../models/Product");
const mongoose = require("mongoose");
const Joi = require("joi");



product.get("/:id",async(req,res)=>{
    const { id } = req.params;
    const session = await mongoose.startSession();
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: "Id inválido" });
      }
      await session.withTransaction(async (session) => {
        if (id) {
          const product = await Product.find({ _id: id }).session(session);
          if (!product) {
            return res
              .status(404)
              .json({ message: `El producto con id: ${id} no existe` });
          }
          return res.status(200).json(product);
        } else {
          const products = await User.find({}).session(session);
          if (!products) {
            return res
              .status(404)
              .json({ message: `El productos en la base de datos` });
          }
          return res.status(200).json(products);
        }
      });
    } catch (error) {
      console.error(error);
      const status = error.status || 500;
      const message = error.message || "Ocurrió un error al obtener los productos";
      return res.status(status).json({ message });
    } finally {
      await session.endSession();
    }
})

module.exports = product;
