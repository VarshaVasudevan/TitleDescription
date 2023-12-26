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
const allowedOrigins = ['https://658ad417215c8c9b3b6c9c20--adorable-kelpie-e03d5a.netlify.app/'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
  
  app.use(cors(corsOptions));
app.use(cors());
app.use("/",router)
app.use(express.static('uploads'));

app.listen(port,()=>{
    console.log(`${port} running`)
})