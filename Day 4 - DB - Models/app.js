const express = require("express");
const teacherRoute = require("./Routes/teacherRoute");
const childRoute = require("./Routes/childRoute");
const classRoute = require("./Routes/classRoute");
// 1- default function create server
const server = express();

//2- setting port number
const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log("I am listening..........", port);
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
// server.use(childRoute, teacherRoute, classRoute);
server.use(teacherRoute, childRoute, classRoute);

/******************************************/
// Not Found
server.use((request, response) => {
  response.status(404).json({ data: "Not Found" });
});

// Error MW
server.use((error, request, response, next) => {
  response.status(500).json({ data: `Error MW ${error}` });
});
