import Vue from "vue";
import Vuex from "vuex";
import { INCREMENT } from "./mutations-types";

// 1. 安装插件
Vue.use(Vuex);

// 2. 创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      { id: 110, name: "卡卡西", age: 28 },
      { id: 111, name: "鸣人", age: 20 },
      { id: 112, name: "佐助", age: 20 },
      { id: 113, name: "小樱", age: 18 }
    ],
    info: { name: "路飞", age: "20", height: 1.8 }
  },
  mutations: {
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
  },
  actions: {
    // context:上下文
    // aUpdateInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit("updateInfo");
    //     // console.log(payload);
    //     // payload();
    //     console.log(payload.message);
    //     payload.success();
    //   }, 1000);
    aUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit("updateInfo");
          console.log(payload);
          resolve();
        }, 1000);
      });
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter;
    },
    overAge(state) {
      return state.students.filter(s => s.age > 20);
    },
    overAgeLength(state, getters) {
      return getters.overAge.length;
    },
    overAgeStu(state) {
      // return function(age) {
      //   return state.students.filter(s => s.age > age);
      // };
      return age => {
        return state.students.filter(s => s.age > age);
      };
    }
  },
  modules: {}
});

// 导出store对象
export default store;
