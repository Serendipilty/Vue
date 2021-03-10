import { ADD_COUNTER, ADD_TO_CART } from "./mutation.type";

export default {
  addCart(context, payload) {
    return new Promise((resole, reject) => {
      // payload新添加的商品
      // 1. 查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(
        item => item.iid === payload.iid
      );

      // 2. 判断oldProduct
      if (oldProduct) {
        // 数量+1
        context.commit(ADD_COUNTER, oldProduct);
        resole("当前的商品数量+1");
      } else {
        payload.count = 1;
        payload.checked = true;
        // 添加新的商品
        context.commit(ADD_TO_CART, payload);
        resole("添加了新的商品");
      }
    });
  }
};
