<template>
  <div>
    <h2>User: {{$route.params.name}} - {{$route.params.id}}</h2>
    <div class="nowrapBox">
      some words blah blah
    </div>
  </div>
</template>

<script>
import {useRoute} from "vue-router"

export default {
  data() {
    return {
      name: ""
    }
  },
  created() {
    // console.log(this.$route.params.name);
  },
  setup() {
    const route = useRoute()
    console.log(route.params.name);
  }
}
</script>

<style scoped>
.nowrapBox {
  width: 100px;
  padding: 10px;
  background-color: pink;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

</style>