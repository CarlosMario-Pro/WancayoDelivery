const express = require("express");
const product = express.Router();
const Product = require("../models/Product");
const mongoose = require("mongoose");
const Joi = require("join");


product.post("/:id", async (req, res) => {
    const { name, price, description, category } = req.body;
    const id = req.params;

    const { error } = Joi.object({
        name: Joi.string().required().max(50),
        price: Joi.string().email().required(),
        description: Joi.string().required(),
    category: Joi.string().require()
    }).validate(req.body);
    
    const session = await mongoose.startSession();
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: "Id inválido" });
      }
    
   

    Products.create({
        _id,
        name,
        price,
        description,
        image,
        category: categoryDB._id,
    },
        (error, datos) => {
            if (error) {
            res.status(500).send(error);
            } else {
            res.status(201).send(datos);
            }
        }
    );
    } catch (error) {
        console.log(error);
        res.status(500).send("Error interno del servidor.");
    }
});


module.exports = postProduct;