<template>
  <div class="home-container">
    <h2>Home当前计数：{{$store.state.counter}}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="add">+1</button>
    <button @click="sub">-1</button>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  methods: {
    // ...mapActions(["incrementAction", "decrementAction"]);
  //   ...mapActions({
  //     add: "incrementAction",
  //     sub: "decrementAction"
  // })
  },
  setup() {
   const actions = mapActions(["incrementAction", "decrementAction"])
   const actions2 = mapActions({
     add: "incrementAction",
      sub: "decrementAction"
   })

   return {
     ...actions,
     ...actions2
   }
  }
}
</script>

<style scoped> 
</style>