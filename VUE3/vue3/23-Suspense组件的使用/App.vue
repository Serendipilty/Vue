<template>
  <h2>父级组件</h2>
  <Suspense>
    <template #default>
      <AsyncAddress />
    </template>
    <template v-slot:fallback>
      <h2>Loading</h2>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";
// 引入组件：静态引入和动态引入

// vue2中的动态引入组件的写法：（vue3中这种写法不行）
// const AsyncComponent = () => import("./AsyncComponent.vue");
// const AsyncComponent = defineAsyncComponent(
//   () => import("./AsyncComponent.vue")
// );

// 静态引入组件
// import AsyncComponent from "./AsyncComponent.vue";
import AsyncAddress from "./AsyncAddress.vue";

export default defineComponent({
  name: "App",
  components: {
    AsyncAddress,
  },
});
</script>

<style></style>
