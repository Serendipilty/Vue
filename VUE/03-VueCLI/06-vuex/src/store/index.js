import Vue from "vue";
import Vuex from "vuex";

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
    ]
  },
  mutations: {
    // 方法
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    }
  },
  actions: {},
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
