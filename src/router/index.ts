import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '@/views/login/Login.vue'
import Content from '@/views/content/Content.vue'
import Test from '@/views/test/Test.vue'
import axios from "axios";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:"首页"
    }
  },
  {
    path:'/test',
    name:'Test',
    component:Test,
    meta:{
      title: "测试"
    }
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/login',
    name: 'Login',
    component:Login,
    meta:{
      title: '登录'
    }
  },
  {
    path: '/content',
    name: 'Content',
    component:Content
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from,next)=>{
  if (to.path.startsWith('/')){
    window.localStorage.removeItem('access-admin')
    next()
  } else {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const admin = JSON.parse(window.localStorage.getItem('access-admin'))
    if (!admin){
      next({path:'/'})
    } else {
      // 校验Token合法性
      axios({
        url:'http://localhost:8080/spring_demo_war/img/checkToken',
        method:'get',
        headers:{
          token:admin.token
        }
      }).then(res=>{
        console.log(res.data)
        if (!res.data){
          console.log('校验失败')
          next({path:'/'})
        }
      })
      next()
    }
  }
})
export default router
