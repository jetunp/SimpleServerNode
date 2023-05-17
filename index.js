import http from 'http'
import path from 'path'
import fs from 'fs'
import url from 'url'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

//create a new server object
const server = http.createServer((req, res) => {
	//we want to load a file , lets say an HTML file
	// This is not very efficient as we will have to write logic for all new files added (html, css and so on)
	// if (req.url === '/') {
	//     fs.readFile(path.join(__dirname, 'public', 'index.html'),(err,content) => {
	//         if(err){
	//             throw err;
	//         }
	//         else{
	//             res.writeHead(200, {'Content-Type': 'text/html'});
	//             res.end(content);
	//         }

	//     });

	// }
	// when we want this to be a REST API, instead of html we would be serving JSON
	// we will probably use framework like express.js, this is how we do with just node.js
	// if (req.url === '/api/users') {
	//     //normally on a req we fetch data from a database and serve back
	//     const users = [
	//         {name:'Bob Smith', age:32},
	//         {name:'Joe Bobby', age:320}
	//     ];
	//     res.writeHead(200, {'Content-Type': 'application/json'});
	//     res.end(JSON.stringify(users));
	// }

	//make the file path dynamic
	let filePath = path.join(
		__dirname,
		'public',
		req.url === '/' ? 'index.html' : req.url
	)

	//get the extension of file to set the content type
	let extension = path.extname(filePath)

	//set the initial content type
	let contentType = 'text/html'

	//check the extension and set the content type
	switch (extension) {
		case '.js':
			contentType = 'text/javascript'
			break
		case '.css':
			contentType = 'text/css'
			break
		case '.json':
			contentType = 'application/json'
			break
		case '.png':
			contentType = 'image/png'
			break
		case '.jpg':
			contentType = 'image/jpg'
			break
	}

	// Check if contentType is text/html but no .html file extension
	if (contentType == 'text/html' && extension == '') filePath += '.html'

	//now we actually load the file, read file
	fs.readFile(filePath, (err, content) => {
		if (err) {
			if (err.code === 'ENOENT') {
				//page not found
				fs.readFile(
					path.join(__dirname, 'public', 'status404.html'),
					(err, content) => {
						res.writeHead(200, { 'Content-Type': contentType })
						res.end(content, 'utf-8')
					}
				)
			} else {
				// some server error
				res.writeHead(500)
				res.end(`Server Error: ${err.code}`)
			}
		} else {
			// success
			res.writeHead(200, { 'Content-Type': contentType })
			res.end(content, 'utf-8')
		}
	})
})

// when we deploy our app it is not always gonna run
// on a particular port, it is gonna run on whatever our
// host decides , and comes from env var. (default is 5000)
const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`server running on the port ${PORT}`))
