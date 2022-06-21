<template>
  <h3>{{ m1 }}</h3>
  <h3>{{ m2 }}</h3>
  <h3>{{ m3 }}</h3>
  <h3>{{ m4 }}</h3>
  <hr />
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  shallowReactive,
  shallowRef,
} from "vue";

export default defineComponent({
  name: "App",
  setup() {
    // 深度劫持（深监视）----深度响应式
    const m1 = reactive({
      name: "鸣人",
      age: 20,
      brother: {
        name: "佐助",
      },
    });

    // 浅劫持（浅监视）----浅响应式
    const m2 = shallowReactive({
      name: "鸣人",
      age: 20,
      brother: {
        name: "佐助",
      },
    });
    // 深度劫持（深监视）----深度响应式----做了reactive的处理
    const m3 = ref({
      name: "鸣人",
      age: 20,
      brother: {
        name: "佐助",
      },
    });
    // 浅劫持（浅监视）----浅响应式
    const m4 = shallowRef({
      name: "鸣人",
      age: 20,
      brother: {
        name: "佐助",
      },
    });

    const update = () => {
      // m1.name += "~";
      // m1.brother.name += "~";
      // m2.name += "~";
      // m2.brother.name += "~";
      // m3.value.name += "~";
      // m3.value.brother.name += "~";
      m4.value.name += "~";
    };

    return {
      m1,
      m2,
      m3,
      m4,
      update,
    };
  },
});
</script>

<style></style>
