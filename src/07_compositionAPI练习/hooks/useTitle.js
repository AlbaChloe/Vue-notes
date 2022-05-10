import { ref, watch, watchEffect } from 'vue'

// 方式一：用watch
// export default function (title = "welcome!") {
//   const titleRef = ref(title);
//   watch(titleRef, (newVal) => {
//     document.title = newVal
//   }, {
//     immediate: true
//   })
//   document.title = title

//   return titleRef
// }

// 方式二：用watchEffect
export default function (title = "welcome!") {
  const titleRef = ref(title);
  watchEffect(() => {
    document.title = titleRef.value
  })

  return titleRef
}

