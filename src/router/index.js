import Vue from 'vue'
import VueRouter from 'vue-router'
// 1. 要use一下
Vue.use(VueRouter)

const routes = [

  { path: '/', component: () => import('@/views/home/'),name: "home" },

/*   { path: '/myHeader', component:() => import('@/components/myHeader'),name: "myHeader" }, */
  // path内容为空字符串，就代表你网址后缀毛都没写
  // 参数2：不是写组件，而是写一个字符串，字符串里些它想跳转的路劲
   { path: '', redirect: '/',name: ""  },
]

const router = new VueRouter({
  mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes
})

// ES6的语法：默认导出（暴露）语法 export default 暴露的数据
export default router
