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
    };
  },
  methods: {},
};
</script>

<style>
</style>