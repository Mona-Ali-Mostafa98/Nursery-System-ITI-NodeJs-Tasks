// 5- create app.js file and create express server, then open the server on port number 8080
const express=require("express"); //  create express server
var morgan = require('morgan')

const server=express();

const port = process.env.PORT || 8080;

server.listen(port, ()=>{
    console.log("I am listening..........",port);
});

/********************************************************************************************/
/* 8- Create 3 middlewares on server*/
// a- Middleware to write request url and method using morgan package  devDependiences 
// Define a firstToken token to log request URL and method
morgan.token('firstToken', (request, response, next) => {
    return `Request Url is: ${request.url}, Request method is: ${request.method}`;
});

server.use(morgan(':firstToken'));


/******************* EndPoints (Routes) */

server.get("/students",(request,response,next)=>{
    response.status(200).json({
        data:[
            {student: "Student One"},
            {student: "Student Two"},
            {student: "Student Three"},
        ]
    })
});

server.post("/students",(request,response,next)=>{
    response.status(200).json({
        data:"Student Added Successfuly"
    })
});

/********************************************************************************************/
// b- General middleware for not Found url pathes with 404 status code.
server.use((request,response)=>{
    response.status(404).json({data:"Not Found Url"});
});

//c- One Error handling middleware that will catch all system Errors with 500 status code.
server.use((error, request, response, next)=>{
    response.status(500).json({data:`Error handling middleware ${error}`})
});







