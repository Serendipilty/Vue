<template>
  <h2>子级组件</h2>
  <h3>{{ msg }}</h3>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Child-",
  props: ["msg"],
  // setup细节问题
  // setup是在beforeCreate生命周期回调之前就执行了，而且就执行一次
  // setup在执行的时候，当前的组件还没有创建出来，也就意味着：组件实例对象this不能使用
  // this是undefined，说明不能通过this去调用data/computed/methods/props中的相关内容了
  // 所有的composition API相关回调函数也不可以

  // setup返回值是一个对象，内部的属性和方法是给html模板使用的

  // beforeCreate() {
  //   console.log("beforeCreate");
  // },

  setup(props, context) {
    // props参数，是一个对象，里面有父级组件向子级组件传递的数据，并且是在子级组件中使用props接收到的所有的属性
    console.log(props);
    // context参数，是一个对象，里面有attrs对象（获取当前组件标签上的属性，但是该属性是在props中没有声明接收的所有属性对象），emit方法（分发时间），slots对象（插槽）
    console.log(context);
    console.log("setup", this);

    return {};
  },
});
</script>

<style></style>
