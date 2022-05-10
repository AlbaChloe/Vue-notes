<template>
  <div>
    <h2>Home: {{$store.state.counter}}</h2>
    <hr>
    <h2>Home: {{sCounter}}</h2>
    <h2>Home: {{counter}}</h2>
    <h2>Home: {{name}}</h2>
    <h2>Home: {{age}}</h2>
  </div>
</template>

<script>
import {mapState, useStore} from 'vuex'
import {computed} from 'vue'

export default {
  setup() {
   const store = useStore();
  //  方法一：
   const sCounter = computed(() => store.state.counter);


  // 方法二：
   const storeStateFns = mapState(["counter", "name", "age"]);
   // 因为mapState返回的结果是类似于以下的键值对结构，所以在setup中不能直接用...来解构，需要通过computed来包裹一层
   // { counter: function, name: function, age: function }
   const storeState = {};
   // 经下面处理后storeState的结构变为：
   // { counter: ref, name: ref, age: ref }
  Object.keys(storeStateFns).forEach(fnKey => {
    const fn = storeStateFns[fnKey].bind({$store: store});     // computed中会通过this.$store来访问值，然后setup中获取不到this，所以要绑定一下
    storeState[fnKey] = computed(fn)
  })
  console.log(storeState);

   return {
     sCounter,
     ...storeState
   }
  }
}
</script>

<style>

</style>