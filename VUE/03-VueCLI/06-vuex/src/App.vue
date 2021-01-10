<template>
  <div id="app">
    <h2>----------App内容----------</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>

    <h2>----------getters相关信息----------</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.overAge }}</h2>
    <h2>{{ $store.getters.overAgeLength }}</h2>
    <h2>{{ $store.getters.overAgeStu(18) }}</h2>

    <h2>----------Hello Vuex内容----------</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
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
      this.$store.commit("increment");
    },
    subtraction() {
      this.$store.commit("decrement");
    },
  },
};
</script>

<style>
</style>
