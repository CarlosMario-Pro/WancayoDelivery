// este modelo te permite almacenar información sobre los pedidos realizados por tus usuarios, como los productos solicitados, la fecha y hora del pedido, la dirección de envío, el estado del pedido, 

const { Schema, model, models } = require("mongoose");


const ordersSchema = new Schema({
    shippingAddress: {          //Dirección de envío
        type: String, 
        required: [true, "La dirección es requerida"],
        trim: true,
        minlength: [5, "La dirección debe tener al menos 5 caracteres"],
    },
    shippingDate: {             //Hora de envío
        type: Date,
        default: Date.now,
    },
},
{ timestamps: true, versionKey: false }); 


module.exports = models?.Order || model("Order", ordersSchema);