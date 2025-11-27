// const { a: x } = require("./file2");

// const { a } = require("./file3");
// const { add } = require("./utils/add");
// const { subs } = require("./utils/subs");
// const { add, subs } = require("./utils");

// console.log(x, a);
// console.log(add(2, 3));
// console.log(subs(a, x));
import { a } from "./file_es2.mjs";
import { a as x } from "./file_es3.mjs";
import utils from "./utils_mjs/index.mjs";

console.log(utils.add(2, 3));
console.log(utils.biyog(a, x));
console.log(x, a);
