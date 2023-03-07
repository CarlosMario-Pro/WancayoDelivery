const { Schema, model, models } = require("mongoose");


const productsSchema = new Schema({
    //Combo
    nameProduct: {
        type: String,
        unique: true,
    },
    nameDrink: {
        type: String,
        unique: true,
    },

    //Adicionales
    aditionals: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    stock: {
        type: Number,
    },
    promotion: {
        type: Schema.Types.Mixed,
        default: {
            salesOff: false,
            stock: 0,
            newPrice: 0,
            oldPrice: 0,
        },
    },
    isDeleted: { type: Boolean, default: false },
    // category: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Categories",
    //     required: true,
    // },
},
{ versionKey: false }
);
module.exports = models?.Products || model("Products", productsSchema);
 