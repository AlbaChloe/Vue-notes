<template>
  <div>
    <h2>Home: {{$store.state.counter}}</h2>
    <hr>
    <!-- <h2>Home: {{sCounter}}</h2> -->
    <h2>Home: {{counter}}</h2>
    <h2>Home: {{name}}</h2>
    <h2>Home: {{age}}</h2>
  </div>
</template>

<script>
import {useState} from '../hooks/useState' 

export default {
  setup() {
   const storeState = useState(["counter", "name", "age"])

   return {
     ...storeState
   }
  }
}
</script>

<style>

</style>