const express = require('express');
const address= express.Router();
const Address = require('../../../models/Address')

const ObjectId = require("mongoose").Types.ObjectId;


address.get("/:id", async (req, res) => {
    try {
        const addresses = await Address.find({ user: req.params.id });
        
        if (!addresses) {
            return res.status(404).send("No se encontraron direcciones para este usuario.");
        }
        res.status(200).json(addresses);
    } catch (error) {
        res.status(500).send("Error al obtener las direcciones. " + error.message);
    }
});
module.exports = address;