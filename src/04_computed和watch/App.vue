<template>
  <div>
    <h2>{{ info.friend.name }}</h2>
    <button @click="changeData">修改数据</button>
  </div>
</template>

<script>
import { ref, watch, reactive } from "vue";

export default {
  setup() {
    // 1. 定义可响应式的对象
    const info = reactive({
      name: "why",
      age: 18,
      friend: {
        name: "kobe",
      },
    });
    const name = ref("why");

    watch(
      { ...info },
      (newInfo, oldInfo) => {
        console.log(newInfo, oldInfo);
      },
      {
        deep: true,
      }
    );

    const changeData = () => {
      info.friend.name = "chloe";
    };

    return {
      changeData,
      info,
    };
  },
};
</script>

<style>
</style>