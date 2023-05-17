import path from 'path';
//to use ES6 syntax, ES6 does not provide exports, module,
// __filename, __dirname like commonjs
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//basename (gets the base file name)
console.log(path.basename(__filename));
//directory name
console.log(path.dirname(__filename));
//file extension
console.log(path.extname(__filename));
//create path object
console.log(path.parse(__filename));
//concatenate paths
//like ../test/abc.html
console.log(path.join(__dirname, 'test', 'abc.html'))
