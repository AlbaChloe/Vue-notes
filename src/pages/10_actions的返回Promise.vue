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
import { onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    onMounted(() => {
      const promise = store.dispatch("getHomeMultiData");
      promise.then(res => {
        console.log(res, '异步完成');
      }).catch(err => {
        console.log(err);
      })
    });

   return {
   }
  }
}
</script>

<style scoped> 
</style>