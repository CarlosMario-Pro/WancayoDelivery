//Aquí definimos la configuración de todo el Backend
require("dotenv").config();                         //Requerimos el .env
const express = require("express");                 //Requerimos Express
const cors = require("cors");                       //Requerimos 'cors
const routes = require("./routes/user");            //rutas del Backend
require("dotenv").config();


const { CLIENT_URL } = process.env;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(                                            //Políticas 'cors'
    cors({
        origin: CLIENT_URL,
        methods: "GET, POST, PUT, DELETE",
        credentials: true,
    })
);

app.use((req, res, next) => {
    res.header( "Access-Control-Allow-Origin", CLIENT_URL );

  // "https://pf-front-swart.vercel.app"
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});


app.use("/user", routes);


module.exports = app;