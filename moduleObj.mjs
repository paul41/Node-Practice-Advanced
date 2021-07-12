import {readFile} from 'node:fs/promises';
import {area} from './commonJS/circle.cjs'; //Loading CommonJS file in ESmodule import syntac

try {
   let req = require.main;  //** mjs file does not have require (Reference Error)**
   console.log(req)
} catch (error) {
    console.log(error)
}

console.log(`The area of a circle of radius 5 is ${area(5)}`);
readFile('/notFound',(err,doc)=>{
    if(err) throw err;
    console.log(doc);
})
