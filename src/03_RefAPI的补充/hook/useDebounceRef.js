import { customRef } from 'vue'

// custom ref 中需要带有get和set函数的返回值，其参数为两个函数，track为收集依赖，trigger为触发所有的依赖发生更新
export default function (value, delay = 300) {
  let timer;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newVal) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          value = newVal;
          trigger();
        }, delay);
      }
    }
  })
}