import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        collapsed: false
    },
    mutations: {
        toggleCollapsed(state, payload) {
            state.collapsed = !state.collapsed
        }
    },
    actions: {},
    modules: {}
})