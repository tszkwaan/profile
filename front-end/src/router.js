import Vue from 'vue'
import Router from 'vue-router'
import SinglePage from './views/SinglePage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'singlePage',
      component: SinglePage
    }
  ]
})
