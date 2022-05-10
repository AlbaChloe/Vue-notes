<template>
  <div class="home-container">
    <h2>rootStore当前计数：{{$store.state.rootCounter}}</h2>
    <h2>home当前计数：{{$store.state.home.homeCounter}}</h2>
    <h2>user当前计数：{{$store.state.user.userCounter}}</h2>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

   return {
   }
  }
}
</script>

<style scoped> 
</style>