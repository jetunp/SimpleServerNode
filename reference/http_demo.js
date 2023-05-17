import http from 'http'

//create a server object
http.createServer((req,res)=> {
    //write response (basically what gets back to browser client)
    res.write('There you go! this is what you requested for!!')
    res.end()
    //In order for this to run it needs to listen on a port
}).listen(5000, () => console.log("Server is running ..."));