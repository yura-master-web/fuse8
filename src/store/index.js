import Vue from 'vue'
import Vuex from 'vuex'

import sales from './modules/sales'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        sales,
    },
})

store.dispatch('initSalesStore')

export default store
