import Vue from 'vue'
import '@/assets/css/app.min.css'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.mixin({
    filters: {
        price: price => new Intl.NumberFormat('ja-JP').format(price),
        imgPath: url => (typeof process.env.VUE_APP_GH_PAGES === 'undefined' ? '/' + url : url),
    },
})

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
