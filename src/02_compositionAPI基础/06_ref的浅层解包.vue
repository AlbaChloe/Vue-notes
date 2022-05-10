<template>
  <div>
    Home Page
    <h2>{{ message }}</h2>
    <!-- 当我们在template模板中使用ref对象，它会自动进行解包 -->
    <h2>当前计数：{{ counter }}</h2>
    <!-- ref的解包是浅层解包(info是普通的javascript对象) -->
    <h2>当前计数：{{ info.counter.value }}</h2>
    <!-- 但是如果最外层包裹的是一个reactive可响应式对象，那么内部的ref可以解包 -->
    <h2>当前计数：{{ reactiveInfo.counter }}</h2>
    <button @click="increment">btn</button>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    // counter变成一个ref的可响应式的引用（变成对象，并带有一个value为ref中的 值的属性）
    let counter = ref(100);
    const info = {
      counter,
    };
    const reactiveInfo = reactive({
      counter,
    });

    // 局部函数
    const increment = () => {
      counter.value++;
      console.log(counter.value);
    };

    return {
      counter,
      increment,
      info,
      reactiveInfo,
    };
  },
};
</script>

<style>
</style>