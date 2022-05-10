<template>
  <div class="home-container">
    <h2>rootStore当前计数：{{$store.state.rootCounter}}</h2>
    <h2>home当前计数：{{$store.state.home.homeCounter}}</h2>
    <h2>user当前计数：{{$store.state.user.userCounter}}</h2>

    <!-- (未设置命名空间) 此时不同模板的getters、mutations以及actions会被合并，所以获取模板的getters时直接this.$store.getters.name即可，此时不方便后期数据的管理和维护    ×-->
    <!-- <h2>{{$store.getters.doubleHomeCounter}}</h2> -->

    <!-- (设置了命名空间) 此时不同模板的getters、mutations以及actions会独立出来，可以通过this.$store.getters["home/homeDoubleHomeCounter"]来获取，条理清晰，便于查找数据源   √-->
    <h3>{{$store.getters["home/doubleHomeCounter"]}}</h3>

    <button @click="homeIncrement"> home+1 </button>
    <button @click="homeIncrementAction"> home+1 </button>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  methods: {
    homeIncrement() {
      // (未设置命名空间) 此时直接提交，会提交所有与该mutations命名相同的地方，不是我们想要的结果   ×
      // this.$store.commit("increment")

      // (设置了命名空间) -> 提交需要按以下形式指定模板名    √
      this.$store.commit("home/increment")
    },
    homeIncrementAction() {
      // 与mutations相同
      this.$store.dispatch("home/incrementAction")
    }
  },
  setup() {
    const store = useStore()

   return {
   }
  }
}
</script>

<style scoped> 

</style>