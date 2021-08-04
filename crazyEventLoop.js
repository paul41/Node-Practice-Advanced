//process.env.UV_THREADPOOL_SIZE = 1 WORKS WITH LINUX
//Windows = >set UV_THREADPOOL_SIZE=4 (cmd line)
const crypto = require('crypto');
const https = require('https')
const fs = require('fs')

const start = Date.now();

function httpRequest(){
    https.request('https://www.google.com',res=>{
        res.on('data',()=>{});
        res.on('end',()=>{
            console.log("HTTPS: ",Date.now() - start)
        })
    }).end()
}

function getHash(){
    crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
        console.log("1: ",Date.now() - start)
    })
    
    // crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
    //     console.log("2: ",Date.now() - start)
    // })
    
    // crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
    //     console.log("3: ",Date.now() - start)
    // })
}

httpRequest()

fs.readFile('crazyEventLoop.js','utf8',()=>{
    console.log("FS: ",Date.now() - start)
})

getHash()
getHash()
getHash()
getHash()