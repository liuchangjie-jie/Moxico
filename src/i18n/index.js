// 引入必要的库
import Vue from 'vue'
import VueI18n from 'vue-i18n'

// 使用vue-i18n库
Vue.use(VueI18n)
 
// 获取当前语言（初始化时localStorage里没有存语言，默认为浏览器当前的语言）
const lang  = JSON.parse(window.localStorage.getItem("lang")) || "es"
 
// 创建vueI18n实例并输出，在main.js中调用
const i18n = new VueI18n({
    locale: lang,
    messages:{
        "es": require('./config/es.json'),
        "en": require('./config/en.json')
    }
})
 
export default i18n