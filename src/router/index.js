

import Router from "vue-router"

import Vue from 'vue'

Vue.use(Router)

import Home from "../components/Home.vue"
import Person from "../components/Person/Person.vue"

 export default new Router({
    // history:createWebHistroy(),
    routes: [
      {
        path: '/home',
        name: 'home',
        component: Home,
        children:[]
      },
      {
        path:"/person",
        component:Person
      }
    ]
})

