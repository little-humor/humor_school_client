import Vue from 'vue'
import Vuex from 'vuex'

import store from './store'

import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$store = store;

const app = new Vue({
    ...App
})
app.$mount()
