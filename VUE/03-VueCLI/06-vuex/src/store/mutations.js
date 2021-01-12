import { INCREMENT } from "./mutations-types";
export default {
  // 方法
  [INCREMENT](state) {
    state.counter++;
  },
  decrement(state) {
    state.counter--;
  },
  incrementCount(state, payload) {
    // console.log(count);
    state.counter += payload.count;
  },
  addStudent(state, stu) {
    state.students.push(stu);
  },
  updateInfo(state) {
    state.info.name = "宇智波鼬";

    // 错误代码: 不能再这里进行异步操作
    // setTimeout(() => {
    //   state.info.name = "宇智波鼬";
    // }, 1000);

    // state.info["address"] = "木叶村";
    // Vue.set(state.info, "address", "木叶村");
    // 该方法做不到响应式
    // delete state.info.age;
    // Vue.delete(state.info, "age");
  }
};
