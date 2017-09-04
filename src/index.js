"use strict"
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// 引入路由配置
import routes from './router.config'
// 注册路由
Vue.use(Element)
Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    router,
    render: function(h) {
        return h(App)
    }
})
