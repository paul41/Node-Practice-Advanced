const EventEmitter = require("events") 
//import {once,EventEmitter} from "events" if package.json contains type:module
class MyEmitter extends EventEmitter{}

const myEmit = new MyEmitter()
myEmit.once('message',(a,b)=>{
    console.log(a+b)
})
myEmit.on('message',function secondListner(x,y){
    console.log(Math.abs(y-x))
})
const sym = Symbol('symbol');
myEmit.on(sym, () => {console.log('Symbol event triggered')});

console.log(myEmit.listeners('message'))
console.log(myEmit.eventNames())
console.log(myEmit.listenerCount('message'))
myEmit.emit('message',1,9)
myEmit.emit('message',50,50);
process.nextTick(()=>{
    myEmit.emit(sym)
})