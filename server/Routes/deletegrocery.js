const express = require("express")
const Router = express.Router()
const gmodel = require("../models/grocerymodel")


Router.delete("/grocery/deletegroceryItem/:_id", (req, res) => {
    const del = req.params._id
    const delbyid = gmodel.findByIdAndDelete({ _id: del }).then((result) => res.send({ "result": "deleted" })).catch((error) => res.send({ "result": "failed to delete" }))

})

module.exports = Router