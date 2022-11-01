const cir = require('./circle.cjs');
const ClassX = require('./ClassX.js');

console.log(`The area of a circle of radius 4 is ${cir.area(4)}`);
console.log(`module.exports syntax ${cir.mo(3)}`);

import('./circle.cjs').then(modules=>console.log('Only import allowed in CJS-> ',modules.area(10)))

let classInstance = new ClassX.Diameter(9);
let classSemiInst = new ClassX.Semicircle(8,Math.PI)
console.log(classInstance.diam())
console.log(classSemiInst.semiCirum())

setImmediate(()=>console.log('require.main-> ',require.main))
console.log("---> ",require('module').wrapper)

//we cannot change the exports object asynchronously

// EX- fs.readFile('/etc/passwd', (err, data) => {
//     if (err) throw err;
//     exports.data = data; // Will not work.
//   });

//**  require('node:http') will always run & return the built in HTTP module, even if there is require.cache entry by that name.