const bodyParser = require('body-parser');
 const productsRoutes = require('./RestAPI/Routes/products');
 const userRoutes = require('./RestAPI/Routes/users');
 const orderRoutes = require('./RestAPI/Routes/orders');
// const orderRoutes = require('./RestApi/Routes/orders');
const express =  require ('express');
// var session = require('express-session');
var cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/products',productsRoutes);
app.use('/users',userRoutes);
app.use('/orders',orderRoutes);

app.use(express.static(path.join(__dirname + "/public")))

app.listen(8000, () => {
    console.log("Listening on the port 8000");
})