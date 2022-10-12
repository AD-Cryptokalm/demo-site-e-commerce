const Order = require("../models/orderModel");

exports.createOrder = (req, res) => {
  const orderObject = req.body;
  const order = new Order({
    ...orderObject,
  });
  order
    .save()
    .then(() => {
      res.status(201).json({ order });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.getOneOrder = (req, res) => {
  Order.findOne({ _id: req.params.id })
    .then((order) => res.status(200).json(order))
    .catch((error) => res.status(404).json({ error }));
};
