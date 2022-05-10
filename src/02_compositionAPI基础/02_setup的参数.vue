<template>
  <div>
    Home Page
    <h2>{{ message }}</h2>
    <h2>{{ title }}</h2>
    <h2>当前计数：{{ counter }}</h2>
    <button @click="btnClick">btn</button>
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
  // setup函数有哪些参数？

  // 参数一： props，父组件传过来的属性
  // 参数二： 为一个对象，包含attrs、slots、与emit
  // (正常写法)
  // setup(props, context) {
  // console.log(props.message);
  // console.log(context);
  // console.log(context.attrs.id, context.attrs.class);
  // console.log(context.slots);
  // console.log(context.emit);
  // }

  // (解构写法)
  setup(props, { attrs, slots, emit }) {
    console.log(props.message);
    console.log(attrs.id, attrs.class);
    console.log(slots);
    console.log(emit);

    return {
      title: "Hello Home",
      counter: 100,
    };
  },
};
</script>

<style>
</style>