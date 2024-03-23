const express = require("express");
const mongoose = require("mongoose");

const teacherRoute = require("./Routes/teacherRoute");
const childRoute = require("./Routes/childRoute");
const classRoute = require("./Routes/classRoute");
// 1- default function create server
const server = express();

// 2- setting port number and Connect on db
const port = process.env.PORT || 8080;

mongoose
    .connect("mongodb://127.0.0.1:27017/NurserySystem")
    .then(() => {
        console.log("DB Connected Successfully....");
        server.listen(port, () => {
            console.log("I am listening..........", port);
        });
    })
    .catch((error) => {
        console.log("DB Problem ..." + error);
    });

/********************* Structure*************** */
// first MW
server.use((request, response, next) => {
    console.log(request.url, request.method);
    next();
});

/******************* EndPoints (Routes) */
server.use(express.json());
// server.use(express.urlencoded());
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
