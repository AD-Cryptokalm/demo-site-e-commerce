const express = require('express')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const path = require("path");
const cors = require('cors');
require('dotenv').config({path: './config/.env'})
require('./config/db')
const app = express()

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());


app.use('/api/user', userRoutes)
app.use('/api/product', productRoutes)

app.use("/images", express.static(path.join(__dirname, "images")));

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})
