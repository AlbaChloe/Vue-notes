<template>
  <div>
    <h2>Home当前计数：{{$store.state.counter}}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="increment_n({n: 10})">+10</button>
    <!-- <button @click="addOne">+1</button> -->
    <hr>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
import {INCREMENT_N} from "../store/mutation-types"

export default {
  // methods: {
  //   ...mapMutations(["increment", "decrement", INCREMENT_N]),    // 注意在引用常量时html中需转为小写
  //   ...mapMutations({
  //     addOne: "increment"
  //   })
  // }
  setup() {
    const storeMutations = mapMutations(["increment", "decrement", INCREMENT_N])

    return {
      ...storeMutations
    }
  }
}
</script>

<style>

</style>