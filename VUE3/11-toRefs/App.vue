<template>
  <h3>{{ state.name }}</h3>
  <h3>{{ state.age }}</h3>
  <hr />
  <h3>{{ name }}</h3>
  <h3>{{ age }}</h3>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "App",

  setup() {
    const state = reactive({
      name: "佐助",
      age: 20,
    });

    // toRefs可以把响应式对象转换成普通对象，该普通对象的每个property都是一个ref
    // const state2 = toRefs(state);
    const { name, age } = toRefs(state);

    // 定时器，更新数据
    setInterval(() => {
      // state.name += "~";
      // state2.name.value += "~";
      name.value += "~";
    }, 1000);

    return {
      state,
      // ...state, // 不是响应式的数据了
      // ...state2, // toRefs返回的对象
      name,
      age,
    };
  },
});
</script>

<style></style>
