<template>
  <h3>{{ state }}</h3>
  <h3>{{ age }}</h3>
  <h3>{{ money }}</h3>
  <hr />
  <button @click="update">更新数据</button>

  <hr />
  <Child :age="age" />
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRef } from "vue";
import Child from "./components/Child.vue";

export default defineComponent({
  name: "App",
  components: { Child },
  setup() {
    const state = reactive({
      age: 5,
      money: 100,
    });
    // 把响应式数据state对象中的某个属性age变成了ref对象
    const age = toRef(state, "age");
    // 把响应式对象中的某个属性使用ref进行包装，变成一个ref对象
    const money = ref(state.money);
    const update = () => {
      // state.age += 2;
      age.value += 3;
      // money.value += 10;
    };

    return {
      state,
      age,
      money,
      update,
    };
  },
});
</script>

<style></style>
