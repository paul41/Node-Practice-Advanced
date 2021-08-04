//process.env.UV_THREADPOOL_SIZE = 1 WORKS WITH LINUX
//Windows = >set UV_THREADPOOL_SIZE=4 (cmd line) default is 4
const crypto = require('crypto');
const start = Date.now();

crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
    console.log("1: ",Date.now() - start)
})

crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
    console.log("2: ",Date.now() - start)
})

crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
    console.log("3: ",Date.now() - start)
})

crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
    console.log("4: ",Date.now() - start)
})

crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
    console.log("5: ",Date.now() - start)
})

crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
    console.log("6: ",Date.now() - start)
})

//Run the snippet & you will observe that the 5th thread of pbkdf2 runs after a delay. It is causing because of thread pool can handle 4 threads at a time.

//require('os').cpus().length - Each core handles 2 threads by default.
