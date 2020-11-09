const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
require("dotenv").config();
//import routes
const userRoutes = require('./routes/user');


//app
const app = express();



//dbConnection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then((res,err) => {
    if(res){
        console.log('DATABASE connected')
    }else{
        console.log(err)
    }
});



//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());



//routes middleware
app.use("/api", userRoutes);


const port = process.env.PORT || 8000;

app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
});