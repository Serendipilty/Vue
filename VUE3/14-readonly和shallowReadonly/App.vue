<template>
  <h3>{{ state2 }}</h3>
  <hr />
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive, readonly, shallowReadonly } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const state = reactive({
      name: "鸣人",
      age: 20,
      brother: {
        name: "佐助",
      },
    });
    // 只读的数据---深度的只读
    // const state2 = readonly(state);
    // 只读的数据---浅只读
    const state2 = shallowReadonly(state);
    const update = () => {
      // state2.name += "~";
      state2.brother.name += "~";
    };

    return {
      state2,
      update,
    };
  },
});
</script>

<style></style>
