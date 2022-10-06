const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/groceries").then((res) => console.log("connected")).catch((error) => console.log("failed to connect with database"))

const schema = mongoose.Schema
const gs = new schema({
    groceryItem: String,
    isPurchased: Boolean
})
const gmodel = mongoose.model("lists", gs)
module.exports = gmodel