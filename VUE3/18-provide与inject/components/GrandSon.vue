<template>
  <h2 :style="{ color }">孙子级组件</h2>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  name: "GrandSon",
  setup() {
    // 注入的操作
    const color = inject("color");
    return { color };
  },
});
</script>

<style></style>
