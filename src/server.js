import path from "node:path"
import fs from 'node:fs'
import http from "node:http"
const PORT = process.env.PORT || 3000

const server = http.createServer((req, res)=>{
    const globalPrefix = '/api';
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type" // Add property
    );
    res.setHeader("Access-Control-Allow-Credentials", true);

    if(req.method == "GET" && req.url == globalPrefix + '/users') {
   

    }
})

server.listen(PORT, ()=>{
    console.log("server initialized😊");
})