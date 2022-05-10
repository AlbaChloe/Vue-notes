<template>
  <div>
    <p>当前计数：{{ counter }}</p>
    <button @click="increment">+1</button>
    <hello-world message="chloe" @homeIncrement="getCounter"></hello-world>
  </div>
</template>

<script setup>
import { ref } from "vue";
import HelloWorld from "./HelloWorld";

// export default {
// setup() {
const counter = ref(0);
const increment = () => counter.value++;

const getCounter = (payload) => {
  console.log(payload);
};

// },
// };
</script>

<style scoped>
</style>