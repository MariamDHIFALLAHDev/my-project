const express = require("express");
const connectDB = require('./config/connectDB')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const Rental = require("./models/rental");
const rentalRoutes = require("./routes/rentals");
const userRoutes = require("./routes/users");
const bookingRoutes = require("./routes/bookings");

const app = express();

// middleware 
app.use(express.json())
// connect DB
connectDB();

//app.use(bodyParser.json());
app.use("/api/v1/rentals", rentalRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/bookings", bookingRoutes);

// run server
const port = process.env.PORT|| 5000
app.listen(port, err => 
    err? console.log("error"):console.log(`Server is running on port ${port}`)
    )
