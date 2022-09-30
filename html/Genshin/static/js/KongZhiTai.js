//
// console.log("Hello");
// var http = require("http");
// var url = require("url");
//
// http.createServer(function (request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("Request for " + pathname + " received.");
//     response.writeHead(200,{'Content-Type': 'text/plain'});
//     response.write("Hello World");
//     response.end();
// }).listen(8888);
//
// console.log("Server running at http://127.0.0.1:8888/")

// const express = require('express');
// var app = express();

// const spawn=require('child_process').spawn
// app.get('process_data',(req,res)=>{
//     const msg = "Hello";
//     spawn('python3',['script.py',msg])
// })

// const spawn=require('child_process').spawn
// const py = spawn('python3',['test.py'])
// console.log(py);
// const data={
//     msg: "Hello",
// }
// py.stdin.write(JSON.stringify(data));
// py.stdin.end();

// let {PythonShell} = require('python-shell');
//
// var options = {
//
//     scriptPath: '/'
//
// };
//
// var pyshell = new PythonShell('script.py',options);
//
// pyshell.on('message', function (message) {
//
//     console.log(message);
//
// });

function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);
    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    } else {
        pom.click();
    }
}