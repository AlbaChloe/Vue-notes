<template>
  <div class="home-container">
    <h2>Home当前计数：{{$store.state.counter}}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  methods: {
    increment() {
      this.$store.dispatch("incrementAction", {count: 100})
    },
    decrement() {
      // this.$store.dispatch("decrementAction")
      // 3. 派发风格(对象类型)
      this.$store.dispatch({
        type: "decrementAction",
      })
    }
  },
  mounted() {
    // axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
    //   this.$store.commit("addBannerData", res.data.data.banner.list)
    // })
    this.$store.dispatch("getHomeMultiData");
  },
  setup() {

  }
}
</script>

<style scoped> 
</style>