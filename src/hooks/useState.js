// 方法一：
// import { computed } from 'vue'
// import { mapState, useStore } from 'vuex'

// export function useState(mapper) {
//   // 获取store对象
//   const store = useStore();

//   // 获取到对应的对象的functions: { name: function, counter: function, age: function }
//   const storeStateFns = mapState(mapper);

//   // 对数据进行转换
//   const storeState = {};
//   Object.keys(storeStateFns).forEach(fnKey => {
//     const fn = storeStateFns[fnKey].bind({ $store: store })
//     storeState[fnKey] = computed(fn)
//   })

//   return storeState
// }

// 方法二： 再次封装到useMapper
import { mapState, createNamespacedHelpers } from 'vuex'
import { useMapper } from './useMapper'


export function useState(moduleName, mapper) {
  let mapperFn = mapState;
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapState;
  }

  return useMapper(mapper, mapperFn)
}
