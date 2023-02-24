<template>
  <input type="text" ref="inputRef" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const inputRef = ref<HTMLElement | null>(null);
    onMounted(() => {
      inputRef.value && inputRef.value.focus(); // 自动获取焦点
    });

    return { inputRef };
  },
});
</script>

<style></style>
