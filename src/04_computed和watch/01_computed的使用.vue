<template>
  <div>
    <h2>{{ fullName }}</h2>
    <button @click="changeName">changeName</button>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const firstName = ref("Kobe");
    const lastName = ref("Bryant");

    // 1. 用法一：传入一个getter函数, computed的返回值是一个ref对象
    // const fullName = computed(() => firstName.value + lastName.value);

    // 2. 用法二：传入一个对象，对象包含getter函数/setter函数
    const fullName = computed({
      get: () => firstName.value + " " + lastName.value,
      set(newVal) {
        const names = newVal.split(" ");
        firstName.value = names[0];
        lastName.value = names[1];
      },
    });

    const changeName = () => {
      fullName.value = "coder why";
    };

    return {
      fullName,
      changeName,
    };
  },
};
</script>

<style>
</style>