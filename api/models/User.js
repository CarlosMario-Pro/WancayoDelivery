const { Schema, model, models } = require("mongoose");


const usuarioSchema = new Schema({
    name: {
        type: String,
        required: [true, "El nombre de usuario es requerido"],
        trim: true,
        maxlength: [
          20,
          "El nombre de usuario debería ser menor de 20 caracteres",
        ],
    },
    email: {
        type: String,
        required: [true, "El correo electrónico es requerido"],
        unique: true,
        trim: true, 
        match: [/^\S+@\S+\.\S+$/, "El correo electrónico no es válido"],
    },
    password: {
        type: String,
        required: [true, "La contraseña es requerida"],
        trim: true,
        minlength: [8, "La contraseña debe tener al menos 8 caracteres"],
    },
    address: { 
        type: String, 
        required: [true, "La dirección es requerida"],
        trim: true,
        minlength: [5, "La dirección debe tener al menos 5 caracteres"],
    },
    history: [
        {
          order_id: { type: Schema.Types.ObjectId, ref: "Order" },
          product_id: { type: Schema.Types.ObjectId, ref: "Product" },
        },
      ],
    isAdmin: {
        default: false,
        type: Boolean,
    },
},
{ timestamps: true, versionKey: false }); 


module.exports = models?.User || model("User", usuarioSchema);
