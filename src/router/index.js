import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import index from '../components/index.vue'
import acount from '../components/acount.vue'
import todo from '../components/todo.vue'
import word from '../components/word.vue'
import blogsManager from '../components/blogs/blogsManager.vue'

Vue.use(VueRouter)
// Vue.use(axios)
const routes = [
{
  path: '/',
  component: index,
  meta: {
    title:'欢迎使用博客管理系统（测试版）'
  }
},
{
  path: '/acount',
  component:acount ,
  waitForData: true,
  meta: {
    title:'账号管理'
  }
},
{
  path: '/todo',
  component:todo ,
  meta: {
    title:'todo'
  }
},
{
  path: '/word',
  component:word ,
  meta: {
    title:'word'
  }
},
{
  path: '/blogsManager',
  component:blogsManager ,
  meta: {
    title:'word'
  }
}
]
  // },



  export default new VueRouter({
    routes
  })
