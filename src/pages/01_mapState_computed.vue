<template>
  <div>
    <h2>Home: {{$store.state.counter}}</h2>
    <h2>Home: {{this.sCounter}}</h2>
    <h2>Home: {{this.sName}}</h2>
    <!-- <h2>Home: {{this.age}}</h2> -->
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  // mapState()会返回一个对象，value为一个函数，每个对象是一个fullName: function()类似的键值对(与computed中的属性类似，会在函数中return值)，所以在没有其他computed属性时，可以直接mapState()
  // computed: mapState();
  computed: {
    fullName() {
      return "Kobe Bryant"
    },
    // 其他的计算属性，参数为所需要的属性数组，从state获取，此时有已有fullName属性，所以不能直接mapState()，需要通过扩展运算符将对象中的元素取出
    // ...mapState(["counter", "name", "age"])
    // 参数也可为对象，为对象时key为自定义名称，value为所需要的值,此使需要通过自带的state参数获取值
    ...mapState({
      sCounter: state => state.counter,
      sName: state => state.name 
    })
  }
}
</script>

<style>

</style>