import Vue from 'vue'
import Router from 'vue-router'
import BoardComponent from '@/components/NoteBoardComponent/NoteBoardView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BoardComponent',
      component: BoardComponent
    }
  ]
})
