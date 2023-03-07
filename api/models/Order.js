
const { Schema, model, models } = require("mongoose");


const orderSchema = new Schema({
    shippingAddress: {        
        type: String, 
        required: [true, "La dirección es requerida"],
        trim: true,
        minlength: [5, "La dirección debe tener al menos 5 caracteres"],
    },
    shippingDate: {             
        type: Date,
        default: Date.now,
    },
},
{ timestamps: true, versionKey: false }); 


module.exports = models?.Order || model("Order", orderSchema);