<template>
  <div id="app">
    <h2>----------App内容----------</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>----------getters相关信息----------</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.overAge }}</h2>
    <h2>{{ $store.getters.overAgeLength }}</h2>
    <h2>{{ $store.getters.overAgeStu(18) }}</h2>

    <h2>----------info对象是否是响应式----------</h2>
    <h2>{{ $store.state.info }}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>----------Hello Vuex内容----------</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
import { INCREMENT } from "./store/mutations-types";
export default {
  name: "App",
  components: {
    HelloVuex,
  },
  data() {
    return {
      message: "app组件",
      // counter: 0,
    };
  },
  // computed: {
  //   overAge() {
  //     return this.$store.state.students.filter((s) => s.age > 20);
  //   },
  // },
  methods: {
    addition() {
      this.$store.commit(INCREMENT);
    },
    subtraction() {
      this.$store.commit("decrement");
    },
    addCount(count) {
      // payload: 负载
      // 1.普通的提交风格
      // this.$store.commit("incrementCount", count);

      // 2.特殊的提交风格
      this.$store.commit({
        type: "incrementCount",
        count,
      });
    },
    addStudent() {
      const stu = { id: 114, name: "我爱罗", age: 20 };
      this.$store.commit("addStudent", stu);
    },
    updateInfo() {
      // this.$store.commit("updateInfo");
      // this.$store.dispatch("aUpdateInfo", "actions参数");
      // this.$store.dispatch("aUpdateInfo", () => {
      //   console.log("异步请求完成");
      // });
      // this.$store.dispatch("aUpdateInfo", {
      //   message: "actions参数",
      //   success: () => {
      //     console.log("异步请求完成");
      //   },
      // });
      this.$store.dispatch("aUpdateInfo", "actions参数");
    },
  },
};
</script>

<style>
</style>
