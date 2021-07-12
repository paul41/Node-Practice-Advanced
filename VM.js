var vm = require('vm'); //The VM module provides a way of executing JavaScript on a virtual machine, almost like eval() in JavaScript.
var myObj = { name: 'John', age: 38 };
vm.createContext(myObj);
if(vm.isContext(myObj)){
    vm.runInContext('age += 1;', myObj);
}else{
    console.log("VM creation ",vm.isContext(myObj))
}


console.log(myObj);