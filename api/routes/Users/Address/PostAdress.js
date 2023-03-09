const express = require("express");
const Address = require("../../../models/Address");
const Users = require("../../../models/User");
const postAddress = express.Router();

postAddress.post('/:id',async (req,res) => {
    try { 
        const {country,city,state,street}= req.body;
        if(!country || !city || !state || street){
            return res.send(400).json('Faltan Datos')
        }
        const address = await Address.create(
            {country,city,state,street, user:req.params.id}
        );
        const addressId= [address._id].join("");

        const updatedUsers = await Users.findOneAndUpdate(
            { _id: req.params.id },
            { $push: { address: addressId } },
            { new: true, upsert: true }
          );
          address.save();
          res.status(200).send(updatedUsers);
    
      
    } catch (error) {
        
    }
});

module.exports =postAddress;