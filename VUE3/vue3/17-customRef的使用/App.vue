<template>
  <input type="text" v-model="keyword" />
  <p>{{ keyword }}</p>
</template>

<script lang="ts">
import { customRef, defineComponent } from "vue";
// 自定义hook防抖的函数
function useDebounceRef<T>(value: T, delay = 200) {
  let timeOutId: number;
  return customRef((track, trigger) => {
    return {
      get() {
        // 告诉Vue追踪数据
        track();
        return value;
      },
      set(newValue: T) {
        clearTimeout(timeOutId);
        timeOutId = setTimeout(() => {
          value = newValue;
          // 告诉Vue更新界面
          trigger();
        }, delay);
      },
    };
  });
}

export default defineComponent({
  name: "App",
  setup() {
    // const keyword = ref("abc");
    const keyword = useDebounceRef("abc", 500);

    return {
      keyword,
    };
  },
});
</script>

<style></style>
