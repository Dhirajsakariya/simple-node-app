const http = require("http");

const port = process.env.port || 3000;

const handler =(req,res) => {
    console.log("Server received request ");
    res.end("Hello   World iin git");
};

const server = http.createServer(handler);

server.listen(port,err => {

    if(err){
        console.log(err);

    }
    else{
        console.log(`Server listion on port  ${port} but still it is not working`);
    }
});