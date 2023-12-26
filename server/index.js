const express = require("express");
const bodyParser=require('body-parser')
const dotenv = require('dotenv');
dotenv.config();
const db=require("./dbconnection")
const router=require("./routers")
const cors = require('cors');

const port = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };
  
app.use(cors(corsOptions));
app.use("/",router)
app.use(express.static('uploads'));

app.listen(port,()=>{
    console.log(`${port} running`)
})