const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
console.log(numCPUs)
//console.log(cluster.worker)

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork(); //worker
    cluster.fork().on('listening',(address)=>{
        console.log(address);
    })
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  //IPC- Inter Process Communication (parent to child)
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000,()=>console.log('Sever started'));

  console.log(`Worker ${process.pid} started`,cluster.workers);
  cluster.on('listening',(address)=>{
    console.log(address);
})
  
}