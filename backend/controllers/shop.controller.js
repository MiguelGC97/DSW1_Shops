const db = require("../models");
const Shop = db.shops;

exports.create = (req, res) => {

    if (!req.body.brand){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const Shop = {
        address: req.body.address,
        telephone: req.body.telephone
    };

    Shop.create(shop)
        .then((data) => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while retrieving shops"
            });
        });
}

exports.findAll = (req, res) => {
    Shop.findAll()
        .then((data) => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error ocurred while retrieving shops"
        });
    });
}

exports.findOne = (req, res) => {

}

exports.update = (req, res) => {

}

exports.delete = (req, res) => {

}