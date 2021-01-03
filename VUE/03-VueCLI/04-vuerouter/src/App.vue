<template>
  <div id="app">
    <!-- 
      router-link
      to:      用于指定跳转的路径
      tag:     可以指定渲染成什么组件
      replace: 不会留下history记录
      active-class: 当对应的路由匹配成功时，
      会自动给当前元素设置一个router-like-active的class，
      设置active-class可以修改默认的名称
     -->
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link> -->
    <!-- <router-link to="/about" tag="button" replace active-class="active">关于</router-link> -->

    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <!-- <router-link :to="'/user/' + userId" tag="button" replace>用户</router-link> -->
    <!-- <router-link to="/profile" tag="button" replace>档案</router-link> -->
    <!-- <router-link :to="{path: '/profile',query: { name: '火影忍者', age:20, height: 188,},}" tag="button" replace>档案</router-link> -->

    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

    <!-- <button @click="homeClick">首页</button> -->
    <!-- <button @click="aboutClick">关于</button> -->
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "name",
    };
  },
  methods: {
    // 通过代码的方式修改路由 vue-router
    // push => pushState
    homeClick() {
      // this.$router.push("/home");
      this.$router.replace("/home");
      console.log("homeClick");
    },
    aboutClick() {
      // this.$router.push("/about");
      this.$router.replace("/about");
      console.log("aboutClick");
    },
    userClick() {
      this.$router.push("/user/" + this.userId);
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "火影忍者",
          age: 20,
          height: 188,
        },
      });
    },
  },
};
</script>

<style>
/* .router-link-active {
  color: darkcyan;
} */
.active {
  color: darkcyan;
}
</style>
