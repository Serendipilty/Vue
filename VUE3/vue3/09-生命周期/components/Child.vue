<template>
  <h2>子级组件</h2>
  <h4>{{ msg }}</h4>
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";

export default defineComponent({
  name: "Child-",
  // vue2的生命周期钩子
  beforeCreate() {
    console.log("vue2的beforeCreate");
  },
  created() {
    console.log("vue2的created");
  },
  beforeMount() {
    console.log("vue2的beforeMount");
  },
  mounted() {
    console.log("vue2的mounted");
  },
  beforeUpdate() {
    console.log("vue2的beforeUpdate");
  },
  updated() {
    console.log("vue2的updated");
  },
  // vue2中的beforeDestroy和destroyed改名了不能使用
  beforeUnmount() {
    console.log("vue2的beforeUnmount");
  },
  unmounted() {
    console.log("vue2的unmounted");
  },

  setup() {
    const msg = ref("setup");
    const update = () => {
      msg.value += "~";
    };

    console.log("setup");

    onBeforeMount(() => {
      console.log("onBeforeMount");
    });

    onMounted(() => {
      console.log("onMounted");
    });

    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });

    onUpdated(() => {
      console.log("onUpdated");
    });

    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });

    onUnmounted(() => {
      console.log("onUnmounted");
    });

    return { msg, update };
  },
});
</script>

<style></style>
