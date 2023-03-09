const express = require("express");
const postProduct = express.Router();
const Products = require("../../../models/Product");
const Categories = require("../../../models/Category");
const Joi = require("joi");
const mongoose = require("mongoose");


/*constante de validaciones joi, la podriamos modularizar para que se vea el codigo mas limpio */
const postProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().required(),
  category: Joi.string().required(),
  image: Joi.string().required(),
  promotion: Joi.boolean().optional(),
});

postProduct.post("/", async (req, res) => {
  const session = await mongoose.startSession();
  try {
    const { name, price, description, category, image, promotion } =
      req.body;

    const { error } = postProductSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: "Los datos ingresados no son válidos",
        error: error.details,
      });
    }

    const categoryDB = await Categories.findOne({ category: category });
    if (!categoryDB) {
      return res.status(404).json({ message: "Categoría no encontrada." });
    }

    await session.withTransaction(async (session) => {
      const existingProduct = await Products.findOne({ name }).session(
        session
      );
      if (existingProduct) {
        return res
          .status(409)
          .json({ message: "El producto ya existe en el sistema." });
      }

      const [createdProduct] = await Products.create(
        [
          {
            name,
            price,
            description,
            image,
            category: categoryDB._id,
            promotion,
          },
        ],
        {
          session,
        }
      );
      res.status(201).json({
        id: createdProduct._id,
        name: createdProduct.name,
        price: createdProduct.price,
        description: createdProduct.description,
        category: createdProduct.category,
        image: createdProduct.image,
        promotion: createdProduct.promotion,
      });
    });
  } catch (error) {
    console.error(error);
    const status = error.status || 500;
    const message =
      error.message || "Ocurrió un error al crear el producto";
    return res.status(status).json({ message });
  } finally {
    await session.endSession();
  }
});

module.exports = postProduct;

