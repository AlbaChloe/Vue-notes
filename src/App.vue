<template>
<div id="app">
  <!-- props: href 跳转的连接 -->
  <!-- props: route对象 -->
  <!-- props: navigate导航函数，可以配合custom使用 (custom使router-link中的元素不再被a标签包住，但是要手动设置跳转，所以可以用点击事件绑定提供的navigate函数来实现点击跳转) -->
  <!-- props: isActive 是否处于活跃状态 -->
  <!-- props: isExactActive 是否处于精确的活跃状态 -->
  <router-link to="/home" v-slot="props" custom>
    <button @click="props.navigate">{{props.href}}</button>
    <button @click="props.navigate">哈哈哈</button>
    <span>{{props.isActive}}</span>
    <span>{{props.isExactActive}}</span>
  </router-link>
  <router-link to="/about">关于</router-link>
  <router-link to="/user/chloe/id/1">用户</router-link>
  <template v-if="true">
  <router-link to="/category">分类</router-link>
  </template>

  <button @click="jumpToAbout">关于</button>
  <span>关于</span>
 
  <router-view v-slot="props">
    <transition name="chloe">
      <keep-alive>
        <component :is="props.Component"></component>
      </keep-alive>
    </transition>
  </router-view>
</div>
</template>

<script>
import { useRouter } from "vue-router"

export default {
  name: 'App',
  components: {
  },
  methods: {
    // jumpToAbout() {
    //   this.$router.push("/about")
    // }
  },
  setup() {
  const router = useRouter();

  const jumpToAbout = () => {
    // router.push("/about")
    // router.push({
    //   path: "/about",
    //   query: {
    //     name: 'Chloe',
    //     age: 18
    //   }
    // })
    // router.replace("/about")

    router.go(1)
  }

  return {
    jumpToAbout
  }
  }
}
</script>

<style>
#app {
}
.chloe {
color: red;
}
.chloe-enter-from,
.chloe-leave-to {
  opacity: 0;
}
.chloe-enter-to,
.chloe-leave-from {
  opacity: 1;
}

.chloe-enter-active,
.chloe-leave-active
{
  transition: opacity 1s ease;
}
</style>
