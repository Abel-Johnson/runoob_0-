var util = require('util');

function Person(name) {
    this.name = name;
};
Person.prototype.run = function() {
    console.log(this.name+' is run');
};


function Coder(name) {
    this.name = name;
}


util.inherits(Coder,Person)

var p1 = new Person('zz');
var c1 = new Coder('zx');
console.dir(Person,Coder);
console.log(p1,c1);
console.log(c1.name);
c1.run();