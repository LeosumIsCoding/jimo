import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

const state = {

  isLogin:false,

  userInfo:{
    id:null,
    nickname:null,
    headimg:null,
    tele:null
  },

  tokenInfo:{
    
  }
}


const mutations = {
  updateUserInfo(state, userInfo){
    state.userInfo = userInfo
  },
  login(state){
    state.isLogin = true;
  }
}

const actions = {
  // context 是复制的一份store
  async updateUserInfo(context, token){
    axios.get(`/token/${token}`)
    .then(res=>{
      console.log(res);
    })
  }
}

const getters = {

}




Vue.use(Vuex)


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
  })
  