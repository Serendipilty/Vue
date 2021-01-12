export default {
  state: {
    name: "路飞"
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload;
    }
  },
  actions: {
    aUpdateName(context) {
      console.log(context);
      setTimeout(() => {
        context.commit("updateName", "山治");
      }, 1000);
    }
  },
  getters: {
    fullname(state) {
      return state.name + "海贼王";
    },
    fullname2(state, getters) {
      return getters.fullname + "One Price";
    },
    fullname3(state, getters, rootState) {
      return getters.fullname2 + rootState.counter;
    }
  }
};
