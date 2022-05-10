<template>
  <div>
    <home />
    <button @click="increment">App+1</button>
  </div>
</template>

<script>
import { provide, ref, readonly } from "vue";
import Home from "./Home";

export default {
  components: {
    Home,
  },
  setup() {
    const name = ref("why");
    let age = ref(18);

    const increment = () => {
      age.value++;
      console.log(age);
    };

    provide("name", readonly(name));
    provide("age", readonly(age));

    return {
      increment,
    };
  },
};
</script>

<style>
</style>