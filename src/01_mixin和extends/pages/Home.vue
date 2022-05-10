<template>
  <div>
    Home Page
    <h2>{{ title }}</h2>
    <button @click="bar">btn</button>
  </div>
</template>

<script>
import BasePage from "./BasePage.vue";

export default {
  extends: BasePage,
  data() {
    return {
      content: "Hello Home",
    };
  },
};
</script>

<style>
</style>