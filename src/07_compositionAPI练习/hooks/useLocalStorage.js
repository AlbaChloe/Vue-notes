import { ref, watch } from "vue"

export default function (key, value) {
  const data = ref(value);

  if (value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  } else {
    data.value = window.localStorage.getItem(key)
  }

  watch(data, (newValue) => {
    window.localStorage.setItem(key, newValue)
  })

  return data;
}

// 一个参数 -> 取值
// useLocalStorage("name");

// // 两个参数 -> 保存值
// useLocalStorage("name", "Chloe");

// data.value = "kobe"