<template>
  <div>
    <h2 ref="title">嘿嘿嘿</h2>
  </div>
</template>

<script>
import { ref, watchEffect, watch } from "vue";

export default {
  setup() {
    // 在setup中获取页面上的ref，直接先声明ref，然后设为null，这样在页面挂载的时候会将这个ref赋值
    const title = ref(null);

    // watchEffect的第一个参数为回调函数，第二个参数为一个对象，可以通过flush设置该回调函数执行的时机，value为pre时表示在挂载之前调用，value为post则表示在页面挂载完毕之后调用
    watchEffect(
      () => {
        console.log(title.value);
      },
      {
        flush: "post",
      }
    );

    return {
      title,
    };
  },
};
</script>

<style>
</style>