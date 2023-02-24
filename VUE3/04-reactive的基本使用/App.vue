<template>
  <h2>reactive的使用</h2>
  <h3>名字：{{ user.name }}</h3>
  <h3>年龄：{{ user.age }}</h3>
  <h3>学生：{{ user.student }}</h3>

  <button @click="updateUser">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "App",

  setup() {
    const user = reactive({
      name: "卡卡西",
      age: 20,
      student: {
        name: "鸣人",
        age: 18,
        skill: ["螺旋丸", "手里剑"],
      },
    });
    function updateUser() {
      user.name += "~";
      user.age += 1;
      user.student.name = "佐助";
      user.student.skill[0] = "写轮眼";
    }
    return { user, updateUser };
  },
});
</script>

<style></style>
