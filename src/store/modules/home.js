const homeModule = {
  // 命名空间，加了之后会与rootStore独立出来。此时获取不同modules数据的方式会不一样
  // 获取homeModule的state -> this.$store.state.home.homeCounter;   home为rootStore中定义的该模板的key
  // 获取homeModule的getters -> this.$store.getter["home/homeCounter"];  
  // 提交homeModule的mutations -> this.$store.commit("/home/increment");
  // 提交homeModule的actions -> this/$store.dispatch("/home/incrementAction")
  namespaced: true,
  state() {
    return {
      homeCounter: 100
    }
  },
  getters: {
    doubleHomeCounter(state, getters, rootState, rootGetters) {
      return state.homeCounter * 2
    }
  },
  mutations: {
    increment(state) {
      state.homeCounter++
    }
  },
  actions: {
    incrementAction({ commit, dispatch, state, rootState, getters, rootGetters }) {
      // context.commit("increment")
      commit("increment", null, { root: true })   // -> 如果要提交到根store对象的mutations，设置第三个参数为{root: true}即可

      // dispatch同理
      // dispatch("incrementAction", null, {root: true})
    }
  }
}


export default homeModule