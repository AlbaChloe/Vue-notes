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
import {useGetters} from '../hooks/useGetters'

export default {
  setup() {
    // const store = useStore();

    // const sNameInfo = computed(() => store.getters.nameInfo) 
    // const storeGettersFns = useGetters(["nameInfo", "ageInfo"])

    const storeGetters = useGetters(["nameInfo", "ageInfo"])

    return {
      // ...sNameInfo,
      ...storeGetters
    }
  }
}
</script>

<style>

</style>