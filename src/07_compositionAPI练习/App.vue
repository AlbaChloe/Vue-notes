<template>
  <div>
    <h2>当前计数：{{ counter }}</h2>
    <h2>计数*2：{{ doubleCounter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <h2>{{ data }}</h2>
    <button @click="changeData">changeInfo</button>

    <p class="content">content</p>
    <div class="scroll">
      <div class="scroll-x">scrollX: {{ scrollX }}</div>
      <div class="scroll-y">scrollY: {{ scrollY }}</div>
      <div class="mouse-x">mouseX: {{ mouseX }}</div>
      <div class="mouse-y">mouseY: {{ mouseY }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  useCounter,
  useTitle,
  useScrollPosition,
  useMousePosition,
  useLocalStorage,
} from "./hooks/index.js";

export default {
  setup() {
    const { counter, doubleCounter, increment, decrement } = useCounter();

    // title
    const titleRef = useTitle("welcome to secret house!");
    setTimeout(() => {
      titleRef.value = "Chloe~";
    }, 3000);

    // 滚动位置
    const { scrollX, scrollY } = useScrollPosition();

    // 鼠标位置
    const { mouseX, mouseY } = useMousePosition();

    // localStorage
    const data = useLocalStorage("info");
    const changeData = () => (data.value = { name: "chloe", age: 18 });

    return {
      counter,
      doubleCounter,
      increment,
      decrement,
      // ...useCounter(),
      scrollX,
      scrollY,
      mouseX,
      mouseY,
      data,
      changeData,
    };
  },
};
</script>

<style scoped>
.content {
  width: 3000px;
  height: 5000px;
}

.scroll {
  position: fixed;
  right: 30px;
  bottom: 30px;
}
</style>