<template>
  <h1>{{ name }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const name = "setup";
    return { name };
  },
});
</script>

<style></style>
