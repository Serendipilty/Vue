<template>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏:
    <input
      type="text"
      placeholder="请输入姓氏"
      v-model="user.firstName"
    /><br />
    名字:
    <input type="text" placeholder="请输入名字" v-model="user.lastName" /><br />
  </fieldset>
  <fieldset>
    <legend>计算属性和监视的演示</legend>
    姓名: <input type="text" placeholder="显示姓名" v-model="fullName1" /><br />
    姓名: <input type="text" placeholder="显示姓名" v-model="fullName2" /><br />
    姓名: <input type="text" placeholder="显示姓名" v-model="fullName3" /><br />
  </fieldset>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  ref,
  watch,
  watchEffect,
} from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const user = reactive({
      firstName: "东方",
      lastName: "不败",
    });

    // 计算属性的函数中如果只传入一个回调函数，表示的是get
    // 返回的是Ref类型的对象
    const fullName1 = computed(() => {
      return user.firstName + "-" + user.lastName;
    });

    const fullName2 = computed({
      get() {
        return user.firstName + "-" + user.lastName;
      },
      set(val: string) {
        console.log(val);
        const names = val.split("-");
        user.firstName = names[0];
        user.lastName = names[1];
      },
    });

    const fullName3 = ref("");
    // 监视----监视指定的数据
    // immediate 默认会执行一次watch，deep 深度监视
    watch(
      user,
      ({ firstName, lastName }) => {
        fullName3.value = firstName + "-" + lastName;
      },
      { immediate: true, deep: true }
    );

    // watch----监视多个数据
    // watch监视非响应式的数据的时候
    // watch([user.firstName, user.lastName], () => {
    watch([() => user.firstName, () => user.lastName], () => {
      console.log("watch");
    });

    // 监视，不需要配置immeiate,本身默认就会进行监视，（默认执行一次）
    // watchEffect(() => {
    //   fullName3.value = user.firstName + "-" + user.lastName;
    // });

    watchEffect(() => {
      const names = fullName3.value.split("-");
      user.firstName = names[0];
      user.lastName = names[1];
    });

    return { user, fullName1, fullName2, fullName3 };
  },
});
</script>

<style></style>
