import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Navi from '@/components/main-nav'
import Dashboard from '@/components/Dashboard'
import VueSession from 'vue-session'
// import Logins from '@/components/login-session'
// import Element from 'element-ui'

Vue.use(VueSession)
Vue.use(Router)
// Vue.use(Element)
// Vue.use(Element, { locale })
// locale.use(lang)

export default new Router({
  routes: [
    {
      path: '/Navi',
      name: 'Navi',
      component: Navi
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
    // {
    //   path: '/',
    //   name: 'Logins',
    //   component: Logins
    // }
  ]
})
