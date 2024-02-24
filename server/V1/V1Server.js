require('./Config/DataBase')
require('dotenv').config({path: __dirname + '/Config/.env'});
const UserRouter = require('./Routes/UserRouter');
const AdminRouter = require('./Routes/AdminRouter');
const ProductRouter = require('./Routes/ProductRouter');
const CartRouter = require('./Routes/CartRouter');
const AuthenticationRouter = require('./Routes/AuthenticationRouter');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(AuthenticationRouter);
app.use('/user', UserRouter);
app.use('/admin', AdminRouter);
app.use('/user', CartRouter);
app.use('/admin', ProductRouter);


app.listen(process.env.PORT, () => {
    console.log("Server Is Listening On http://localhost:" + process.env.PORT);
})