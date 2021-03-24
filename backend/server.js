

/**
 * Declaring Modules
 * Express: Lightweight Node Framework
 * cors: Passing through cross-site origin references
 * mongoose: NoSQL Database
 * dotenv: Enables use of environment variables
 */
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();


/**
 * Declaring Server Info
 * 
 * -Starting Express Server
 * -Reading Port
 */
const server = express();
const port = process.env.PORT || 5000;
const mongURI = process.env.MONGO_URI




/** Init Mongo DB Connection */
mongoose.connect(mongURI, { useNewUrlParser: true,useUnifiedTopology: true });

const mongConnection = mongoose.connection;
mongConnection.once('open', () => {
    console.log("MongoDB Database connection established")
})


/********************************************************************************* */

/**
 * Declaring and initializing Middleware
 */
server.use(cors());
server.use(express.json());


/** Routes Configurations
 * 
 * Routes for:
 *      Post-API
 */

const routeURL = {
    postAPI: process.env.POSTAPI_URL || "/posts",
    authAPI: process.env.AUTHAPI_URL || "/login",
}



/**
 * Router Configuration
 */
const postAPIRouter = require("./routes/post");



/**
 * Use needed Routers
 */
server.use(routeURL.postAPI, postAPIRouter);






/**
 * Make server listen for incoming requests
 */
server.listen(port, () => {
    console.log("BlogCMS Server running on port"+port);
});