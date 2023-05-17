//using the event emitter
import {EventEmitter}  from 'events' ;

//create emitter class
class MyEmitter extends EventEmitter {}

//Init object
const myEmitter = new MyEmitter();

//Event listener
myEmitter.on('pressing button', () => console.log('Event Fired!!'));

//so event emitter emits the event and event listeners listens to the event and performs specific task
//Init event
myEmitter.emit('pressing button')