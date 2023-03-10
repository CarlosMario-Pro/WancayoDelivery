const { Schema, model, models } = require("mongoose");

const comboSchema = new Schema(
  {
    combo_name: {
      type: String,
      required: [true, "El nombre del combo es requerido"],
      trim: true,
      maxlength: [
        100,
        "El nombre del combo debería ser menor de 100 caracteres",
      ],
    },
    description: {
      type: String,
      required: [true, "La descripción del combo es requerida"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "El precio del combo es requerido"],
    },
    products: [{ type: Schema.Types.ObjectId, ref: "Product", required: true }],
    drinks:[{type: Schema.Types.ObjectId, ref: "Drinks", required: true}]
  },
  { timestamps: true, versionKey: false }
);

module.exports = models?.Combo || model("Combo", comboSchema);
