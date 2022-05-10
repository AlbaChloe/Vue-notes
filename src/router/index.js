import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

// import Home from '../pages/Home.vue'
// import About from '../pages/About.vue'


// 配置映射关系
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: () => import("../pages/Login.vue")
  },
  // 用路由懒加载 项目打包后每个页面都会被打包成一个单独的js文件
  // 可以通过 magic comment 设置分包的文件名 直接/* webpackChunkName: "customChunkName" */
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home-chunk" */'../pages/Home.vue'),
    meta: {
      name: "why",
      age: 18,
      height: 1.88
    },
    children: [
      {
        path: "",
        redirect: "/home/message"
      },
      {
        path: "message",
        component: () => import("../pages/HomeMessage.vue")
      },
      {
        path: "shops",
        component: () => import("../pages/HomeShops.vue")
      },

    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about-chunk" */'../pages/About.vue')
  },
  {
    path: '/user/:name/id/:id',
    component: () => import('../pages/User.vue')
  },
  {
    // 任意匹配 -> 即输入路径都不是以上设置的路径时，进入的404页面，输入内容可通过$route.params.pathMatch获取
    // path: '/pathMatch(.*)*'   另一种写法，在后面再加个*则获取的结果会是一个在/处分割的数组
    path: '/:pathMatch(.*)',    // 获取的结果是字符串
    component: () => import('../pages/NotFound.vue')
  },
];

// 创建路由对象router
const router = createRouter({
  routes,
  history: createWebHistory()
})

// 动态添加路由
const categoryRoute = {
  path: "/category",
  component: () => import("../pages/Category.vue")
}

// 添加路由对象
router.addRoute(categoryRoute);

// 添加二级路由对象 第一个参数为要添加的路由name
router.addRoute("home", {
  path: "moment",
  component: () => import("../pages/HomeMoment.vue")
})


// 导航守卫
let counter = 0;
router.beforeEach((to, from) => {
  // to: Route对象，即将跳转到的路由对象
  // from: Route对象，从哪一个路由对象导航过来的
  /**
   * 返回值问题：
   *    1. false 不进行导航
   *    2. undefined或者不写返回值：为undefined 进行默认导航 -> 即不做任何操作  
   *    3. 字符串：路径，跳转到对应的路径中
   *    4. 对象：类似于router.push({path: "/login", query:...})
   */
  console.log(`进行了${++counter}次路由跳转`);

  // if (to.path.indexOf("/home") !== -1) {
  //   return "/login"
  // }

  if (to.path !== "/login") {

    const token = window.localStorage.getItem("token");

    if (!token) {
      return "/login"
    }
  }
})

export default router

