<template>
  <div>
    <h2>总价值：{{$store.getters.totalPrice}}</h2>
    <h2>总价值：{{$store.getters.totalPriceCountGreaterN(3)}}</h2>
    
    <hr>
    <h2>{{$store.getters.nameInfo}}</h2>
    <h2>{{$store.getters.ageInfo}}</h2>
    <h2>{{$store.getters.sNameInfo}}</h2>
    <h2>{{$store.getters.sAgeInfo}}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex' 

export default {
  computed: {
    // nameInfo() {
    //   return this.$store.getters.nameInfo
    // },
    // ageInfo() {
    //   return this.$store.getters.ageInfo
    // },

    // ...mapGetters(["nameInfo", "ageInfo"])
    ...mapGetters({
      sNameInfo: "nameInfo",
      sAgeInfo: "ageInfo"
    })
  },
}
</script>

<style>

</style>