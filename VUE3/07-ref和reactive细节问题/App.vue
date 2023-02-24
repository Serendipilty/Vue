<template>
  <h3>{{ m1 }}</h3>
  <h3>{{ m2 }}</h3>
  <h3>{{ m3 }}</h3>
  <hr />
  <button @click="update">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "App",
  // ref用来处理基本类型数据，reactive用来处理对象（递归深度响应式）
  // 如果用ref对象/数组，内部会自动将对象/数组转换为reactive的代理对象
  // ref内部：通过给value属性添加getter/setter来实现对数据的劫持
  // reactive内部：通过使用Proxy来实现对对象内部所有数据的劫持，并通过Reflect操作对象内部数据
  // ref的数据操作，在js中要.value,在模板中不需要（内部解析模板时会自动添加.value）
  setup() {
    const m1 = ref("abc");
    const m2 = reactive({
      name: "鸣人",
      brother: {
        name: "佐助",
      },
    });
    const m3 = ref({
      name: "鸣人",
      brother: {
        name: "佐助",
      },
    });

    const update = () => {
      m1.value += "~";
      m2.brother.name += "~";
      m3.value.brother.name += "~";
    };
    return { m1, m2, m3, update };
  },
});
</script>

<style></style>
