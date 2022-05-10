import { createApp } from 'vue'
import App from './08_setup顶层编写方式/App.vue'

const app = createApp(App);
// 全局的混入
// app.mixin({
//   data() {
//     return {

//     }
//   },
//   created() {
//     console.log("全局的created生命周期");
//   },
// })

app.mount('#app')
