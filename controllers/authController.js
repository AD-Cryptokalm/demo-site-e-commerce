const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("JsonWebToken");

exports.signUp = (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new UserModel({
        firstName: req.body.name,
        lastName: req.body.name,
        email: req.body.email,
        password: hash,
        adress: req.body.adress,
        tel: req.body.tel,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res) => {
  UserModel.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json({ message: "Paire utilisateur/mot de passe incorecte !" });
      } else {
        bcrypt
          .compare(req.body.password, user.password)
          .then((valid) => {
            if (!valid) {
              return res
                .status(401)
                .json({ error: "Paire utilisateur/mot de passe incorecte !" });
            } else {
              res.status(200).json({
                userId: user._id,
                token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
                  expiresIn: "72h",
                }),
              });
            }
          })
          .catch((error) => res.status(500).json({ error }));
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.logout = (req, res) => {
  try {
    res.status(200).send('ok')
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};
