export default {
  powerCounter(state) {
    return state.counter * state.counter;
  },
  overAge(state) {
    return state.students.filter(s => s.age > 20);
  },
  overAgeLength(state, getters) {
    return getters.overAge.length;
  },
  overAgeStu(state) {
    // return function(age) {
    //   return state.students.filter(s => s.age > age);
    // };
    return age => {
      return state.students.filter(s => s.age > age);
    };
  }
};
