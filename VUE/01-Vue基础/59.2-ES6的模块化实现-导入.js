// 导入{}中定义的变量
import { flag } from "./59.1-ES6的模块化实现-导出.js";
if (flag) {
	console.log("导入成功");
}

// 直接导入export定义的变量
import { num, height } from "./59.1-ES6的模块化实现-导出.js";
console.log(num);
console.log(height);

// 导入export的function/class
import { mul, Person } from "./59.1-ES6的模块化实现-导出.js";
console.log(mul(10, 20));
let person = new Person();
person.run();

// 导入export default 中的内容
import addr from "./59.1-ES6的模块化实现-导出.js";
addr("函数");

// 全部导入
// import {flag,sum,num, height,mul, Person} from "./59.1-ES6的模块化实现-导出.js";
import * as info from "./59.1-ES6的模块化实现-导出.js";
console.log(info.flag);
