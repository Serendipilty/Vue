<template>
  <h2>父级组件</h2>
  <h3>{{ msg }}</h3>
  <button @click="msg += '~'">更新数据</button>
  <hr />
  <Child :msg="msg" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Child from "./components/Child.vue";

export default defineComponent({
  name: "App",
  components: {
    Child,
  },
  setup() {
    const msg = ref("message");
    return { msg };
  },
});
</script>

<style></style>
