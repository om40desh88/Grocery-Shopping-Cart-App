const express = require("express");
const App = express();
const bp = require("body-parser");
const cors = require("cors")
const port = 3000;
App.use(bp.json());
App.use(cors());



const addgrocery = require("./Routes/addgrocery");
const updategrocery = require("./Routes/updategrocery");
const getallgrocery = require("./Routes/getallgrocery");
const deletegrocery = require("./Routes/deletegrocery");

App.use("/", addgrocery)
App.use("/", updategrocery)
App.use("/", getallgrocery)
App.use("/", deletegrocery)

App.listen(port, () => {
    console.log("listning at port 3000");
})
