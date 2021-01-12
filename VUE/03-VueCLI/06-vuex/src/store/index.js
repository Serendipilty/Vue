import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";

// 1. 安装插件
Vue.use(Vuex);

// 2. 创建对象
const state = {
  counter: 1000,
  students: [
    { id: 110, name: "卡卡西", age: 28 },
    { id: 111, name: "鸣人", age: 20 },
    { id: 112, name: "佐助", age: 20 },
    { id: 113, name: "小樱", age: 18 }
  ],
  info: { name: "宇智波止水", age: "20", height: 1.8 }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
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
