const { Schema, model, models } = require("mongoose");


const productSchema = new Schema({
  product_name: {
    type: String,
    required: [true, 'El nombre del producto es requerido'],
    trim: true,
    maxlength: [
      20,
      'El nombre del producto debería ser menor de 20 caracteres',
    ],
  },
  price: { type: Number, required: [true, 'El precio del producto es requerido'] },
  description: {
    type: String,
    trim: true,
    minlength: [10, 'La descripción debe tener al menos 10 caracteres'],
  },
  image: { type: String },
  stock: { type: Number, required: [true, 'El stock del producto es requerido'] },
  promotion: { type: Boolean, default: false },
  isDeleted: { type: Boolean, default: false },
 
},
{ timestamps: true, versionKey: false }
);
module.exports = models?.Product || model("Product", productSchema);
 