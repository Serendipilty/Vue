let name = "A";
let age = 20;
let flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

if (flag) {
  console.log(sum(20, 30));
}

// 导出方式一
export { flag, sum };

// 导出方式二
export let num = 100;
export let height = 1.8;

// 导出函数/类
export function mul(num1, num2) {
  return num1 * num2;
}
export class Person {
  run() {
    console.log("奔跑");
  }
}

// export default 在同一个模块，不允许存在多个
// const address = "福州";
// export default address;
export default function (argument) {
  console.log(argument);
}
