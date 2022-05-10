<template>
  <div>
    Home Page
    <h2>{{ message }}</h2>
    <!-- 当我们在template模板中使用ref对象，它会自动进行解包 -->
    <h2>当前计数：{{ counter }}</h2>
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

    // 局部函数
    const increment = () => {
      counter.value++;
      console.log(counter.value);
    };

    return {
      counter,
      increment,
    };
  },
};
</script>

<style>
</style>