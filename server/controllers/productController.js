const Product = require("../models/productModel");

const fs = require("fs");

exports.getAllProduct = (req, res) => {
  Product.find()
    .then((product) => res.status(200).json(product))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => res.status(200).json(product))
    .catch((error) => res.status(404).json({ error }));
};

exports.createProduct = (req, res) => {
  const productObject = req.file
    ? {
        categorie: req.body.categorie,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  const product = new Product({
    ...productObject,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  product
    .save()
    .then(() => {
      res.status(201).json({ message: "Objet enregistré !" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deleteProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => {
      if (req.body.userId != '63266c87d64fb2801ba6031c') {
        res.status(401).json({ message: "Non autorisé !" });
      } else {
        const filename = product.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {
          Product.deleteOne({ _id: req.params.id })
            .then(() => {
              res.status(200).json({ message: "Objet supprimé !" })
            })
            .catch((error) => res.status(401).json({ error }));
        });
      }
    })
    .catch((error) => res.status(400).json({ error }));
};
