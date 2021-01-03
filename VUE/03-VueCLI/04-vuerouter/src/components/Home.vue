<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: "",
    };
  },
  created() {
    console.log("Home created");
    //   document.title = "首页";
  },
  destroyed() {
    console.log("Home destroyed");
  },
  // 这两个函数，只有该组件被保持了状态使用了keep-alive时，才是有效的
  activated() {
    // 激活、活跃
    // this.$router.push(this.path);
    console.log("activated");
  },
  deactivated() {
    // 不活跃
    console.log("deactivated");
  },
  // beforeRouteLeave(to, from, next) {
  //   console.log(this.$route.path);
  //   this.path = this.$route.path;
  //   next();
  // },
};
</script>

<style>
</style>