<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    <Cpn />
  </div>
</template>

<script>
import Cpn from "./Cpn.vue";
export default {
  name: "App",
  components: {
    Cpn,
  },
  data() {
    return {
      message: "Hello Webpack",
    };
  },
};
</script>

<style>
.title {
  color: cornflowerblue;
}
</style>