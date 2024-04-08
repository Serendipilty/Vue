<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        :is-checked="isSelectAll"
        @click.native="checkClick"
        class="check-button"
      ></check-button>
      <span>全选</span>
    </div>

    <div class="price">合计:{{ totalPrice }}</div>

    <div class="calculate">去结算({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

import { mapGetters } from "vuex";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter(item => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.realPrice * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.cartList.filter(item => item.checked).length;
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false;
      return this.cartList.every(item => item.checked);
    }
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.cartList.forEach(item => (item.checked = false));
      } else {
        this.cartList.forEach(item => (item.checked = true));
      }
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  position: relative;
  height: 40px;
  background-color: #eee;
  font-size: 14px;
  line-height: 40px;
}

.check-content {
  display: flex;
  margin-left: 10px;
  align-items: center;
}
.check-button {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  line-height: 20px;
}
.price {
  flex: 3;
  margin-left: 20px;
}

.calculate {
  flex: 2;
  padding: 0 5px;
  background-color: #4dafe2;
  color: #fff;
  text-align: center;
}
</style>
