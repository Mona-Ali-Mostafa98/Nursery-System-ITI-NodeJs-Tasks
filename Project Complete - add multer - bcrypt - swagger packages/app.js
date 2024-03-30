const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const addAdmin = require('./Model/Admin'); // Import the admin seeding script

const teacherRoute = require("./Routes/teacherRoute");
const childRoute = require("./Routes/childRoute");
const classRoute = require("./Routes/classRoute");
const loginRoute = require("./Routes/authRoute");
const authMiddleware = require("./Middlewares/authMiddleware");

const changePasswordRoute = require("./Routes/passwordRoute");

// 1- default function create server
const server = express();

// To access api in web
server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow the specified HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow the specified headers
    next();
});

// 2- setting port number and Connect on db
const port = process.env.PORT || 8080;

mongoose
    .connect(process.env.DB_URL || "mongodb://127.0.0.1:27017/NurserySystem")
    .then(() => {
        console.log("DB Connected Successfully....");
        server.listen(port, () => {
            console.log("I am listening..........", port);
        });
        addAdmin();
    })
    .catch((error) => {
        console.log("DB Problem ..." + error);
    });

/****   ***************** Structure*************** */
// first MW
server.use((request, response, next) => {
    console.log(request.url, request.method);
    next();
});

/******************* EndPoints (Routes) */
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(loginRoute);
server.use(authMiddleware);

server.use(changePasswordRoute);

server.use(teacherRoute, childRoute, classRoute);

/******************************************/
// Not Found
server.use((request, response) => {
    response.status(404).json({data: "Not Found"});
});

// Error MW
server.use((error, request, response, next) => {
    response.status(500).json({data: `Error Middleware: ${error}`});
});
