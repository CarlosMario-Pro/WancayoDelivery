const express = require("express");
const user = express.Router();
const User = require("../models/User");
const mailSettings = require("../additional/Nodemailer");
const Joi = require("joi");
const mongoose = require("mongoose");

user.post("/", async (req, res) => {
  const { name, phone, email,address, password } = req.body;

  const { error } = Joi.object({
    name: Joi.string().required().max(50),
    phone: Joi.number().required(),
    email: Joi.string().email().required(),
    password:Joi.string().required(),
    address:Joi.string().required()

  }).validate(req.body);

  const session = await mongoose.startSession();
  try {
    if (error) {
      return res
        .status(400)
        .json({ message: error });
    }

    await session.withTransaction(async (session) => {
      let existUser = await User.findOne({ email }).session(session);
      if (existUser) {
        return res
          .status(409)
          .json({ message: `El usuario con correo ${email} ya existe` });
      }
      const [createdUser] = await User.create([{ name, phone, email, address, password }], {
        session,
      });
      res.status(200).json({
        id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        address: createdUser.address,
      });
    });

    const transporter = mailSettings.transporter;
    const mailDetails = mailSettings.mailDetails(email);
    // transporter.sendMail(mailDetails, (error, info) => {
    //   if (error) {
    //     console.log(error);
    //     return res
    //       .status(500)
    //       .json({ message: "Error al enviar email de confirmación" });
    //   } else {
    //     return res.status(200).send({ message: "Correo enviado con éxito." });
    //   }
    // });
    
  } catch (error) {
  
    const status = error.status || 500;
    const message = error.message || "Ocurrió un error al crear al usuario";
    return res.status(status).json({ message });
  } finally {
    await session.endSession();
  }
});

user.get("/:id", async (req, res) => {
  const { id } = req.params;
  const session = await mongoose.startSession();
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: "Id inválido" });
    }
    await session.withTransaction(async (session) => {
      if (id) {
        const user = await User.find({ _id: id }).session(session);
        if (!user) {
          return res
            .status(404)
            .json({ message: `El ususario con id: ${id} no existe` });
        }
        return res.status(200).json(user);
      } else {
        const users = await User.find({}).session(session);
        if (!users) {
          return res
            .status(404)
            .json({ message: `No hay usuarios en la Db` });
        }
        return res.status(200).json(users);
      }
    });
  } catch (error) {
    console.error(error);
    const status = error.status || 500;
    const message = error.message || "Ocurrió un error al obtener los usuarios";
    return res.status(status).json({ message });
  } finally {
    await session.endSession();
  }
});

module.exports = user;
