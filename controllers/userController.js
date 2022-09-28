const User = require('../models/userModel')

exports.getOneUser = (req, res) => {
    User.findOne({ _id: req.params.id }).select("-password")
      .then((user) => {
        if (user._id != req.auth.userId) {
            res.status(401).json({ message: "Non autorisé !" });
        } else {
            res.status(200).json(user)}
        }
        )
      .catch((error) => res.status(404).json({ error }));
  };


  exports.modifyUser = (req, res) => {
    
    User.findOne({ _id: req.params.id })
      .then((user) => {
        if (user._id != req.auth.userId) {
          res.status(401).json({ message: "Non autorisé !" });
        } else {
          User.updateOne(
            { _id: req.params.id },
            {
                $set: {
                  email: req.body.email,
                  adress: req.body.adress,
                  tel: req.body.tel,
                },
              },
          )
            .then(() => res.status(200).json({ message: "Objet modifié!" }))
            .catch((error) => res.status(401).json({ error }));
        }
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  };  