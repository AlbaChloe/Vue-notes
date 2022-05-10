<template>
  <div>
    <h2>Hello World</h2>
    <p>{{ message }}</p>
    <button @click="emitEvent">发送事件</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  message: {
    type: String,
    default: "hahaha",
  },
});

const emit = defineEmits(["homeIncrement", "decrement"]);

const emitEvent = () => {
  emit("homeIncrement", "100000");
};
</script>

<style>
</style>