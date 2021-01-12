import Vue from "vue";
import Vuex from "vuex";
import { INCREMENT } from "./mutations-types";

// 1. 安装插件
Vue.use(Vuex);

// 2. 创建对象
const moduleA = {
  state: {
    name: "路飞"
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload;
    }
  },
  actions: {
    aUpdateName(context) {
      console.log(context);
      setTimeout(() => {
        context.commit("updateName", "山治");
      }, 1000);
    }
  },
  getters: {
    fullname(state) {
      return state.name + "海贼王";
    },
    fullname2(state, getters) {
      return getters.fullname + "One Price";
    },
    fullname3(state, getters, rootState) {
      return getters.fullname2 + rootState.counter;
    }
  }
};

const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      { id: 110, name: "卡卡西", age: 28 },
      { id: 111, name: "鸣人", age: 20 },
      { id: 112, name: "佐助", age: 20 },
      { id: 113, name: "小樱", age: 18 }
    ],
    info: { name: "宇智波止水", age: "20", height: 1.8 }
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
          resolve("RESOLVE");
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
  modules: {
    a: moduleA
  }
});

// 导出store对象
export default store;

// 对象的解构
const obj = {
  name: "路飞",
  age: 20,
  height: 1.8,
  address: "东海"
};

const { name, height, age } = obj;
