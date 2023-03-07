//este modelo te permite almacenar información sobre los pagos realizados por tus usuarios, como el método de pago utilizado, el monto pagado, la fecha y hora del pago, etc. 
const { Schema, model } = require("mongoose");


const commentsSchema = new Schema({
    paymentMethod: String,
    amount: Number,
    shippingDate: {             
        type: Date,
        default: Date.now,
    },
    
    user: { type: Schema.Types.ObjectId, ref: "Users" },
    product: { type: Schema.Types.ObjectId, ref: "Products" },

},
{ versionKey: false });


module.exports = model("Pay", commentsSchema);