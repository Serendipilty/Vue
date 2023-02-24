<template>
  <h3>{{ state }}</h3>
  <hr />
  <button @click="testToRaw">测试toRaw</button>
  <button @click="testMarkRaw">测试markRaw</button>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw, markRaw } from "vue";

interface UserInfo {
  name: string;
  age: number;
  likes?: string[];
}

export default defineComponent({
  name: "App",

  setup() {
    const state = reactive<UserInfo>({
      name: "鸣人",
      age: 20,
      brother: {
        name: "佐助",
      },
    });

    const testToRaw = () => {
      // 把代理对象变成了普通对象，数据变化，界面不变化
      const user = toRaw(state);
      user.name += "~";
    };
    const testMarkRaw = () => {
      // state.likes = ["吃", "喝", "玩", "乐"];
      // state.likes[0] += "~";

      const likes = ["吃", "喝", "玩", "乐"];
      // markRaw标记的对象数据，以后都不能再成为代理对象
      state.likes = markRaw(likes);

      setInterval(() => {
        if (state.likes) {
          state.likes[0] += "~";
        }
      }, 1000);
    };

    return {
      state,
      testToRaw,
      testMarkRaw,
    };
  },
});
</script>

<style></style>
