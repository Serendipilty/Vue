<template>
  <h2>x:{{ x }},y:{{ y }}</h2>
  <h3 v-if="loading">正在加载中.....</h3>
  <h3 v-else-if="errorMsg">错误信息:{{ errorMsg }}</h3>
  <ul v-else>
    <li>{{ data.id }}</li>
    <li>{{ data.address }}</li>
    <li>{{ data.distance }}</li>
  </ul>
  <hr />
  <ul v-for="item in data" :key="item.id">
    <li>{{ item.id }}</li>
    <li>{{ item.title }}</li>
    <li>{{ item.price }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import useMousePosition from "./hooks/useMousePosition";
import useRequest from "./hooks/useRequest";

// 定义接口，约束对象的类型
interface AddressData {
  id: number;
  address: string;
  distance: string;
}
interface ProductsData {
  id: string;
  title: string;
  price: number;
}

export default defineComponent({
  name: "App",

  setup() {
    const { x, y } = useMousePosition();
    // const { loading, data, errorMsg } = useRequest<AddressData>("/data/address.json");
    const { loading, data, errorMsg } =
      useRequest<ProductsData[]>("data/products.json");

    // 监视
    watch(data, () => {
      console.log(data.value.length);
    });

    return { x, y, loading, data, errorMsg };
  },
});
</script>

<style></style>
