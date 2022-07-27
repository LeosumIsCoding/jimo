

import Router from "vue-router"

import Vue from 'vue'

Vue.use(Router)

import Home from "../components/Home.vue"
import Person from "../components/Person/Person.vue"
import Login from "../components/Login.vue"
import Register from "../components/Register.vue"

const router =  new Router({
    // history:createWebHistroy(),
    routes: [
      {
        path:"/",
        redirect:"/home"
      },
      {
        path:"/login",
        component:Login
      },
      {
        path: '/home',
        name: 'home',
        component: Home,
        children:[]
      },
      {
        path:"/person",
        component:Person
      },
      {
        path:"/register",
        component:Register
      }
    ]
})

router.beforeEach((to, from, next)=>{

  const pathNeedToken = ["/person", "/upload"]
  if(pathNeedToken.indexOf(to.path) !== -1){
    const token = window.localStorage.getItem("token");
    if(token === null){
      return next("/login");
    }
  }


  next();
})

export default router;


