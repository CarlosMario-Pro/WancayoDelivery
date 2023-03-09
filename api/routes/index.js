const {Router} = require('express')
const route = Router();


//const PostAdress = require('../routes/Users/Address/PostAdress')
const product = require("./product")
const user = require("./user")

route.use("/product", product)
route.use("/user", user)
//route.use('/postAddress', PostAdress);

module.exports = route;
