<template>
  <div>
    <h2>用户界面</h2>
    <p>用户相关信息</p>
    <h2>{{ userId }}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      return this.$route.params.userId;
    }
  },
  created() {
    console.log("User created");
    //   document.title = "用户";
  },
  destroyed() {
    console.log("User destroyed");
  },
  methods: {
    btnClick() {
      console.log(this.$router);
      console.log(this.$route);
    }
  }
};
</script>

<style></style>
