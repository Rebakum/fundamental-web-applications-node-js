const { a: x } = require("./file2");
const { a } = require("./file3");
// const { add } = require("./utils/add");
// const { subs } = require("./utils/subs");
const { add, subs } = require("./utils");

// console.log(x, a);
console.log(add(2, 3));
console.log(subs(a, x));
