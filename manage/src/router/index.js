import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login';
import Home from '../components/Home';
import First from '../components/Center/First';

Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'./login'},
  {path:'/login', component:Login},
  {
    path:'/home', 
    component:Home,
    children:[
    {
      path:'/first',
      component:First
    }
  ]}
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
// router.beforeEach((to,form,next) => {
//   if(to.path === '/login') return next()
//   // 获取token
//   const tokenStr = window.sessionStorage.getItem('token')
//   if(!tokenStr) return next('/login')
// })

export default router
