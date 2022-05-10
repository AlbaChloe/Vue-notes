<template>
  <div>
    <h2>{{ name }}-{{ age }}</h2>
    <button @click="changeAge">+1</button>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from "vue";

export default {
  setup() {
    const info = reactive({ name: "why", age: 18 });
    // 1. toRefs: 将reactive对象中的所有属性都转成ref，并建立连接
    // let { name, age } = toRefs(info);
    // 2. toRef：对其中一个属性进行转换ref，并建立连接
    let { name } = info;
    let age = toRef(info, "age");

    const changeAge = () => {
      info.age++;
      console.log(age);
    };

    return {
      name,
      age,
      changeAge,
    };
  },
};
</script>

<style>
</style>