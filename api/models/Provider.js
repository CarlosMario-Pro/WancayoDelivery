const { Schema, model, models } = require("mongoose");


const providerSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    provider: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
});


module.exports = models?.Provider || model("Provider", providerSchema);