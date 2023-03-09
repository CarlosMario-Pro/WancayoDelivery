const { Schema, model } = require("mongoose");


const addressSchema = new Schema({
  country: {
    type: String,
    allowNull: false,
  },
  city: {
    type: String,
    allowNull: false,
  },
  state: {
    type: String,
    allowNull: false,
  },
  street: {
    type: String,
    allowNull: false,
  },

  user: { type: Schema.Types.ObjectId, ref: "User" },
},
{ versionKey: false });


module.exports = model("Address", addressSchema);