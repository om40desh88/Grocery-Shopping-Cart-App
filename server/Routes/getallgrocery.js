const express = require("express")
const Router = express.Router()
const gmodel = require("../models/grocerymodel")

Router.get('/grocery/getall', async (req, res) => {
    try {
        const allresult = await gmodel.find({});
        res.send(allresult);
    } catch (e) {
        res.send('failed to load all data ');
    }
});
Router.get('/grocery/:id', async (req, res) => {
    const inputbyid = req.params.id
    try {
        const idresult = await gmodel.find({_id:inputbyid});
        res.send(idresult);
    } catch (e) {
        res.send('failed to load all data ');
    }
});


module.exports = Router