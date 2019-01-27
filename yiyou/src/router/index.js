import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/view/Home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/Home'
      // name: 'HelloWorld',
      // component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})
