import { createApp } from 'vue'
// import App from './App.vue'
import App from './App_nextTick.vue'
import store from './store'

createApp(App).use(store).mount('#app')
