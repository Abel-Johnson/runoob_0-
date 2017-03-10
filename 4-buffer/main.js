var buf = new Buffer(3);
var l1 = buf.write('johnson',0,5);
var l2 = buf.write('johnson',1,3);
console.log(buf.toString());

var $buf = new Buffer('johnson');

var b_JSON = $buf.toJSON();
console.log(b_JSON);

var b2 = Buffer.concat([buf,$buf]);

console.log(b2);
var b3 = $buf.compare(buf);
console.log(buf,$buf,b3);
