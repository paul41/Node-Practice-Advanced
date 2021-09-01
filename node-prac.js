const util = require('util');

async function asyncTout(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log('Triggered after 3s'))
        },1000)
            
    }) 
}

let callBack = util.callbackify(asyncTout)
callBack((err,res)=>{
    if(err) throw err;
    console.log(res)
})

let prom = util.promisify(asyncTout)
prom().then(d=>{
    console.log('PROMISIFY METHOD:  ',d);
    process.nextTick(()=>{
        console.log('I am inside promise')
    })
}).catch(error=>console.log(error))


//PROCESS
process.on('beforeExit',(code)=>{
    console.log('printed before exit');
    console.log(code)
})
process.on('exit',(code)=>{
    console.log('PROCESS ON EXIT ', code)
})
process.on('exit', (code) => {
    console.log(code) //0 default code i.e, success
    setTimeout(() => {
      console.log('This will not run');
    }, 0);
});
let specs = process.cpuUsage()
console.log(specs)
console.log(process.cwd())
console.log(`This processor architecture is ${process.arch}`);
//console.log(process.env)
console.log(process.memoryUsage());
//The Resident Set Size(rss), is the amount of space occupied in the main memory device for the process, including all C++ and JavaScript objects and code. 
console.log(`This process is pid ${process.pid}`);
console.log(`This platform is ${process.platform}`);
//process.exit(100) //or any exit code
setTimeout(()=>console.log('check next tick behaviour.'),1000)
process.nextTick(()=>{
    console.log('called after queue is free. Executed after completing the current iteration/tick of the event loop')
}) //it runs immediately after events in the Event Queue are processed by the Event Loop in a single iteration
queueMicrotask(() => console.log('called after next tick')); //every time the "next tick queue" is drained, the microtask queue is drained immediately after.
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});


// NOTE ORDER

    console.log('*----------------------------------*');

    setTimeout(() => console.log('timeout'), 0);
    setImmediate(() => console.log('immediate'));
    process.nextTick(() => console.log('nextTick'));
    console.log('current event loop');


// DEBUG SEE

//node inspect node-prac.js

