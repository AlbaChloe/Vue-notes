<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="foo">btn</button>
  </div>
</template>

<script>
import { demoMixin } from "./mixins/demoMixin";

export default {
  mixins: [demoMixin],
  data() {
    return {
      title: "Hello World",
      message: "Hello App",
    };
  },
  methods: {},
  created() {
    console.log("app created 执行");
  },
};
</script>

<style>
</style>