const Order = require('../models/orderModel');

exports.createOrder = (req,res) => {
    const orderObject = req.body;
    const order = new Order({
        ...orderObject,
        
      });
      order
        .save()
        .then(() => {
          res.status(201).json({ message: "Objet enregistré !" });
        })
        .catch((error) => {
          res.status(400).json({ error });
        });
    };
