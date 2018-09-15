require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import {routes} from './router'
import StoreData from './store'
import MainApp from './components/MainApp.vue'
import Home from './components/Home.vue'

import {initialize} from './helper/general';


Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store(StoreData)

const router = new VueRouter({
	routes,
	mode: 'history'
})

initialize(store, router);

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
    	MainApp
    }
});