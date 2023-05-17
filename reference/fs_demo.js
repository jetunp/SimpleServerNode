import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
//create folder

// fs.mkdir(path.join(__dirname,'/test'), {}, err => {
// if (err) throw err;
// else console.log('Folder created');
// })

//create and write to file
//writeFile overwrites when used multiple time and writes the latest only
// use appendFile

// fs.writeFile(path.join(__dirname,'/test','hello.txt'), 'Hello i am learning node.js', err => {
// if (err) throw err;
// else console.log('File written to');
// fs.appendFile(path.join(__dirname,'/test','hello.txt'), '\nThen I will be learning express.js', err => {
//     if (err) throw err;
//     else console.log('File appended to');
//     })
// })

//read file

fs.readFile(path.join(__dirname,'/test','hello.txt'), 'utf8', (err,data) => {
if (err) throw err;
else console.log(data);
})
