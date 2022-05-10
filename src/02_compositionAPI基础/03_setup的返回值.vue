<template>
  <div>
    Home Page
    <h2>{{ message }}</h2>
    <h2>{{ title }}</h2>
    <h2>当前计数：{{ counter }}</h2>
    <button @click="increment">btn</button>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  // setup函数有什么样的返回值
  setup() {
    let counter = 100;
    // 局部函数
    // 此时返回的counter在界面上不会随着点击事件而更新，因为没有经过响应式处理
    const increment = () => {
      counter++;
      console.log(counter);
    };

    return {
      title: "Hello Home",
      counter,
      increment,
    };
  },
};
</script>

<style>
</style>