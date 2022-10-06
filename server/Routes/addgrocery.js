const express = require("express")
const Router = express.Router()
const gmodel = require("../models/grocerymodel")

Router.post("/grocery/add", (req, res) => {
    const ginput = req.body
    const gitems = new gmodel({
        groceryItem: ginput.groceryItem,
        isPurchased: ginput.isPurchased
    })

    gitems.save().then((result) => res.send({ "result": "successssssss" })).catch((err) => res.send({ "msg": "failed to add items" }))
})

module.exports = Router