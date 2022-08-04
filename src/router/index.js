
import Router from "vue-router"

import axios from "axios"

import Vue from 'vue'

Vue.use(Router)

import Home from "../components/Home.vue"
import Person from "../components/Person/Person.vue"
import Login from "../components/Login.vue"
import Register from "../components/Register.vue"
import UpLoad from "../components/UpLoad.vue"


const router =  new Router({
    // history:createWebHistroy(),
    routes: [
      {
        path:"/",
        redirect:"/home",
        meta:{
          requireAuth:false
        }
      },
      {
        path:"/login",
        component:Login,
        meta:{
          requireAuth:false
        }
      },
      {
        path: '/home',
        name: 'home',
        component: Home,
        meta:{
          requireAuth:false
        },
        children:[]
      },
      {
        path:"/person",
        component:Person,
        meta:{
          requireAuth:true
        }
      },
      {
        path:"/register",
        component:Register,
        meta:{
          requireAuth:false
        }
      },
      {
        path:"/upload",
        component:UpLoad,
        meta:{
          requireAuth:true
        }
      }
    ]
})

router.beforeEach((to, from, next)=>{
  if(to.meta.requireAuth){
    // console.log(to.meta.requireAuth);
    const token = window.localStorage.getItem("token");
    // console.log(token);
    if(token === null){
      next("/login");
    }else{
      axios.get(`/token/isCorrect/${token}`).then(res=>{
        // console.log(res.data);
        if(res.data){
          next();
        }else{
          alert("token 不正确！ 请重新登录");
          next("/login");
        }
      })
    }
  }else{
    next()
  }
})

export default router;


