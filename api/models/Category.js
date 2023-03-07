const { Schema, model, models } = require("mongoose");


const categorySchema = new Schema({
  category: {
     type: String, required: true 
  }
  // enum: ['red', 'green', 'blue']
},
{ versionKey: false });


module.exports = models?.Category || model('Category', categorySchema);