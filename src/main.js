import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./style/index.css"
import './plugins/ant-design-vue'
import "./eventBus";

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')