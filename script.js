
var obj = {id: 5, m: 'Hi', n: undefined, r: 16, s:12};

console.log("+++++ WATCH +++++");
obj.watch('id');
var tu = function() {
	obj.id = 12;
	obj.id = 15;
}
tu();

console.log("\n+++++ ISEQUAL +++++");
obj.isEqual('m','Hello world');
obj.m = 'Hello guys';
obj.m = 'Hello world';
obj.m = 'Hi bro';

console.log("\n+++++ CHECKNULL +++++");
obj.checkNull('n');
obj.n = null;
obj.n = undefined;

console.log("\n+++++ ISINRANGE +++++");
obj.isInRange('r',10,20);
obj.r = 8;
obj.r = 15;

console.log("\n+++++ ISOUTOFRANGE +++++");
obj.isOutOfRange('s',10,20);
obj.s = 8;
obj.s = 15;
obj.s = 22;
