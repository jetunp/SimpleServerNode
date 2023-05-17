import {EventEmitter}  from 'events' ;
import {v4 as uuid} from 'uuid';

class Logger extends EventEmitter {
    log(msg){
        //call or raise an event
        this.emit('message', { id: uuid(), msg})
    }
}

import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
//instantiate a logger
const logger = new Logger()

//create folder

// fs.mkdir(path.join(__dirname,'logfile'), {}, err => {
// if (err) throw err;
// else console.log('Folder created');
// })

//event listener
logger.on('message', data => fs.appendFile(path.join(__dirname,'logfile','logs.txt'), JSON.stringify(data) + "\r\n", err => {
    if (err) throw err;
    else console.log('File appended to');
    }))

//this method calls the event emitter in this case is a logger
logger.log('INFO: the server is running')
logger.log('INFO: the data has been returned')
logger.log('WARN: the ES6 syntax does not support require')