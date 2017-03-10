var util = require('util');
var obj = {
    name: 'zx',
    age: 23,
    sex: 'male',
    run() {
        console.log('I can run');
    },
    arr1: [1,2,3,{a:234,b: {a:999}}]
}

process.stdout.write(util.inspect(obj,false,1,true));

console.log(util.isRegExp(/\d/));