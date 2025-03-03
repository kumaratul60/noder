// require("./xyz");
// const importedSum = require("./sum");
// require("./pq");
import { subtractFn } from "./subtract.js";
const util = require("node:util");
console.log(util);

const a = 2;
const b = 3;
// const c = importedSum.sumFn(a, b);
// // const c = importedSum(a, b);
// console.log(c, "c");
const d = subtractFn(a, b);
console.log(d, "d");
