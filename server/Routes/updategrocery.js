const express = require("express")
// const { findOne } = require("../models/grocerymodel")
const Router = express.Router()
const gmodel = require("../models/grocerymodel")

Router.put("/grocery/updategrocery/:_id", async (req, res) => {
    try {
        const gid = req.params._id
        const fone = await gmodel.findOne({ _id: gid })
        const result = await gmodel.findOneAndUpdate({ _id: gid }, { isPurchased: !fone.isPurchased })
        console.log(result);
        res.send("dummmmy")
    }
    catch (e) {
        res.send({ msg: "some error occured" })
    }
})


module.exports = Router