const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  adress: { type: String, required: true },
  tel: { type: String, required: true },
  email: { type: String, required: true},
  totalPrice : {type: Number},
  products : { type: [String]},
},
{
  timestamps: true
});


module.exports = mongoose.model("Order", userSchema);
