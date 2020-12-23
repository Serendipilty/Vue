// 1.使用CommonJs的模块化规范
const { sum, mul } = require("./mathUtils.js");

console.log(sum(20, 30));
console.log(mul(20, 30));

// 2. 使用ES6的模块化的规范
import { name } from "./info";
console.log(name);
