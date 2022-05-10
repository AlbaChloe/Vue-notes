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
    const info = reactive({ name: "why", age: 18 });

    // 1. 侦听watch时，传入一个getter函数
    // watch(
    //   () => info.name,
    //   (newVal, oldVal) => {
    //     console.log("newVal:", newVal, "oldVal:", oldVal);
    //   }
    // );

    // 2. 传入一个可响应式对象：reactive/ref对象
    // 情况一：reactive对象获取到的newVal和oldVal本身都是reactive对象
    // watch(info, (newVal, oldVal) => {
    // console.log("newVal:", newVal, "oldVal:", oldVal);
    // })
    // 如果希望获取到的newVal和oldVal是一个普通的对象
    watch(
      () => {
        return { ...info };
      },
      (newVal, oldVal) => {
        console.log("newVal:", newVal, "oldVal:", oldVal);
      }
    );

    // 情况二：ref对象获取newVal和oldVal是value值的本身
    // const name = ref("why");
    // watch(name, (newVal, oldVal) => {
    //   console.log("newVal:", newVal, "oldVal:", oldVal);
    // });

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