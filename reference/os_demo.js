//gives information about our env/os
import os, { freemem } from 'os';

//platform
console.log(os.platform());

//CPU Arch
console.log(os.arch());

//CPU core info
console.log(os.cpus());
//number of cores
console.log(os.cpus().length);

//Free memory
console.log(os.freemem())

//Total memory
console.log(os.totalmem())

//memory being used 
console.log(os.totalmem()-os.freemem())

//uptime
console.log(os.uptime())