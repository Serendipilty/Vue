<template>
  <h2>AsyncAddress子级组件</h2>
  <h3>{{ data }}</h3>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "AsyncAddress",
  // setup() {
  //   return axios
  //     .get("/data/address.json")
  //     .then((response) => {
  //       return {
  //         data: response.data,
  //       };
  //     })
  //     .catch();
  // },

  async setup() {
    const result = await axios.get("/data/address.json");
    return { data: result.data };
  },
});
</script>

<style></style>
