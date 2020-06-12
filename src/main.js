import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
// 导入基础样式
import "@/assets/styles/base.css";
import "@/assets/styles/hover-min.css";
import "@/assets/styles/longsail.css"
import 'wowjs/css/libs/animate.css'



//aos初始化样式
/* import 'aos/dist/aos.css'
import AOS from 'aos'
Vue.use(AOS.init({
  offset: 200,
  duration: 1000,
  easing: 'ease-in-out-sine',
  delay: 100,
  once:false
})); */

// 引入i18n国际化插件
import i18n from './i18n/index'

// 导入饿了么UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//bootstrap引入
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/alert'; 

import less from 'less'
Vue.use(less)

// 引入路由对象
import router from './router/'

new Vue({
  render: h => h(App),
  i18n,
  // 5. 挂载到vue实例
  router
}).$mount('#app')