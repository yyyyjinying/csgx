// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import resource from 'vue-resource'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';



import MintUI, {
	InfiniteScroll
} from 'mint-ui'
import 'es6-promise/auto'
import store from './store'

import 'mint-ui/lib/style.css'
import '@/common/stylus/index.styl'

import VueLazyload from 'vue-lazyload'
import fastclick from 'fastclick'

fastclick.attach(document.body)



Vue.config.productionTip = false

Vue.use(resource)
Vue.use(MintUI)
Vue.use(InfiniteScroll)
Vue.use(ElementUI)

Vue.use(VueLazyload, {
	preLoad: 1.3,
	error: require('common/image/default.png'),
	loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	resource,
	store,
	template: '<App/>',
	components: {
		App
	}
})