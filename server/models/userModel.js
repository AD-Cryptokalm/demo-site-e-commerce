const mongoose = require("mongoose");

// ne permettre qu'une utilisation unique par adresse mail
const uniqueValidator = require("mongoose-unique-validator");

// schéma user
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  adress: { type: String, required: true },
  tel: { type: String, required: true },
  
  isAdmin: { type: Boolean, default: false}
},
{
  timestamps: true
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
