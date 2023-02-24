<template>
  <h3></h3>
</template>

<script lang="ts">
import {
  defineComponent,
  isReactive,
  isReadonly,
  isRef,
  reactive,
  readonly,
  ref,
  isProxy,
} from "vue";

export default defineComponent({
  name: "App",
  // isRef：检查是否为一个ref对象
  // isReactive：检查对象是否由reactive创建的响应式代理
  // isReadonly：检查对象是否由readonly创建的只读代理
  // isProxy：检查对象是否由reactive或者readonly方法创建的代理
  setup() {
    console.log(isRef(ref({})));
    console.log(isReactive(reactive({})));
    console.log(isReadonly(readonly({})));
    console.log(isProxy(readonly({})));
    console.log(isProxy(reactive({})));

    return {};
  },
});
</script>

<style></style>
