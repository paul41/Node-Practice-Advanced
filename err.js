//Standard JavaScript errors from <Error> class such as <EvalError>, <SyntaxError>, <RangeError>, <ReferenceError>, <TypeError>, and <URIError>.
const fs = require('fs');

try {
    const m = 1;
    m = m + z
} catch (error) {
    console.log(error) //Reference error
}

//require('url').parse(() => { }); //<TYPE ERROR> COZ NO ARGUMENTS PASSED with error code= ERR_INVALID_ARG_TYPE

//require('net').connect(-1);
// Throws "RangeError: "port" option should be >= 0 and < 65536: -1"

try {
    fs.readFile('File does not exist',(err,data)=>{
        if(err) throw err; //[Error: ENOENT: no such file]
        console.log(data)
    }) 
} catch (error) {
    // This will not catch the throw!
   console.log('-> ',error) 
}


