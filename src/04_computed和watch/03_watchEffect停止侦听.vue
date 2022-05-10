<template>
  <div>
    <h2>{{ name }} - {{ age }}</h2>
    <button @click="changeName">changeName</button>
    <button @click="changeAge">changeAge</button>
  </div>
</template>

<script>
import { ref, watchEffect, watch } from "vue";

export default {
  setup() {
    // watchEffect会自动收集响应式的依赖
    const name = ref("why");
    const age = ref(18);

    const stop = watchEffect(() => {
      console.log("name:", name.value);
      console.log("age:", age.value);
    });

    const changeName = () => (name.value = "kobe");
    const changeAge = () => {
      age.value++;
      if (age.value > 25) {
        stop();
      }
    };

    return {
      name,
      age,
      changeName,
      changeAge,
    };
  },
};
</script>

<style>
</style>