import Vue from 'vue'
import Router from 'vue-router'
import List from '@/pages/list/List'
import Chat from '@/pages/chat/Chat'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/room/:id',
      name: 'Chat',
      component: Chat
    }
  ]
})
