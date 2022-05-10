<template>
  <div>
    <h2>{{ info.name }}</h2>
    <button @click="changeData">修改数据</button>
  </div>
</template>

<script>
import { ref, watch, reactive } from "vue";

export default {
  setup() {
    // 1. 定义可响应式的对象
    const info = reactive({ name: "why", age: 18 });
    const name = ref("why");

    // 2. 侦听watch，第一个参数为要侦听的对象，当对象有多个时，可以传入一个数组；第二个参数为修改前和修改后的值，也为一个数组
    watch(
      // [info, name],   // 由于info为一个响应式的对象，所以newVal及oldVal为一个proxy对象，要想得到的值是一个普通对象，则info换成getter，通过扩展运算符返回普通对象即可
      [() => ({ ...info }), name],
      ([newInfo, newName], [oldInfo, oldName]) => {
        console.log(newInfo, newName, oldInfo, oldName);
      }
    );

    const changeData = () => {
      info.name = "chloe";
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