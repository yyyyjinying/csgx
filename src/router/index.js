import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/container/home/home'
import Message from '@/container/message/message'
import Business from '@/container/business/business'
import Process from '@/container/process/process'
import Risk from '@/container/risk/risk'
import ProcessDetail from '@/components/processDetail/processDetail'
import Warn from '@/container/warn/warn'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/message',
    name: 'message',
    component: Message
  }, {
    path: '/business',
    name: 'business',
    component: Business
  }, {
    path: '/process',
    name: 'process',
    component: Process,
    children:[{
      path: ':id',
      name: 'processDetail',
      component: ProcessDetail
    }]
  }, {
    path: '/risk',
    name: 'risk',
    component: Risk
  },{
    path: '/process/warn',
    name: 'warn',
    component: Warn 
  }]
})