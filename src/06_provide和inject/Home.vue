<template>
  <div>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <button @click="homeIncrement">Home+1</button>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  setup() {
    const name = inject("name");
    const age = inject("age");

    const homeIncrement = () => {
      age.value++;
    };

    return {
      name,
      age,
      homeIncrement,
    };
  },
};
</script>

<style>
</style>